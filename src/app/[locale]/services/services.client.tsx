"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function ServicesClient() {
  const t = useTranslations("Services");

  return (
    <>
      {/* Hero */}
      <section className="py-20 bg-[#031827] rounded-b-3xl mx-2.5 shadow-xl">
        <div className="container px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="text-center md:text-left">
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-6xl md:text-7xl font-extrabold text-white mb-8 leading-tight"
            >
              {t("services_1")}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-300 mb-12 max-w-xl mx-auto md:mx-0"
            >
              {t("services_2")}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Link
                href="/contacts"
                className="inline-block px-10 py-4 rounded-full bg-[#9ADE20] hover:bg-[#86cf1d] text-[#031827] font-bold text-lg transition duration-300 transform hover:scale-105 shadow-md"
              >
                {t("services_77")}
              </Link>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <img
              src="/assets/images/services_1.jpg"
              alt="Services Hero"
              className="rounded-3xl shadow-2xl w-full object-cover"
              draggable={false}
            />
            <div className="absolute -bottom-8 -left-3 md:-left-8 bg-[#9ADE20] text-[#031827] p-5 rounded-2xl shadow-lg font-bold">
              10+ лет опыта
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Services */}
      <section className="container px-4 py-24 text-center">
        <h2 className="text-4xl font-extrabold mb-12 text-[#9ADE20]">
          {t("services_17")}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "services_3",
            "services_4",
            "services_5",
            "services_6",
            "services_7",
            "services_8",
          ].map((key) => (
            <div
              key={key}
              className="bg-[#031827] border border-[#052034] rounded-2xl p-8 shadow-lg hover:shadow-xl shadow-[#042237b6] transition-shadow duration-300 flex items-center justify-center min-h-[140px]"
            >
              <p className="text-base text-gray-200 font-semibold leading-relaxed">
                {t(key)}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-20 bg-[#031827] rounded-t-3xl mx-2.5 shadow-inner text-center">
        <div className="container px-4">
          <h2 className="text-4xl font-extrabold mb-12 text-[#9ADE20]">
            {t("services_9")}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-left">
            {[
              "services_10",
              "services_11",
              "services_12",
              "services_13",
              "services_14",
              "services_15",
            ].map((key) => (
              <div
                key={key}
                className="bg-[#052034] rounded-2xl p-6 shadow-md flex items-start space-x-4 border border-transparent hover:border-[#9ADE20]/30 transition-all"
              >
                <div className="mt-1 flex-shrink-0 w-8 h-8 rounded-full bg-[#031827] flex items-center justify-center">
                  <span className="text-[#9ADE20] font-bold text-lg">•</span>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed pt-0.5">
                  {t(key)}
                </p>
              </div>
            ))}
            <div className="bg-[#052034] rounded-2xl p-8 shadow-xl col-span-1 sm:col-span-2 md:col-span-3 border border-[#9ADE20]">
              <p className="text-gray-100 text-base leading-relaxed text-center font-medium">
                {t("services_16")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HR Consulting */}
      <section className="pb-24 bg-[#031827] rounded-b-3xl mx-2.5 text-center">
        <div className="container px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            {["services_18", "services_19", "services_20"].map((key) => (
              <div
                key={key}
                className="bg-[#052034] rounded-xl p-6 shadow-sm border border-transparent hover:border-[#9ADE20]/20 transition-all"
              >
                <p className="text-gray-300 text-sm leading-relaxed">
                  {t(key)}
                </p>
              </div>
            ))}
            <div className="bg-[#052034] rounded-xl p-8 shadow-sm md:col-span-3 border border-[#9ADE20] text-center">
              <p className="text-gray-100 font-medium">{t("services_21")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sales */}
      <section className="container px-4 py-24 grid md:grid-cols-2 gap-16 items-start">
        <div>
          <h2 className="text-4xl font-extrabold mb-8 text-[#9ADE20]">
            {t("services_22")}
          </h2>
          <p className="text-lg text-gray-300 mb-8 leading-relaxed max-w-xl">
            {t("services_23")}
          </p>

          <ul className="space-y-4 mb-8 bg-[#031827] rounded-2xl p-8 border border-[#052034]">
            {[
              "services_24",
              "services_25",
              "services_26",
              "services_27",
              "services_28",
            ].map((key) => (
              <li key={key} className="flex items-start">
                <span className="text-[#9ADE20] mr-3 mt-1.5 font-black">→</span>
                <span className="text-gray-200 text-base">{t(key)}</span>
              </li>
            ))}
          </ul>

          <p className="text-[#9ADE20] font-bold text-lg mb-8 leading-relaxed bg-[#031827] rounded-xl p-4 border border-[#9ADE20]">
            {t("services_29")}
          </p>

          <ul className="space-y-4 bg-[#031827] rounded-2xl p-8 border border-[#052034]">
            {[
              "services_30",
              "services_31",
              "services_32",
              "services_33",
              "services_34",
            ].map((key) => (
              <li key={key} className="flex items-start">
                <span className="text-white mr-3 mt-1.5 font-black">→</span>
                <span className="text-gray-200 text-base">{t(key)}</span>
              </li>
            ))}
          </ul>
        </div>
        <img
          src="/assets/images/services_2.jpg"
          alt="Sales Management"
          className="rounded-3xl shadow-2xl border-4 border-[#052034]/50 object-cover w-full h-[500px] sticky top-5"
          draggable={false}
        />
      </section>

      {/* Finance */}
      <section className="py-20 bg-[#031827] rounded-3xl md:mx-2.5 shadow-lg">
        <div className="container px-4 grid md:grid-cols-[1.2fr,1fr] gap-12 items-start">
          <img
            src="/assets/images/services_3.jpg"
            alt="Finance Management"
            className="rounded-3xl shadow-2xl border-4 border-[#052034]/50 order-2 md:order-1 object-cover w-full h-[500px]"
            draggable={false}
          />
          <div className="order-1 md:order-2">
            <h2 className="text-4xl font-extrabold mb-8 text-[#9ADE20]">
              {t("services_35")}
            </h2>
            <p className="text-lg text-gray-300 mb-10 leading-relaxed max-w-xl">
              {t("services_36")}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-gray-300">
              {[
                ["services_37", "services_38", "services_39", "services_40"],
                ["services_41", "services_42", "services_43", "services_44"],
                ["services_45", "services_46"],
                ["services_47", "services_48", "services_49"],
                ["services_50", "services_51", "services_52"],
              ].map((listGroup, groupIndex) => (
                <ul
                  key={groupIndex}
                  className={`space-y-3 bg-[#052034] rounded-xl p-6 shadow-md border border-transparent hover:border-[#9ADE20]/30 transition-all ${groupIndex === 4 ? "sm:col-span-2" : ""}`}
                >
                  {listGroup.map((key) => (
                    <li key={key} className="text-sm flex items-start">
                      <span className="text-[#9ADE20] mr-2.5 mt-1">•</span>
                      <span className="flex-1 text-gray-200">{t(key)}</span>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Ukraine – Investments */}
      <section className="container px-4 py-24 text-center">
        <h2 className="text-4xl font-extrabold mb-8 text-[#9ADE20]">
          {t("services_53")}
        </h2>
        <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
          {t("services_54")}
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <ul className="space-y-4 text-left p-8 rounded-2xl bg-gradient-to-br from-[#000F1B] to-[#031827] border border-[#052034] shadow-md">
            {["services_55", "services_56", "services_57", "services_58"].map(
              (key) => (
                <li key={key} className="flex items-start text-gray-200">
                  <span className="text-[#9ADE20] mr-3 mt-1.5 font-black">
                    ✓
                  </span>
                  <span className="mt-1.5">{t(key)}</span>
                </li>
              ),
            )}
          </ul>
          <ul className="space-y-4 text-left p-8 rounded-2xl bg-gradient-to-br from-[#000F1B] to-[#031827] border border-[#052034] shadow-md">
            {["services_60", "services_61", "services_62", "services_63"].map(
              (key) => (
                <li key={key} className="flex items-start text-gray-200">
                  <span className="text-[#9ADE20] mr-3 mt-1.5 font-black">
                    ✓
                  </span>
                  <span className="mt-1.5">{t(key)}</span>
                </li>
              ),
            )}
          </ul>
        </div>

        <p className="font-semibold text-white mb-8 text-xl leading-relaxed">
          {t("services_64")}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          <div className="bg-[#031827] p-8 rounded-2xl border border-[#052034]">
            <h3 className="text-xl font-extrabold mb-6 text-white tracking-tight">
              {t("services_65")}
            </h3>
            <ul className="space-y-3">
              {["services_66", "services_67", "services_68", "services_69"].map(
                (key) => (
                  <li
                    key={key}
                    className="text-gray-300 text-base leading-relaxed"
                  >
                    {t(key)}
                  </li>
                ),
              )}
            </ul>
          </div>
          <div className="bg-[#031827] p-8 rounded-2xl border border-[#052034]">
            <h3 className="text-xl font-extrabold mb-6 text-white tracking-tight">
              {t("services_70")}
            </h3>
            <ul className="space-y-3">
              {["services_71", "services_72", "services_73", "services_74"].map(
                (key) => (
                  <li
                    key={key}
                    className="text-gray-300 text-base leading-relaxed"
                  >
                    {t(key)}
                  </li>
                ),
              )}
            </ul>
          </div>
        </div>
      </section>

      {/* Final Call */}
      <section className="py-24 bg-[#031827] rounded-t-[4rem] rounded-b-3xl mx-2.5 shadow-xl text-center relative overflow-hidden mt-6">
        <div className="absolute inset-0 bg-gradient-to-t from-[#9ADE20]/5 to-transparent opacity-50 pointer-events-none"></div>

        <div className="container px-4 relative z-10">
          <h2 className="text-5xl font-extrabold mb-8 leading-tight tracking-tight text-white">
            {t("services_75")}
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            {t("services_76")}
          </p>
          <Link
            href="/contacts"
            className="inline-block px-10 py-4 rounded-full bg-[#9ADE20] text-[#000F1B] hover:bg-[#A9E340] active:scale-95 font-bold text-lg transition-all duration-300 shadow-xl hover:shadow-[#9ADE20]/25"
          >
            {t("services_77")}
          </Link>
        </div>
      </section>
    </>
  );
}
