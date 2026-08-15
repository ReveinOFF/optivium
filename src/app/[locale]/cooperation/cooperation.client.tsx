"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function CooperationClient() {
  const t = useTranslations("Cooperation");

  return (
    <>
      <section className="py-16 md:py-20 bg-[#031827] rounded-br-[3rem] rounded-bl-[3rem] mx-2.5 shadow-xl relative overflow-hidden z-1">
        <div className="container px-4 grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <div className="text-center md:text-left">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 tracking-tight text-white leading-tight"
            >
              {t("cooperation_1")}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl mx-auto md:mx-0 leading-relaxed"
            >
              {t("cooperation_2")}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Link
                href="/contacts"
                className="inline-block px-8 py-3.5 rounded-full bg-[#9ADE20] text-[#000F1B] hover:bg-[#A9E340] active:scale-95 font-bold text-base transition-all duration-300 shadow-lg hover:shadow-[#9ADE20]/20"
              >
                {t("cooperation_3")}
              </Link>
            </motion.div>
          </div>

          <motion.img
            src="/assets/images/cooperation_1.jpg"
            alt={t("cooperation_1")}
            className="rounded-3xl shadow-2xl border-4 border-[#052034]/60 object-cover w-full h-[380px] md:h-[420px]"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
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

      <section className="py-20 md:py-24 bg-[#031827] rounded-3xl mx-2.5 mt-8 text-center relative overflow-hidden shadow-xl border border-[#052034]">
        <div className="absolute inset-0 bg-gradient-to-t from-[#9ADE20]/5 to-transparent opacity-50 pointer-events-none"></div>

        <div className="container px-4 relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 text-white tracking-tight">
            {t("cooperation_20")}
          </h2>

          <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            {t("cooperation_21")}
          </p>

          <Link
            href="/contacts"
            className="inline-block px-10 py-4 rounded-full bg-[#9ADE20] text-[#000F1B] hover:bg-[#A9E340] active:scale-95 font-bold text-lg transition-all duration-300 shadow-xl hover:shadow-[#9ADE20]/25"
          >
            {t("cooperation_3")}
          </Link>
        </div>
      </section>
    </>
  );
}
