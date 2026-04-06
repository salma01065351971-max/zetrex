import { promises as fs } from "fs";
import path from "path";
import type { AdminUser, Category, DiscountRule, InventoryRecord, Order, Product } from "@/lib/types";

const dataDir = path.join(process.cwd(), "data");

async function readJsonFile<T>(fileName: string): Promise<T> {
  const fullPath = path.join(dataDir, fileName);
  const content = await fs.readFile(fullPath, "utf8");
  return JSON.parse(content) as T;
}

async function writeJsonFile<T>(fileName: string, payload: T): Promise<void> {
  const fullPath = path.join(dataDir, fileName);
  await fs.writeFile(fullPath, JSON.stringify(payload, null, 2), "utf8");
}

export async function getCategories() {
  return readJsonFile<Category[]>("categories.json");
}

export async function getProducts() {
  return readJsonFile<Product[]>("products.json");
}

export async function getDiscounts() {
  return readJsonFile<DiscountRule[]>("discounts.json");
}

export async function getOrders() {
  return readJsonFile<Order[]>("orders.json");
}

export async function saveOrders(orders: Order[]) {
  await writeJsonFile("orders.json", orders);
}

export async function getInventory() {
  return readJsonFile<InventoryRecord[]>("inventory.json");
}

export async function saveInventory(records: InventoryRecord[]) {
  await writeJsonFile("inventory.json", records);
}

export async function getUsers() {
  return readJsonFile<AdminUser[]>("users.json");
}
