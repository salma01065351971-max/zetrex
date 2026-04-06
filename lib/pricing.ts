const TAX_RATE = 0;

export function calculateFinalPrice(basePrice: number): number {
  return Number((basePrice * (1 + TAX_RATE)).toFixed(2));
}
