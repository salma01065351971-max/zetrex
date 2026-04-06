import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { formatUsd } from "@/lib/utils";
import type { Product } from "@/lib/types";

interface ProductCardProps {
  product: Product;
  discountPercent: number;
  finalPrice: number;
}

export function ProductCard({ product, discountPercent, finalPrice }: ProductCardProps) {
  return (
    <Card className="overflow-hidden border-emerald-900/50 bg-gradient-to-b from-emerald-950/40 to-black/80">
      <div className="h-40 w-full bg-cover bg-center" style={{ backgroundImage: `url(${product.coverImage})` }} />
      <CardContent className="space-y-3 p-4">
        <div className="flex items-center justify-between">
          <Badge>{product.categorySlug.replace("-", " ")}</Badge>
          {discountPercent > 0 ? <Badge>-{discountPercent}%</Badge> : null}
        </div>
        <h3 className="text-lg font-semibold text-white">{product.title}</h3>
        <p className="line-clamp-2 text-sm text-emerald-50/70">{product.description}</p>
        <div className="flex items-end justify-between">
          <div className="space-y-1">
            {discountPercent > 0 ? <p className="text-xs text-muted-foreground line-through">{formatUsd(product.price)}</p> : null}
            <p className="text-xl font-bold text-emerald-300">{formatUsd(finalPrice)}</p>
          </div>
          <Link href={`/products/${product.id}`} className="rounded-lg bg-emerald-500 px-3 py-2 text-sm font-semibold text-black">
            View
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
