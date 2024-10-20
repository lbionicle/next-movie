// components/StarRating.tsx

import React, { useState } from "react";

interface StarRatingProps {
  rating: number;
  onChange?: (rating: number) => void;
  className?: string;
  color?: string;
}

export default function StarRating({
  rating,
  onChange,
  className = "space-x-2",
  color = "currentColor",
}: StarRatingProps) {
  const [hoverRating, setHoverRating] = useState(0);

  const handleMouseOver = (value: number) => {
    if (onChange) {
      setHoverRating(value);
    }
  };

  const handleMouseLeave = () => {
    if (onChange) {
      setHoverRating(0);
    }
  };

  const handleClick = (value: number) => {
    if (onChange) {
      onChange(value);
    }
  };

  const getFill = (value: number) => {
    if (onChange) {
      if (hoverRating >= value) {
        return color;
      } else if (!hoverRating && rating >= value) {
        return color;
      }
      return "none";
    } else {
      return rating >= value ? color : "none";
    }
  };

  const stars = Array.from({ length: 5 }, (_, index) => {
    const halfValue = index + 0.5;
    const fullValue = index + 1;

    return (
      <div key={index} className="relative flex">
        {/* Левая половина звезды (0.5) */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill={getFill(halfValue)}
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`h-6 w-6 ${onChange ? "cursor-pointer" : ""}`}
          onMouseOver={() => handleMouseOver(halfValue)}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick(halfValue)}
          style={{ clipPath: "inset(0 48% 0 0)" }}
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>

        {/* Правая половина звезды (1.0) */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill={getFill(fullValue)}
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`h-6 w-6 ${onChange ? "cursor-pointer" : ""} -ml-6`}
          onMouseOver={() => handleMouseOver(fullValue)}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick(fullValue)}
          style={{ clipPath: "inset(0 0 0 49%)" }}
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      </div>
    );
  });

  return <div className={`flex ${className}`}>{stars}</div>;
}
