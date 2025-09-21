"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function AboutUsClient() {
  const t = useTranslations("AboutUs");

  return (
    <>
      <section className="py-10 bg-[#031827] rounded-br-3xl rounded-bl-3xl mx-2.5">
        <div className="container py-10 grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-6xl font-bold mb-6"
            >
              {t("about_us_1")}
            </motion.h1>
            <p className="text-lg text-gray-300 mb-8">{t("about_us_2")}</p>
          </div>
          <motion.img
            src="/assets/images/aboutus_1.png"
            alt={t("about_us_1")}
            className="rounded-2xl shadow-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            draggable={false}
          />
        </div>
      </section>

      {/* Місія і цінності */}
      <section className="grid md:grid-cols-2 gap-2.5 py-12 container">
        <div className="bg-[#031827] shadow-lg rounded-2xl p-6">
          <h2 className="text-2xl font-semibold mb-4 text-[#9ADE20]">
            {t("mission_1")}
          </h2>
          <p className="content text-gray-300 opacity-100">{t("mission_2")}</p>
        </div>
        <div className="bg-[#031827] shadow-lg rounded-2xl p-6">
          <h2 className="text-2xl font-semibold mb-4 text-[#9ADE20]">
            {t("values_1")}
          </h2>
          <ul className="list">
            <li>{t("values_2")}</li>
            <li>{t("values_3")}</li>
            <li>{t("values_4")}</li>
            <li>{t("values_5")}</li>
            <li>{t("values_6")}</li>
          </ul>
        </div>
      </section>

      {/* Що ми надаємо */}
      <section className="py-10 bg-[#031827] rounded-3xl mx-2.5 text-center">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8 text-[#9ADE20]">
            {t("services_1")}
          </h2>
          <div className="grid max-sm:grid-rows-4 max-sm:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5 text-gray-300">
            <div className="bg-[#052034] rounded-xl p-5 shadow-sm">
              <strong>{t("services_2")}</strong>
            </div>
            <div className="bg-[#052034] rounded-xl p-5 shadow-sm">
              <strong>{t("services_3")}</strong>
            </div>
            <div className="bg-[#052034] rounded-xl p-5 shadow-sm">
              <strong>{t("services_4")}</strong>
            </div>
            <div className="bg-[#052034] rounded-xl p-5 shadow-sm md:col-start-2">
              <strong>{t("services_5")}</strong>
            </div>
          </div>
        </div>
      </section>

      {/* Наші напрямки і особливості */}
      <section className="grid md:grid-cols-3 gap-2.5 py-12 container">
        <div className="bg-[#031827] shadow-lg rounded-2xl p-6">
          <h2 className="text-2xl font-semibold mb-4 text-[#9ADE20]">
            {t("directions_1")}
          </h2>
          <ul className="list">
            <li>{t("directions_2")}</li>
            <li>{t("directions_3")}</li>
            <li>{t("directions_4")}</li>
            <li>{t("directions_5")}</li>
          </ul>
        </div>
        <div className="bg-[#031827] shadow-lg rounded-2xl p-6">
          <h2 className="text-2xl font-semibold mb-4 text-[#9ADE20]">
            {t("features_1")}
          </h2>
          <ul className="list">
            <li>{t("features_2")}</li>
            <li>{t("features_3")}</li>
            <li>{t("features_4")}</li>
            <li>{t("features_5")}</li>
          </ul>
        </div>
        <div className="bg-[#031827] shadow-lg rounded-2xl p-6">
          <h2 className="text-2xl font-semibold mb-4 text-[#9ADE20]">
            {t("why_us_1")}
          </h2>
          <ul className="list">
            <li>{t("why_us_2")}</li>
            <li>{t("why_us_3")}</li>
            <li>{t("why_us_4")}</li>
            <li>{t("why_us_5")}</li>
          </ul>
        </div>
      </section>

      <section className="py-10 bg-[#031827] rounded-3xl mx-2.5 text-center">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8 text-[#9ADE20]">
            {t("advantages_1")}
          </h2>
          <div className="grid max-sm:grid-cols-1 max-sm:grid-rows-4 sm:grid-cols-2 md:grid-cols-3 gap-2.5 text-gray-300">
            <div className="bg-[#052034] rounded-xl p-5 shadow-sm">
              <strong>{t("advantages_2")}</strong>
            </div>
            <div className="bg-[#052034] rounded-xl p-5 shadow-sm">
              <strong>{t("advantages_3")}</strong>
            </div>
            <div className="bg-[#052034] rounded-xl p-5 shadow-sm">
              <strong>{t("advantages_4")}</strong>
            </div>
            <div className="bg-[#052034] rounded-xl p-5 shadow-sm md:col-start-2">
              <strong>{t("advantages_5")}</strong>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
