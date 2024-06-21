import { sql } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";
import { hashPassword, validateJWT } from "../../../utils/functions";

export const PATCH = async (req: NextRequest) => {
  const { email, name, password, confirmPassword, image } = await req.json();

  const authorizationHeader = req.headers.get("authorization");

  const info: any = await validateJWT(authorizationHeader as string).catch(
    (err) => console.log(err)
  );

  if (password !== confirmPassword) {
    return NextResponse.json(
      { error: "Passwords aren't the same!" },
      { status: 400 }
    );
  }

  try {
    if (!password) {
      await sql`UPDATE users SET name = ${name}, image = ${image}, email = ${email} WHERE id = ${info.id}`;
    } else {
      const hashedPassword = await hashPassword(password);
      await sql`UPDATE users SET name = ${name}, password = ${hashedPassword}, email = ${email}, image = ${image}  WHERE id = ${info.id}`;
    }

    return NextResponse.json(
      { msg: "Profile updated successfully!" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Error updating profile!" },
      { status: 400 }
    );
  }
};
