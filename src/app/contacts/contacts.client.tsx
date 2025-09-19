import { LOCALES } from "@/utils/constants";
import Link from "next/link";
import { useMemo } from "react";

export default function ContactsClient({ lang }: { lang: string }) {
  const getLang = useMemo(() => {
    return LOCALES.find((item) => item.code === lang)?.code;
  }, [lang]);

  return (
    <>
      <section className="bg-[#031827] text-center grid gap-2 py-4 rounded-br-3xl rounded-bl-3xl mx-2.5">
        <h1 className="content">Contacts</h1>
        <p className="title max-w-[700px] mx-auto">
          Зв'яжіться з нами будь яким зручним способом
        </p>
      </section>

      <section className="mt-2.5 bg-[#031827] p-10 rounded-3xl mx-2.5">
        <div className="container grid grid-cols-4 gap-5">
          <div className="relative border-[#ffffffb1] border-b-[1px] rounded-3xl px-5 py-10 bg-[#031a2b] shadow-[0_-6px_10px_-7px_#000]">
            <img
              src="/assets/icons/instagram.png"
              alt="instagram"
              className="absolute right-3 top-3 h-7 w-7 object-contain"
              draggable={false}
            />
            <p className="mb-2 content">Instagram:</p>
            <Link
              href="https://www.instagram.com/optivium.eu"
              className="underline hover:text-[#9ADE20]"
              target="_blank"
            >
              optivium.eu
            </Link>
          </div>
          <div className="relative border-[#ffffffb1] border-b-[1px] rounded-3xl px-5 py-10 bg-[#031a2b] shadow-[0_-6px_10px_-7px_#000]">
            <img
              src="/assets/icons/phone.png"
              alt="phone"
              className="absolute right-3 top-3 h-7 w-7 object-contain white-filter"
              draggable={false}
            />
            <p className="mb-2 content">Phone (Ukraine):</p>
            <Link
              href="tel:+380976619127"
              className="underline hover:text-[#9ADE20]"
            >
              +38 (097) 661 91 27
            </Link>
          </div>
          <div className="relative border-[#ffffffb1] border-b-[1px] rounded-3xl px-5 py-10 bg-[#031a2b] shadow-[0_-6px_10px_-7px_#000]">
            <img
              src="/assets/icons/phone.png"
              alt="phone"
              className="absolute right-3 top-3 h-7 w-7 object-contain white-filter"
              draggable={false}
            />
            <p className="mb-2 content">Phone (Poland):</p>
            <Link
              href="tel:+48503064329"
              className="underline hover:text-[#9ADE20]"
            >
              +48 503 064 329
            </Link>
          </div>
          <div className="relative border-[#ffffffb1] border-b-[1px] rounded-3xl px-5 py-10 bg-[#031a2b] shadow-[0_-6px_10px_-7px_#000]">
            <img
              src="/assets/icons/email.png"
              alt="email"
              className="absolute right-3 top-3 h-7 w-7 object-contain white-filter"
              draggable={false}
            />
            <p className="mb-2 content">Email:</p>
            <Link href="" className="underline hover:text-[#9ADE20]">
              info@optivium.eu
            </Link>
          </div>
        </div>
      </section>

      {/* Адреса и карты */}
      <section className="mt-2.5 grid md:grid-cols-2 gap-5 mx-2.5">
        {/* Украина */}
        <div className="bg-[#031827] rounded-3xl overflow-hidden shadow-lg border border-[#ffffff22]">
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
            <h2 className="title text-[#9ADE20]">Офіс в Україні</h2>
            <div>
              <p className="content mb-1">Режим роботи:</p>
              <p>Пн–Чт: 9:00 – 18:00</p>
              <p>Пт: 9:00 – 17:00</p>
            </div>
            <div>
              <p className="content mb-1">Адреса:</p>
              <p>вул. Степана Бандери, 19, Рівне, Рівненська область, 33000</p>
            </div>
          </div>
        </div>

        {/* Польша */}
        <div className="bg-[#031827] rounded-3xl overflow-hidden shadow-lg border border-[#ffffff22]">
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
            <h2 className="title text-[#9ADE20]">Офіс в Польші</h2>
            <div>
              <p className="content mb-1">Режим роботи:</p>
              <p>Пн–Чт: 9:00 – 17:00</p>
            </div>
            <div>
              <p className="content mb-1">Адреса:</p>
              <p>ul. Powstańców Śląskich 7a, 53-332 Wrocław</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
