import Link from "next/link";
import { Card } from "../../components/ui/card";
import { readOrderById } from "../../lib/data-store";
import { formatCurrency } from "../../lib/utils";

type PurchaseSuccessProps = {
  searchParams: { orderId?: string };
};

export default async function PurchaseSuccessPage({ searchParams }: PurchaseSuccessProps) {
  const orderId = searchParams.orderId || "";
  const order = orderId ? await readOrderById(orderId) : undefined;

  return (
    <div className="mx-auto max-w-2xl">
      <Card className="space-y-4">
        <h1 className="text-3xl font-bold text-emerald-glow">Purchase Successful</h1>
        {!order ? (
          <p className="text-muted">Order not found. If this is unexpected, please contact support.</p>
        ) : (
          <>
            <p className="text-muted">Order #{order.id}</p>
            <p className="text-sm text-muted">
              {order.productTitle} - {formatCurrency(order.price)}
            </p>
            <div className="rounded-xl border border-emerald/40 bg-black/60 p-4">
              <p className="mb-2 text-xs uppercase tracking-widest text-muted">Your Digital Key</p>
              <code className="text-lg font-bold text-emerald-glow">{order.deliveredKey}</code>
            </div>
            <p className="text-xs text-muted">Save this key now. It is shown only on this page and in admin orders.</p>
          </>
        )}
        <Link href="/" className="inline-block text-sm font-semibold text-emerald-glow hover:underline">
          Back to Store
        </Link>
      </Card>
    </div>
  );
}
