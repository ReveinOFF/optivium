import Link from "next/link";

export default function Contacts() {
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
          <div className="relative border-[#ffffffb1] border-b-[1px] rounded-3xl px-5 py-10 bg-[#031a2b]">
            <img
              src="/assets/icons/instagram.png"
              alt="instagram"
              className="absolute right-3 top-3 h-7 w-7 object-contain"
              draggable={false}
            />
            <p className="mb-2 content">Instagram:</p>
            <Link href="" className="underline hover:text-green-400">
              @asfdsgsdgsf
            </Link>
          </div>
          <div className="relative border-[#ffffffb1] border-b-[1px] rounded-3xl px-5 py-10 bg-[#031a2b]">
            <img
              src="/assets/icons/facebook.png"
              alt="facebook"
              className="absolute right-3 top-3 h-7 w-7 object-contain"
              draggable={false}
            />
            <p className="mb-2 content">Facebook:</p>
            <Link href="" className="underline hover:text-green-400">
              @asfdsgsdgsf
            </Link>
          </div>
          <div className="relative border-[#ffffffb1] border-b-[1px] rounded-3xl px-5 py-10 bg-[#031a2b]">
            <img
              src="/assets/icons/phone.png"
              alt="phone"
              className="absolute right-3 top-3 h-7 w-7 object-contain white-filter"
              draggable={false}
            />
            <p className="mb-2 content">Phone:</p>
            <Link href="" className="underline hover:text-green-400">
              +456546546
            </Link>
          </div>
          <div className="relative border-[#ffffffb1] border-b-[1px] rounded-3xl px-5 py-10 bg-[#031a2b]">
            <img
              src="/assets/icons/email.png"
              alt="email"
              className="absolute right-3 top-3 h-7 w-7 object-contain white-filter"
              draggable={false}
            />
            <p className="mb-2 content">Email:</p>
            <Link href="" className="underline hover:text-green-400">
              asfasfa@temp.ts
            </Link>
          </div>
        </div>
      </section>

      <section className="mt-2.5 grid grid-cols-2 gap-3 mx-2.5">
        <iframe
          className="rounded-3xl"
          title="geolocation"
          src="https://maps.google.com/maps?q=Сяйво-В&amp;t=&amp;z=18&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
          frameBorder="0"
          loading="lazy"
          width="100%"
          height="100%"
          allowFullScreen
        />
        <div className="bg-[#031827] rounded-3xl">
          <div className="p-8 grid gap-5">
            <h2 className="title">Офис представительства</h2>
            <div>
              <p className="content mb-2">Режим работы:</p>
              <p>С понедельника по четверг с 9:00 до 18:00</p>
              <p>В пятницу с 9:00 до 17:00</p>
            </div>
            <div>
              <p className="content mb-2">Адрес:</p>
              <p>Великобритания, г. Манчестер M60 0AG, One Angel Square</p>
            </div>
          </div>
          <img
            src="/assets/images/test2.jpg"
            alt="place"
            className="rounded-3xl w-full"
            draggable={false}
          />
        </div>
      </section>
    </>
  );
}
