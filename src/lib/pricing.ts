export function calculateDiscountedPrice(
  price: number,
  discountPercent: number
): number {
  const safeDiscount = Math.max(0, Math.min(100, discountPercent));
  return Math.max(0, Number((price * (1 - safeDiscount / 100)).toFixed(2)));
}
