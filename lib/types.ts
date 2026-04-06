export type Product = {
  id: string;
  slug: string;
  title: string;
  description: string;
  image: string;
  price: number;
  category: string;
  platform: string;
  stock: number;
  keys: string[];
  soldKeys: string[];
};

export type Order = {
  id: string;
  productId: string;
  productTitle: string;
  price: number;
  deliveredKey: string;
  createdAt: string;
};

export type User = {
  username: string;
  password: string;
  role: "admin";
};
