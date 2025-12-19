import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";
import { createNEMO } from "@rescale/nemo";
import { NextResponse } from "next/server";

const intlMiddleware = createMiddleware(routing);

export default createNEMO({
  "/:path*": [
    async (request) => {
      const intlResponse = await Promise.resolve(intlMiddleware(request));

      if (
        intlResponse &&
        intlResponse.status >= 200 &&
        intlResponse.status < 400
      ) {
        const userAgent = request.headers.get("user-agent") || "";
        if (userAgent.toLowerCase().includes("googlebot")) {
          return NextResponse.next();
        }
      }

      if (intlResponse) {
        intlResponse.headers.set("x-pathname", request.nextUrl.pathname);
        return intlResponse;
      }

      const requestHeaders = new Headers(request.headers);

      return NextResponse.next({
        request: {
          headers: requestHeaders,
        },
      });
    },
  ],
});

export const config = {
  matcher:
    "/((?!api/|_next/|assets/|_static|robots\\.txt|sitemap\\.xml|sitemap/.*|site\\.webmanifest|_vercel|[\\w-]+\\.\\w+).*)",
};
