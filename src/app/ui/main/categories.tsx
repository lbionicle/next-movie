"use client";

import { categories, countries, genres } from "@/app/lib/placeholder-data";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

const Categories: React.FC = () => {
  const [category, setCategory] = useState<string>("#films");
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const router = useRouter();
  const dropdownRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleNavigation = (
    paramType: "genre" | "country" | "year",
    paramValue: string | number,
  ) => {
    const query: Record<string, string> = {};

    if (category) {
      query.category = category.slice(1);
    }

    query[paramType] = paramValue.toString();

    const queryString = new URLSearchParams(query).toString();

    router.push(`/movies/search?${queryString}`);
  };

  const handleCategorySelect = (id: string) => {
    setCategory(id);
    setIsDropdownOpen(false);
  };

  return (
    <section className="container px-4 py-10 font-semibold md:px-6 lg:px-8 lg:py-24">
      {/* Блок Категорий */}
      <div className="lg:gray-bottom-line relative grid w-full grid-cols-1 gap-y-10 lg:grid-cols-3 lg:gap-x-20">
        {/* Заголовок */}
        <h2 className="pb-2.5 text-left font-unbounded text-2xl lg:text-left lg:text-fz32">
          Категории
        </h2>

        {/* Dropdown для мобильных устройств */}
        <div className="relative block rounded lg:hidden">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="w-full rounded bg-red-900 px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            aria-haspopup="true"
            aria-expanded={isDropdownOpen}
          >
            {categories.find((cat) => cat.id === category)?.title ||
              "Выберите категорию"}
            <svg
              className={`ml-2 inline-block h-4 w-4 transition-transform duration-200 ${
                isDropdownOpen ? "rotate-180 transform" : ""
              }`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          {isDropdownOpen && (
            <ul
              ref={dropdownRef}
              className="absolute z-10 mt-1 w-full rounded bg-background shadow-xl"
            >
              {categories.map(({ title, id }) => (
                <li key={`${title}-${id}`}>
                  <button
                    onClick={() => handleCategorySelect(id)}
                    className={`w-full px-4 py-2 text-left hover:bg-red-900 ${
                      category === id ? "bg-red-900" : ""
                    }`}
                    aria-pressed={category === id}
                  >
                    {title}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Горизонтальный список категорий для больших экранов */}
        <ul className="col-start-2 col-end-4 hidden flex-wrap items-center justify-center space-x-4 text-base lg:flex lg:justify-start lg:space-x-5 lg:self-end lg:text-[18px]">
          {categories.map(({ title, id }) => (
            <li key={`${title}-${id}`}>
              <button
                onClick={() => setCategory(id)}
                className={`block ${
                  category === id ? "border-b-2 border-white" : ""
                } relative cursor-pointer pb-2.5`}
                aria-pressed={category === id}
              >
                {title}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Блок Жанры, Страны, Годы */}
      <div className="mt-10 grid w-full grid-cols-1 gap-y-10 text-xl font-semibold lg:grid-cols-2 lg:gap-x-14 xl:grid-cols-3 xl:gap-x-20">
        {/* Жанры */}
        <div>
          <h3 className="mb-4 text-left lg:text-left">Жанры</h3>
          <div className="grid grid-cols-2 gap-x-6 gap-y-3 sm:grid-cols-3 xl:grid-cols-2">
            {genres.map(({ title, param }) => (
              <button
                onClick={() => handleNavigation("genre", param)}
                className="text-left text-lg font-normal leading-normal text-white/80 transition-colors duration-200 hover:text-white lg:text-left"
                key={title}
              >
                {title}
              </button>
            ))}
          </div>
        </div>

        {/* Страны */}
        <div>
          <h3 className="mb-4 text-left lg:text-left">Страны</h3>
          <div className="grid grid-cols-2 gap-x-6 gap-y-3 sm:grid-cols-3 xl:grid-cols-2">
            {countries.map(({ name, param }) => (
              <button
                onClick={() => handleNavigation("country", param)}
                className="text-left text-lg font-normal leading-normal text-white/80 transition-colors duration-200 hover:text-white lg:text-left"
                key={param}
              >
                {name}
              </button>
            ))}
          </div>
        </div>

        {/* Годы */}
        <div className="lg:col-start-1 lg:col-end-4 xl:col-start-3 xl:col-end-4">
          <h3 className="mb-4 text-left lg:text-left">Годы</h3>
          <div className="custom-scrollbar mt-4 h-48 w-full overflow-y-auto overflow-x-hidden sm:h-60 md:h-72 lg:h-52 xl:h-64">
            <div className="grid grid-flow-col grid-cols-4 grid-rows-11 gap-x-5 gap-y-2">
              {Array.from({ length: 51 }, (_, i) => 2024 - i).map(
                (number: number) => (
                  <button
                    onClick={() => handleNavigation("year", number)}
                    className="text-left text-lg font-normal leading-normal text-white/80 transition-colors duration-200 hover:text-white lg:text-left"
                    key={number}
                  >
                    {number}
                  </button>
                ),
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;
