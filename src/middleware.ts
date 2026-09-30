import NextAuth from "next-auth";
import { authConfig } from "@/lib/auth.config";
import { NextResponse } from "next/server";

const { auth } = NextAuth(authConfig);

export default auth((req) => {
  const { pathname } = req.nextUrl;
  const isLoggedIn = !!req.auth;
  const userRole = req.auth?.user?.role;

  // Rotas do admin - requer login como ADMIN/EDITOR/VIEWER
  if (pathname.startsWith("/admin")) {
    if (!isLoggedIn || !["ADMIN", "EDITOR", "VIEWER"].includes(userRole || "")) {
      return NextResponse.redirect(new URL("/login", req.nextUrl));
    }
  }

  // Rotas do portal do cliente - requer login como CLIENT
  if (pathname.startsWith("/portal")) {
    if (!isLoggedIn || userRole !== "CLIENT") {
      return NextResponse.redirect(new URL("/portal/login", req.nextUrl));
    }
  }

  return NextResponse.next();
});

export const config = {
  matcher: ["/admin/:path*", "/portal/:path*"],
};
