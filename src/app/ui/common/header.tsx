"use client";

import Link from "next/link";
import { mainIcons, nav } from "../../lib/placeholder-data";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const onOpenMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className="container flex max-w-[1712px] items-center justify-between pt-[20px] font-semibold md:pt-[30px] lg:pt-[40px] 2xl:pt-[50px]">
        <h1 className="max-w-[400px] font-unbounded text-[24px] md:text-[30px] 2xl:text-fz40">
          <Link href={"/"}>Кинонавигатор</Link>
        </h1>
        <nav className="hidden lg:block lg:text-[17px] 2xl:text-[18px]">
          <ul className="flex items-center space-x-10">
            {nav.map(({ title, url }) => (
              <li key={title}>
                <Link href={url}>{title}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <form
          className="relative hidden text-[18px] text-white/60 2xl:block"
          action="#"
        >
          <input
            className="w-[450px] max-w-[450px] rounded-full border-2 border-primary bg-white/10 py-[16px] pl-[55px] pr-4 transition-all placeholder:text-[18px] placeholder:text-white/60 focus:outline-transparent"
            type="text"
            placeholder="Поиск"
          />
          <Image
            className="absolute left-[25px] top-1/2 -translate-y-1/2 transform"
            src={"/main/iconSearch.svg"}
            width={20}
            height={20}
            alt="Search a movie"
          />
        </form>
        <div className="hidden items-center lg:flex">
          {mainIcons.map(({ url, src, alt }, index, arr) => (
            <Link
              className={`${alt === "search" ? "mr-[25px] block 2xl:mr-0 2xl:hidden" : arr.length === index + 1 ? "mr-0" : "mr-[25px]"}`}
              href={url}
              key={alt}
            >
              <Image src={src} width={28} height={28} alt={alt} />
            </Link>
          ))}
        </div>
        <div className="flex items-center space-x-5 lg:hidden">
          <div
            onClick={onOpenMenu}
            className="icon nav-icon flex h-[19px] w-[27px] flex-col items-center space-y-[5px]"
          >
            {Array.from({ length: 3 }).map((_, index) => (
              <span
                key={index}
                className="mt-auto block h-[3px] w-full rounded-[8px] bg-white"
              ></span>
            ))}
          </div>
        </div>
      </header>
      <div
        onClick={onOpenMenu}
        className={`z-40 transition-all duration-500 ease-in ${isOpen ? "block" : "hidden"} absolute left-0 top-0 min-h-full min-w-full bg-black/30`}
      ></div>
      <aside
        className={`linear-header z-50 transform p-[15px] pt-[105px] transition-all duration-300 ease-in ${isOpen ? "translate-x-0" : "translate-x-full"} fixed right-0 top-0 min-h-full w-[260px] lg:w-[360px]`}
      >
        <form className="relative h-[40px] text-white/60" action="#">
          <input
            className="h-full w-full rounded-full border-2 border-primary bg-white/10 p-[9px] py-[16px] pl-[35px] transition-all placeholder:text-white/60 focus:outline-transparent"
            type="text"
            placeholder="Поиск"
          />
          <Image
            className="absolute left-[15px] top-1/2 -translate-y-1/2 transform"
            src={"/main/iconSearch.svg"}
            width={16}
            height={16}
            alt="Search a movie"
          />
        </form>
        <nav className="mt-10 w-full text-end font-semibold md:text-[16px]">
          <ul className="flex flex-col items-start space-y-5">
            {nav.map(({ title, url }) => (
              <li className="w-full" key={title}>
                <Link href={url}>{title}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="mt-10 flex justify-end space-x-5">
          {mainIcons.map(({ url, src, alt }) => {
            if (alt !== "search") {
              return (
                <Link href={url} key={alt}>
                  <Image src={src} width={22} height={22} alt={alt} />
                </Link>
              );
            }
          })}
        </div>
        <div onClick={onOpenMenu} className="absolute right-[20px] top-[25px]">
          <div className="relative right-0 top-0 h-6 w-6">
            <span className="absolute left-1/2 top-1/2 block h-[3px] w-full -translate-x-1/2 -translate-y-1/2 rotate-[135deg] transform rounded-[8px] bg-white"></span>
            <span className="absolute left-1/2 top-1/2 block h-[3px] w-full -translate-x-1/2 -translate-y-1/2 rotate-45 transform rounded-[8px] bg-white"></span>
          </div>
        </div>
      </aside>
    </>
  );
}
