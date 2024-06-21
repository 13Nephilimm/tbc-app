import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export const revalidate = 0;

export async function GET() {
  const productsData = await sql`SELECT * FROM games;`;

  return NextResponse.json(
    { msg: "success", data: productsData.rows },
    { status: 200 }
  );
}
