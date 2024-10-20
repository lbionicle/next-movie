"use client";

import { Picture } from "@/app/lib/definitions";
import { movieNav } from "@/app/lib/placeholder-data";
import { useEffect, useState } from "react";
import Image from "next/image";
import { getYouTubeVideoId } from "@/app/lib/utils";

interface MovieContentProps {
  frames: Picture[];
  trailer: string;
  video: string;
}

export default function MovieContent({
  frames,
  trailer,
  video,
}: MovieContentProps) {
  const [category, setCategory] = useState("picture");

  const renderContent = () => {
    const trailerId = getYouTubeVideoId(trailer);
    const videoId = getYouTubeVideoId(video);

    switch (category) {
      case "picture":
        return <FramesGrid frames={frames} />;
      case "trailer":
        return (
          <div className="container my-10 lg:my-[50px]">
            <YouTubeEmbed videoId={trailerId} title="Trailer" />
          </div>
        );
      case "film":
        return (
          <div className="container my-10 lg:my-[50px]">
            <YouTubeEmbed videoId={videoId} title="Video" />
          </div>
        );
      default:
        return null;
    }
  };

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
                onClick={() => setCategory(id)}
                className={`block w-full text-left ${
                  category === id
                    ? "white-bottom-line text-white before:w-full xs:before:w-[calc(100%+40px)]"
                    : ""
                } relative cursor-pointer pb-2.5 transition-colors duration-200 hover:text-white`}
                aria-pressed={category === id}
              >
                {title}
              </button>
            </li>
          ))}
        </ul>
      </nav>
      {renderContent()}
    </>
  );
}

interface FramesGridProps {
  frames: Picture[];
}

export function FramesGrid({ frames }: FramesGridProps) {
  return (
    <div className="container my-10 grid grid-cols-[repeat(auto-fit,_minmax(290px,_1fr))] gap-4 lg:my-[50px]">
      {frames.map(({ url, alt }) => (
        <Image
          key={`${url}-${alt}`}
          className="block w-full object-cover object-top"
          src={url}
          width={400}
          height={252}
          alt={alt}
        />
      ))}
    </div>
  );
}

interface YouTubeEmbedProps {
  videoId: string;
  title: string;
}

export function YouTubeEmbed({
  videoId = "L_ssR0ugIYA",
  title = "",
}: YouTubeEmbedProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  const handleError = () => {
    setIsPlaying(false);
    setHasError(true);
  };

  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  return (
    <div
      className="relative w-full"
      style={{ paddingBottom: "56.25%", height: 0 }}
    >
      {!isPlaying ? (
        <div
          className="absolute inset-0 cursor-pointer bg-black"
          onClick={handlePlay}
          role="button"
          tabIndex={0}
          onKeyPress={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              handlePlay();
            }
          }}
          aria-label={`Воспроизвести видео: ${title}`}
        >
          <Image
            src={thumbnailUrl}
            alt={title}
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
            onError={(e) => {
              (e.target as HTMLImageElement).src =
                `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
            }}
            quality={90}
            priority={false}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-14 w-14 lg:h-24 lg:w-24 2xl:h-[148px] 2xl:w-[148px]"
              viewBox="0 0 148 148"
              fill="none"
            >
              <path
                d="M74 0C33.1338 0 0 33.1338 0 74C0 114.866 33.1338 148 74 148C114.866 148 148 114.866 148 74C148 33.1338 114.866 0 74 0ZM101.479 74.8377L59.8539 99.6812C59.5558 99.8621 59.1763 99.8711 58.8693 99.6901C58.5713 99.5184 58.3817 99.1982 58.3817 98.8412V73.9974V49.1536C58.3817 48.8016 58.5713 48.4764 58.8693 48.3044C59.1763 48.1283 59.5558 48.1373 59.8539 48.3133L101.479 73.1617C101.777 73.3311 101.953 73.6583 101.953 73.9971C101.953 74.3431 101.777 74.664 101.479 74.8377Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
      ) : hasError ? (
        <div className="absolute inset-0 flex items-center justify-center bg-black text-white">
          <p>Не удалось загрузить видео.</p>
        </div>
      ) : (
        <iframe
          className="absolute inset-0 h-full w-full"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&enablejsapi=1&controls=1&rel=0&modestbranding=1&fs=1&playsinline=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
          allowFullScreen
          onError={handleError}
        ></iframe>
      )}
    </div>
  );
}
