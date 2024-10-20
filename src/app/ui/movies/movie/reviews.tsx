"use client";

import { Review } from "@/app/lib/definitions";
import { ReviewSlider } from "../../slider/slider";
import { Swiper as SwiperType } from "swiper";
import ArrowIcon from "../../icons/arrowIcon";
import { useEffect, useState, useCallback } from "react";

export default function Reviews({ reviews }: { reviews: Review[] }) {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleSwiper = useCallback((swiper: SwiperType) => {
    setSwiperInstance(swiper);
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
    setIsLoading(false);
  }, []);

  console.log(1);
  useEffect(() => {
    if (swiperInstance) {
      const onSlideChange = () => {
        setIsBeginning(swiperInstance.isBeginning);
        setIsEnd(swiperInstance.isEnd);
      };

      swiperInstance.on("slideChange", onSlideChange);

      return () => {
        swiperInstance.off("slideChange", onSlideChange);
      };
    }
  }, [swiperInstance]);

  return (
    <section className="container my-[50px]">
      <div className="mb-[50px] flex w-full items-center justify-between">
        <h2 className="font-unbounded text-[24px] leading-[1] md:text-[30px] 2xl:text-fz32">
          Отзывы
        </h2>
        <div className="flex items-center justify-center space-x-[50px]">
          <ArrowIcon
            direction="left"
            onClick={() => {
              swiperInstance?.slidePrev();
            }}
            disabled={isBeginning || isLoading}
            opacity={isBeginning || isLoading ? 0.6 : 1}
            aria-label="Предыдущий"
          />
          <ArrowIcon
            direction="right"
            onClick={() => {
              swiperInstance?.slideNext();
            }}
            disabled={isEnd || isLoading}
            opacity={isEnd || isLoading ? 0.6 : 1}
            aria-label="Следующий"
          />
        </div>
      </div>
      <ReviewSlider onSwiper={handleSwiper} reviews={reviews} />
    </section>
  );
}
