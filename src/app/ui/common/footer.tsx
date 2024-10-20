import Link from "next/link";
import { footer } from "../../lib/placeholder-data";

export default function Footer() {
  return (
    <footer className="bg-footer mx-auto pb-8 pt-24">
      <div className="container">
        <div className="mr-auto max-w-4xl">
          {/* Заголовок */}
          <h2 className="text-left font-unbounded text-2xl font-semibold leading-normal md:text-[30px] 2xl:text-[40px]">
            Кинонавигатор
          </h2>

          {/* Навигационные ссылки */}
          <div className="mt-16 grid grid-cols-2 gap-x-6 gap-y-4 text-base md:grid-cols-3 lg:mt-20">
            {footer.map(({ title, url }) => (
              <Link
                className="text-[16px] text-white/80 transition-colors duration-200 hover:text-white lg:text-[18px]"
                key={title}
                href={url}
              >
                {title}
              </Link>
            ))}
          </div>
        </div>

        {/* Дополнительные ссылки */}
        <div className="mt-16 grid grid-cols-1 gap-y-4 text-sm sm:text-base md:text-[18px]">
          {[
            "Политика конфиденциальности",
            "Согласие на обработку персональных данных",
          ].map((title) => (
            <Link
              className="text-white/30 transition-colors duration-200 hover:text-white"
              key={title}
              href="#"
            >
              {title}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
