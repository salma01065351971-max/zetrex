import Image from "next/image";
import Link from "next/link";
import { Product } from "../lib/types";
import { formatCurrency } from "../lib/utils";
import { Badge } from "./ui/badge";
import { Card } from "./ui/card";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="group overflow-hidden p-0">
      <div className="relative h-44 w-full">
        <Image src={product.image} alt={product.title} fill className="object-cover transition group-hover:scale-105" />
      </div>
      <div className="space-y-3 p-4">
        <div className="flex items-center justify-between">
          <Badge>{product.platform}</Badge>
          <span className="text-sm text-muted">{product.stock} keys left</span>
        </div>
        <h3 className="text-lg font-semibold text-foreground">{product.title}</h3>
        <p className="line-clamp-2 text-sm text-muted">{product.description}</p>
        <div className="flex items-center justify-between pt-2">
          <span className="text-emerald-glow">{formatCurrency(product.price)}</span>
          <Link href={`/products/${product.slug}`} className="text-sm font-semibold text-emerald-glow hover:underline">
            View Product
          </Link>
        </div>
      </div>
    </Card>
  );
}
