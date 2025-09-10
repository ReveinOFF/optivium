import Image from "next/image";
import Link from "next/link";
import Optivium from "./optivium";

export default function Header() {
  return (
    <header className="bg-[#001521] py-3">
      <div className="container flex justify-between items-center gap-5">
        <Link href="/" className="flex items-center">
          <Image
            src="/assets/icons/icon_tr.png"
            alt="home"
            width="50"
            height="50"
          />
          <Optivium textSize="text-2xl" />
        </Link>
        <nav className="flex items-center gap-3 [&>a]:hover:underline">
          <Link href="/about">About Us</Link>
          <Link href="/contacts">Contacts</Link>
          <div>
            <button className="border-2 border-white rounded-2xl py-2 px-3">
              EN
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
