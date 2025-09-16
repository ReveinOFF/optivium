"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Services() {
  return (
    <>
      {/* Hero */}
      <section className="py-10 bg-[#031827] rounded-br-3xl rounded-bl-3xl mx-2.5">
        <div className="container py-10 grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-6xl font-bold mb-6"
            >
              Наші послуги
            </motion.h1>
            <p className="text-lg text-gray-300 mb-8">
              Рекрутинг, продажі, фінанси, інвестиції та аналітика – комплексні
              рішення для вашого бізнесу.
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

      {/* Наші послуги */}
      <section className="container py-16 text-center">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 text-gray-300">
          <div className="bg-[#031827] rounded-2xl p-6 shadow-md text-sm">
            <strong>Рекрутинг працівників</strong> – від виробничих позицій до
            висококваліфікованих спеціалістів.
          </div>
          <div className="bg-[#031827] rounded-2xl p-6 shadow-md text-sm">
            <strong>Міжнародний рекрутинг</strong> – підбір кандидатів з Азії та
            Африки.
          </div>
          <div className="bg-[#031827] rounded-2xl p-6 shadow-md text-sm">
            <strong>Відбір і перевірка кандидатів</strong> – оцінка компетенцій
            та досвіду.
          </div>
          <div className="bg-[#031827] rounded-2xl p-6 shadow-md text-sm">
            <strong>Легалізація праці іноземців</strong> – повний супровід
            документів.
          </div>
          <div className="bg-[#031827] rounded-2xl p-6 shadow-md text-sm">
            <strong>Онбординг і підтримка адаптації</strong> – допомога у старті
            роботи.
          </div>
          <div className="bg-[#031827] rounded-2xl p-6 shadow-md text-sm">
            <strong>HR- та бізнес-консалтинг</strong> – оптимізація кадрових
            процесів.
          </div>
        </div>
      </section>

      {/* Чому варто співпрацювати */}
      <section className="py-10 bg-[#031827] rounded-3xl mx-2.5 text-center">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8 text-[#9ADE20]">
            Чому варто співпрацювати з нами
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 text-gray-300">
            <div className="bg-[#052034] rounded-xl p-5 shadow-sm">
              <strong>Швидкий підбір</strong> – кандидати у стислі терміни.
            </div>
            <div className="bg-[#052034] rounded-xl p-5 shadow-sm">
              <strong>Перевірені працівники</strong> – оцінка навичок і досвіду.
            </div>
            <div className="bg-[#052034] rounded-xl p-5 shadow-sm">
              <strong>Гнучкість</strong> – тимчасові та довгострокові контракти.
            </div>
            <div className="bg-[#052034] rounded-xl p-5 shadow-sm">
              <strong>Міжнародний досвід</strong> – Польща, Центральна Азія,
              Східна Європа.
            </div>
            <div className="bg-[#052034] rounded-xl p-5 shadow-sm">
              <strong>Економія часу й коштів</strong> – ми беремо процес на
              себе.
            </div>
            <div className="bg-[#052034] rounded-xl p-5 shadow-sm">
              <strong>Комплексний супровід</strong> – від пошуку до
              впровадження.
            </div>
            <div className="bg-[#052034] rounded-xl p-5 shadow-sm col-start-2">
              <strong>Партнерство та довіра</strong> – довгострокова співпраця.
            </div>
          </div>
        </div>
      </section>

      {/* Продажі */}
      <section className="container py-24 grid md:grid-cols-2 gap-12 items-start">
        <div>
          <h2 className="text-3xl font-bold mb-6 text-[#9ADE20]">Продажі</h2>
          <p className="text-gray-300 mb-6">
            Посильте продажі у вашій компанії! Професійна підтримка без ризику.
          </p>
          <ul className="list mb-6 bg-[#031827] rounded-xl p-5 ml-0">
            <li>Зовнішній директор з продажів – без штатного менеджера</li>
            <li>Побудова й розвиток відділу продажів</li>
            <li>Стратегія під ринок і цілі</li>
            <li>CRM, автоматизація, KPI, звітність</li>
            <li>Швидші результати і менші витрати</li>
          </ul>
          <p className="text-gray-300 mb-6">
            Підсилюйте продажі. Без ризику. З професіоналами. Наш комплексний
            продажний супровід – рішення для компаній, що прагнуть рости швидше.
          </p>
          <ul className="list bg-[#031827] rounded-xl p-5 ml-0">
            <li>Зовнішній директор з продажів – досвідчений експерт</li>
            <li>Формування та розвиток команди продажів</li>
            <li>Індивідуальна стратегія продажів</li>
            <li>Сучасні процеси та автоматизація</li>
            <li>Швидкі результати, оптимізація витрат</li>
          </ul>
        </div>
        <img
          src="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
          alt="Sales"
          className="rounded-2xl shadow-lg"
        />
      </section>

      {/* Фінанси */}
      <section className="py-10 bg-[#031827] rounded-3xl mx-2.5">
        <div className="container grid md:grid-cols-2 gap-12 items-start">
          <img
            src="https://images.unsplash.com/photo-1529101091764-c3526daf38fe"
            alt="Finance"
            className="rounded-2xl shadow-lg order-2 md:order-1"
          />
          <div className="order-1 md:order-2 text-gray-300">
            <h2 className="text-3xl font-bold mb-6 text-[#9ADE20]">
              Фінанси та контролінг
            </h2>
            <p className="mb-6">
              Професійна підтримка без дорогого відділу фінансів.
            </p>
            <div className="grid grid-cols-2 gap-2.5">
              <ul className="space-y-2 bg-[#052034] rounded-xl p-5 shadow-sm">
                <li>Фінансовий контролінг</li>
                <li>Бюджетування, прогнозування</li>
                <li>Аналіз рентабельності</li>
                <li>Управлінська звітність</li>
              </ul>
              <ul className="space-y-2 bg-[#052034] rounded-xl p-5 shadow-sm">
                <li>Аутсорсинг CFO</li>
                <li>Консультації керівництва</li>
                <li>Управління ліквідністю</li>
                <li>Інвестпроекти і кредитування</li>
              </ul>
              <ul className="space-y-2 bg-[#052034] rounded-xl p-5 shadow-sm">
                <li>Фінансові аналізи та звіти</li>
                <li>KPI, прибутковість, маржа</li>
              </ul>
              <ul className="space-y-2 bg-[#052034] rounded-xl p-5 shadow-sm">
                <li>Оптимізація процесів</li>
                <li>Автоматизація, ERP, BI</li>
                <li>Аудит і покращення</li>
              </ul>
              <ul className="space-y-2 bg-[#052034] rounded-xl p-5 shadow-sm col-span-2">
                <li>Підтримка при реструктуризації</li>
                <li>Контроль витрат при масштабуванні</li>
                <li>Підготовка до інвестора</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Україна – інвестиції */}
      <section className="container py-24 text-gray-300">
        <h2 className="text-3xl font-bold mb-6 text-center">
          Україна – інвестиції
        </h2>
        <p className="mb-8 max-w-3xl mx-auto text-center">
          Виходите на український ринок? Ми маємо доступ до повних даних:
        </p>
        <ul className="list rounded-2xl bg-gradient-to-r from-[#000F1B] to-[#031827]">
          <li>дані з внутрішніх рахунків-фактур</li>
          <li>експорт та імпорт з України</li>
          <li>статистика B2B та міжгалузевих операцій</li>
          <li>галузеві тренди, сезонність, обсяги, ціни</li>
        </ul>
        <p className="mb-6 text-center">
          На основі цього готуємо стратегічні аналізи з відповідями:
        </p>
        <ul className="list rounded-2xl bg-gradient-to-r from-[#000F1B] to-[#031827]">
          <li>Чи варто виходити на український ринок?</li>
          <li>Який потенціал галузі через 12 місяців?</li>
          <li>Які ризики та як їх мінімізувати?</li>
          <li>Які товари вигідно імпортувати і коли?</li>
        </ul>
        <p className="font-semibold mb-10">
          Готуємо стратегічні звіти на основі даних – не припущень.
        </p>
        <div className="grid md:grid-cols-2 gap-8 text-left">
          <div className="bg-[#031827] p-6 rounded-2xl">
            <h3 className="font-semibold mb-4">Для клієнтів з Польщі та ЄС</h3>
            <ul className="list space-y-2">
              <li>Експорт до України</li>
              <li>Запуск виробництва</li>
              <li>Пошук постачальників</li>
              <li>Аналіз попиту і конкурентів</li>
            </ul>
          </div>
          <div className="bg-[#031827] p-6 rounded-2xl">
            <h3 className="font-semibold mb-4">Для клієнтів з України</h3>
            <ul className="list space-y-2">
              <li>Порівняння з конкурентами</li>
              <li>Нові можливості експорту</li>
              <li>Сегменти з потенціалом росту</li>
              <li>Підвищення маржі та обсягів</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Використання послуги | Слогани */}
      <section className="border-1 border-[#031827] rounded-3xl py-24 mx-2.5">
        <div className="container text-center grid grid-cols-2 gap-3">
          <div className="bg-[#031827] rounded-3xl p-10 grid justify-center">
            <h2 className="text-2xl font-bold mb-6 text-[#9ADE20] text-center">
              Як використати послугу
            </h2>
            <ul className="list text-left">
              <li>Підготуйте case study чи галузевий звіт</li>
              <li>Безкоштовний аудит потенціалу ринку</li>
              <li>Адаптація під галузі: агро, харчова, хімія, e-commerce</li>
              <li>Співпраця з палатами та агенціями</li>
              <li>Аналітика у LinkedIn для довіри</li>
            </ul>
          </div>
          <div className="bg-[#031827] rounded-3xl p-10 grid justify-center">
            <h2 className="text-2xl font-bold mb-6 text-[#9ADE20] text-center">
              Слогани
            </h2>
            <ul className="list text-left">
              <li>Виходь на український ринок зі знанням, а не з ризиком.</li>
              <li>Дані українського ринку. Аналітика, що реально продає.</li>
              <li>Твій GPS української економіки.</li>
              <li>Інвестиційні рішення на основі точних даних.</li>
              <li>Перевіримо ідею до першого мільйона.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Конец */}
      <section className="py-10 bg-[#031827] rounded-3xl mx-2.5 mt-2.5 text-center">
        <div className="container">
          <h2 className="text-3xl font-bold mb-6">Хотите обсудить проект?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Свяжитесь с нами, и мы подберём для вас лучшее решение, которое
            поможет вашему бизнесу расти и развиваться.
          </p>
          <Link
            href="#contacts"
            className="px-6 py-3 rounded-xl bg-[#9ADE20] hover:bg-green-600 font-semibold"
          >
            Связаться
          </Link>
        </div>
      </section>
    </>
  );
}
