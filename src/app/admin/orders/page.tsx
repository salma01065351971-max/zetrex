import { requireAdmin } from "@/lib/auth";
import { getOrders } from "@/lib/data-store";
import { formatUsd } from "@/lib/utils";

export default async function AdminOrdersPage() {
  await requireAdmin();
  const orders = await getOrders();

  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <h1 className="mb-4 text-3xl font-black text-white">Orders</h1>
      <div className="overflow-x-auto rounded-xl border border-emerald-700/30">
        <table className="min-w-full text-left text-sm">
          <thead className="bg-emerald-900/20 text-emerald-200">
            <tr>
              <th className="px-4 py-3">Order ID</th>
              <th className="px-4 py-3">Product</th>
              <th className="px-4 py-3">Email</th>
              <th className="px-4 py-3">Qty</th>
              <th className="px-4 py-3">Total</th>
              <th className="px-4 py-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="border-t border-emerald-800/40">
                <td className="px-4 py-3">{order.id}</td>
                <td className="px-4 py-3">{order.productTitle}</td>
                <td className="px-4 py-3">{order.buyerEmail}</td>
                <td className="px-4 py-3">{order.quantity}</td>
                <td className="px-4 py-3">{formatUsd(order.total)}</td>
                <td className="px-4 py-3 text-emerald-300">{order.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
