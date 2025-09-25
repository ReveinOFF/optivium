"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function CooperationClient() {
  const t = useTranslations("Cooperation");

  return (
    <>
      <section className="py-10 bg-[#031827] rounded-br-3xl rounded-bl-3xl mx-2.5">
        <div className="container grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-6xl max-sm:text-3xl font-bold mb-6"
            >
              {t("cooperation_1")}
            </motion.h1>
            <p className="text-lg text-gray-300 mb-8">{t("cooperation_2")}</p>
            <div>
              <Link
                href="/contacts"
                className="px-6 py-3 rounded-xl bg-[#9ADE20] hover:bg-green-600 font-semibold"
              >
                {t("cooperation_3")}
              </Link>
            </div>
          </div>
          <motion.img
            src="/assets/images/cooperation_1.jpg"
            alt={t("cooperation_1")}
            className="rounded-2xl shadow-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            draggable={false}
          />
        </div>
      </section>

      <section className="container py-10 mx-2.5">
        <h2 className="text-3xl font-bold mb-8 text-center">
          {t("cooperation_4")}
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div className="bg-[#0b2238] rounded-2xl p-6 shadow-md">
            <h3 className="text-[#9ADE20] font-semibold mb-2">
              {t("cooperation_5")}
            </h3>
            <p className="text-gray-300 text-sm">{t("cooperation_6")}</p>
          </div>
          <div className="bg-[#0b2238] rounded-2xl p-6 shadow-md">
            <h3 className="text-[#9ADE20] font-semibold mb-2">
              {t("cooperation_7")}
            </h3>
            <p className="text-gray-300 text-sm">{t("cooperation_8")}</p>
          </div>
          <div className="bg-[#0b2238] rounded-2xl p-6 shadow-md">
            <h3 className="text-[#9ADE20] font-semibold mb-2">
              {t("cooperation_9")}
            </h3>
            <p className="text-gray-300 text-sm">{t("cooperation_10")}</p>
          </div>
          <div className="bg-[#0b2238] rounded-2xl p-6 shadow-md">
            <h3 className="text-[#9ADE20] font-semibold mb-2">
              {t("cooperation_11")}
            </h3>
            <p className="text-gray-300 text-sm">{t("cooperation_12")}</p>
          </div>
        </div>
      </section>

      <section className="py-10 bg-[#031827] rounded-2xl mx-2.5 mb-2.5">
        <div className="container grid md:grid-cols-2 gap-12 items-center">
          <img
            src="/assets/images/cooperation_2.jpg"
            alt={t("cooperation_13")}
            className="rounded-2xl shadow-lg"
            draggable={false}
          />
          <div>
            <h3 className="text-2xl font-bold mb-4 text-[#9ADE20]">
              {t("cooperation_13")}
            </h3>
            <p className="text-gray-300 mb-4">{t("cooperation_14")}</p>
            <Link href="/contacts" className="text-[#9ADE20] hover:underline">
              {t("cooperation_15")} →
            </Link>
          </div>
        </div>
      </section>

      <section className="container py-10 grid md:grid-cols-2 gap-12 items-center mx-2.5">
        <div>
          <h3 className="text-2xl font-bold mb-4 text-[#9ADE20]">
            {t("cooperation_16")}
          </h3>
          <p className="text-gray-300 mb-4">{t("cooperation_17")}</p>
          <Link href="/contacts" className="text-[#9ADE20] hover:underline">
            {t("cooperation_15")} →
          </Link>
        </div>
        <img
          src="/assets/images/cooperation_3.jpg"
          alt={t("cooperation_16")}
          className="rounded-2xl shadow-lg"
          draggable={false}
        />
      </section>

      <section className="py-10 bg-[#031827] rounded-2xl mx-2.5">
        <div className="container grid md:grid-cols-2 gap-12 items-center">
          <img
            src="/assets/images/cooperation_4.jpg"
            alt={t("cooperation_18")}
            className="rounded-2xl shadow-lg"
            draggable={false}
          />
          <div>
            <h3 className="text-2xl font-bold mb-4 text-[#9ADE20]">
              {t("cooperation_18")}
            </h3>
            <p className="text-gray-300 mb-4">{t("cooperation_19")}</p>
            <Link href="/contacts" className="text-[#9ADE20] hover:underline">
              {t("cooperation_15")} →
            </Link>
          </div>
        </div>
      </section>

      <section className="py-10 bg-[#031827] rounded-2xl mx-2.5 mt-2.5">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">{t("cooperation_20")}</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            {t("cooperation_21")}
          </p>
          <Link
            href="/contacts"
            className="px-6 py-3 rounded-xl bg-[#9ADE20] hover:bg-green-600 font-semibold"
          >
            {t("cooperation_3")}
          </Link>
        </div>
      </section>
    </>
  );
}
