import Link from "next/link";
import { logoutAdmin } from "@/app/admin/actions";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getInventory, getOrders, getProducts } from "@/lib/data-store";
import { requireAdmin } from "@/lib/auth";

export default async function AdminDashboardPage() {
  await requireAdmin();
  const [products, orders, inventory] = await Promise.all([getProducts(), getOrders(), getInventory()]);
  const totalStock = inventory.reduce((sum, row) => sum + row.keys.length, 0);

  return (
    <div className="mx-auto max-w-6xl space-y-6 px-4 py-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-black text-white">Hidden Admin Dashboard</h1>
        <form action={logoutAdmin}>
          <Button variant="outline">Logout</Button>
        </form>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Total Products</CardTitle>
          </CardHeader>
          <CardContent>{products.length}</CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Total Orders</CardTitle>
          </CardHeader>
          <CardContent>{orders.length}</CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Keys in Inventory</CardTitle>
          </CardHeader>
          <CardContent>{totalStock}</CardContent>
        </Card>
      </div>
      <div className="flex gap-3">
        <Link href="/admin/products" className="rounded-md bg-emerald-500 px-4 py-2 font-semibold text-black">
          Manage Products
        </Link>
        <Link href="/admin/orders" className="rounded-md border border-emerald-700/30 px-4 py-2 font-semibold text-emerald-100">
          Manage Orders
        </Link>
      </div>
    </div>
  );
}
import Link from "next/link";
import { logoutAdmin } from "./actions";
import { Button } from "../../components/ui/button";
import { Card } from "../../components/ui/card";
import { getOrders, getProducts } from "../../lib/data-store";

export default async function AdminDashboardPage() {
  const [products, orders] = await Promise.all([getProducts(), getOrders()]);
  const availableKeys = products.reduce((sum, item) => sum + item.keys.length, 0);

  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h1 className="text-3xl font-black">Admin Dashboard</h1>
        <form action={logoutAdmin}>
          <Button variant="outline">Logout</Button>
        </form>
      </div>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        <Card className="p-5">
          <p className="text-sm text-white/60">Products</p>
          <p className="mt-2 text-3xl font-black text-emerald-300">{products.length}</p>
        </Card>
        <Card className="p-5">
          <p className="text-sm text-white/60">Total Orders</p>
          <p className="mt-2 text-3xl font-black text-emerald-300">{orders.length}</p>
        </Card>
        <Card className="p-5">
          <p className="text-sm text-white/60">Digital Keys In Stock</p>
          <p className="mt-2 text-3xl font-black text-emerald-300">{availableKeys}</p>
        </Card>
      </div>
      <div className="mt-8 flex gap-3">
        <Link href="/admin/products">
          <Button>Manage Products</Button>
        </Link>
        <Link href="/admin/orders">
          <Button variant="outline">View Orders</Button>
        </Link>
      </div>
    </div>
  );
}
