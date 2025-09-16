"use client";

import Link from "next/link";
import { useMemo } from "react";
import Optivium from "../optivium/optivium";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("Footer");

  const year = useMemo(() => {
    return new Date().getFullYear();
  }, []);

  return (
    <footer className="w-full py-10 bg-[#031827] rounded-tr-3xl rounded-tl-3xl mt-2.5">
      <div className="flex justify-between items-end container">
        <Optivium textSize="text-5xl" />
        <button
          onClick={() => window.scrollTo({ behavior: "smooth", top: 0 })}
          className="text-[20px] opacity-80 hover:opacity-100 font-[monospace]"
        >
          {t("btn")}
        </button>
        <div className="grid gap-1">
          <div className="flex gap-5 items-center text-[1.1rem] text-white [&>a]:not-hover:opacity-80 [&>a]:hover:text-[#9ADE20] [&>a]:hover:opacity-100">
            <Link href="/privacy">{t("privacy")}</Link>
            <div className="w-1 h-1 rounded-full bg-white"></div>
            <Link href="/terms">{t("terms")}</Link>
            <div className="w-1 h-1 rounded-full bg-white"></div>
            <Link href="/cookies">Cookies</Link>
          </div>
          <div>
            &#169; {year} Optivium. {t("content")}
          </div>
        </div>
      </div>
    </footer>
  );
}
