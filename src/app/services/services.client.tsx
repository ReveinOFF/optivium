"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function ServicesClient() {
  const t = useTranslations("Services");

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
              className="text-5xl md:text-6xl max-sm:text-3xl font-bold mb-6"
            >
              {t("services_1")}
            </motion.h1>
            <p className="text-lg text-gray-300 mb-8">{t("services_2")}</p>
          </div>
          <motion.img
            src="/assets/images/services_1.jpg"
            alt="Services Hero"
            className="rounded-2xl shadow-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            draggable={false}
          />
        </div>
      </section>

      {/* Our Services */}
      <section className="container py-16 text-center">
        <h2 className="text-3xl font-bold mb-8 text-[#9ADE20]">
          {t("services_17")}
        </h2>
        <div className="grid max-sm:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5 text-gray-300">
          <div className="bg-[#031827] rounded-2xl p-6 shadow-md text-sm">
            <strong>{t("services_3")}</strong>
          </div>
          <div className="bg-[#031827] rounded-2xl p-6 shadow-md text-sm">
            <strong>{t("services_4")}</strong>
          </div>
          <div className="bg-[#031827] rounded-2xl p-6 shadow-md text-sm">
            <strong>{t("services_5")}</strong>
          </div>
          <div className="bg-[#031827] rounded-2xl p-6 shadow-md text-sm">
            <strong>{t("services_6")}</strong>
          </div>
          <div className="bg-[#031827] rounded-2xl p-6 shadow-md text-sm">
            <strong>{t("services_7")}</strong>
          </div>
          <div className="bg-[#031827] rounded-2xl p-6 shadow-md text-sm">
            <strong>{t("services_8")}</strong>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-10 bg-[#031827] rounded-t-3xl mx-2.5 text-center">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8 text-[#9ADE20]">
            {t("services_9")}
          </h2>
          <div className="grid max-sm:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5 text-gray-300">
            <div className="bg-[#052034] rounded-xl p-5 shadow-sm">
              {t("services_10")}
            </div>
            <div className="bg-[#052034] rounded-xl p-5 shadow-sm">
              {t("services_11")}
            </div>
            <div className="bg-[#052034] rounded-xl p-5 shadow-sm">
              {t("services_12")}
            </div>
            <div className="bg-[#052034] rounded-xl p-5 shadow-sm">
              {t("services_13")}
            </div>
            <div className="bg-[#052034] rounded-xl p-5 shadow-sm">
              {t("services_14")}
            </div>
            <div className="bg-[#052034] rounded-xl p-5 shadow-sm">
              {t("services_15")}
            </div>
            <div className="bg-[#052034] rounded-xl p-5 shadow-sm col-span-2 md:col-span-3 max-sm:col-span-1">
              {t("services_16")}
            </div>
          </div>
        </div>
      </section>

      {/* HR Consulting */}
      <section className="pb-10 bg-[#031827] rounded-b-3xl mx-2.5 text-center">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-2.5 text-gray-300">
            <div className="bg-[#052034] rounded-xl p-5 shadow-sm">
              {t("services_18")}
            </div>
            <div className="bg-[#052034] rounded-xl p-5 shadow-sm">
              {t("services_19")}
            </div>
            <div className="bg-[#052034] rounded-xl p-5 shadow-sm">
              {t("services_20")}
            </div>
            <div className="bg-[#052034] rounded-xl p-5 shadow-sm md:col-span-3">
              {t("services_21")}
            </div>
          </div>
        </div>
      </section>

      {/* Sales */}
      <section className="container py-24 grid md:grid-cols-2 gap-2.5 md:gap-12 items-start">
        <div>
          <h2 className="text-3xl font-bold mb-6 text-[#9ADE20]">
            {t("services_22")}
          </h2>
          <p className="text-gray-300 mb-6">{t("services_23")}</p>
          <ul className="list mb-6 bg-[#031827] rounded-xl p-5 ml-0">
            <li>{t("services_24")}</li>
            <li>{t("services_25")}</li>
            <li>{t("services_26")}</li>
            <li>{t("services_27")}</li>
            <li>{t("services_28")}</li>
          </ul>
          <p className="text-[#9ADE20] mb-6">{t("services_29")}</p>
          <ul className="list bg-[#031827] rounded-xl p-5 ml-0">
            <li>{t("services_30")}</li>
            <li>{t("services_31")}</li>
            <li>{t("services_32")}</li>
            <li>{t("services_33")}</li>
            <li>{t("services_34")}</li>
          </ul>
        </div>
        <img
          src="/assets/images/services_2.jpg"
          alt="Sales"
          className="rounded-2xl shadow-lg"
          draggable={false}
        />
      </section>

      {/* Finance */}
      <section className="py-10 bg-[#031827] rounded-3xl mx-2.5">
        <div className="container grid md:grid-cols-2 gap-2.5 md:gap-12 items-start">
          <img
            src="/assets/images/services_3.jpg"
            alt="Finance"
            className="rounded-2xl shadow-lg order-2 md:order-1"
            draggable={false}
          />
          <div className="order-1 md:order-2 text-gray-300">
            <h2 className="text-3xl font-bold mb-6 text-[#9ADE20]">
              {t("services_35")}
            </h2>
            <p className="mb-6">{t("services_36")}</p>
            <div className="grid max-sm:grid-cols-1 grid-cols-2 gap-2.5">
              <ul className="space-y-2 bg-[#052034] rounded-xl p-5 shadow-sm">
                <li>{t("services_37")}</li>
                <li>{t("services_38")}</li>
                <li>{t("services_39")}</li>
                <li>{t("services_40")}</li>
              </ul>
              <ul className="space-y-2 bg-[#052034] rounded-xl p-5 shadow-sm">
                <li>{t("services_41")}</li>
                <li>{t("services_42")}</li>
                <li>{t("services_43")}</li>
                <li>{t("services_44")}</li>
              </ul>
              <ul className="space-y-2 bg-[#052034] rounded-xl p-5 shadow-sm">
                <li>{t("services_45")}</li>
                <li>{t("services_46")}</li>
              </ul>
              <ul className="space-y-2 bg-[#052034] rounded-xl p-5 shadow-sm">
                <li>{t("services_47")}</li>
                <li>{t("services_48")}</li>
                <li>{t("services_49")}</li>
              </ul>
              <ul className="space-y-2 bg-[#052034] rounded-xl p-5 shadow-sm sm:col-span-2">
                <li>{t("services_50")}</li>
                <li>{t("services_51")}</li>
                <li>{t("services_52")}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Ukraine – Investments */}
      <section className="container py-24 text-gray-300">
        <h2 className="text-3xl font-bold mb-6 text-center text-[#9ADE20]">
          {t("services_53")}
        </h2>
        <p className="mb-8 max-w-3xl mx-auto text-center">{t("services_54")}</p>
        <ul className="list rounded-2xl bg-gradient-to-r from-[#000F1B] to-[#031827]">
          <li>{t("services_55")}</li>
          <li>{t("services_56")}</li>
          <li>{t("services_57")}</li>
          <li>{t("services_58")}</li>
        </ul>
        <p className="mb-6 text-center">{t("services_59")}</p>
        <ul className="list rounded-2xl bg-gradient-to-r from-[#000F1B] to-[#031827]">
          <li>{t("services_60")}</li>
          <li>{t("services_61")}</li>
          <li>{t("services_62")}</li>
          <li>{t("services_63")}</li>
        </ul>
        <p className="font-semibold mb-10">{t("services_64")}</p>
        <div className="grid md:grid-cols-2 gap-2.5 text-left">
          <div className="bg-[#031827] p-6 rounded-2xl">
            <h3 className="font-semibold mb-4">{t("services_65")}</h3>
            <ul className="list space-y-2">
              <li>{t("services_66")}</li>
              <li>{t("services_67")}</li>
              <li>{t("services_68")}</li>
              <li>{t("services_69")}</li>
            </ul>
          </div>
          <div className="bg-[#031827] p-6 rounded-2xl">
            <h3 className="font-semibold mb-4">{t("services_70")}</h3>
            <ul className="list space-y-2">
              <li>{t("services_71")}</li>
              <li>{t("services_72")}</li>
              <li>{t("services_73")}</li>
              <li>{t("services_74")}</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Final Call */}
      <section className="py-10 bg-[#031827] rounded-3xl mx-2.5 mt-2.5 text-center">
        <div className="container">
          <h2 className="text-3xl font-bold mb-6">{t("services_75")}</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            {t("services_76")}
          </p>
          <Link
            href="/contacts"
            className="px-6 py-3 rounded-xl bg-[#9ADE20] hover:bg-green-600 font-semibold"
          >
            {t("services_77")}
          </Link>
        </div>
      </section>
    </>
  );
}
