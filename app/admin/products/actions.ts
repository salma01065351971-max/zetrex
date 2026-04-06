"use server";

import { redirect } from "next/navigation";
import { requireAdmin } from "../../../lib/auth";
import { readProducts, saveProducts } from "../../../lib/data-store";

export async function addKeyAction(formData: FormData) {
  requireAdmin();
  const productId = String(formData.get("productId") || "");
  const keyValue = String(formData.get("keyValue") || "").trim();

  if (!productId || !keyValue) {
    redirect("/admin/products");
  }

  const products = await readProducts();
  const product = products.find((item) => item.id === productId);

  if (product && !product.keys.includes(keyValue) && !product.soldKeys.includes(keyValue)) {
    product.keys.push(keyValue);
    product.stock = product.keys.length;
    await saveProducts(products);
  }

  redirect("/admin/products");
}
