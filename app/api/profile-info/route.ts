import { sql } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";
import { validateJWT } from "../../../utils/functions";

export async function GET(req: NextRequest) {
  const authorizationHeader = req.headers.get("authorization");

  const info: any = await validateJWT(authorizationHeader as string).catch(
    (err) => console.log(err)
  );

  try {
    const users = await sql`SELECT * FROM users WHERE id = ${info.id};`;
    const user = users.rows[0];
    delete user.password;
    return NextResponse.json({ user }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
