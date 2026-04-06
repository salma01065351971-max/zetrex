export type CategorySlug = "accounts" | "gift-cards" | "keys";

export interface Category {
  id: string;
  name: string;
  slug: CategorySlug;
  description: string;
  active: boolean;
}

export interface DiscountRule {
  id: string;
  name: string;
  percent: number;
  categorySlugs?: CategorySlug[];
  productIds?: string[];
  startsAt: string;
  endsAt: string;
  active: boolean;
}

export interface Product {
  id: string;
  title: string;
  slug: string;
  categorySlug: CategorySlug;
  description: string;
  price: number;
  coverImage: string;
  featured: boolean;
  active: boolean;
  rating: number;
  reviewsCount: number;
}

export interface InventoryRecord {
  productId: string;
  keys: string[];
}

export interface PurchaseInput {
  productId: string;
  email: string;
  quantity: number;
}

export interface Order {
  id: string;
  productId: string;
  productTitle: string;
  buyerEmail: string;
  unitPrice: number;
  quantity: number;
  discountPercent: number;
  total: number;
  deliveredKeys: string[];
  createdAt: string;
  status: "completed" | "failed";
}

export interface AdminUser {
  id: string;
  username: string;
  password: string;
  role: "superadmin";
}
