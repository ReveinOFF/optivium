import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { headers } from "next/headers";
import Link from "next/link";

// export async function generateMetadata(): Promise<Metadata> {
//   const t = await getTranslations("NotFound");
//   const pathname = (await headers()).get("x-pathname") as string;

//   return {
//     title: t("meta.title"),
//     description: t("meta.description"),
//     keywords: t("meta.keywords"),

//     openGraph: {
//       title: t("meta.title"),
//       description: t("meta.description"),
//       images: "/assets/images/fliper.png",
//       type: "website",
//       url: process.env.SITE_URL + pathname,
//     },

//     twitter: {
//       title: t("meta.title"),
//       description: t("meta.description"),
//       images: "/assets/images/fliper.png",
//       card: "summary",
//     },

//     robots: {
//       index: false,
//       follow: false,
//     },

//     alternates: {
//       canonical: process.env.SITE_URL + pathname,
//     },
//   };
// }

export default async function NotFound() {
  // const t = await getTranslations("NotFound");

  return (
    <>
      <h1 className="text-9xl font-[Exo_2] text-center mt-5">404</h1>
      <p className="text-2xl text-center text-white opacity-70">
        Oops. Page is not found!
      </p>
      <div className="flex mt-10">
        <Link
          href="/"
          className="py-2 px-3 font-bold bg-[#001f27] rounded-[5px] hover:bg-[#002731] mx-auto"
        >
          Go to Homepage
        </Link>
      </div>
    </>
  );
}
