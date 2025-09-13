"use client";

import { motion } from "framer-motion";

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
      <section className="bg-[#031827] rounded-br-3xl rounded-bl-3xl mx-2.5 h-7"></section>

      <section className="px-6 md:px-16 py-24 grid md:grid-cols-2 gap-12 items-center">
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
            <a
              href="#services"
              className="px-6 py-3 rounded-xl bg-green-500 hover:bg-green-600 font-semibold text-center"
            >
              Наши услуги
            </a>
            <a
              href="#contacts"
              className="px-6 py-3 rounded-xl border border-green-400 hover:bg-green-900 font-semibold text-center"
            >
              Связаться
            </a>
          </div>
        </div>
        <motion.img
          src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d"
          alt="Hero Illustration"
          className="rounded-2xl shadow-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        />
      </section>

      <section className="px-6 md:px-16 py-16 text-center">
        <h2 className="text-3xl font-bold mb-12">Наши особенности</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { title: "Инновации", text: "Мы внедряем современные технологии" },
            { title: "Надёжность", text: "Стабильные решения для бизнеса" },
            { title: "Гибкость", text: "Подстраиваемся под клиента" },
            { title: "Международность", text: "Работаем по всему миру" },
          ].map((item, i) => (
            <div key={i} className="bg-[#031827] rounded-2xl p-6 shadow-md">
              <h3 className="font-semibold text-xl mb-2 text-green-400">
                {item.title}
              </h3>
              <p className="text-gray-300 text-sm">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 md:px-16 py-16 bg-[#031827] text-center rounded-2xl mx-6 md:mx-16">
        <h2 className="text-3xl font-bold mb-12">Наши преимущества</h2>
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
      </section>

      <section
        id="services"
        className="px-6 md:px-16 py-24 grid md:grid-cols-2 gap-12 items-center"
      >
        <div>
          <h2 className="text-3xl font-bold mb-6 text-green-400">Услуги</h2>
          <p className="text-gray-300 mb-6">
            Мы предлагаем широкий спектр IT-решений, которые помогают бизнесу
            расти и адаптироваться к новым вызовам.
          </p>
          <a href="#services-page" className="text-green-400 hover:underline">
            Подробнее →
          </a>
        </div>
        <img
          src="https://images.unsplash.com/photo-1556761175-129418cb2dfe"
          alt="Services"
          className="rounded-2xl shadow-lg"
        />
      </section>

      <section
        id="cooperation"
        className="px-6 md:px-16 py-24 grid md:grid-cols-2 gap-12 items-center bg-[#0b2238]"
      >
        <img
          src="https://images.unsplash.com/photo-1521791136064-7986c2920216"
          alt="Cooperation"
          className="rounded-2xl shadow-lg order-2 md:order-1"
        />
        <div className="order-1 md:order-2">
          <h2 className="text-3xl font-bold mb-6 text-green-400">
            Сотрудничество
          </h2>
          <p className="text-gray-300 mb-6">
            Мы открыты для долгосрочных партнёрских отношений и совместных
            проектов с компаниями по всему миру.
          </p>
          <a
            href="#cooperation-page"
            className="text-green-400 hover:underline"
          >
            Подробнее →
          </a>
        </div>
      </section>

      <section
        id="about"
        className="px-6 md:px-16 py-24 grid md:grid-cols-2 gap-12 items-center"
      >
        <div>
          <h2 className="text-3xl font-bold mb-6 text-green-400">Про нас</h2>
          <p className="text-gray-300 mb-6">
            Наша миссия — внедрять инновации, помогать бизнесу и создавать
            ценность для общества.
          </p>
          <a href="#about-page" className="text-green-400 hover:underline">
            Подробнее →
          </a>
        </div>
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
          alt="About Us"
          className="rounded-2xl shadow-lg"
        />
      </section>

      <section
        id="contacts"
        className="px-6 md:px-16 py-24 grid md:grid-cols-2 gap-12 items-center bg-[#0b2238]"
      >
        <img
          src="https://images.unsplash.com/photo-1525182008055-f88b95ff7980"
          alt="Contacts"
          className="rounded-2xl shadow-lg order-2 md:order-1"
        />
        <div className="order-1 md:order-2">
          <h2 className="text-3xl font-bold mb-6 text-green-400">Контакты</h2>
          <p className="text-gray-300 mb-6">
            Свяжитесь с нами для консультации, сотрудничества или получения
            дополнительной информации.
          </p>
          <a href="#contacts-page" className="text-green-400 hover:underline">
            Подробнее →
          </a>
        </div>
      </section>
    </>
  );
}
