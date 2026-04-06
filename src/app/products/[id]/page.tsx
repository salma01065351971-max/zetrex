import Link from "next/link";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { getDiscounts, getProducts } from "@/lib/data-store";
import { applyDiscount, getBestDiscountPercent } from "@/lib/pricing";
import { formatUsd } from "@/lib/utils";

export default async function ProductDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const [products, discounts] = await Promise.all([getProducts(), getDiscounts()]);
  const product = products.find((item) => item.id === id && item.active);
  if (!product) return notFound();

  const discountPercent = getBestDiscountPercent(product, discounts);
  const finalPrice = applyDiscount(product.price, discountPercent);

  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      <Card className="border-emerald-700/30 bg-black/40">
        <CardHeader>
          <div className="flex flex-wrap items-center gap-3">
            <Badge>{product.categorySlug}</Badge>
            {discountPercent > 0 ? <Badge>Season Sale -{discountPercent}%</Badge> : null}
          </div>
          <CardTitle className="text-3xl text-white">{product.title}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-emerald-50/80">{product.description}</p>
          <div className="rounded-lg border border-emerald-900/50 bg-emerald-950/20 p-4">
            <p className="text-sm text-emerald-50/60">Price</p>
            {discountPercent > 0 ? <p className="text-sm text-muted-foreground line-through">{formatUsd(product.price)}</p> : null}
            <p className="text-3xl font-bold text-emerald-300">{formatUsd(finalPrice)}</p>
          </div>

          <form action="/api/purchase" method="POST" className="space-y-4 rounded-xl border border-emerald-700/20 p-4">
            <input type="hidden" name="productId" value={product.id} />
            <div className="space-y-2">
              <Label htmlFor="email">Buyer Email</Label>
              <Input id="email" name="email" type="email" required placeholder="your@email.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="quantity">Quantity</Label>
              <Input id="quantity" name="quantity" type="number" min={1} max={10} defaultValue={1} required />
            </div>
            <Button type="submit">Purchase Now</Button>
          </form>

          <Link href="/" className="inline-block text-sm text-emerald-300 hover:underline">
            Back to marketplace
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
