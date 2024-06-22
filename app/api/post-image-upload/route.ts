import { put } from "@vercel/blob";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (request: NextRequest): Promise<NextResponse> => {
  const { searchParams } = new URL(request.url);
  const filename: any = searchParams.get("filename");

  const blob = await put(filename, request.body as any, {
    access: "public",
  });
  return NextResponse.json(blob);
};
