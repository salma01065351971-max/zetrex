import { Card } from "../../components/ui/card";

type Props = {
  searchParams: Promise<{ key?: string }>;
};

export default async function PurchaseSuccessPage({ searchParams }: Props) {
  const { key } = await searchParams;

  return (
    <div className="mx-auto max-w-2xl px-4 py-14">
      <Card className="p-6">
        <h1 className="text-3xl font-black text-emerald-300">Purchase Completed</h1>
        <p className="mt-2 text-white/75">
          Your digital key has been delivered instantly. Save it securely.
        </p>
        <div className="mt-5 rounded-xl border border-emerald-400/40 bg-emerald-500/10 p-4 font-mono text-lg">
          {key ?? "No key found"}
        </div>
      </Card>
    </div>
  );
}
