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
