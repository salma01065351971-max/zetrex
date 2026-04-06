"use server";

import { promises as fs } from "fs";
import path from "path";
import { revalidatePath } from "next/cache";
import type { Product } from "@/lib/types";

const filePath = path.join(process.cwd(), "data", "products.json");

export async function toggleProductStatus(formData: FormData) {
  const productId = String(formData.get("productId") || "");
  const raw = await fs.readFile(filePath, "utf8");
  const products = JSON.parse(raw) as Product[];
  const next = products.map((item) => (item.id === productId ? { ...item, active: !item.active } : item));
  await fs.writeFile(filePath, JSON.stringify(next, null, 2), "utf8");
  revalidatePath("/");
  revalidatePath("/admin/products");
}
