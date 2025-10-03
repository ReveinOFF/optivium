"use client";

import { LOCALES } from "@/utils/constants";
import { Link } from "@/i18n/navigation";
import { useMemo } from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function ContactsClient({ lang }: { lang: string }) {
  const t = useTranslations("Contacts");

  const getLang = useMemo(() => {
    return LOCALES.find((item) => item.code === lang)?.code;
  }, [lang]);

  return (
    <>
      <section className="bg-[#031827] text-center grid gap-2 py-4 rounded-br-3xl rounded-bl-3xl mx-2.5">
        <h1 className="content">{t("contacts_title")}</h1>
        <p className="title max-w-[700px] mx-auto">{t("contacts_subtitle")}</p>
      </section>

      <section className="mt-2.5 bg-[#031827] p-10 rounded-3xl mx-2.5">
        <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* Instagram */}
          <div className="relative border-[#ffffffb1] border-b-[1px] rounded-3xl px-5 py-10 bg-[#031a2b] shadow-[0_-6px_10px_-7px_#000]">
            <img
              src="/assets/icons/instagram.png"
              alt="instagram"
              className="absolute right-3 top-3 h-7 w-7 object-contain"
              draggable={false}
            />
            <p className="mb-2 content">{t("contacts_instagram")}</p>
            <Link
              href="https://www.instagram.com/optivium.eu"
              className="underline hover:text-[#9ADE20]"
              target="_blank"
            >
              optivium.eu
            </Link>
          </div>

          {/* Phone UA */}
          <div className="relative border-[#ffffffb1] border-b-[1px] rounded-3xl px-5 py-10 bg-[#031a2b] shadow-[0_-6px_10px_-7px_#000]">
            <img
              src="/assets/icons/phone.png"
              alt="phone"
              className="absolute right-3 top-3 h-7 w-7 object-contain white-filter"
              draggable={false}
            />
            <p className="mb-2 content">{t("contacts_phone_ua")}</p>
            <Link
              href="tel:+380976619127"
              className="underline hover:text-[#9ADE20]"
            >
              +38 (097) 661 91 27
            </Link>
          </div>

          {/* Phone PL */}
          <div className="relative border-[#ffffffb1] border-b-[1px] rounded-3xl px-5 py-10 bg-[#031a2b] shadow-[0_-6px_10px_-7px_#000]">
            <img
              src="/assets/icons/phone.png"
              alt="phone"
              className="absolute right-3 top-3 h-7 w-7 object-contain white-filter"
              draggable={false}
            />
            <p className="mb-2 content">{t("contacts_phone_pl")}</p>
            <Link
              href="tel:+48503064329"
              className="underline hover:text-[#9ADE20]"
            >
              +48 503 064 329
            </Link>
          </div>

          {/* Email */}
          <div className="relative border-[#ffffffb1] border-b-[1px] rounded-3xl px-5 py-10 bg-[#031a2b] shadow-[0_-6px_10px_-7px_#000]">
            <img
              src="/assets/icons/email.png"
              alt="email"
              className="absolute right-3 top-3 h-7 w-7 object-contain white-filter"
              draggable={false}
            />
            <p className="mb-2 content">{t("contacts_email")}</p>
            <Link
              href="mailto:info@optivium.eu"
              className="underline hover:text-[#9ADE20]"
            >
              info@optivium.eu
            </Link>
          </div>
        </div>
      </section>

      {/* Адреса и карты */}
      <section className="mt-2.5 grid md:grid-cols-2 gap-5 mx-2.5">
        {/* Украина */}
        <div className="bg-[#031827] rounded-3xl overflow-hidden shadow-lg border border-[#ffffff22] grid grid-rows-[auto_1fr_auto]">
          <iframe
            className="rounded-t-3xl"
            title="Ukraine office"
            src={`https://maps.google.com/maps?q=ул.+Степана+Бандеры,+19,+Ровно&hl=${getLang}&z=18&output=embed`}
            frameBorder="0"
            loading="lazy"
            width="100%"
            height="250"
            allowFullScreen
          />
          <div className="p-8 grid gap-4 shadow-[inset_0_13px_11px_-5px_#000]">
            <h2 className="title text-[#9ADE20]">{t("contacts_office_ua")}</h2>
            <div>
              <p className="content mb-1">{t("contacts_working_hours")}</p>
              <p>{t("contacts_schedule_ua.mon_thu")}</p>
              <p>{t("contacts_schedule_ua.fri")}</p>
            </div>
            <div>
              <p className="content mb-1">{t("contacts_address")}</p>
              <p>{t("contacts_address_ua")}</p>
            </div>
          </div>
          <motion.img
            src="/assets/images/contacts_1.jpg"
            alt="Office"
            className="rounded-b-2xl shadow-lg h-[350px] w-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            draggable={false}
          />
        </div>

        {/* Польша */}
        <div className="bg-[#031827] rounded-3xl overflow-hidden shadow-lg border border-[#ffffff22] grid grid-rows-[auto_1fr_auto]">
          <iframe
            className="rounded-t-3xl"
            title="Poland office"
            src={`https://maps.google.com/maps?q=ul.%20Powstańców%20Śląskich%207a,%2053-332%20Wrocław&hl=${getLang}&z=15&output=embed`}
            frameBorder="0"
            loading="lazy"
            width="100%"
            height="250"
            allowFullScreen
          />
          <div className="p-8 grid gap-4 shadow-[inset_0_13px_11px_-5px_#000]">
            <h2 className="title text-[#9ADE20]">{t("contacts_office_pl")}</h2>
            <div>
              <p className="content mb-1">{t("contacts_working_hours")}</p>
              <p>{t("contacts_schedule_pl.mon_thu")}</p>
              <p>{t("contacts_schedule_pl.fri")}</p>
            </div>
            <div>
              <p className="content mb-1">{t("contacts_address")}</p>
              <p>{t("contacts_address_pl")}</p>
            </div>
          </div>
          <motion.img
            src="/assets/images/contacts_2.webp"
            alt="Office"
            className="rounded-b-2xl shadow-lg h-[350px] w-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            draggable={false}
          />
        </div>
      </section>
    </>
  );
}
