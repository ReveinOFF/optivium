import { NextIntlClientProvider } from "next-intl";
import "../styles/globals.css";
import { getLocale, getTranslations } from "next-intl/server";
import { Metadata } from "next";
import { getUserLocale } from "@/services/locale";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";

export async function generateMetadata(): Promise<Metadata> {
  const lang = await getUserLocale();
  const t = await getTranslations();

  return {
    keywords: t("Keywords"),
    metadataBase: new URL(process.env.SITE_URL as string),
    creator: "ReveinOff",
    icons: {
      icon: "/favicon.ico",
      apple: "/apple-touch-icon.png",
    },
    applicationName: "Optivium",
    appleWebApp: {
      capable: true,
      statusBarStyle: "black-translucent",
    },
    openGraph: {
      siteName: "Optivium",
      locale: lang,
      images: {
        url: `${process.env.SITE_URL}/assets/images/meta.jpg`,
        width: 1024,
        height: 1024,
        alt: "Optivium preview",
      },
      type: "website",
    },
    twitter: {
      images: {
        url: `${process.env.SITE_URL}/assets/images/meta.jpg`,
        width: 1024,
        height: 1024,
        alt: "Optivium preview",
      },
      creator: "ReveinOFF",
      site: process.env.TWITTER,
      card: "summary_large_image",
    },
    other: {
      language: lang,
      "apple-mobile-web-app-capable": "yes",
      "mobile-web-app-capable": "yes",
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
          sizes="96x96"
          href="/favicon-96x96.png"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Exo+2:ital,wght@0,100..900;1,100..900&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
          rel="stylesheet"
        />
        <meta
          name="twitter:image"
          content={`${process.env.SITE_URL}/assets/images/meta.jpg`}
        />
        <meta
          property="og:image"
          content={`${process.env.SITE_URL}/assets/images/meta.jpg`}
        />
      </head>
      <body className="bg-[#000F1B] text-[#ededed] font-[Inter] grid grid-rows-[auto_1fr_auto] min-h-screen">
        <NextIntlClientProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
