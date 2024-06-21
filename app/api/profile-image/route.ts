import { del, put } from "@vercel/blob";
import { sql } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";
import { validateJWT } from "../../../utils/functions";

export const POST = async (request: NextRequest): Promise<NextResponse> => {
  const authorizationHeader = request.headers.get("Authorization");

  const info: any = await validateJWT(authorizationHeader as string).catch(
    (err) => console.log(err)
  );

  const { searchParams } = new URL(request.url);
  const filename: any = searchParams.get("filename");

  const blob = await put(filename, request.body as any, {
    access: "public",
  });

  const oldBlob = await sql`SELECT image FROM users WHERE id = ${info.id}`;
  await sql`UPDATE users SET image = ${blob.url} WHERE id = ${info.id}`;
  await del(oldBlob.rows[0].image);

  return NextResponse.json(blob);
};
