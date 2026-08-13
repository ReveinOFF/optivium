"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function HomeClient() {
  const t = useTranslations("Main");

  return (
    <>
      <section className="py-16 md:py-20 bg-[#031827] rounded-br-[3rem] rounded-bl-[3rem] mx-2.5 shadow-xl relative overflow-hidden">
        <div className="container px-4 grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <div className="text-center md:text-left">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 tracking-tight text-white leading-tight"
            >
              {t("hero_title")}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl mx-auto md:mx-0 leading-relaxed"
            >
              {t("hero_subtitle")}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            >
              <Link
                href="/services"
                className="px-8 py-3.5 rounded-full bg-[#9ADE20] text-[#000F1B] hover:bg-[#A9E340] active:scale-95 font-bold text-center transition-all duration-300 shadow-lg hover:shadow-[#9ADE20]/20"
              >
                {t("hero_button_services")}
              </Link>

              <Link
                href="/contacts"
                className="px-8 py-3.5 rounded-full border-2 border-[#9ADE20] text-white hover:bg-[#9ADE20]/10 hover:border-[#A9E340] active:scale-95 font-semibold text-center transition-all duration-300"
              >
                {t("hero_button_contact")}
              </Link>
            </motion.div>
          </div>

          <motion.img
            src="/assets/images/main.jpg"
            alt="Hero Illustration"
            className="rounded-3xl shadow-2xl border-4 border-[#052034]/60 object-cover w-full h-[380px] md:h-[420px]"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            draggable={false}
          />
        </div>
      </section>

      <section className="container px-4 py-16 text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-12 text-white tracking-tight">
          {t("features_section_title")}
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              titleKey: "feature_innovation_title",
              textKey: "feature_innovation_text",
            },
            {
              titleKey: "feature_reliability_title",
              textKey: "feature_reliability_text",
            },
            {
              titleKey: "feature_flexibility_title",
              textKey: "feature_flexibility_text",
            },
            {
              titleKey: "feature_international_title",
              textKey: "feature_international_text",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-[#031827] border border-[#052034] hover:border-l-4 hover:border-l-[#9ADE20] hover:border-[#052034] rounded-2xl p-6 shadow-xl transition-all duration-300 hover:-translate-y-1.5 text-left flex flex-col justify-between"
            >
              <div>
                <h3 className="font-bold text-xl mb-3 text-[#9ADE20]">
                  {t(item.titleKey)}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {t(item.textKey)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-[#031827] rounded-3xl mx-2.5 shadow-xl border border-[#052034]">
        <div className="container px-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-12 text-center text-white tracking-tight">
            {t("advantages_section_title")}
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "advantage_team",
              "advantage_support",
              "advantage_custom",
              "advantage_technology",
              "advantage_longterm",
              "advantage_reliability",
            ].map((key, index) => (
              <div
                key={key}
                className="bg-[#052034]/70 border border-[#0A2E4A] hover:border-[#9ADE20]/40 rounded-2xl p-6 shadow-md transition-all duration-300 flex items-start space-x-4 hover:-translate-y-1"
              >
                <div className="w-8 h-8 rounded-full bg-[#9ADE20]/10 text-[#9ADE20] flex items-center justify-center font-bold text-sm flex-shrink-0 -mt-1 border border-[#9ADE20]/20">
                  {index + 1}
                </div>
                <p className="text-gray-200 text-sm md:text-base leading-relaxed font-medium">
                  {t(key)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container py-10 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-6 text-[#9ADE20]">
            {t("services_section_title")}
          </h2>
          <p className="text-gray-300 mb-6">{t("services_section_text")}</p>
          <Link href="/services" className="text-[#9ADE20] hover:underline">
            {t("services_section_link")}
          </Link>
        </div>
        <img
          src="/assets/images/services_1.jpg"
          alt="Services"
          className="rounded-2xl shadow-lg"
          draggable={false}
        />
      </section>

      <section className="py-10 bg-[#031827] rounded-3xl mx-2.5">
        <div className="container grid md:grid-cols-2 gap-12 items-center">
          <img
            src="/assets/images/cooperation_1.jpg"
            alt="Cooperation"
            className="rounded-2xl shadow-lg order-2 md:order-1"
            draggable={false}
          />
          <div className="order-1 md:order-2">
            <h2 className="text-3xl font-bold mb-6 text-[#9ADE20]">
              {t("cooperation_section_title")}
            </h2>
            <p className="text-gray-300 mb-6">
              {t("cooperation_section_text")}
            </p>
            <Link
              href="/cooperation"
              className="text-[#9ADE20] hover:underline"
            >
              {t("cooperation_section_link")}
            </Link>
          </div>
        </div>
      </section>

      <section className="py-10 grid md:grid-cols-2 gap-12 items-center container">
        <div>
          <h2 className="text-3xl font-bold mb-6 text-[#9ADE20]">
            {t("about_section_title")}
          </h2>
          <p className="text-gray-300 mb-6">{t("about_section_text")}</p>
          <Link href="/about" className="text-[#9ADE20] hover:underline">
            {t("about_section_link")}
          </Link>
        </div>
        <img
          src="/assets/images/aboutus_1.jpg"
          alt="About Us"
          className="rounded-2xl shadow-lg"
          draggable={false}
        />
      </section>

      <section className="py-10 bg-[#031827] rounded-3xl mx-2.5">
        <div className="container grid md:grid-cols-2 gap-12 items-center">
          <img
            src="/assets/images/contacts.jpg"
            alt="Contacts"
            className="rounded-2xl shadow-lg order-2 md:order-1"
            draggable={false}
          />
          <div className="order-1 md:order-2">
            <h2 className="text-3xl font-bold mb-6 text-[#9ADE20]">
              {t("contacts_section_title")}
            </h2>
            <p className="text-gray-300 mb-6">{t("contacts_section_text")}</p>
            <Link href="/contacts" className="text-[#9ADE20] hover:underline">
              {t("contacts_section_link")}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
