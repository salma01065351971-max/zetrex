"use server";

import { revalidatePath } from "next/cache";
import { addProduct, deleteProduct as removeProduct, getProducts, updateProducts } from "../../../lib/data-store";
import type { Product } from "../../../lib/types";

export async function createProduct(formData: FormData): Promise<void> {
  const keysRaw = String(formData.get("keys") ?? "");
  const keys = keysRaw
    .split("\n")
    .map((item) => item.trim())
    .filter(Boolean);

  const product: Product = {
    id: crypto.randomUUID(),
    title: String(formData.get("title") ?? ""),
    slug: String(formData.get("slug") ?? ""),
    description: String(formData.get("description") ?? ""),
    categoryId: String(formData.get("categoryId") ?? ""),
    cover: String(formData.get("cover") ?? ""),
    price: Number(formData.get("price") ?? 0),
    discountPercent: Number(formData.get("discountPercent") ?? 0),
    stock: Number(formData.get("stock") ?? 0),
    keys,
    featured: String(formData.get("featured") ?? "") === "on"
  };

  await addProduct(product);
  revalidatePath("/");
  revalidatePath("/admin");
  revalidatePath("/admin/products");
}

export async function deleteProduct(formData: FormData): Promise<void> {
  const productId = String(formData.get("productId") ?? "");
  await removeProduct(productId);
  revalidatePath("/");
  revalidatePath("/admin");
  revalidatePath("/admin/products");
}

export async function syncInventoryFromKeys(): Promise<void> {
  const products = await getProducts();
  const updated = products.map((item) => ({ ...item, stock: item.keys.length }));
  await updateProducts(updated);
  revalidatePath("/");
  revalidatePath("/admin");
  revalidatePath("/admin/products");
}
