import { sql } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";

export const revalidate = 0;

export async function POST(req: NextRequest) {
  const { id } = await req.json();
  const productsData = await sql`SELECT * FROM games WHERE id=${id};`;

  return NextResponse.json(
    { msg: "success", data: productsData.rows[0] },
    { status: 200 }
  );
}
