"use client";

import ChevronIcon from "../chevronIcon";

interface WithArrowProps {
  direction: "prev" | "next";
  onClick: () => void;
  ariaLabel: string;
}

export default function WithArrow({
  direction,
  ariaLabel,
  onClick,
}: WithArrowProps) {
  return (
    <button
      onClick={onClick}
      className={`slider-arrow absolute z-10 hidden lg:block ${
        direction === "prev" ? "left-9" : "right-9"
      } top-1/2 -translate-y-1/2 transform rounded-full border-2 border-solid border-primary bg-white/10 px-[19px] py-[15px] backdrop-blur-[2px] hover:border-white/60`}
      aria-label={ariaLabel}
    >
      <ChevronIcon
        direction={`${direction === "prev" ? "left" : "right"}`}
        color="#FFF"
        width={14}
        height={22}
      />
    </button>
  );
}
