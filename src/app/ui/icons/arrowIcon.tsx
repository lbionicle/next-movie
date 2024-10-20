import React from "react";

type ArrowIconProps = {
  direction?: "right" | "left" | "up" | "down";
  onClick?: () => void;
  color?: string;
  width?: number;
  height?: number;
  opacity?: number;
  disabled?: boolean;
};

export default function ArrowIcon({
  direction = "right",
  color = "white",
  width = 26,
  height = 26,
  opacity = 1,
  onClick,
  disabled = false,
}: ArrowIconProps) {
  let rotateDeg = 0;

  switch (direction) {
    case "left":
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
    <button
      onClick={onClick}
      disabled={disabled}
      className="block h-full"
      style={{
        cursor: disabled ? "default" : "pointer",
        opacity: opacity,
        background: "none",
        border: "none",
        padding: 0,
      }}
      aria-disabled={disabled}
      aria-label={direction === "left" ? "Предыдущий" : "Следующий"}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 26 26"
        fill="none"
        style={{ transform: `rotate(${rotateDeg}deg)` }}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14.3307 4.43549L14.4222 4.3295C14.8187 3.92396 15.4427 3.89276 15.8742 4.23592L15.9778 4.3295L23.6778 12.2045L23.7234 12.254L23.784 12.3303L23.8629 12.4554L23.9217 12.5822L23.9606 12.7008L23.9924 12.8671L24 13L23.9969 13.0846L23.9777 13.2258L23.9453 13.3512L23.897 13.4761L23.8394 13.5858L23.7583 13.7036L23.6778 13.7955L15.9778 21.6705C15.5482 22.1098 14.8518 22.1098 14.4222 21.6705C14.0257 21.2649 13.9951 20.6268 14.3307 20.1855L14.4222 20.0795L20.2424 14.125H3.1C2.49249 14.125 2 13.6213 2 13C2 12.3787 2.49249 11.875 3.1 11.875H20.2446L14.4222 5.9205C14.0257 5.51495 13.9951 4.87682 14.3307 4.43549L14.4222 4.3295L14.3307 4.43549Z"
          fill={color}
          fillOpacity={opacity}
        />
      </svg>
    </button>
  );
}
