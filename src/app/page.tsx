import { ProductCard } from "../components/product-card";
import { Badge } from "../components/ui/badge";
import { Card } from "../components/ui/card";
import { getCategories, getProducts } from "../lib/data-store";

export default async function HomePage() {
  const [products, categories] = await Promise.all([getProducts(), getCategories()]);
  const featured = products.filter((item) => item.featured);

  return (
    <div className="mx-auto max-w-7xl px-4 pb-16 pt-8">
      <section className="relative overflow-hidden rounded-3xl border border-emerald-400/30 bg-white/5 p-8 shadow-glass">
        <div className="absolute -right-10 -top-12 h-44 w-44 rounded-full bg-emerald-400/20 blur-3xl" />
        <Badge>Trusted Digital Marketplace</Badge>
        <h1 className="mt-4 max-w-3xl text-4xl font-black leading-tight text-white md:text-6xl">
          ZETREX MARKET - Instant Delivery for Premium Digital Products
        </h1>
        <p className="mt-4 max-w-2xl text-white/75">
          Explore game keys, software subscriptions, and exclusive digital bundles
          with secure checkout and instant key delivery.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-bold">Featured Categories</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {categories.map((category) => (
            <Card key={category.id} className="p-5">
              <p className="text-2xl">{category.icon}</p>
              <h3 className="mt-2 text-xl font-semibold">{category.name}</h3>
              <p className="mt-1 text-sm text-white/70">{category.description}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold">Featured Products</h2>
        <div className="mt-4 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}
