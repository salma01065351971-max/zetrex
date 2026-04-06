import Link from "next/link";
import { adminLogoutAction } from "./actions";
import { Button } from "../../components/ui/button";
import { Card } from "../../components/ui/card";
import { requireAdmin } from "../../lib/auth";
import { readOrders, readProducts } from "../../lib/data-store";

export default async function AdminDashboardPage() {
  requireAdmin();
  const [products, orders] = await Promise.all([readProducts(), readOrders()]);

  const keysAvailable = products.reduce((total, product) => total + product.keys.length, 0);
  const keysDelivered = products.reduce((total, product) => total + product.soldKeys.length, 0);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <form action={adminLogoutAction}>
          <Button variant="ghost" type="submit">
            Sign out
          </Button>
        </form>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <p className="text-sm text-muted">Products</p>
          <p className="mt-2 text-2xl font-bold">{products.length}</p>
        </Card>
        <Card>
          <p className="text-sm text-muted">Available Keys</p>
          <p className="mt-2 text-2xl font-bold text-emerald-glow">{keysAvailable}</p>
        </Card>
        <Card>
          <p className="text-sm text-muted">Delivered Keys</p>
          <p className="mt-2 text-2xl font-bold">{keysDelivered}</p>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card className="space-y-3">
          <h2 className="text-xl font-semibold">Inventory Management</h2>
          <p className="text-sm text-muted">Manage products and digital keys inside the data layer.</p>
          <Link href="/admin/products" className="text-sm font-semibold text-emerald-glow hover:underline">
            Open Product Management
          </Link>
        </Card>
        <Card className="space-y-3">
          <h2 className="text-xl font-semibold">Order Feed</h2>
          <p className="text-sm text-muted">Total orders recorded: {orders.length}</p>
          <Link href="/admin/orders" className="text-sm font-semibold text-emerald-glow hover:underline">
            Open Orders
          </Link>
        </Card>
      </div>
    </div>
  );
}
