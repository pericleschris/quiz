import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const url = request.nextUrl;
  const response = NextResponse.next();

  const paramValue = url.searchParams.get("ltik");
  if (paramValue) {
    response.cookies.set("token", paramValue, {
      httpOnly: true,
      secure: true,
    });
  }

  return response;
}

export const config = {
  matcher: "/",
};
