import { NextResponse } from "next/server";
import { getDiscounts, getInventory, getOrders, getProducts, saveInventory, saveOrders } from "@/lib/data-store";
import { applyDiscount, getBestDiscountPercent } from "@/lib/pricing";
import type { Order } from "@/lib/types";

export async function POST(request: Request) {
  const formData = await request.formData();
  const productId = String(formData.get("productId") || "");
  const email = String(formData.get("email") || "");
  const quantity = Math.max(1, Number(formData.get("quantity") || 1));

  const [products, discounts, inventory, orders] = await Promise.all([getProducts(), getDiscounts(), getInventory(), getOrders()]);
  const product = products.find((item) => item.id === productId && item.active);
  if (!product) {
    return NextResponse.json({ error: "Product not found." }, { status: 404 });
  }

  const record = inventory.find((entry) => entry.productId === productId);
  if (!record || record.keys.length < quantity) {
    return NextResponse.json({ error: "Insufficient inventory." }, { status: 400 });
  }

  const discountPercent = getBestDiscountPercent(product, discounts);
  const unitPrice = applyDiscount(product.price, discountPercent);
  const deliveredKeys = record.keys.splice(0, quantity);
  const total = Number((unitPrice * quantity).toFixed(2));

  const order: Order = {
    id: `ord_${Date.now()}`,
    productId: product.id,
    productTitle: product.title,
    buyerEmail: email,
    unitPrice,
    quantity,
    discountPercent,
    total,
    deliveredKeys,
    createdAt: new Date().toISOString(),
    status: "completed"
  };

  await Promise.all([saveInventory(inventory), saveOrders([order, ...orders])]);
  const successUrl = new URL(`/purchase-success?orderId=${order.id}&keyCount=${order.deliveredKeys.length}`, request.url);
  return NextResponse.redirect(successUrl);
}
import { NextResponse } from "next/server";
import { addOrder, getProducts, updateProducts } from "../../../lib/data-store";
import { calculateDiscountedPrice } from "../../../lib/pricing";

export async function POST(request: Request) {
  const formData = await request.formData();
  const productId = String(formData.get("productId") ?? "");
  const customerEmail = String(formData.get("customerEmail") ?? "");

  if (!productId || !customerEmail) {
    return NextResponse.json({ error: "Missing order details." }, { status: 400 });
  }

  const products = await getProducts();
  const productIndex = products.findIndex((item) => item.id === productId);

  if (productIndex < 0) {
    return NextResponse.json({ error: "Product not found." }, { status: 404 });
  }

  const product = products[productIndex];
  const key = product.keys.shift();

  if (!key) {
    return NextResponse.json({ error: "No keys available." }, { status: 409 });
  }

  product.stock = product.keys.length;
  products[productIndex] = product;
  await updateProducts(products);

  const amountPaid = calculateDiscountedPrice(product.price, product.discountPercent);
  await addOrder({
    id: crypto.randomUUID(),
    productId: product.id,
    productTitle: product.title,
    createdAt: new Date().toISOString(),
    customerEmail,
    deliveredKey: key,
    amountPaid
  });

  return NextResponse.redirect(new URL(`/purchase-success?key=${encodeURIComponent(key)}`, request.url));
}
