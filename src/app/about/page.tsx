"use client";

import { motion } from "framer-motion";

export default function AboutUs() {
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
              Про нас
            </motion.h1>
            <p className="text-lg text-gray-300 mb-8">
              <strong>Optivium</strong> — це консалтингова компанія, що
              спеціалізується на рішеннях у сфері міжнародного рекрутингу. Ми
              допомагаємо бізнесу ефективно формувати команди, знаходити
              кваліфікованих спеціалістів та оптимізувати процеси підбору
              персоналу на глобальному рівні.
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
        </div>
      </section>

      {/* Місія і цінності */}
      <section className="grid md:grid-cols-2 gap-8 py-12 container">
        <div className="bg-[#031827] shadow-lg rounded-2xl p-6">
          <h2 className="text-2xl font-semibold mb-4 text-[#9ADE20]">
            Наша місія
          </h2>
          <p className="content text-gray-300 opacity-100">
            Допомагати бізнесу та суспільству розвиватися через сучасні рішення,
            що поєднують рекрутинг, консалтинг і аналітику. Ми робимо компанії
            сильнішими завдяки людям.
          </p>
        </div>
        <div className="bg-[#031827] shadow-lg rounded-2xl p-6">
          <h2 className="text-2xl font-semibold mb-4 text-[#9ADE20]">
            Наші цінності
          </h2>
          <ul className="list">
            <li>Інноваційність</li>
            <li>Відповідальність</li>
            <li>Командна робота</li>
            <li>Довіра та прозорість</li>
            <li>Фокус на результат</li>
          </ul>
        </div>
      </section>

      {/* Що ми надаємо */}
      <section className="py-10 bg-[#031827] rounded-3xl mx-2.5 text-center">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8 text-[#9ADE20]">
            Що ми надаємо:
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 text-gray-300">
            <div className="bg-[#052034] rounded-xl p-5 shadow-sm">
              <strong>Консультації з міжнародного рекрутингу</strong> –
              стратегічні поради щодо виходу на іноземні ринки праці.
            </div>
            <div className="bg-[#052034] rounded-xl p-5 shadow-sm">
              <strong>Підбір кадрів під ключ</strong> – пошук і відбір
              спеціалістів відповідно до потреб компанії.
            </div>
            <div className="bg-[#052034] rounded-xl p-5 shadow-sm">
              <strong>Аналіз та оптимізація процесів</strong> – допомога у
              створенні ефективних систем управління персоналом.
            </div>
            <div className="bg-[#052034] rounded-xl p-5 shadow-sm col-start-2">
              <strong>Супровід роботодавців і кандидатів</strong> – від
              консультування до юридичної підтримки.
            </div>
          </div>
        </div>
      </section>

      {/* Наші напрямки і особливості */}
      <section className="grid md:grid-cols-3 gap-8 py-12 container">
        <div className="bg-[#031827] shadow-lg rounded-2xl p-6">
          <h2 className="text-2xl font-semibold mb-4 text-[#9ADE20]">
            Наші напрямки
          </h2>
          <ul className="list">
            <li>Бізнес-консалтинг та визначення точок росту.</li>
            <li>Розробка та впровадження стратегій розвитку.</li>
            <li>Оптимізація процесів та організаційної структури.</li>
            <li>Системи мотивації й утримання команди.</li>
          </ul>
        </div>
        <div className="bg-[#031827] shadow-lg rounded-2xl p-6">
          <h2 className="text-2xl font-semibold mb-4 text-[#9ADE20]">
            Наші особливості:
          </h2>
          <ul className="list">
            <li>Глибока експертиза у сфері міжнародного працевлаштування.</li>
            <li>
              Індивідуальний підхід до кожного клієнта та його бізнес-моделі.
            </li>
            <li>
              Комплексне бачення: ми поєднуємо консалтинг, рекрутинг та
              HR-аналітику.
            </li>
            <li>
              Орієнтація на довгострокові результати, а не лише на швидке
              закриття вакансій.
            </li>
          </ul>
        </div>
        <div className="bg-[#031827] shadow-lg rounded-2xl p-6">
          <h2 className="text-2xl font-semibold mb-4 text-[#9ADE20]">
            Чому ми
          </h2>
          <ul className="list">
            <li>Практичні інструменти та методи, які справді працюють.</li>
            <li>Індивідуальний підхід до кожного клієнта.</li>
            <li>Прозорість та гнучкість у співпраці.</li>
            <li>Орієнтація на результат і довгострокове зростання бізнесу.</li>
          </ul>
        </div>
      </section>

      <section className="py-10 bg-[#031827] rounded-3xl mx-2.5 text-center">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8 text-[#9ADE20]">
            Конкурентні переваги Optivium:
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 text-gray-300">
            <div className="bg-[#052034] rounded-xl p-5 shadow-sm">
              <strong>Міжнародна мережа партнерів</strong> – ми співпрацюємо з
              компаніями та агентствами по всій Європі та Азії.
            </div>
            <div className="bg-[#052034] rounded-xl p-5 shadow-sm">
              <strong>Прозорість та надійність</strong> – чіткі процеси,
              зрозумілі умови та максимальна відкритість.
            </div>
            <div className="bg-[#052034] rounded-xl p-5 shadow-sm">
              <strong>Гнучкі рішення</strong> – адаптуємо стратегії під
              конкретні потреби клієнта.
            </div>
            <div className="bg-[#052034] rounded-xl p-5 shadow-sm col-start-2">
              <strong>Фокус на результат</strong> – для нас важливо, щоб ваш
              бізнес отримав правильних людей у правильний час.
            </div>
          </div>
        </div>
      </section>

      {/* <section className="container py-16 text-center">
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
      </section> */}

      <section className="container py-12 grid md:grid-cols-2 gap-8 items-center">
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
