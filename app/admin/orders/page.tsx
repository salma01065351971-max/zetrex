import { Card } from "../../../components/ui/card";
import { requireAdmin } from "../../../lib/auth";
import { readOrders } from "../../../lib/data-store";
import { formatCurrency } from "../../../lib/utils";

export default async function AdminOrdersPage() {
  requireAdmin();
  const orders = await readOrders();

  return (
    <section className="space-y-4">
      <h1 className="text-3xl font-bold">Orders</h1>
      <Card className="overflow-x-auto">
        <table className="w-full min-w-[700px] text-left text-sm">
          <thead className="text-muted">
            <tr>
              <th className="py-3">Order ID</th>
              <th className="py-3">Product</th>
              <th className="py-3">Price</th>
              <th className="py-3">Delivered Key</th>
              <th className="py-3">Created</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="border-t border-border/70">
                <td className="py-3 pr-4">{order.id}</td>
                <td className="py-3 pr-4">{order.productTitle}</td>
                <td className="py-3 pr-4">{formatCurrency(order.price)}</td>
                <td className="py-3 pr-4 font-mono text-emerald-glow">{order.deliveredKey}</td>
                <td className="py-3 pr-4">{new Date(order.createdAt).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </section>
  );
}
