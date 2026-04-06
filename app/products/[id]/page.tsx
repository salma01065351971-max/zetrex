import Image from "next/image";
import { notFound } from "next/navigation";
import { Badge } from "../../../components/ui/badge";
import { Button } from "../../../components/ui/button";
import { Card } from "../../../components/ui/card";
import { calculateFinalPrice } from "../../../lib/pricing";
import { readProductBySlug } from "../../../lib/data-store";
import { formatCurrency } from "../../../lib/utils";

type ProductPageProps = {
  params: { id: string };
};

export default async function ProductPage({ params }: ProductPageProps) {
  const product = await readProductBySlug(params.id);
  if (!product) {
    notFound();
  }

  const finalPrice = calculateFinalPrice(product.price);

  return (
    <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
      <Card className="overflow-hidden p-0">
        <div className="relative h-[420px]">
          <Image src={product.image} alt={product.title} fill className="object-cover" />
        </div>
      </Card>

      <Card className="space-y-4">
        <Badge>{product.platform}</Badge>
        <h1 className="text-3xl font-bold">{product.title}</h1>
        <p className="text-sm text-muted">{product.description}</p>
        <div className="text-sm text-muted">
          Category: <span className="text-foreground">{product.category}</span>
        </div>
        <div className="text-sm text-muted">
          Available keys: <span className="text-foreground">{product.stock}</span>
        </div>
        <div className="pt-2 text-2xl font-bold text-emerald-glow">{formatCurrency(finalPrice)}</div>

        <form action="/api/purchase" method="POST" className="pt-3">
          <input type="hidden" name="productId" value={product.id} />
          <Button type="submit" className="w-full">
            Buy Now - Instant Delivery
          </Button>
        </form>
      </Card>
    </div>
  );
}
