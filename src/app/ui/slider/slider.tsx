"use client";

import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import WithArrow from "./withArrow";
import { Swiper as SwiperType } from "swiper";
import Link from "next/link";
import Image from "next/image";
import { breakpoints, slides } from "@/app/lib/placeholder-data";
import { SliderCardSkeleton } from "../skeleton";
import HeartIcon from "../heartIcon";

export default function SliderComponent() {
  const swiperRef = useRef<SwiperType | null>(null);

  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="slider relative mx-auto mb-[50px] block w-full max-w-[1920px] px-5 lg:mb-[100px]">
      {loading ? (
        <SliderCardSkeleton />
      ) : (
        <>
          <Swiper
            modules={[A11y, Pagination]}
            spaceBetween={16}
            slidesPerView={5}
            navigation={false}
            pagination={{
              clickable: true,
              dynamicBullets: true,
              type: "bullets",
              el: ".swiper-pagination",
            }}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            a11y={{
              enabled: true,
            }}
            breakpoints={breakpoints}
          >
            {slides.map(({ src, alt, isDark }) => (
              <SwiperSlide key={alt}>
                <Link className="block h-full" href="#">
                  <div className="overflow-hidden">
                    <div className="relative aspect-[2/3]">
                      <Image
                        className="h-full w-full rounded-md object-cover object-top"
                        src={src}
                        width={800}
                        height={800}
                        alt={alt}
                      />
                    </div>
                  </div>
                </Link>
                <HeartIcon
                  isDark={isDark}
                  className="absolute right-[12px] top-[12px]"
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <WithArrow
            direction="prev"
            ariaLabel="prev"
            onClick={() => swiperRef.current?.slidePrev()}
          />
          <WithArrow
            direction="next"
            ariaLabel="next"
            onClick={() => swiperRef.current?.slideNext()}
          />
          <div className="swiper-pagination block lg:hidden"></div>
        </>
      )}
    </div>
  );
}
