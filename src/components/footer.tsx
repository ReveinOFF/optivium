import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";
import Optivium from "./optivium";

export default function Footer() {
  const year = useMemo(() => {
    return new Date().getFullYear();
  }, []);

  return (
    <footer className="bg-[#001521] w-full">
      <div className="flex justify-between container">
        <div className="grid">
          <Image
            src="/assets/icons/icon_tr.png"
            alt="home"
            width="130"
            height="130"
            className="mx-auto"
          />
          <Optivium textSize="text-3xl" />
        </div>
        <div className="flex gap-5 items-center [&>a]:hover:underline">
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
          <Link href="/cookies">Cookies</Link>
        </div>
      </div>
      <div className="text-center mt-4 container">
        &#169; {year} Optivium. All rights reserved.
      </div>
    </footer>
  );
}
