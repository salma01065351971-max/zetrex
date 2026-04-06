import { NextRequest, NextResponse } from "next/server";
import { createOrderWithKey } from "../../../lib/data-store";

export async function POST(request: NextRequest) {
  const formData = await request.formData();
  const productId = String(formData.get("productId") || "");

  if (!productId) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  try {
    const order = await createOrderWithKey(productId);
    return NextResponse.redirect(new URL(`/purchase-success?orderId=${order.id}`, request.url));
  } catch {
    return NextResponse.redirect(new URL("/", request.url));
  }
}
