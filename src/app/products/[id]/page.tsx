import { notFound } from "next/navigation";
import { Button } from "../../../components/ui/button";
import { Card } from "../../../components/ui/card";
import { calculateDiscountedPrice } from "../../../lib/pricing";
import { getProductById } from "../../../lib/data-store";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function ProductDetails({ params }: Props) {
  const { id } = await params;
  const product = await getProductById(id);

  if (!product) {
    notFound();
  }

  const finalPrice = calculateDiscountedPrice(product.price, product.discountPercent);

  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <Card className="grid gap-6 p-6 md:grid-cols-2">
        <div
          className="h-72 rounded-2xl border border-white/10 bg-cover bg-center"
          style={{ backgroundImage: `url(${product.cover})` }}
        />
        <div>
          <p className="text-sm text-emerald-300">{product.slug}</p>
          <h1 className="mt-2 text-3xl font-black">{product.title}</h1>
          <p className="mt-4 text-white/75">{product.description}</p>
          <div className="mt-5 flex items-end gap-2">
            <p className="text-3xl font-black text-emerald-300">${finalPrice.toFixed(2)}</p>
            {product.discountPercent > 0 ? (
              <p className="pb-1 text-sm text-white/40 line-through">
                ${product.price.toFixed(2)}
              </p>
            ) : null}
          </div>
          <p className="mt-2 text-sm text-white/60">
            Stock: {product.stock} | Available Keys: {product.keys.length}
          </p>
          <form action="/api/purchase" method="POST" className="mt-6 space-y-3">
            <input type="hidden" name="productId" value={product.id} />
            <input
              required
              type="email"
              name="customerEmail"
              placeholder="customer@email.com"
              className="h-10 w-full rounded-xl border border-border bg-black/30 px-3"
            />
            <Button type="submit" className="w-full">
              Buy Now
            </Button>
          </form>
        </div>
      </Card>
    </div>
  );
}
