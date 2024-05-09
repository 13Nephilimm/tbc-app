import { sql } from "@vercel/postgres";
import { NextResponse, NextRequest } from "next/server";

export const revalidate = 0;

export async function PUT(request: NextRequest) {
  const id = request.nextUrl.pathname.replace("/api/update-user/", "");

  try {
    if (!id) throw new Error("ID is required");

    const { name, email, age } = await request.json();
    if (!name || !email || !age)
      throw new Error("Name, email and age are required");

    await sql`UPDATE users SET name = ${name}, email = ${email}, age = ${age} WHERE id = ${Number(
      id
    )}`;
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }

  const users = await sql`SELECT * FROM users`;

  return NextResponse.json({ users }, { status: 200 });
}
