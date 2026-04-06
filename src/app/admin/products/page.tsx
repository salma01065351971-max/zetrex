import { toggleProductStatus } from "@/app/admin/products/actions";
import { Button } from "@/components/ui/button";
import { requireAdmin } from "@/lib/auth";
import { getInventory, getProducts } from "@/lib/data-store";
import { formatUsd } from "@/lib/utils";

export default async function AdminProductsPage() {
  await requireAdmin();
  const [products, inventory] = await Promise.all([getProducts(), getInventory()]);

  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <h1 className="mb-4 text-3xl font-black text-white">Products & Inventory</h1>
      <div className="overflow-x-auto rounded-xl border border-emerald-700/30">
        <table className="min-w-full text-left text-sm">
          <thead className="bg-emerald-900/20 text-emerald-200">
            <tr>
              <th className="px-4 py-3">Title</th>
              <th className="px-4 py-3">Category</th>
              <th className="px-4 py-3">Price</th>
              <th className="px-4 py-3">Keys Left</th>
              <th className="px-4 py-3">Active</th>
              <th className="px-4 py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => {
              const stock = inventory.find((row) => row.productId === product.id)?.keys.length ?? 0;
              return (
                <tr key={product.id} className="border-t border-emerald-800/40">
                  <td className="px-4 py-3">{product.title}</td>
                  <td className="px-4 py-3">{product.categorySlug}</td>
                  <td className="px-4 py-3">{formatUsd(product.price)}</td>
                  <td className="px-4 py-3">{stock}</td>
                  <td className="px-4 py-3">{product.active ? "Yes" : "No"}</td>
                  <td className="px-4 py-3">
                    <form action={toggleProductStatus}>
                      <input type="hidden" name="productId" value={product.id} />
                      <Button type="submit" size="sm" variant="outline">
                        Toggle
                      </Button>
                    </form>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
