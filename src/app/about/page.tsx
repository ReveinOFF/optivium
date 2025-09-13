"use client";

import { motion } from "framer-motion";

export default function AboutUsPage() {
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
            Про нас
          </motion.h1>
          <p className="text-lg text-gray-300 mb-8">
            Мы создаём решения для бизнеса и общества, объединяя инновации,
            технологии и команду профессионалов.
          </p>
        </div>
        <motion.img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
          alt="About Hero"
          className="rounded-2xl shadow-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        />
      </section>

      <section className="grid md:grid-cols-2 gap-8 px-6 md:px-16 py-12">
        <div className="bg-[#031827] shadow-lg rounded-2xl p-6">
          <h2 className="text-2xl font-semibold mb-4 text-green-400">
            Наша місія
          </h2>
          <p className="content">
            Допомагати бізнесу та суспільству розвиватися за допомогою сучасних
            технологій і рішень, що роблять світ кращим.
          </p>
        </div>
        <div className="bg-[#031827] shadow-lg rounded-2xl p-6">
          <h2 className="text-2xl font-semibold mb-4 text-green-400">
            Наші цінності
          </h2>
          <ul className="list-disc list-inside content space-y-2">
            <li>Інноваційність</li>
            <li>Відповідальність</li>
            <li>Командна робота</li>
            <li>Довіра та прозорість</li>
          </ul>
        </div>
      </section>

      <section className="px-6 md:px-16 py-16 text-center">
        <h2 className="text-3xl font-bold mb-12">Наша команда</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="bg-[#031827] shadow-md rounded-2xl p-6 flex flex-col items-center"
            >
              <div className="w-24 h-24 rounded-full bg-gray-600 mb-4" />
              <h3 className="font-semibold text-lg">Member {i}</h3>
              <p className="text-gray-400 text-sm">Position</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 md:px-16 py-12 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-6">Наш офіс</h2>
          <p className="content leading-relaxed">
            Головний офіс розташований у сучасному бізнес-центрі, що символізує
            відкритість, інновації та комфорт для співробітників та партнерів.
          </p>
        </div>
        <motion.img
          src="https://images.unsplash.com/photo-1501594907352-04cda38ebc29"
          alt="Office"
          className="rounded-2xl shadow-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        />
      </section>
    </>
  );
}
