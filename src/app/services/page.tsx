"use client";

import { motion } from "framer-motion";

export default function ServicesPage() {
  return (
    <>
      <section className="py-10 bg-[#031827] rounded-br-3xl rounded-bl-3xl mx-2.5">
        <div className="container py-10 grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-6xl font-bold mb-6"
            >
              Наши услуги
            </motion.h1>
            <p className="text-lg text-gray-300 mb-8">
              Мы предлагаем широкий спектр IT-решений, которые помогают бизнесу
              адаптироваться, развиваться и достигать новых высот.
            </p>
          </div>
          <motion.img
            src="https://images.unsplash.com/photo-1556761175-129418cb2dfe"
            alt="Services Hero"
            className="rounded-2xl shadow-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          />
        </div>
      </section>

      <section className="container py-16 text-center">
        <h2 className="text-3xl font-bold mb-12">Что мы предлагаем</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[
            {
              title: "Веб-разработка",
              text: "Создание современных и адаптивных сайтов",
            },
            {
              title: "Мобильные приложения",
              text: "iOS и Android решения для вашего бизнеса",
            },
            { title: "UI/UX дизайн", text: "Удобные и стильные интерфейсы" },
            {
              title: "Аналитика и Big Data",
              text: "Принятие решений на основе данных",
            },
            {
              title: "Кибербезопасность",
              text: "Защита данных и инфраструктуры",
            },
            {
              title: "Облачные решения",
              text: "Гибкость и масштабируемость для вашего бизнеса",
            },
          ].map((service, i) => (
            <div key={i} className="bg-[#031827] rounded-2xl p-6 shadow-md">
              <h3 className="font-semibold text-xl mb-2 text-green-400">
                {service.title}
              </h3>
              <p className="text-gray-300 text-sm">{service.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container py-10 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-6 text-green-400">
            Веб-разработка
          </h2>
          <p className="text-gray-300 mb-6">
            Мы разрабатываем современные сайты, которые помогают бизнесу
            выделяться и достигать целей в цифровом пространстве.
          </p>
        </div>
        <img
          src="https://images.unsplash.com/photo-1529101091764-c3526daf38fe"
          alt="Web Development"
          className="rounded-2xl shadow-lg"
        />
      </section>

      <section className="py-10 bg-[#031827] rounded-3xl mx-2.5">
        <div className="container grid md:grid-cols-2 gap-12 items-center">
          <img
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
            alt="Mobile Apps"
            className="rounded-2xl shadow-lg order-2 md:order-1"
          />
          <div className="order-1 md:order-2">
            <h2 className="text-3xl font-bold mb-6 text-green-400">
              Мобильные приложения
            </h2>
            <p className="text-gray-300 mb-6">
              Наши приложения для iOS и Android создаются с фокусом на удобство,
              производительность и масштабируемость.
            </p>
          </div>
        </div>
      </section>

      <section className="container py-24 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-6 text-green-400">
            UI/UX дизайн
          </h2>
          <p className="text-gray-300 mb-6">
            Мы проектируем интерфейсы, которые не только красивы, но и понятны,
            удобны и эффективны для пользователей.
          </p>
        </div>
        <img
          src="https://images.unsplash.com/photo-1605379399642-870262d3d051"
          alt="UI/UX Design"
          className="rounded-2xl shadow-lg"
        />
      </section>

      <section className="py-10 bg-[#031827] rounded-3xl mx-2.5 text-center">
        <div className="container">
          <h2 className="text-3xl font-bold mb-6">Хотите обсудить проект?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Свяжитесь с нами, и мы подберём для вас лучшее решение, которое
            поможет вашему бизнесу расти и развиваться.
          </p>
          <a
            href="#contacts"
            className="px-6 py-3 rounded-xl bg-green-500 hover:bg-green-600 font-semibold"
          >
            Связаться
          </a>
        </div>
      </section>
    </>
  );
}
