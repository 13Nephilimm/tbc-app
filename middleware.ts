import { NextRequest, NextResponse } from "next/server";

export default function middleware(request: NextRequest) {
  let token = request.cookies.get("token");
  let language = request.cookies.get("language");

  if (
    request.nextUrl.pathname === "/api/register" ||
    request.nextUrl.pathname === "/api/login" ||
    request.nextUrl.pathname === "/api/get-products" ||
    request.nextUrl.pathname === "/api/cart" ||
    request.nextUrl.pathname === "/api/cart-total" ||
    request.nextUrl.pathname === "/api/get-users" ||
    request.nextUrl.pathname === "/api/delete-user/:id" ||
    request.nextUrl.pathname === "/api/update-user/:id" ||
    request.nextUrl.pathname === "/api/image-upload" ||
    request.nextUrl.pathname === "/api/product-upload"
    // request.nextUrl.pathname === "/api/auth/users" ||
    // request.nextUrl.pathname === "/api/product"
  ) {
    return NextResponse.next();
  }

  if (token && request.nextUrl.pathname === "/login") {
    return NextResponse.redirect(new URL("/", request.url));
  }
  if (!token && request.nextUrl.pathname !== "/login") {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  if (request.nextUrl.pathname !== "/login" && !language) {
    const response = NextResponse.next();
    response.cookies.set("language", "en");
    return response;
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|favicon.ico).*)"],
};
