import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default async function PurchaseSuccessPage({
  searchParams
}: {
  searchParams: Promise<{ orderId?: string; keyCount?: string }>;
}) {
  const { orderId, keyCount } = await searchParams;
  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <Card className="border-emerald-700/30 bg-black/40">
        <CardHeader>
          <CardTitle className="text-3xl text-emerald-300">Purchase Successful</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-emerald-50/80">Your order has been completed and digital assets were delivered to your email.</p>
          <p className="text-sm text-emerald-100/70">Order ID: {String(orderId || "N/A")}</p>
          <p className="text-sm text-emerald-100/70">Delivered Keys: {String(keyCount || "0")}</p>
          <Link href="/" className="inline-block rounded-md bg-emerald-500 px-4 py-2 font-semibold text-black">
            Continue Shopping
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
