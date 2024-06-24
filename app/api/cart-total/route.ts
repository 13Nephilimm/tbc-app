import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";
import { validateJWT } from "../../../utils/functions";
import { cookies } from "next/headers";

export const GET = async () => {
  const cookieStore = cookies();
  const token = cookieStore.get("token");

  try {
    const info: any = await validateJWT(token!.value as string).catch((err) =>
      console.log(err)
    );

    const cartTotal =
      await sql`SELECT SUM(quantity) AS total FROM cart WHERE user_id = ${info.id}`;

    return NextResponse.json(
      { msg: "success", data: cartTotal.rows[0].total },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);

    return NextResponse.json({ msg: "fail" }, { status: 400 });
  }
};
