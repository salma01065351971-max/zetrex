import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { readUsers } from "./data-store";

export const ADMIN_COOKIE = "zetrex_admin";

export async function validateAdmin(username: string, password: string): Promise<boolean> {
  const users = await readUsers();
  return users.some((user) => user.username === username && user.password === password);
}

export function setAdminSession(): void {
  cookies().set(ADMIN_COOKIE, "authenticated", {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 8
  });
}

export function clearAdminSession(): void {
  cookies().delete(ADMIN_COOKIE);
}

export function isAdminAuthenticated(): boolean {
  return cookies().get(ADMIN_COOKIE)?.value === "authenticated";
}

export function requireAdmin(): void {
  if (!isAdminAuthenticated()) {
    redirect("/admin/login");
  }
}
