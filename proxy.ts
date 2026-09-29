import { NextResponse, type NextRequest } from "next/server";

// 301 /repair -> /repair/ (replaces Next's built-in 308; see next.config.ts).
export function proxy(req: NextRequest) {
  const url = new URL(req.url);
  if (url.pathname !== "/" && !url.pathname.endsWith("/") && !/\.\w+$/.test(url.pathname)) {
    url.pathname = `${url.pathname}/`;
    return NextResponse.redirect(url, 301);
  }
  return NextResponse.next();
}

export const config = {
  // Skip Next internals and API routes.
  matcher: ["/((?!_next/|api/).*)"],
};
