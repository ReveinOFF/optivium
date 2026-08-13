"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function AboutUsClient() {
  const t = useTranslations("AboutUs");

  return (
    <>
      <section className="py-16 md:py-20 bg-[#031827] rounded-br-[3rem] rounded-bl-[3rem] mx-2.5 shadow-xl relative overflow-hidden">
        <div className="container px-4 grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 tracking-tight"
            >
              {t("about_us_1")}
            </motion.h1>
            <p className="text-lg text-gray-300 leading-relaxed max-w-xl mx-auto lg:mx-0">
              {t("about_us_2")}
            </p>
          </div>
          <motion.img
            src="/assets/images/aboutus_1.jpg"
            alt={t("about_us_1")}
            className="rounded-3xl shadow-2xl border-4 border-[#052034]/60 object-cover w-full h-[320px] md:h-[400px]"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            draggable={false}
          />
        </div>
      </section>

      {/* Місія і цінності */}
      <section className="container px-4 py-16 grid md:grid-cols-2 gap-8">
        <div className="bg-[#031827] border border-[#052034] shadow-xl rounded-3xl p-8 flex flex-col justify-between hover:border-[#9ADE20]/30 transition-all">
          <div>
            <h2 className="text-2xl font-bold mb-4 text-[#9ADE20]">
              {t("mission_1")}
            </h2>
            <p className="text-gray-300 leading-relaxed text-base">
              {t("mission_2")}
            </p>
          </div>
        </div>

        <div className="bg-[#031827] border border-[#052034] shadow-xl rounded-3xl p-8 hover:border-[#9ADE20]/30 transition-all">
          <h2 className="text-2xl font-bold mb-6 text-[#9ADE20]">
            {t("values_1")}
          </h2>
          <ul className="space-y-3">
            {["values_2", "values_3", "values_4", "values_5", "values_6"].map(
              (key) => (
                <li key={key} className="flex items-center text-gray-200">
                  <span className="w-2 h-2 rounded-full bg-[#9ADE20] mr-3 flex-shrink-0" />
                  <span>{t(key)}</span>
                </li>
              ),
            )}
          </ul>
        </div>
      </section>

      {/* Що ми надаємо */}
      <section className="py-16 bg-[#031827] rounded-3xl mx-2.5 shadow-lg">
        <div className="container px-4 text-center">
          <h2 className="text-3xl font-extrabold mb-10 text-[#9ADE20]">
            {t("services_1")}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {["services_2", "services_3", "services_4", "services_5"].map(
              (key) => (
                <div
                  key={key}
                  className="bg-[#052034] border border-transparent hover:border-[#9ADE20]/40 rounded-2xl p-6 shadow-md transition-all duration-300 flex items-center justify-center text-center"
                >
                  <p className="text-gray-200 font-semibold leading-snug">
                    {t(key)}
                  </p>
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      {/* Наші напрямки і особливості */}
      <section className="container px-4 py-16 grid md:grid-cols-3 gap-8">
        <div className="bg-[#031827] border border-[#052034] shadow-xl rounded-3xl p-8 flex flex-col hover:border-[#9ADE20]/30 transition-all">
          <h2 className="text-2xl font-bold mb-6 text-[#9ADE20]">
            {t("directions_1")}
          </h2>
          <ul className="space-y-3.5">
            {[
              "directions_2",
              "directions_3",
              "directions_4",
              "directions_5",
            ].map((key) => (
              <li key={key} className="flex items-start text-gray-300 text-sm">
                <span className="text-[#9ADE20] font-bold mr-2.5 mt-0.5">
                  →
                </span>
                <span>{t(key)}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-[#031827] border border-[#052034] shadow-xl rounded-3xl p-8 flex flex-col hover:border-[#9ADE20]/30 transition-all">
          <h2 className="text-2xl font-bold mb-6 text-[#9ADE20]">
            {t("features_1")}
          </h2>
          <ul className="space-y-3.5">
            {["features_2", "features_3", "features_4", "features_5"].map(
              (key) => (
                <li
                  key={key}
                  className="flex items-start text-gray-300 text-sm"
                >
                  <span className="text-[#9ADE20] font-bold mr-2.5 mt-0.5">
                    ✓
                  </span>
                  <span>{t(key)}</span>
                </li>
              ),
            )}
          </ul>
        </div>

        <div className="bg-[#031827] border border-[#052034] shadow-xl rounded-3xl p-8 flex flex-col hover:border-[#9ADE20]/30 transition-all">
          <h2 className="text-2xl font-bold mb-6 text-[#9ADE20]">
            {t("why_us_1")}
          </h2>
          <ul className="space-y-3.5">
            {["why_us_2", "why_us_3", "why_us_4", "why_us_5"].map((key) => (
              <li key={key} className="flex items-start text-gray-300 text-sm">
                <span className="text-[#9ADE20] font-bold mr-2.5 mt-0.5">
                  ★
                </span>
                <span>{t(key)}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-16 bg-[#031827] rounded-3xl mx-2.5 shadow-lg text-center">
        <div className="container px-4">
          <h2 className="text-3xl font-extrabold mb-10 text-[#9ADE20]">
            {t("advantages_1")}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {[
              "advantages_2",
              "advantages_3",
              "advantages_4",
              "advantages_5",
            ].map((key) => (
              <div
                key={key}
                className="bg-[#052034] border border-transparent hover:border-[#9ADE20]/40 rounded-2xl p-6 shadow-md transition-all duration-300 flex items-center justify-center text-center"
              >
                <p className="text-gray-200 font-semibold leading-relaxed">
                  {t(key)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
