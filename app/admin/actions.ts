"use server";

import { redirect } from "next/navigation";
import { clearAdminSession, setAdminSession, validateAdmin } from "../../lib/auth";

export async function adminLoginAction(formData: FormData) {
  const username = String(formData.get("username") || "");
  const password = String(formData.get("password") || "");

  const valid = await validateAdmin(username, password);
  if (!valid) {
    redirect("/admin/login?error=1");
  }

  setAdminSession();
  redirect("/admin");
}

export async function adminLogoutAction() {
  clearAdminSession();
  redirect("/admin/login");
}
