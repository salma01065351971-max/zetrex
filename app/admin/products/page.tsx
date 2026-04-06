import { addKeyAction } from "./actions";
import { Button } from "../../../components/ui/button";
import { Card } from "../../../components/ui/card";
import { Input } from "../../../components/ui/input";
import { requireAdmin } from "../../../lib/auth";
import { readProducts } from "../../../lib/data-store";
import { formatCurrency } from "../../../lib/utils";

export default async function AdminProductsPage() {
  requireAdmin();
  const products = await readProducts();

  return (
    <section className="space-y-4">
      <h1 className="text-3xl font-bold">Products & Digital Inventory</h1>
      <div className="space-y-4">
        {products.map((product) => (
          <Card key={product.id} className="space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <h2 className="text-xl font-semibold">{product.title}</h2>
                <p className="text-sm text-muted">
                  {formatCurrency(product.price)} - {product.platform} - {product.keys.length} available keys
                </p>
              </div>
            </div>

            <form action={addKeyAction} className="flex gap-2">
              <input type="hidden" name="productId" value={product.id} />
              <Input name="keyValue" placeholder="Enter new digital key" required />
              <Button type="submit">Add Key</Button>
            </form>
          </Card>
        ))}
      </div>
    </section>
  );
}
