"use client";

import React, { forwardRef, useEffect, useRef, useState } from "react";
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
import { SliderCardSkeleton } from "../common/skeleton";
import HeartIcon from "../icons/heartIcon";
import { Actor, Review } from "@/app/lib/definitions";
import { FormattedParagraph } from "../common/formattedText";
import StarRating from "../icons/starRating";
import { transformRating } from "@/app/lib/utils";

export function FilmSlider() {
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
    <section className="slider relative mx-auto mb-[50px] block w-full max-w-[1920px] px-5 lg:mb-[100px]">
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
                  className="absolute right-[12px] top-[12px] cursor-pointer"
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
    </section>
  );
}

interface ActorSliderProps {
  actors: Actor[];
}

export function ActorSlider({ actors }: ActorSliderProps) {
  const [isGrabbing, setIsGrabbing] = useState(false);
  const swiperRef = useRef<SwiperType | null>(null);

  const handleMouseDown = () => {
    setIsGrabbing(true);
  };

  const handleMouseUp = () => {
    setIsGrabbing(false);
  };

  return (
    <section
      className={`slider-actor mt-[30px] block w-full flex-shrink-0 overflow-hidden ${
        isGrabbing ? "cursor-grabbing" : "cursor-grab"
      }`}
    >
      <Swiper
        modules={[A11y, Pagination]}
        spaceBetween={30}
        slidesPerView={"auto"}
        navigation={false}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        a11y={{
          enabled: true,
        }}
        breakpoints={{
          0: {
            spaceBetween: 20,
            slidesPerView: 2,
          },
          576: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 25,
          },
          1024: {
            spaceBetween: 30,
          },
          1280: {
            slidesPerView: 4,
            spaceBetween: 35,
          },
          1536: {
            slidesPerView: 5,
            spaceBetween: 40,
          },
        }}
        onTouchStart={handleMouseDown}
        onTouchEnd={handleMouseUp}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
      >
        {actors.map(({ name, url, alt }, index) => (
          <SwiperSlide className="flex flex-col" key={index}>
            <Image
              className="mx-auto aspect-square max-h-[170px] w-full max-w-[170px] rounded-full object-cover object-top md:max-h-[150px] md:max-w-[150px] xl:max-h-[160px] xl:max-w-[160px] 2xl:max-h-[170px] 2xl:max-w-[170px]"
              src={url}
              width={200}
              height={200}
              alt={alt}
            />
            <h6 className="mt-[15px] text-center leading-normal text-white/80">
              {name}
            </h6>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

interface ReviewSliderProps {
  reviews: Review[];
  onSwiper?: (swiper: SwiperType) => void;
}

export const ReviewSlider = forwardRef<SwiperType, ReviewSliderProps>(
  function ReviewSlider({ reviews, onSwiper }, ref) {
    return (
      <section className="slider-review block w-full overflow-hidden">
        <Swiper
          modules={[A11y, Pagination]}
          spaceBetween={40}
          slidesPerView={1}
          navigation={false}
          onSwiper={(swiper) => {
            if (onSwiper) {
              onSwiper(swiper);
            }
            if (ref && typeof ref !== "function") {
              (ref as React.MutableRefObject<SwiperType | null>).current =
                swiper;
            }
          }}
          a11y={{
            enabled: true,
          }}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1440: {
              slidesPerView: 3,
            },
          }}
        >
          {reviews.map(({ reviewer, rating, comment }, index) => (
            <SwiperSlide
              className="text-4 flex !h-auto w-full flex-col rounded-[30px] border-2 border-white/30 bg-white/10 p-5 font-semibold lg:text-[18px]"
              key={index}
            >
              <div className="mb-5 flex items-center justify-between">
                <h6>{reviewer}</h6>
                <div className="flex items-center justify-center space-x-[10px]">
                  <StarRating className="space-x-[5px]" rating={rating} />
                  <h6 className="mt-auto leading-none">
                    {transformRating(rating)}
                  </h6>
                </div>
              </div>
              <div className="space-y-[10px]">
                <FormattedParagraph className="text-white/80">
                  {comment}
                </FormattedParagraph>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    );
  },
);
