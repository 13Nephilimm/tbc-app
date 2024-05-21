import { createJWT, hashPassword } from "../../../utils/functions";
import { sql } from "@vercel/postgres";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export const POST = async (request: Request) => {
  try {
    const body = await request.json();
    const cookieStore = cookies();

    const isWithUsername =
      await sql`SELECT * FROM users where username = ${body.username};`;
    const isWithEmail =
      await sql`SELECT * FROM users where email = ${body.email};`;

    if (isWithUsername.rows.length > 0) {
      return NextResponse.json(
        { error: "User with this username already exists!" },
        { status: 409 }
      );
    }

    if (isWithEmail.rows.length > 0) {
      return NextResponse.json(
        { error: "User with this email already exists!" },
        { status: 409 }
      );
    }

    const hashedPassword = await hashPassword(body.password);

    await sql`INSERT INTO users (username, email, password, role)
    VALUES (${body.username}, ${body.email}, ${hashedPassword}, ${body.role});`;

    const data =
      await sql`SELECT * FROM users where username = ${body.username};`;
    const { id, username, email, role } = data.rows[0];

    const jwt = await createJWT({ username, email, id, role });

    cookieStore.set("token", jwt);
    cookieStore.set("role", role);

    return NextResponse.json(
      { msg: "Registered successfully!" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ error: "Failed to register!" }, { status: 400 });
  }
};
