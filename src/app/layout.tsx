import { NextIntlClientProvider } from "next-intl";
import "@/styles/global.css";
import { getLocale } from "next-intl/server";
import { Metadata } from "next";
import { getUserLocale } from "@/services/locale";

export async function generateMetadata(): Promise<Metadata> {
  const lang = await getUserLocale();

  return {
    metadataBase: new URL(process.env.SITE_URL as string),
    creator: "ReveinOff",
    icons: {
      icon: "/favicon.ico",
      apple: "/apple-touch-icon.png",
    },
    manifest: "/manifest.webmanifest",
    applicationName: "Optivium",
    appleWebApp: {
      capable: true,
      statusBarStyle: "black-translucent",
    },
    openGraph: {
      siteName: "Optivium",
      locale: lang,
    },
    twitter: {
      site: process.env.TWITTER,
    },
    other: {
      language: lang,
      "apple-mobile-web-app-capable": "yes",
      "mobile-web-app-capable": "yes",
      "theme-color": "#2F2F2F",
      "msapplication-TileColor": "#2F2F2F",
      "msapplication-config": "/browserconfig.xml",
    },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();

  return (
    <html lang={locale}>
      <head>
        <meta
          httpEquiv="Strict-Transport-Security"
          content="max-age=31536000; includeSubDomains"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
      </head>
      <body>
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
