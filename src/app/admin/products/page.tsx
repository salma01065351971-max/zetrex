import Link from "next/link";
import { createProduct, deleteProduct, syncInventoryFromKeys } from "./actions";
import { Button } from "../../../components/ui/button";
import { Card } from "../../../components/ui/card";
import { Input } from "../../../components/ui/input";
import { Label } from "../../../components/ui/label";
import { getCategories, getProducts } from "../../../lib/data-store";

export default async function AdminProductsPage() {
  const [products, categories] = await Promise.all([getProducts(), getCategories()]);

  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
      <div className="mb-4 flex items-center justify-between">
        <h1 className="text-3xl font-black">Manage Products</h1>
        <Link href="/admin">
          <Button variant="outline">Back to Dashboard</Button>
        </Link>
      </div>

      <Card className="p-6">
        <h2 className="text-xl font-bold">Add New Product</h2>
        <form action={createProduct} className="mt-4 grid gap-3 md:grid-cols-2">
          <div><Label>Title</Label><Input name="title" required /></div>
          <div><Label>Slug</Label><Input name="slug" required /></div>
          <div><Label>Cover URL</Label><Input name="cover" required /></div>
          <div>
            <Label>Category ID</Label>
            <Input name="categoryId" list="categories" required />
            <datalist id="categories">
              {categories.map((cat) => (
                <option key={cat.id} value={cat.id}>{cat.name}</option>
              ))}
            </datalist>
          </div>
          <div><Label>Price</Label><Input name="price" type="number" step="0.01" required /></div>
          <div><Label>Discount %</Label><Input name="discountPercent" type="number" defaultValue={0} /></div>
          <div><Label>Stock</Label><Input name="stock" type="number" defaultValue={0} required /></div>
          <div className="flex items-end gap-2">
            <input id="featured" name="featured" type="checkbox" className="h-4 w-4" />
            <Label htmlFor="featured">Featured product</Label>
          </div>
          <div className="md:col-span-2">
            <Label>Description</Label>
            <textarea
              name="description"
              required
              className="min-h-24 w-full rounded-xl border border-border bg-black/30 p-3"
            />
          </div>
          <div className="md:col-span-2">
            <Label>Digital Keys (one key per line)</Label>
            <textarea
              name="keys"
              required
              className="min-h-28 w-full rounded-xl border border-border bg-black/30 p-3"
            />
          </div>
          <Button type="submit">Add Product</Button>
        </form>
      </Card>

      <div className="mt-6">
        <form action={syncInventoryFromKeys}>
          <Button variant="outline">Sync Inventory From Keys</Button>
        </form>
      </div>

      <div className="mt-6 grid gap-3">
        {products.map((product) => (
          <Card key={product.id} className="flex flex-wrap items-center justify-between gap-3 p-4">
            <div>
              <p className="font-bold">{product.title}</p>
              <p className="text-sm text-white/60">
                Stock: {product.stock} | Keys: {product.keys.length}
              </p>
            </div>
            <form action={deleteProduct}>
              <input type="hidden" name="productId" value={product.id} />
              <Button type="submit" variant="danger">
                Delete
              </Button>
            </form>
          </Card>
        ))}
      </div>
    </div>
  );
}
