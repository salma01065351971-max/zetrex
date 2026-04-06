import Link from "next/link";
import { calculateDiscountedPrice } from "../lib/pricing";
import type { Product } from "../lib/types";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Card } from "./ui/card";

type Props = {
  product: Product;
};

export function ProductCard({ product }: Props) {
  const finalPrice = calculateDiscountedPrice(product.price, product.discountPercent);
  const hasDiscount = product.discountPercent > 0;

  return (
    <Card className="group overflow-hidden p-4 transition duration-300 hover:-translate-y-1 hover:border-emerald-400/40">
      <div
        className="h-44 w-full rounded-xl border border-white/10 bg-cover bg-center"
        style={{ backgroundImage: `url(${product.cover})` }}
      />
      <div className="mt-4">
        <p className="text-sm text-muted">{product.slug}</p>
        <h3 className="mt-1 text-lg font-bold text-foreground">{product.title}</h3>
        <p className="mt-2 text-sm text-white/70">{product.description}</p>
      </div>
      <div className="mt-4 flex items-center gap-2">
        {hasDiscount ? <Badge>-{product.discountPercent}%</Badge> : null}
        <p className="text-xl font-extrabold text-emerald-300">${finalPrice.toFixed(2)}</p>
        {hasDiscount ? (
          <p className="text-sm text-white/40 line-through">${product.price.toFixed(2)}</p>
        ) : null}
      </div>
      <div className="mt-4 grid grid-cols-2 gap-2">
        <Link href={`/products/${product.id}`}>
          <Button variant="outline" className="w-full">
            View Details
          </Button>
        </Link>
        <Link href={`/products/${product.id}`}>
          <Button className="w-full">Buy Now</Button>
        </Link>
      </div>
    </Card>
  );
}
