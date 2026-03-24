import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export function GET(request: Request) {
  const url = new URL("/icon?v=20260326", request.url);
  const response = NextResponse.redirect(url, 302);
  response.headers.set("Cache-Control", "no-store, no-cache, must-revalidate");
  return response;
}
