import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { headers } from "next/headers";
import Image from "next/image";

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

export default async function About() {
  // const t = await getTranslations("Home");

  return (
    <>
      <section className="grid grid-cols-[1fr_0.8fr] gap-10">
        <div>
          <h1 className="title">Хто ми</h1>
          <p className="content mt-4">
            Afasfsa fsdgsdghs gksdjghskdhgksdhkjghk shkghksd kjsdhkjghsdk
            ghkjsdh gksdhgkhsdkjgj sdjgkjshdgkj hsdgh ksehgkj hdkjghsjgskdjh
            ghkjsdh gksdhgkhsdkjgj sdjgkjshdgkj hsdgh ksehgkj hdkjghsjgskdjh
            ghkjsdh gksdhgkhsdkjgj sdjgkjshdgkj hsdgh ksehgkj hdkjghsjgskdjh
            ghkjsdh gksdhgkhsdkjgj sdjgkjshdgkj hsdgh ksehgkj hdkjghsjgskdjh
          </p>
        </div>
        <img
          src="/assets/images/aboutus_1.png"
          alt="who_are_we"
          className="rounded-2xl w-full h-70 object-cover"
        />
      </section>

      <section className="mt-10">
        <h2 className="title">Наші особливості</h2>

        <div className="grid grid-cols-4 gap-5 mt-5">
          <div className="grid gap-2 bg-[#031827] rounded-2xl px-10 py-15">
            <Image
              src="/assets/icons/icon_tr.png"
              alt="icon"
              width={70}
              height={70}
              className="mx-auto"
            />
            <p className="content text-center">Agdsgsdggds ds</p>
          </div>
          <div className="grid gap-2 bg-[#031827] rounded-2xl px-10 py-15">
            <Image
              src="/assets/icons/icon_tr.png"
              alt="icon"
              width={70}
              height={70}
              className="mx-auto"
            />
            <p className="content text-center">Dsg sdgsdgds</p>
          </div>
          <div className="grid gap-2 bg-[#031827] rounded-2xl px-10 py-15">
            <Image
              src="/assets/icons/icon_tr.png"
              alt="icon"
              width={70}
              height={70}
              className="mx-auto"
            />
            <p className="content text-center">Sgds dsfsdf</p>
          </div>
          <div className="grid gap-2 bg-[#031827] rounded-2xl px-10 py-15">
            <Image
              src="/assets/icons/icon_tr.png"
              alt="icon"
              width={70}
              height={70}
              className="mx-auto"
            />
            <p className="content text-center">AFSAdsgsdg</p>
          </div>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="title">Конкурентні переваги</h2>

        <div className="grid grid-cols-4 gap-5 mt-5">
          <div className="grid gap-2 bg-[#031827] rounded-2xl px-10 py-15">
            <Image
              src="/assets/icons/icon_tr.png"
              alt="icon"
              width={70}
              height={70}
              className="mx-auto"
            />
            <p className="content text-center">Agdsgsdggds ds</p>
          </div>
          <div className="grid gap-2 bg-[#031827] rounded-2xl px-10 py-15">
            <Image
              src="/assets/icons/icon_tr.png"
              alt="icon"
              width={70}
              height={70}
              className="mx-auto"
            />
            <p className="content text-center">Dsg sdgsdgds</p>
          </div>
          <div className="grid gap-2 bg-[#031827] rounded-2xl px-10 py-15">
            <Image
              src="/assets/icons/icon_tr.png"
              alt="icon"
              width={70}
              height={70}
              className="mx-auto"
            />
            <p className="content text-center">Sgds dsfsdf</p>
          </div>
          <div className="grid gap-2 bg-[#031827] rounded-2xl px-10 py-15">
            <Image
              src="/assets/icons/icon_tr.png"
              alt="icon"
              width={70}
              height={70}
              className="mx-auto"
            />
            <p className="content text-center">AFSAdsgsdg</p>
          </div>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="title">Наша філософія</h2>

        <div className="bg-[#031827] rounded-2xl content mt-5 px-5 pt-5 pb-30">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum sint
          iure quaerat, numquam, neque, fuga voluptatem nisi rerum dicta
          asperiores corrupti commodi doloribus repellat saepe enim. Id pariatur
          eligendi recusandae? Facilis consectetur veritatis neque vel illum
          suscipit libero accusamus excepturi cupiditate quisquam eius fuga
          numquam ipsum cum quia tenetur dolorum sunt minus amet, earum
          reiciendis nisi hic impedit nulla! Consectetur. Culpa deleniti minus
          officia iste sapiente inventore repellat, necessitatibus doloribus
          sequi asperiores fuga possimus, nisi expedita vel, dolore placeat!
          Quibusdam vitae tenetur similique repellendus accusantium ratione
          praesentium iste ab molestias.
        </div>
      </section>
    </>
  );
}
