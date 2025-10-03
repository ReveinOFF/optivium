"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function HomeClient() {
  const t = useTranslations("Main");

  return (
    <>
      <section className="py-10 bg-[#031827] rounded-br-3xl rounded-bl-3xl mx-2.5">
        <div className="container grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-6xl font-bold mb-6"
            >
              {t("hero_title")}
            </motion.h1>
            <p className="text-lg text-gray-300 mb-8">{t("hero_subtitle")}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link
                href="/services"
                className="px-6 py-3 rounded-xl bg-[#9ADE20] hover:bg-green-600 font-semibold text-center"
              >
                {t("hero_button_services")}
              </Link>
              <Link
                href="/contacts"
                className="px-6 py-3 rounded-xl border border-[#9ADE20] hover:bg-green-900 font-semibold text-center"
              >
                {t("hero_button_contact")}
              </Link>
            </div>
          </div>
          <motion.img
            src="/assets/images/main.jpg"
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
        <h2 className="text-3xl font-bold mb-12">
          {t("features_section_title")}
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-[#031827] rounded-2xl p-6 shadow-md">
            <h3 className="font-semibold text-xl mb-2 text-[#9ADE20]">
              {t("feature_innovation_title")}
            </h3>
            <p className="text-gray-300 text-sm">
              {t("feature_innovation_text")}
            </p>
          </div>
          <div className="bg-[#031827] rounded-2xl p-6 shadow-md">
            <h3 className="font-semibold text-xl mb-2 text-[#9ADE20]">
              {t("feature_reliability_title")}
            </h3>
            <p className="text-gray-300 text-sm">
              {t("feature_reliability_text")}
            </p>
          </div>
          <div className="bg-[#031827] rounded-2xl p-6 shadow-md">
            <h3 className="font-semibold text-xl mb-2 text-[#9ADE20]">
              {t("feature_flexibility_title")}
            </h3>
            <p className="text-gray-300 text-sm">
              {t("feature_flexibility_text")}
            </p>
          </div>
          <div className="bg-[#031827] rounded-2xl p-6 shadow-md">
            <h3 className="font-semibold text-xl mb-2 text-[#9ADE20]">
              {t("feature_international_title")}
            </h3>
            <p className="text-gray-300 text-sm">
              {t("feature_international_text")}
            </p>
          </div>
        </div>
      </section>

      <section className="py-10 bg-[#031827] rounded-3xl mx-2.5">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">
            {t("advantages_section_title")}
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="bg-[#061422] rounded-2xl p-6 shadow-md">
              <p className="text-gray-300">{t("advantage_team")}</p>
            </div>
            <div className="bg-[#061422] rounded-2xl p-6 shadow-md">
              <p className="text-gray-300">{t("advantage_support")}</p>
            </div>
            <div className="bg-[#061422] rounded-2xl p-6 shadow-md">
              <p className="text-gray-300">{t("advantage_custom")}</p>
            </div>
            <div className="bg-[#061422] rounded-2xl p-6 shadow-md">
              <p className="text-gray-300">{t("advantage_technology")}</p>
            </div>
            <div className="bg-[#061422] rounded-2xl p-6 shadow-md">
              <p className="text-gray-300">{t("advantage_longterm")}</p>
            </div>
            <div className="bg-[#061422] rounded-2xl p-6 shadow-md">
              <p className="text-gray-300">{t("advantage_reliability")}</p>
            </div>
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
