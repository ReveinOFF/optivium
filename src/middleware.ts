import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";
import { NextRequest } from "next/server";

const intlMiddleware = createMiddleware(routing);

export default function middleware(request: NextRequest) {
  const response = intlMiddleware(request);

  return response;
}

export const config = {
  matcher:
    "/((?!api/|_next/|assets/|_static|robots\\.txt|sitemap\\.xml|sitemap/.*|site\\.webmanifest|_vercel|[\\w-]+\\.\\w+).*)",
};
