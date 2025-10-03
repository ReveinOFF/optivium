import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";
import { createNEMO } from "@rescale/nemo";
import { NextResponse } from "next/server";

const intlMiddleware = createMiddleware(routing);

export default createNEMO({
  "/:path*": [
    async (request) => {
      const intlResponse = await Promise.resolve(intlMiddleware(request));

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
  matcher: "/((?!api/|_next/|assets/|_static|_vercel|[\\w-]+\\.\\w+).*)",
};
