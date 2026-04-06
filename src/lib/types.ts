export type Category = {
  id: string;
  name: string;
  description: string;
  icon: string;
};

export type Product = {
  id: string;
  title: string;
  slug: string;
  description: string;
  categoryId: string;
  cover: string;
  price: number;
  discountPercent: number;
  stock: number;
  keys: string[];
  featured: boolean;
};

export type Order = {
  id: string;
  productId: string;
  productTitle: string;
  createdAt: string;
  customerEmail: string;
  deliveredKey: string;
  amountPaid: number;
};
