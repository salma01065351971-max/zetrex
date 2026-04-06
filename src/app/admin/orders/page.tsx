import Link from "next/link";
import { Button } from "../../../components/ui/button";
import { Card } from "../../../components/ui/card";
import { getOrders } from "../../../lib/data-store";

export default async function AdminOrdersPage() {
  const orders = await getOrders();

  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-3xl font-black">Orders</h1>
        <Link href="/admin">
          <Button variant="outline">Back to Dashboard</Button>
        </Link>
      </div>
      <div className="grid gap-4">
        {orders.length === 0 ? (
          <Card className="p-4 text-white/70">No orders yet.</Card>
        ) : (
          orders.map((order) => (
            <Card key={order.id} className="p-4">
              <p className="font-semibold">{order.productTitle}</p>
              <p className="mt-1 text-sm text-white/70">Order ID: {order.id}</p>
              <p className="mt-1 text-sm text-white/70">Email: {order.customerEmail}</p>
              <p className="mt-1 text-sm text-emerald-300">Delivered Key: {order.deliveredKey}</p>
              <p className="mt-1 text-sm text-white/60">
                Paid: ${order.amountPaid.toFixed(2)} | {new Date(order.createdAt).toLocaleString()}
              </p>
            </Card>
          ))
        )}
      </div>
    </div>
  );
}
