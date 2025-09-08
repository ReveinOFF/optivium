import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";

export default function Footer() {
  const year = useMemo(() => {
    return new Date().getFullYear();
  }, []);

  return (
    <footer className="bg-[#001521] w-full">
      <div className="flex justify-between">
        <div>
          <Image
            src="/assets/icons/icon_tr.png"
            alt="home"
            width="130"
            height="130"
          />
          <span>Optivium</span>
        </div>
        <div>
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
          <Link href="/cookies">Cookies</Link>
        </div>
      </div>
      <div className="text-center mt-4">
        &#169; {year} Optivium. All rights reserved.
      </div>
    </footer>
  );
}
