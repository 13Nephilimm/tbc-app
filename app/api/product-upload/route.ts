import { sql } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  const product = await req.json();

  await sql`INSERT INTO products (title, description, price, release_year, category, rating, thumbnail, images)
  VALUES 
      (${product.title}, ${product.description}, ${product.price}, ${
    product.release_year
  }, ${product.category}, ${product.rating}, ${
    product.thumbnail
  }, ${JSON.stringify(product.images)});`;

  return NextResponse.json({ message: "success" }, { status: 200 });
};
