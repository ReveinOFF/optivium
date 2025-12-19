import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getTranslations } from "next-intl/server";
import { Metadata } from "next";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import { Inter, Exo_2 } from "next/font/google";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  display: "swap",
  variable: "--font-inter",
});

const exo2 = Exo_2({
  subsets: ["latin", "cyrillic"],
  display: "swap",
  variable: "--font-exo2",
});

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations();

  return {
    title: {
      template: "%s | Optivium",
      default: t("Main.meta.title"),
    },
    description: t("Main.meta.description"),
    keywords: t("Keywords"),
    metadataBase: new URL(process.env.SITE_URL as string),
    creator: "ReveinOff",
    icons: {
      icon: [
        { url: "/favicon.ico", type: "image/x-icon" },
        { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
        { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
        { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      ],
      apple: "/apple-touch-icon.png",
    },
    applicationName: "Optivium",
    appleWebApp: {
      capable: true,
      statusBarStyle: "black-translucent",
    },
    openGraph: {
      siteName: "Optivium",
      locale: locale,
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
      language: locale,
      "apple-mobile-web-app-capable": "yes",
      "mobile-web-app-capable": "yes",
    },
    verification: {
      google: "Rq2up3evqZJNm-G4vlf6wpj_UPRw_D1PMfIwVBkaO4k",
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const t = await getTranslations();

  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      url: process.env.SITE_URL,
      name: "Optivium",
      description: t("Main.meta.description"),
      inLanguage: locale,
    },
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Optivium",
      url: process.env.SITE_URL,
      logo: `${process.env.SITE_URL}/assets/images/meta.jpg`,
    },
  ];

  return (
    <html lang={locale}>
      <body
        className={`${inter.variable} ${exo2.variable} bg-[#000F1B] text-[#ededed] font-[Inter] grid grid-rows-[auto_1fr_auto] min-h-screen`}
      >
        <NextIntlClientProvider>
          <Header locale={locale} />
          <main>{children}</main>
          <Footer />
        </NextIntlClientProvider>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </body>
    </html>
  );
}
