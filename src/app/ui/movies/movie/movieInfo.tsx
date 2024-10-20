import React from "react";
import Image from "next/image";
import { Movie, Tags } from "@/app/lib/definitions";
import HeartIcon from "../../icons/heartIcon";
import {
  capitalizeFirstLetter,
  getHours,
  getMinutes,
  transformRating,
} from "@/app/lib/utils";
import StarRating from "../../icons/starRating";
import { FormattedText } from "../../common/formattedText";
import { ActorSlider } from "../../slider/slider";

export default function MovieInfo({
  name,
  grade,
  year,
  countries,
  genres,
  director,
  tags,
  description,
  actors,
  sources,
}: Movie) {
  return (
    <div className="container grid grid-cols-1 gap-y-10 text-[16px] font-semibold md:grid-cols-[1fr_2fr] md:gap-x-[30px] md:gap-y-0 lg:text-[18px]">
      <div className="block h-full">
        <div className="overflow-hidden">
          <div className="relative">
            <Image
              className="h-full max-h-[800px] w-full rounded-md object-cover object-top"
              src={sources.profile.url}
              width={800}
              height={800}
              alt={sources.profile.alt}
            />
            <HeartIcon
              width={44}
              height={44}
              isDark={sources.profile.isDark}
              className="absolute right-[12px] top-[12px] h-[36px] w-[36px] cursor-pointer lg:h-[44px] lg:w-[44px]"
            />
          </div>
        </div>
      </div>
      <div className="flex h-full w-full max-w-full flex-col justify-start overflow-hidden align-top">
        <h2 className="font-unbounded text-[24px] leading-[1] md:text-[30px] 2xl:text-fz32">
          {name}
        </h2>
        <div className="mt-5 flex space-x-[15px]">
          <span className="block rounded-full bg-white/10 px-[14px] py-[6px] backdrop:blur-[2px]">
            {tags.age}+
          </span>
          <span className="block rounded-full bg-white/10 px-[14px] py-[6px] backdrop:blur-[2px]">{`${getHours(tags.duration)} ч. ${getMinutes(tags.duration)} мин.`}</span>
        </div>
        <div className="mt-[15px] flex items-start justify-start space-x-[15px]">
          <StarRating rating={grade} />
          <span>{transformRating(grade)}</span>
        </div>
        <div className="mt-10 grid grid-cols-[auto_1fr] gap-x-9 gap-y-3">
          <div className="text-white/80">Год</div>
          <div>{year}</div>
          <div className="text-white/80">Страна</div>
          <div>
            {countries.map((item) => capitalizeFirstLetter(item)).join(", ")}
          </div>
          <div className="text-white/80">Жанр</div>
          <div>{capitalizeFirstLetter(genres.join(", "))}</div>
          <div className="text-white/80">Режиссёр</div>
          <div>{director}</div>
        </div>
        <p className="mt-10">
          <FormattedText>{description}</FormattedText>
        </p>
        <div className="2xl::mt-[60px] relative mt-10 w-full">
          <h3 className="font-unbounded text-fz22">В главных ролях</h3>
          <ActorSlider actors={actors} />
        </div>
      </div>
    </div>
  );
}
