"use client";

import Image from "next/image";
import Link from "next/link";
import Optivium from "../optivium/optivium";
import useLang from "@/hooks/useLang";
import { useEffect, useMemo, useRef, useState } from "react";
import { useTranslations } from "next-intl";

export default function HeaderClient({ lang }: { lang: string }) {
  const t = useTranslations("Header");

  const [showLang, setShowLang] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);
  const { changeLang } = useLang();

  const langs = [
    {
      name: "English",
      code: "en",
      translate_code: "en",
      image: "Flag_of_the_United_Kingdom.png",
    },
    {
      name: "Українська",
      code: "uk",
      translate_code: "ua",
      image: "Flag_of_Ukraine.svg",
    },
    {
      name: "Polski",
      code: "pl",
      translate_code: "pl",
      image: "Flag_of_Poland.svg.webp",
    },
    {
      name: "Русский",
      code: "ru",
      translate_code: "ru",
      image: "Flag_of_Russia.svg.png",
    },
  ];

  const getLang = useMemo(() => {
    return langs.find((item) => item.code === lang)?.translate_code;
  }, [lang]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      console.log("asf");
      const target = event.target as Node;

      if (langRef.current && target && !langRef.current.contains(target)) {
        setShowLang(false);
      }
    }

    if (showLang) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [showLang, setShowLang]);

  const onChangeLang = (code: string) => {
    changeLang(code);
    setShowLang(false);
  };

  return (
    <header className="bg-[#031827] py-3 mx-2.5">
      <div className="container flex justify-between items-center gap-5">
        <Link href="/" className="flex items-center select-none gap-1">
          <Image
            src="/assets/icons/icon_tr.png"
            alt="home"
            width="50"
            height="50"
            draggable={false}
          />
          <Optivium textSize="text-2xl" />
        </Link>

        <nav className="flex items-center gap-3 [&>a]:hover:text-[#9ADE20] [&>a]:hover:opacity-100">
          <Link href="/services" className="opacity-80">
            {t("services")}
          </Link>
          <div className="w-1 h-1 rounded-full bg-white"></div>
          <Link href="/cooperation" className="opacity-80">
            {t("cooperation")}
          </Link>
          <div className="w-1 h-1 rounded-full bg-white"></div>
          <Link href="/about" className="opacity-80">
            {t("about")}
          </Link>
          <div className="w-1 h-1 rounded-full bg-white"></div>
          <Link href="/contacts" className="opacity-80">
            {t("contacts")}
          </Link>
        </nav>

        <div className="relative">
          <button
            onClick={() => setShowLang(!showLang)}
            className="opacity-80 hover:opacity-100 flex items-center gap-1"
          >
            <span className="uppercase">{getLang}</span>
            <Image
              src="/assets/icons/arrow.png"
              alt="arrow"
              width={15}
              height={10}
              className={`white-filter transition-transform ${
                showLang ? "rotate-x-180" : ""
              }`}
            />
          </button>
          {showLang && (
            <div
              className="absolute right-0 mt-2 w-52 bg-[#0d1f29] border border-[#12252b] rounded-lg shadow-xl z-50"
              ref={langRef}
            >
              <ul className="py-2">
                {langs.map((item, idx) => (
                  <li
                    key={idx}
                    onClick={() => onChangeLang(item.code)}
                    className="flex items-center gap-3 px-3 py-2 cursor-pointer hover:bg-[#0f2a33] focus:bg-[#0f2a33] transition"
                  >
                    <span className="w-6 h-4 rounded-sm overflow-hidden flex items-center justify-center">
                      <img
                        src={`/assets/icons/flags/${item.image}`}
                        alt={item.name.toLocaleLowerCase()}
                        className="w-full h-full object-cover"
                      />
                    </span>
                    <div className="text-sm">
                      <div className="font-medium text-white">{item.name}</div>
                      <div className="text-xs content">
                        {item.translate_code.toLocaleUpperCase()}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
