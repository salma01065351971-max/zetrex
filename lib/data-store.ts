import { promises as fs } from "fs";
import path from "path";
import { Order, Product, User } from "./types";

const productsFile = path.join(process.cwd(), "data", "products.json");
const ordersFile = path.join(process.cwd(), "data", "orders.json");
const usersFile = path.join(process.cwd(), "data", "users.json");

async function readJsonFile<T>(filePath: string): Promise<T> {
  const raw = await fs.readFile(filePath, "utf8");
  return JSON.parse(raw) as T;
}

async function writeJsonFile<T>(filePath: string, data: T): Promise<void> {
  await fs.writeFile(filePath, JSON.stringify(data, null, 2), "utf8");
}

export async function readProducts(): Promise<Product[]> {
  return readJsonFile<Product[]>(productsFile);
}

export async function readProductBySlug(slug: string): Promise<Product | undefined> {
  const products = await readProducts();
  return products.find((product) => product.slug === slug);
}

export async function readOrders(): Promise<Order[]> {
  return readJsonFile<Order[]>(ordersFile);
}

export async function readUsers(): Promise<User[]> {
  return readJsonFile<User[]>(usersFile);
}

export async function saveProducts(products: Product[]): Promise<void> {
  await writeJsonFile(productsFile, products);
}

export async function saveOrders(orders: Order[]): Promise<void> {
  await writeJsonFile(ordersFile, orders);
}

export async function createOrderWithKey(productId: string): Promise<Order> {
  const [products, orders] = await Promise.all([readProducts(), readOrders()]);
  const product = products.find((item) => item.id === productId);

  if (!product) {
    throw new Error("Product not found");
  }

  const nextKey = product.keys.shift();
  if (!nextKey) {
    throw new Error("Product is out of stock");
  }

  product.soldKeys.push(nextKey);
  product.stock = product.keys.length;

  const order: Order = {
    id: `ORD-${Date.now()}`,
    productId: product.id,
    productTitle: product.title,
    price: product.price,
    deliveredKey: nextKey,
    createdAt: new Date().toISOString()
  };

  orders.unshift(order);
  await Promise.all([saveProducts(products), saveOrders(orders)]);

  return order;
}

export async function readOrderById(orderId: string): Promise<Order | undefined> {
  const orders = await readOrders();
  return orders.find((order) => order.id === orderId);
}
