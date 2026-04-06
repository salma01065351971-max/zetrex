import type { DiscountRule, Product } from "@/lib/types";

function isRuleValid(rule: DiscountRule, date = new Date()) {
  const startsAt = new Date(rule.startsAt);
  const endsAt = new Date(rule.endsAt);
  return rule.active && startsAt <= date && date <= endsAt;
}

export function getBestDiscountPercent(product: Product, rules: DiscountRule[], date = new Date()) {
  const applicable = rules.filter((rule) => {
    if (!isRuleValid(rule, date)) return false;
    const byProduct = rule.productIds?.includes(product.id) ?? false;
    const byCategory = rule.categorySlugs?.includes(product.categorySlug) ?? false;
    return byProduct || byCategory;
  });

  return applicable.reduce((best, current) => Math.max(best, current.percent), 0);
}

export function applyDiscount(basePrice: number, percent: number) {
  const value = Math.max(0, Math.min(100, percent));
  const discounted = basePrice - basePrice * (value / 100);
  return Number(discounted.toFixed(2));
}
