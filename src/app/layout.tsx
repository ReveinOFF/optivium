import { NextIntlClientProvider } from "next-intl";
import "../styles/globals.css";
import { getLocale } from "next-intl/server";
import { Metadata } from "next";
import { getUserLocale } from "@/services/locale";
import Header from "@/components/header";
import Footer from "@/components/footer";

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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Exo+2:ital,wght@0,100..900;1,100..900&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-gradient-to-b from-[#0d1f29] to-[#051017] text-[#ededed] font-[Inter] grid grid-rows-[auto_1fr_auto] h-screen overflow-x-hidden">
        <NextIntlClientProvider>
          <Header />
          <main className="container my-5">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
