"use client";

import { Link } from "@/i18n/navigation";
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
      <div className="flex justify-between items-end container max-md:grid max-md:justify-center max-md:gap-2">
        <Optivium className="text-5xl text-center" />
        <button
          onClick={() => window.scrollTo({ behavior: "smooth", top: 0 })}
          className="max-lg:hidden text-[20px] opacity-80 hover:opacity-100 font-[monospace]"
        >
          {t("btn")}
        </button>
        <div className="grid gap-1">
          <Link
            href="/terms"
            className="text-[1.1rem] text-center text-white not-hover:opacity-80 hover:text-[#9ADE20] hover:opacity-100"
          >
            {t("terms")}
          </Link>
          <div className="text-center max-md:mt-3">
            &#169; {year} Optivium. {t("content")}
          </div>
        </div>
      </div>
    </footer>
  );
}
