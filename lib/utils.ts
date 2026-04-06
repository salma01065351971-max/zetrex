export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 2
  }).format(amount);
}

export function clsx(...values: Array<string | false | null | undefined>): string {
  return values.filter(Boolean).join(" ");
}
