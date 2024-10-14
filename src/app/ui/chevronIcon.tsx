import React from "react";

type ChevronIconProps = {
  direction?: "right" | "left" | "up" | "down";
  color?: string;
  width?: number;
  height?: number;
  opacity?: number;
};

export default function ChevronIcon({
  direction = "right",
  color = "black",
  width = 14,
  height = 22,
  opacity = 0.3,
}: ChevronIconProps) {
  let rotateDeg = 0;

  switch (direction) {
    case "right":
      rotateDeg = 180;
      break;
    case "up":
      rotateDeg = -90;
      break;
    case "down":
      rotateDeg = 90;
      break;
    default:
      rotateDeg = 0;
  }

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 14 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ transform: `rotate(${rotateDeg}deg)` }}
    >
      <path
        d="M12.5999 22C12.2415 22 11.8831 21.8802 11.6101 21.6419L0.4103 11.8641C-0.137092 11.3863 -0.137092 10.6138 0.4103 10.1359L11.6101 0.358172C12.1575 -0.119716 13.0423 -0.119716 13.5897 0.358172C14.1371 0.836059 14.1371 1.6085 13.5897 2.08639L3.37966 11L13.5897 19.9137C14.1371 20.3916 14.1371 21.164 13.5897 21.6419C13.3167 21.8802 12.9583 22 12.5999 22"
        fill-rule="evenodd"
        clip-rule="evenodd"
        fill={color}
        fill-opacity={opacity}
      />
    </svg>
  );
}
