import { ProductCard } from "../components/product-card";
import { Badge } from "../components/ui/badge";
import { readProducts } from "../lib/data-store";

export default async function HomePage() {
  const products = await readProducts();

  return (
    <section className="space-y-8">
      <div className="space-y-4">
        <Badge>Next.js Digital Storefront</Badge>
        <h1 className="text-3xl font-extrabold tracking-tight md:text-5xl">
          Midnight-grade game key storefront built for instant delivery.
        </h1>
        <p className="max-w-2xl text-muted">
          Discover premium digital titles, purchase in seconds, and receive your game key immediately.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
