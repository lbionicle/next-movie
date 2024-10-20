import Link from "next/link";

interface BreadcrumbsProps {
  name: string;
}

export default function Breadcrumbs({ name }: BreadcrumbsProps) {
  return (
    <nav className="container py-[50px] text-[14px] font-semibold leading-normal text-white/80 lg:text-[16px]">
      <Link
        className="transition-colors duration-200 hover:text-white"
        href={"/"}
      >
        Главная
      </Link>
      <span className="mx-[10px]">/</span>
      <Link
        className="transition-colors duration-200 hover:text-white"
        href={"/movies"}
      >
        Фильмы
      </Link>
      <span className="mx-[10px]">/</span>
      <Link
        className="transition-colors duration-200 hover:text-white"
        href={"#"}
      >
        {name}
      </Link>
    </nav>
  );
}
