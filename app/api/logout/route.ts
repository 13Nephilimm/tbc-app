import { cookies } from "next/headers";

export async function POST(): Promise<Response> {
  cookies().delete("user");
  return new Response(JSON.stringify({ message: "success" }));
}
