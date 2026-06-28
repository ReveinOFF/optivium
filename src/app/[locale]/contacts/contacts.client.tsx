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
        <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
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

          {/* LinkedIn */}
          <div className="relative border-[#ffffffb1] border-b-[1px] rounded-3xl px-5 py-10 bg-[#031a2b] shadow-[0_-6px_10px_-7px_#000] md:col-span-2 lg:col-span-1 md:justify-self-center lg:justify-self-auto md:w-1/2 lg:w-full">
            <img
              src="/assets/icons/linkedin.png"
              alt="linkedin"
              className="absolute right-3 top-3 h-7 w-7 object-contain white-filter"
              draggable={false}
            />
            <p className="mb-2 content">{t("contacts_linkedin")}</p>
            <Link
              href="https://www.linkedin.com/company/optivium-eu/?viewAsMember=true"
              className="underline hover:text-[#9ADE20]"
            >
              linkedin.com
            </Link>
          </div>
        </div>
      </section>

      {/* Адреса и карты */}
      <section className="mt-2.5 mx-2.5 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 pb-4">
        {/* Украина */}
        <div className="grid grid-rows-[auto_1fr_auto] group overflow-hidden rounded-[28px] bg-[#031827] border border-[#ffffff14] hover:border-[#9ADE20]/40 transition-all duration-500 hover:shadow-[0_15px_40px_-15px_#9ADE2040]">
          {/* MAP */}
          <div className="relative overflow-hidden">
            <iframe
              className="h-[220px] w-full transition-transform duration-700 group-hover:scale-[1.03]"
              title="Ukraine office"
              src={`https://maps.google.com/maps?q=ул.+Степана+Бандеры,+19,+Ровно&hl=${getLang}&z=18&output=embed`}
              frameBorder="0"
              loading="lazy"
              allowFullScreen
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#031827] via-[#03182730] to-transparent pointer-events-none group-hover:opacity-0 transition-opacity duration-700" />

            <div className="absolute top-4 right-4">
              <span className="bg-[#9ADE20] text-black text-xs font-semibold px-3 py-1 rounded-full">
                Ukraine
              </span>
            </div>
          </div>

          {/* CONTENT */}
          <div className="p-6 grid gap-5">
            <div>
              <h2 className="title text-[#9ADE20] mb-3">
                {t("contacts_office_ua")}
              </h2>

              <div className="space-y-1 text-white/75">
                <p className="content text-white">{t("contacts_address")}</p>

                <p>{t("contacts_address_ua")}</p>
              </div>
            </div>

            <div className="w-full h-[1px] bg-white/10" />

            <div className="grid gap-3">
              <div>
                <p className="content text-white mb-1">
                  {t("contacts_working_hours")}
                </p>

                <div className="text-white/75">
                  <p>{t("contacts_schedule_ua.mon_thu")}</p>
                  <p>{t("contacts_schedule_ua.fri")}</p>
                </div>
              </div>

              <div>
                <p className="content text-white mb-1">{t("contacts_phone")}</p>

                <Link
                  href="tel:+380976619127"
                  className="text-white/75 hover:text-[#9ADE20] transition-colors"
                >
                  +38 (097) 661 91 27
                </Link>
              </div>
            </div>
          </div>

          {/* IMAGE */}
          <motion.img
            src="/assets/images/contacts_1.jpg"
            alt="Office"
            className="h-[220px] w-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            draggable={false}
          />
        </div>

        {/* Польша */}
        <div className="grid grid-rows-[auto_1fr_auto] group overflow-hidden rounded-[28px] bg-[#031827] border border-[#ffffff14] hover:border-[#9ADE20]/40 transition-all duration-500 hover:shadow-[0_15px_40px_-15px_#9ADE2040]">
          <div className="relative overflow-hidden">
            <iframe
              className="h-[220px] w-full transition-transform duration-700 group-hover:scale-[1.03]"
              title="Poland office"
              src={`https://maps.google.com/maps?q=ul.%20Powstańców%20Śląskich%207a,%2053-332%20Wrocław&hl=${getLang}&z=15&output=embed`}
              frameBorder="0"
              loading="lazy"
              allowFullScreen
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#031827] via-[#03182730] to-transparent pointer-events-none group-hover:opacity-0 transition-opacity duration-700" />

            <div className="absolute top-4 right-4">
              <span className="bg-[#9ADE20] text-black text-xs font-semibold px-3 py-1 rounded-full">
                Poland
              </span>
            </div>
          </div>

          <div className="p-6 grid gap-5">
            <div>
              <h2 className="title text-[#9ADE20] mb-3">
                {t("contacts_office_pl")}
              </h2>

              <div className="space-y-1 text-white/75">
                <p className="content text-white">{t("contacts_address")}</p>

                <p>{t("contacts_address_pl")}</p>
              </div>
            </div>

            <div className="w-full h-[1px] bg-white/10" />

            <div className="grid gap-3">
              <div>
                <p className="content text-white mb-1">
                  {t("contacts_working_hours")}
                </p>

                <div className="text-white/75">
                  <p>{t("contacts_schedule_pl.mon_thu")}</p>
                  <p>{t("contacts_schedule_pl.fri")}</p>
                </div>
              </div>

              <div>
                <p className="content text-white mb-1">{t("contacts_phone")}</p>

                <Link
                  href="tel:+48660183315"
                  className="text-white/75 hover:text-[#9ADE20] transition-colors"
                >
                  +48 660 183 315
                </Link>
              </div>
            </div>
          </div>

          <motion.img
            src="/assets/images/contacts_2.webp"
            alt="Office"
            className="h-[220px] w-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            draggable={false}
          />
        </div>

        {/* Казахстан */}
        <div className="grid grid-rows-[auto_1fr_auto] group overflow-hidden rounded-[28px] bg-[#031827] border border-[#ffffff14] hover:border-[#9ADE20]/40 transition-all duration-500 hover:shadow-[0_15px_40px_-15px_#9ADE2040]">
          <div className="relative overflow-hidden">
            <iframe
              className="h-[220px] w-full transition-transform duration-700 group-hover:scale-[1.03]"
              title="Kazakhstan office"
              src={`https://maps.google.com/maps?q=Алматы,+ул.+Толе+Би+286/2&hl=${getLang}&z=15&output=embed`}
              frameBorder="0"
              loading="lazy"
              allowFullScreen
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#031827] via-[#03182730] to-transparent pointer-events-none group-hover:opacity-0 transition-opacity duration-700" />

            <div className="absolute top-4 right-4">
              <span className="bg-[#9ADE20] text-black text-xs font-semibold px-3 py-1 rounded-full">
                Kazakhstan
              </span>
            </div>
          </div>

          <div className="p-6 grid gap-5">
            <div>
              <h2 className="title text-[#9ADE20] mb-3">
                {t("contacts_office_al")}
              </h2>

              <div className="space-y-1 text-white/75">
                <p className="content text-white">{t("contacts_address")}</p>

                <p>{t("contacts_address_al")}</p>
              </div>
            </div>

            <div className="w-full h-[1px] bg-white/10" />

            <div>
              <p className="content text-white mb-1">
                {t("contacts_working_hours")}
              </p>

              <div className="text-white/75">
                <p>{t("contacts_schedule_al.mon_thu")}</p>
                <p>{t("contacts_schedule_al.fri")}</p>
              </div>
            </div>

            <div>
              <p className="content text-white mb-1">{t("contacts_phone")}</p>

              <Link
                href="tel:+77757282257"
                className="text-white/75 hover:text-[#9ADE20] transition-colors"
              >
                +7 775 72 82 257
              </Link>
            </div>
          </div>

          <motion.img
            src="/assets/images/contacts_3.png"
            alt="Office"
            className="h-[220px] w-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            draggable={false}
          />
        </div>

        {/* Словакия */}
        <div className="grid grid-rows-[auto_1fr_auto] group overflow-hidden rounded-[28px] bg-[#031827] border border-[#ffffff14] hover:border-[#9ADE20]/40 transition-all duration-500 hover:shadow-[0_15px_40px_-15px_#9ADE2040]">
          <div className="relative overflow-hidden">
            <iframe
              className="h-[220px] w-full transition-transform duration-700 group-hover:scale-[1.03]"
              title="Slovakia office"
              src={`https://maps.google.com/maps?q=Karadžičova+8/A,+821+08+Bratislava,+Slovakia&hl=${getLang}&z=15&output=embed`}
              frameBorder="0"
              loading="lazy"
              allowFullScreen
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#031827] via-[#03182730] to-transparent pointer-events-none group-hover:opacity-0 transition-opacity duration-700" />

            <div className="absolute top-4 right-4">
              <span className="bg-[#9ADE20] text-black text-xs font-semibold px-3 py-1 rounded-full">
                Slovakia
              </span>
            </div>
          </div>

          <div className="p-6 grid gap-5">
            <div>
              <h2 className="title text-[#9ADE20] mb-3">
                {t("contacts_office_bs")}
              </h2>

              <div className="space-y-1 text-white/75">
                <p className="content text-white">{t("contacts_address")}</p>

                <p>{t("contacts_address_bs")}</p>
              </div>
            </div>

            <div className="w-full h-[1px] bg-white/10" />

            <div>
              <p className="content text-white mb-1">
                {t("contacts_working_hours")}
              </p>

              <div className="text-white/75">
                <p>{t("contacts_schedule_bs.mon_thu")}</p>
                <p>{t("contacts_schedule_bs.fri")}</p>
              </div>
            </div>

            <div>
              <p className="content text-white mb-1">{t("contacts_phone")}</p>

              <Link
                href="tel:+421914617633"
                className="text-white/75 hover:text-[#9ADE20] transition-colors"
              >
                +421 914 617 633
              </Link>
            </div>
          </div>

          <motion.img
            src="/assets/images/contacts_4.png"
            alt="Office"
            className="h-[220px] w-full object-cover"
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
