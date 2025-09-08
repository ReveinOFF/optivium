import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-[#001521]">
      <div>
        {/* <Image /> */}
        <nav>
          <Link href="/about">About Us</Link>
        </nav>
      </div>
      <div>
        <button>EN</button>
      </div>
    </header>
  );
}
