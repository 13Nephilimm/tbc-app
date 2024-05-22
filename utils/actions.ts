"use server";

import { cookies } from "next/headers";

export const setCartTotalCookie = async (total: number) => {
  const cookieStore = cookies();
  cookieStore.set("cart_total", total.toString());
};

export const getCartTotalCookie = async () => {
  const cookieStore = cookies();
  const items = cookieStore.get("cart_total");

  return items;
};

export const getToken = async () => {
  const cookieStore = cookies();
  const token = cookieStore.get("token");

  return token;
};
