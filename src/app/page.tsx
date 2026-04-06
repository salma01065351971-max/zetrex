import { ProductCard } from "@/components/product-card";
import { getCategories, getDiscounts, getProducts } from "@/lib/data-store";
import { applyDiscount, getBestDiscountPercent } from "@/lib/pricing";

export default async function HomePage() {
  const [products, categories, discounts] = await Promise.all([getProducts(), getCategories(), getDiscounts()]);
  const activeCategories = categories.filter((category) => category.active);
  const activeProducts = products.filter((product) => product.active);

  return (
    <div className="mx-auto max-w-6xl space-y-10 px-4 py-8">
      <section className="rounded-2xl border border-emerald-600/30 bg-gradient-to-r from-emerald-700/20 to-emerald-500/5 p-8">
        <p className="text-xs uppercase tracking-[0.24em] text-emerald-200">Production-Ready Storefront</p>
        <h1 className="mt-2 text-4xl font-black tracking-tight text-white md:text-5xl">ZETREX MARKET</h1>
        <p className="mt-4 max-w-2xl text-emerald-50/80">
          Premium destination for gaming accounts, gift cards, and activation keys. Secure delivery, instant purchase, and seasonal discounts.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white">Dynamic Categories</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {activeCategories.map((category) => (
            <div key={category.id} className="rounded-xl border border-emerald-700/30 bg-black/40 p-4">
              <p className="font-semibold text-emerald-300">{category.name}</p>
              <p className="mt-2 text-sm text-emerald-50/70">{category.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white">Featured Digital Products</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {activeProducts.map((product) => {
            const discountPercent = getBestDiscountPercent(product, discounts);
            const finalPrice = applyDiscount(product.price, discountPercent);
            return <ProductCard key={product.id} product={product} discountPercent={discountPercent} finalPrice={finalPrice} />;
          })}
        </div>
      </section>
    </div>
  );
}
