import Link from "next/link";
import SadHeartIcon from "./ui/icons/sadHeartIcon";

export default async function NotFound() {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-white text-center font-unbounded text-[#0A0B11]">
      <div>
        <div className="relative inline-block">
          <h1 className="text-[120px] leading-[1.2] md:text-[250px] lg:text-[300px]">
            404
          </h1>
          <SadHeartIcon className="absolute left-1/2 top-1/2 h-14 w-14 -translate-x-1/2 -translate-y-1/2 transform md:h-28 md:w-28 lg:h-[124] lg:w-[124px]" />
        </div>
        <p className="text-[8px] md:text-[18px] lg:text-[20px]">
          Упс! Страница не найдена. Вернуться на
          <Link className="font-semibold text-[#941C1C]" href={"/"}>
            &nbsp;Главную
          </Link>
        </p>
      </div>
    </div>
  );
}
