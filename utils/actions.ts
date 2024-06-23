"use server";

import { sql } from "@vercel/postgres";
import { cookies } from "next/headers";

export const setCartTotalCookie = async (total: number) => {
  const cookieStore = cookies();
  cookieStore.set("cart_total", total?.toString());
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

export const getAllProducts = async () => {
  const products = await sql`SELECT * FROM games`;
  return products.rows;
};

export const getSingleProduct = async (id: string) => {
  const product = await sql`SELECT * FROM games WHERE id = ${id}`;
  return product.rows[0];
};
