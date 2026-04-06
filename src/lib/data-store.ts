import { promises as fs } from "fs";
import path from "path";
import type { Category, Order, Product } from "./types";

const dataDir = path.join(process.cwd(), "data");

type DataMap = {
  products: Product[];
  categories: Category[];
  orders: Order[];
};

function filePath(name: keyof DataMap): string {
  return path.join(dataDir, `${name}.json`);
}

async function readJson<T>(name: keyof DataMap): Promise<T> {
  const content = await fs.readFile(filePath(name), "utf-8");
  return JSON.parse(content) as T;
}

async function writeJson<T>(name: keyof DataMap, payload: T): Promise<void> {
  await fs.mkdir(dataDir, { recursive: true });
  await fs.writeFile(filePath(name), JSON.stringify(payload, null, 2), "utf-8");
}

export async function getProducts(): Promise<Product[]> {
  return readJson<Product[]>("products");
}

export async function getCategories(): Promise<Category[]> {
  return readJson<Category[]>("categories");
}

export async function getOrders(): Promise<Order[]> {
  return readJson<Order[]>("orders");
}

export async function addProduct(product: Product): Promise<void> {
  const current = await getProducts();
  current.unshift(product);
  await writeJson("products", current);
}

export async function deleteProduct(productId: string): Promise<void> {
  const current = await getProducts();
  await writeJson(
    "products",
    current.filter((product) => product.id !== productId)
  );
}

export async function updateProducts(products: Product[]): Promise<void> {
  await writeJson("products", products);
}

export async function addOrder(order: Order): Promise<void> {
  const current = await getOrders();
  current.unshift(order);
  await writeJson("orders", current);
}

export async function getProductById(productId: string): Promise<Product | null> {
  const products = await getProducts();
  return products.find((item) => item.id === productId) ?? null;
}
