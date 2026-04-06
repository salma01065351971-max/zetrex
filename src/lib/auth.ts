import { cookies } from "next/headers";

export const ADMIN_SESSION_COOKIE = "zetrex_admin_session";
const DEFAULT_ADMIN_PASSWORD = "Zetrex@Admin#2026!Secure";

export function getAdminPassword(): string {
  return process.env.ADMIN_PASSWORD ?? DEFAULT_ADMIN_PASSWORD;
}

export async function isAdminAuthenticated(): Promise<boolean> {
  const cookieStore = await cookies();
  const value = cookieStore.get(ADMIN_SESSION_COOKIE)?.value;
  return value === "active";
}
