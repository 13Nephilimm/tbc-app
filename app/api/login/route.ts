import { cookies } from "next/headers";
import { comparePassword, createJWT } from "../../../utils/functions";
import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const cookieStore = cookies();

  try {
    const data =
      await sql`SELECT * FROM users where username = ${body.username};`;

    if (data.rows.length === 0) {
      return NextResponse.json(
        { error: "User with such credentials doesn't exist!" },
        { status: 401 }
      );
    }
    const { id, username, email, password, role } = data.rows[0];

    const isMatch = await comparePassword(body.password, password);

    if (isMatch) {
      const jwt = await createJWT({ username, email, id, role });

      cookieStore.set("token", jwt);
      cookieStore.set("role", role);
      return NextResponse.json(
        { msg: "Logged in successfully!" },
        { status: 200 }
      );
    }

    return NextResponse.json(
      { error: "Invalid credentials!" },
      { status: 401 }
    );
  } catch (error) {
    console.log(error);

    return NextResponse.json({ error: "Bad request!" }, { status: 400 });
  }
}
