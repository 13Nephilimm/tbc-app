import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET() {
  const productsData = await sql`SELECT * FROM products;`;

  return NextResponse.json(
    { msg: "success", data: productsData.rows },
    { status: 200 }
  );
}
