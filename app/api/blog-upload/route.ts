import { sql } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  const blog = await req.json();

  await sql`INSERT INTO blog (title, body, image)
  VALUES 
      (${blog.title}, ${blog.body}, ${blog.image});`;

  return NextResponse.json({ message: "success" }, { status: 200 });
};
