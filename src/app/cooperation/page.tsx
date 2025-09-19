"use client";

import { motion } from "framer-motion";
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

export default function Cooperation() {
  // const t = await getTranslations("Home");

  return (
    <>
      <section className="py-10 bg-[#031827] rounded-br-3xl rounded-bl-3xl mx-2.5">
        <div className="container grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-6xl font-bold mb-6"
            >
              Сотрудничество
            </motion.h1>
            <p className="text-lg text-gray-300 mb-8">
              Мы открыты к партнёрству: совместные проекты, интеграции и
              стратегические альянсы, которые приносят пользу обеим сторонам.
            </p>
            <div>
              <Link
                href="/contacts"
                className="px-6 py-3 rounded-xl bg-[#9ADE20] hover:bg-green-600 font-semibold"
              >
                Связаться
              </Link>
            </div>
          </div>
          <motion.img
            src="/assets/images/cooperation_1.png"
            alt="Cooperation Hero"
            className="rounded-2xl shadow-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            draggable={false}
          />
        </div>
      </section>

      <section className="container py-10 mx-2.5">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Почему с нами сотрудничают
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          {[
            {
              title: "Экспертиза",
              desc: "Глубокие знания индустрии и практический опыт",
            },
            {
              title: "Надёжность",
              desc: "Мы выполняем обязательства и даём долгосрочные гарантии",
            },
            {
              title: "Гибкость",
              desc: "Разные модели сотрудничества — от аутсорса до joint-venture",
            },
            {
              title: "Результат",
              desc: "Ориентируемся на конкретный бизнес-эффект",
            },
          ].map((it, i) => (
            <div key={i} className="bg-[#0b2238] rounded-2xl p-6 shadow-md">
              <h3 className="text-[#9ADE20] font-semibold mb-2">{it.title}</h3>
              <p className="text-gray-300 text-sm">{it.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-10 bg-[#031827] rounded-2xl mx-2.5 mb-2.5">
        <div className="container grid md:grid-cols-2 gap-12 items-center">
          <img
            src="/assets/images/cooperation_2.png"
            alt="Format 1"
            className="rounded-2xl shadow-lg"
            draggable={false}
          />
          <div>
            <h3 className="text-2xl font-bold mb-4 text-[#9ADE20]">
              Формат: Проектное сотрудничество
            </h3>
            <p className="text-gray-300 mb-4">
              Короткие или среднесрочные проекты с чёткими KPI и результатами.
            </p>
            <Link href="#contact" className="text-[#9ADE20] hover:underline">
              Узнать подробнее →
            </Link>
          </div>
        </div>
      </section>

      <section className="container py-10 grid md:grid-cols-2 gap-12 items-center mx-2.5">
        <div>
          <h3 className="text-2xl font-bold mb-4 text-[#9ADE20]">
            Формат: Долгосрочное партнёрство
          </h3>
          <p className="text-gray-300 mb-4">
            Стратегические альянсы, совместные продукты и совместные команды.
          </p>
          <Link href="#contact" className="text-[#9ADE20] hover:underline">
            Узнать подробнее →
          </Link>
        </div>
        <img
          src="/assets/images/cooperation_3.png"
          alt="Format 2"
          className="rounded-2xl shadow-lg"
          draggable={false}
        />
      </section>

      <section className="py-10 bg-[#031827] rounded-2xl mx-2.5">
        <div className="container grid md:grid-cols-2 gap-12 items-center">
          <img
            src="/assets/images/cooperation_4.png"
            alt="Integration"
            className="rounded-2xl shadow-lg"
            draggable={false}
          />
          <div>
            <h3 className="text-2xl font-bold mb-4 text-[#9ADE20]">
              Формат: Технологическая интеграция
            </h3>
            <p className="text-gray-300 mb-4">
              Интеграция сервисов и SDK, совместная разработка модулей и API.
            </p>
            <Link href="#contact" className="text-[#9ADE20] hover:underline">
              Узнать подробнее →
            </Link>
          </div>
        </div>
      </section>

      <section className="py-10 bg-[#031827] rounded-2xl mx-2.5 mt-2.5">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">
            Готовы обсудить партнёрство?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Оставьте заявку — мы подготовим предложение и свяжемся в удобное для
            вас время.
          </p>
          <Link
            href="/contacts"
            className="px-6 py-3 rounded-xl bg-[#9ADE20] hover:bg-green-600 font-semibold"
          >
            Связаться
          </Link>
        </div>
      </section>
    </>
  );
}
