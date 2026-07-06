"use server";

import { createAuthToken } from "@/lib/auth";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function loginAction(formData: FormData) {
  const username = formData.get("username") as string;
  const password = formData.get("password") as string;

  const validUsername = process.env.ADMIN_USERNAME;
  const validPassword = process.env.ADMIN_PASSWORD;

  if (username === validUsername && password === validPassword) {
    const token = await createAuthToken({ user: "admin" });
    
    const cookieStore = await cookies();
    cookieStore.set("admin_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24, // 24 hours
      path: "/",
    });
    
    return { success: true };
  }

  return { success: false, error: "Username atau Password salah!" };
}

export async function logoutAction() {
  const cookieStore = await cookies();
  cookieStore.delete("admin_token");
  redirect("/login");
}
