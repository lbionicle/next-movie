import { movieNav } from "@/app/lib/placeholder-data";
import React from "react";
import ArrowIcon from "../icons/arrowIcon";

const shimmer =
  "before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent";

export const SliderCardSkeleton: React.FC = () => {
  const skeletons: number[] = Array.from({ length: 5 });

  const visibilityClasses = [
    "block",
    "hidden xs:block",
    "hidden lg:block",
    "hidden xl:block",
    "hidden 2xl:block",
  ];

  return (
    <div className="w-full overflow-hidden">
      <div className="relative overflow-hidden">
        <div className="grid grid-cols-1 gap-4 overflow-hidden xs:grid-cols-2 xs:gap-[25px] md:gap-[30px] lg:grid-cols-3 lg:gap-10 xl:grid-cols-4 2xl:grid-cols-5">
          {skeletons.map((_, index) => (
            <div
              key={index}
              className={`overflow-hidden rounded-md ${visibilityClasses[index] || "hidden"}`}
            >
              <div className="relative aspect-[2/3]">
                <div
                  className={`h-full w-full ${shimmer} animate-pulse bg-gray-300`}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export function BreadcrumbsSkeleton() {
  return (
    <nav className="container flex items-center space-x-2 py-[50px]">
      <div
        className={`relative overflow-hidden rounded-md bg-gray-300 ${shimmer} h-4 w-40`}
      ></div>

      <span className="h-4 w-2 overflow-hidden rounded bg-gray-300"></span>

      <div
        className={`relative overflow-hidden rounded-md bg-gray-300 ${shimmer} h-4 w-40`}
      ></div>

      <span className="h-4 w-2 overflow-hidden rounded bg-gray-300"></span>

      <div
        className={`relative overflow-hidden rounded-md bg-gray-300 ${shimmer} h-4 w-40`}
      ></div>
    </nav>
  );
}

export function ImageSkeleton() {
  return (
    <div className="relative h-64 w-full animate-pulse overflow-hidden rounded-md bg-gray-300">
      <div className={`absolute inset-0 ${shimmer}`}></div>
    </div>
  );
}

interface TextSkeletonProps {
  width?: string;
  height?: string;
}

export function TextSkeleton({
  width = "w-full",
  height = "h-4",
}: TextSkeletonProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-lg bg-gray-300 ${shimmer} ${height} ${width}`}
    ></div>
  );
}

export function InfoGridSkeleton() {
  return (
    <div className="mt-10 grid grid-cols-1 gap-y-3">
      {Array.from({ length: 4 }).map((_, index) => (
        <div className="grid grid-cols-[auto_1fr] gap-x-9" key={index}>
          <div className="h-6 w-16 overflow-hidden rounded-lg bg-gray-300 text-gray-500"></div>
          <div
            className={`relative overflow-hidden rounded-lg bg-gray-300 ${shimmer} h-6`}
          ></div>
        </div>
      ))}
    </div>
  );
}

interface RatingSkeletonProps {
  margin?: string;
  spacing?: string;
}

export function RatingSkeleton({
  margin = "mt-[15px]",
  spacing = "space-x-[10px]",
}: RatingSkeletonProps) {
  return (
    <div className={`${margin} flex items-center space-x-4`}>
      {/* Placeholder для звезд рейтинга */}
      <div className={`flex ${spacing}`}>
        {Array.from({ length: 5 }).map((_, index) => (
          <div
            key={index}
            className={`relative overflow-hidden rounded-full bg-gray-300 ${shimmer} h-5 w-5`}
          ></div>
        ))}
      </div>
      {/* Placeholder для текстового рейтинга */}
      <div
        className={`relative overflow-hidden rounded-lg bg-gray-300 ${shimmer} h-6 w-8`}
      ></div>
    </div>
  );
}

export const ActorSliderSkeleton: React.FC = () => {
  const skeletons: number[] = Array.from({ length: 5 });

  const visibilityClasses = [
    "block",
    "block",
    "hidden xs:block",
    "hidden xl:block",
    "hidden 2xl:block",
  ];

  return (
    <div className="w-full overflow-hidden">
      <div className="relative overflow-hidden">
        <div className="grid grid-cols-2 gap-5 overflow-hidden xs:grid-cols-3 xs:gap-x-[25px] md:gap-[30px] lg:gap-x-10 xl:grid-cols-4 2xl:grid-cols-5">
          {skeletons.map((_, index) => (
            <div
              key={index}
              className={`mt-[30px] overflow-hidden rounded-md ${visibilityClasses[index] || "hidden"}`}
            >
              <div
                className={`${shimmer} relative mx-auto mb-[10px] aspect-square max-h-[170px] w-full max-w-[170px] overflow-hidden rounded-full bg-gray-300 object-cover object-top md:max-h-[150px] md:max-w-[150px] xl:max-h-[160px] xl:max-w-[160px] 2xl:max-h-[170px] 2xl:max-w-[170px]`}
              ></div>
              <TextSkeleton />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export function MovieInfoSkeleton() {
  return (
    <div className="container grid grid-cols-1 gap-y-10 md:grid-cols-[1fr_2fr] md:gap-x-[30px] md:gap-y-0">
      {/* Левая колонка: Изображение */}
      <div className="block h-full">
        <div className="relative overflow-hidden">
          {/* Placeholder для изображения с соотношением сторон 2:3 */}
          <div className="relative h-0 w-full overflow-hidden rounded-md bg-gray-300 pb-[150%]">
            <div
              className={`absolute left-0 top-0 h-full w-full ${shimmer} rounded-md`}
            ></div>
          </div>
        </div>
      </div>

      {/* Правая колонка: Информация о фильме */}
      <div className="flex h-full w-full max-w-full flex-col justify-start overflow-hidden align-top">
        {/* Заголовок */}
        <TextSkeleton width="w-2/3" height="h-10" />

        {/* Теги */}
        <div className="mt-5 flex space-x-[15px]">
          <div
            className={`relative overflow-hidden rounded-lg bg-gray-300 ${shimmer} h-8 w-20`}
          ></div>
          <div
            className={`relative overflow-hidden rounded-lg bg-gray-300 ${shimmer} h-8 w-32`}
          ></div>
        </div>

        {/* Рейтинг */}
        <RatingSkeleton />

        {/* Детали фильма */}
        <InfoGridSkeleton />

        {/* Описание */}
        <div
          className={`relative mt-10 overflow-hidden rounded-lg bg-gray-300 ${shimmer} h-28`}
        ></div>

        {/* Актёры */}
        <div className="relative mt-10 w-full 2xl:mt-[60px]">
          {/* Заголовок секции */}
          <div
            className={`relative overflow-hidden rounded-lg bg-gray-300 ${shimmer} h-7 w-64`}
          ></div>
          {/* Слайдер с актёрами: отображаем несколько кругов */}
          <ActorSliderSkeleton />
        </div>
      </div>
    </div>
  );
}

export function MovieContentSkeleton() {
  const skeletons: number[] = Array.from({ length: 4 });

  return (
    <>
      <nav className="container mt-10 lg:mt-[60px]">
        <ul className="gray-bottom-line relative flex flex-wrap items-center justify-start self-end text-[16px] text-base font-semibold text-white/80 before:hidden xs:before:block lg:text-[18px]">
          {movieNav.map(({ title, id }) => (
            <li
              className="gray-bottom-line relative my-[10px] w-full xs:mx-[20px] xs:my-0 xs:w-auto xs:before:hidden"
              key={`${title}-${id}`}
            >
              <button
                disabled
                className={`block w-full text-left ${
                  "picture" === id
                    ? "white-bottom-line text-white before:w-full xs:before:w-[calc(100%+40px)]"
                    : ""
                } relative cursor-pointer pb-2.5 transition-colors duration-200 hover:text-white`}
                aria-pressed={"picture" === id}
              >
                {title}
              </button>
            </li>
          ))}
        </ul>
      </nav>
      <div className="container my-10 grid grid-cols-[repeat(auto-fit,_minmax(290px,_1fr))] gap-4 lg:my-[50px]">
        {skeletons.map((_, index) => (
          <div
            key={index}
            className={`relative aspect-[40/27] overflow-hidden ${shimmer} block w-full bg-gray-300 object-cover object-top`}
          />
        ))}
      </div>
    </>
  );
}

export default function ReviewsSkeleton() {
  const skeletons: number[] = Array.from({ length: 3 });

  const visibilityClasses = ["block", "hidden md:block", "hidden l:block"];

  return (
    <section className="container my-[50px]">
      <div className="mb-[50px] flex w-full items-center justify-between">
        <h2 className="font-unbounded text-[24px] leading-[1] md:text-[30px] 2xl:text-fz32">
          Отзывы
        </h2>
        <div className="flex items-center justify-center space-x-[50px]">
          <ArrowIcon
            direction="left"
            disabled={true}
            opacity={0.6}
            aria-label="Предыдущий"
          />
          <ArrowIcon
            direction="right"
            disabled={true}
            opacity={0.6}
            aria-label="Следующий"
          />
        </div>
      </div>
      <section className="2xl: grid w-full grid-cols-1 gap-x-10 overflow-hidden md:grid-cols-2 l:grid-cols-3">
        {skeletons.map((_, index) => (
          <div
            className={`${visibilityClasses[index]} text-4 flex aspect-square !h-auto max-h-[544px] w-full flex-col rounded-[30px] bg-white/10 p-5`}
            key={index}
          >
            <div className="mb-5 flex items-start justify-between">
              <TextSkeleton width="w-16 lg:w-40" height="h-8" />
              <div className="flex items-center justify-center">
                <RatingSkeleton margin="m-0" spacing="space-x-[5px]" />
              </div>
            </div>
            <div
              className={`relative h-full w-full overflow-hidden rounded-lg bg-gray-300 ${shimmer}`}
            ></div>
          </div>
        ))}
      </section>
    </section>
  );
}
