"use server";

import { redirect } from "next/navigation";
import { createAdminSession, clearAdminSession } from "@/lib/auth";
import { getUsers } from "@/lib/data-store";

export async function loginAdmin(formData: FormData) {
  const username = String(formData.get("username") || "");
  const password = String(formData.get("password") || "");
  const users = await getUsers();
  const matched = users.find((user) => user.username === username && user.password === password && user.role === "superadmin");

  if (!matched) {
    redirect("/admin/login?error=invalid_credentials");
  }

  await createAdminSession();
  redirect("/admin");
}

export async function logoutAdmin() {
  await clearAdminSession();
  redirect("/admin/login");
}
