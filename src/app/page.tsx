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

export default function Home() {
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
              Добро пожаловать в Optivium
            </motion.h1>
            <p className="text-lg text-gray-300 mb-8">
              Инновации, технологии и партнёрство для будущего.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link
                href="/services"
                className="px-6 py-3 rounded-xl bg-[#9ADE20] hover:bg-green-600 font-semibold text-center"
              >
                Наши услуги
              </Link>
              <Link
                href="/contacts"
                className="px-6 py-3 rounded-xl border border-[#9ADE20] hover:bg-green-900 font-semibold text-center"
              >
                Связаться
              </Link>
            </div>
          </div>
          <motion.img
            src="/assets/images/main.png"
            alt="Hero Illustration"
            className="rounded-2xl shadow-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            draggable={false}
          />
        </div>
      </section>

      <section className="container py-10 text-center">
        <h2 className="text-3xl font-bold mb-12">Наши особенности</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { title: "Инновации", text: "Мы внедряем современные технологии" },
            { title: "Надёжность", text: "Стабильные решения для бизнеса" },
            { title: "Гибкость", text: "Подстраиваемся под клиента" },
            { title: "Международность", text: "Работаем по всему миру" },
          ].map((item, i) => (
            <div key={i} className="bg-[#031827] rounded-2xl p-6 shadow-md">
              <h3 className="font-semibold text-xl mb-2 text-[#9ADE20]">
                {item.title}
              </h3>
              <p className="text-gray-300 text-sm">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-10 bg-[#031827] rounded-3xl mx-2.5">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Наши преимущества
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              "Опытная команда специалистов",
              "Поддержка 24/7",
              "Индивидуальный подход",
              "Современные технологии",
              "Долгосрочное сотрудничество",
              "Высокая надёжность",
            ].map((text, i) => (
              <div key={i} className="bg-[#061422] rounded-2xl p-6 shadow-md">
                <p className="text-gray-300">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container py-10 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-6 text-[#9ADE20]">Услуги</h2>
          <p className="text-gray-300 mb-6">
            Мы предлагаем широкий спектр решений, которые помогают бизнесу расти
            и адаптироваться к новым вызовам.
          </p>
          <Link href="/services" className="text-[#9ADE20] hover:underline">
            Подробнее →
          </Link>
        </div>
        <img
          src="/assets/images/services_1.png"
          alt="Services"
          className="rounded-2xl shadow-lg"
          draggable={false}
        />
      </section>

      <section className="py-10 bg-[#031827] rounded-3xl mx-2.5">
        <div className="container grid md:grid-cols-2 gap-12 items-center">
          <img
            src="/assets/images/cooperation_1.png"
            alt="Cooperation"
            className="rounded-2xl shadow-lg order-2 md:order-1"
            draggable={false}
          />
          <div className="order-1 md:order-2">
            <h2 className="text-3xl font-bold mb-6 text-[#9ADE20]">
              Сотрудничество
            </h2>
            <p className="text-gray-300 mb-6">
              Мы открыты для долгосрочных партнёрских отношений и совместных
              проектов с компаниями по всему миру.
            </p>
            <Link
              href="/cooperation"
              className="text-[#9ADE20] hover:underline"
            >
              Подробнее →
            </Link>
          </div>
        </div>
      </section>

      <section className="py-10 grid md:grid-cols-2 gap-12 items-center container">
        <div>
          <h2 className="text-3xl font-bold mb-6 text-[#9ADE20]">Про нас</h2>
          <p className="text-gray-300 mb-6">
            Наша миссия — внедрять инновации, помогать бизнесу и создавать
            ценность для общества.
          </p>
          <Link href="/about" className="text-[#9ADE20] hover:underline">
            Подробнее →
          </Link>
        </div>
        <img
          src="/assets/images/aboutus_1.png"
          alt="About Us"
          className="rounded-2xl shadow-lg"
          draggable={false}
        />
      </section>

      <section className="py-10 bg-[#031827] rounded-3xl mx-2.5">
        <div className="container grid md:grid-cols-2 gap-12 items-center">
          <img
            src="/assets/images/contacts.png"
            alt="Contacts"
            className="rounded-2xl shadow-lg order-2 md:order-1"
            draggable={false}
          />
          <div className="order-1 md:order-2">
            <h2 className="text-3xl font-bold mb-6 text-[#9ADE20]">Контакты</h2>
            <p className="text-gray-300 mb-6">
              Свяжитесь с нами для консультации, сотрудничества или получения
              дополнительной информации.
            </p>
            <Link href="/contacts" className="text-[#9ADE20] hover:underline">
              Подробнее →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
