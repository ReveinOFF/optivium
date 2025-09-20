"use client";

import Image from "next/image";
import Link from "next/link";
import Optivium from "../optivium/optivium";
import useLang from "@/hooks/useLang";
import { useEffect, useMemo, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { LOCALES } from "@/utils/constants";
import { changeScrollActive } from "@/services/scroll";

export default function HeaderClient({ lang }: { lang: string }) {
  const t = useTranslations("Header");

  const [showLang, setShowLang] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);
  const { changeLang } = useLang();
  const [openMenu, setOpenMenu] = useState(false);

  const getLang = useMemo(() => {
    return LOCALES.find((item) => item.code === lang)?.translate_code;
  }, [lang]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
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

  const onChangeBurger = () => {
    changeScrollActive();
    setOpenMenu(!openMenu);
  };

  return (
    <header className="bg-[#031827] py-3 mx-2.5">
      <div className="container flex justify-between items-center gap-5">
        <Link href="/" className="flex items-center select-none gap-1">
          {/* Лого */}
          <Image
            src="/assets/icons/icon_tr.png"
            alt="home"
            width="50"
            height="50"
            draggable={false}
          />
          <Optivium textSize="text-2xl" />
        </Link>

        {/* Навигация (desktop) */}
        <nav className="hidden md:flex items-center gap-3 [&>a]:hover:text-[#9ADE20] [&>a]:hover:opacity-100">
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

        {/* Языки */}
        <div className="relative hidden md:block">
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
                {LOCALES.map((item, idx) => (
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

        {/* Бургер (mobile) */}
        <button
          className="md:hidden flex flex-col items-end gap-1.5"
          onClick={onChangeBurger}
        >
          <span className="h-0.5 w-6 bg-white transition"></span>
          <span className="h-0.5 w-5 bg-white transition"></span>
          <span className="h-0.5 w-6 bg-white transition"></span>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`fixed z-10 inset-0 h-[48%] bg-[#031827] text-white text-lg transition-transform duration-300 md:hidden border-b border-b-[#ffffff22] rounded-b-3xl ${
          openMenu ? "-translate-y-0" : "-translate-y-[101%]"
        }`}
      >
        <div className="flex justify-between items-center w-full px-2.5 py-2.5">
          <h1 className="text-2xl font-[600] max-sm:text-[20px]">
            {t("menu")}
          </h1>
          <button
            className="flex flex-col justify-center items-center w-10 h-10 p-2 hover:bg-[#041d31] rounded-[0.3rem] focus:outline-[#041d31] focus:outline-1"
            onClick={onChangeBurger}
          >
            <div className="w-6 h-0.5 bg-white rotate-45 absolute duration-300" />
            <div className="w-6 h-0.5 bg-white -rotate-45 absolute duration-300" />
          </button>
        </div>

        <nav className="flex flex-col gap-3 justify-center text-center px-2.5">
          <Link
            href="/services"
            onClick={onChangeBurger}
            className="hover:bg-[#041d31] p-2 rounded-[0.3rem] w-full"
          >
            {t("services")}
          </Link>
          <Link
            href="/cooperation"
            onClick={onChangeBurger}
            className="hover:bg-[#041d31] p-2 rounded-[0.3rem] w-full"
          >
            {t("cooperation")}
          </Link>
          <Link
            href="/about"
            onClick={onChangeBurger}
            className="hover:bg-[#041d31] p-2 rounded-[0.3rem] w-full"
          >
            {t("about")}
          </Link>
          <Link
            href="/contacts"
            onClick={onChangeBurger}
            className="hover:bg-[#041d31] p-2 rounded-[0.3rem] w-full"
          >
            {t("contacts")}
          </Link>
        </nav>

        <div className="hr-h"></div>

        {/* Языки иконками */}
        <div className="flex gap-3 mt-5 justify-center">
          {LOCALES.map((item, idx) => (
            <button
              key={idx}
              onClick={() => {
                onChangeLang(item.code);
                onChangeBurger();
              }}
              className="w-8 h-6 rounded-sm overflow-hidden"
            >
              <img
                src={`/assets/icons/flags/${item.image}`}
                alt={item.name.toLowerCase()}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>

      {openMenu && (
        <div className="popup popup-bg" onClick={onChangeBurger}></div>
      )}
    </header>
  );
}
