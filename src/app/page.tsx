import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { headers } from "next/headers";
import Link from "next/link";

// export async function generateMetadata(): Promise<Metadata> {
//   const t = await getTranslations("Home");
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

export default async function Home() {
  // const t = await getTranslations("Home");

  return (
    <>
      <section className="grid grid-cols-[1fr_0.7fr] gap-10">
        <div>
          <h1 className="title">Світові рішення для вашого бізнесу</h1>
          <p className="content mt-4 mb-7">
            Afasfsa fsdgsdghs gksdjghskdhgksdhkjghk shkghksd kjsdhkjghsdk
            ghkjsdh gksdhgkhsdkjgj sdjgkjshdgkj hsdgh ksehgkj hdkjghsjgskdjh
            ghkjsdh gksdhgkhsdkjgj sdjgkjshdgkj hsdgh ksehgkj hdkjghsjgskdjh
            ghkjsdh gksdhgkhsdkjgj sdjgkjshdgkj hsdgh ksehgkj hdkjghsjgskdjh
            ghkjsdh gksdhgkhsdkjgj sdjgkjshdgkj hsdgh ksehgkj hdkjghsjgskdjh
          </p>
          <Link
            href="/"
            className="py-2 px-3 font-bold bg-[#00262f] rounded-[5px] hover:bg-[#00323e]"
          >
            Дізнатися більше
          </Link>
        </div>
        <img
          src="/assets/images/home_1.png"
          alt="who_are_we"
          className="rounded-2xl w-full h-70 object-cover"
        />
      </section>

      <section className="mt-10 bg-[#031827] rounded-2xl p-5 flex justify-between items-center">
        <h2 className="title">Покращуй свій бізнес вже сьогодні</h2>
        <Link
          href="/"
          className="py-2 px-3 font-bold bg-[#00262f] rounded-[5px] hover:bg-[#00323e]"
        >
          Дізнатися більше
        </Link>
      </section>
    </>
  );
}
