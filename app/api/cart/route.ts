import { sql } from "@vercel/postgres";
import { validateJWT } from "../../../utils/functions";
import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

export const GET = async (req: NextRequest) => {
  try {
    const authorizationHeader = req.headers.get("authorization");

    const info: any = await validateJWT(authorizationHeader as string).catch(
      (err) => console.log(err)
    );

    const productsData = await sql`
      SELECT
        games.title,
        games.description,
        games.price,
        games.rating,
        games.category,
        games.thumbnail,
        cart.id AS cart_id,
        cart.quantity
      FROM
        cart
      JOIN
        games ON cart.product_id = games.id
      WHERE
        cart.user_id = ${info.id};
    `;

    return NextResponse.json(
      { msg: "success", data: productsData.rows },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);

    return NextResponse.json({ msg: "fail" }, { status: 400 });
  }
};

export const POST = async (request: Request) => {
  try {
    const body = await request.json();

    const token: any = cookies().get("token");

    const info: any = await validateJWT(token.value as string).catch((err) =>
      console.log(err)
    );

    const data = await sql`
      SELECT * FROM cart WHERE product_id = ${body.product_id} AND user_id = ${info.id};
    `;

    if (data.rows.length > 0) {
      await sql`
        UPDATE cart SET quantity = quantity + 1 WHERE product_id = ${body.product_id} AND user_id = ${info.id};
      `;

      const quantity = await sql`
        SELECT SUM(quantity) AS total_quantity
        FROM cart
        WHERE user_id = ${info.id};
      `;

      return NextResponse.json(
        {
          msg: "update product successfully",
          quantity: quantity.rows[0].total_quantity,
        },
        { status: 200 }
      );
    }

    await sql`
      INSERT INTO cart (user_id, product_id, quantity)
      VALUES (${info.id}, ${body.product_id}, ${1});
    `;

    const quantity = await sql`
      SELECT SUM(quantity) AS total_quantity
      FROM cart
      WHERE user_id = ${info.id};
    `;

    return NextResponse.json(
      {
        msg: "Product is added successfully!",
        quantity: quantity.rows[0].total_quantity,
      },
      { status: 201 }
    );
  } catch (error) {
    console.log(error);
    return new Response("Failed to add product", {
      status: 400,
    });
  }
};

export const PATCH = async (req: NextRequest) => {
  const authorizationHeader = req.headers.get("authorization");

  const info: any = await validateJWT(authorizationHeader as string).catch(
    (err) => console.log(err)
  );

  const args = await req.json();

  try {
    if (args.method === "inc") {
      await sql`
        UPDATE cart
        SET quantity = quantity + 1
        WHERE id = ${args.id};
      `;
    }
    if (args.method === "dec") {
      await sql`
        UPDATE cart
        SET quantity = quantity - 1
        WHERE id = ${args.id} AND quantity > 0;
      `;

      const { rows } = await sql`
        SELECT quantity FROM cart WHERE id = ${args.id};
      `;
      if (rows.length > 0 && rows[0].quantity === 0) {
        await sql`
          DELETE FROM cart WHERE id = ${args.id};
        `;
      }
    }

    const sumQuantity = await sql`
      SELECT SUM(quantity) AS total_quantity
      FROM cart
      WHERE user_id = ${info.id};
    `;

    return NextResponse.json(
      {
        msg: "Product quantity changed!",
        data: sumQuantity.rows[0].total_quantity
          ? sumQuantity.rows[0].total_quantity
          : 0,
      },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json({ msg: "Error!" }, { status: 400 });
  }
};

export const DELETE = async (req: NextRequest) => {
  const authorizationHeader = req.headers.get("authorization");

  const info: any = await validateJWT(authorizationHeader as string).catch(
    (err) => console.log(err)
  );

  try {
    await sql`
      DELETE FROM cart
      WHERE user_id = ${info.id};
    `;
    return NextResponse.json(
      { msg: "Product quantity changed!" },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json({ msg: "Error!" }, { status: 400 });
  }
};
