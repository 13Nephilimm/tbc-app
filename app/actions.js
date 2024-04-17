"use server";

import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { AUTH_COOKIE_KEY } from "./constants";

export async function login(data) {
  const { username, password } = Object.fromEntries(data);

  const response = await fetch("https://dummyjson.com/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username,
      password,
    }),
  });

  console.log(username, password);

  const user = await response.json();

  const cookieStore = cookies();

  cookieStore.set(AUTH_COOKIE_KEY, JSON.stringify(user));
}

export async function handleLogout() {
  const logoutCookies = cookies();
  logoutCookies.delete(AUTH_COOKIE_KEY);
  redirect("/login");
}
