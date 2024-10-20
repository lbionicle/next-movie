// components/StarRating.tsx

import React from "react";

interface StarRatingProps {
  rating: number;
  className?: string;
}

export default function StarRating({
  rating,
  className = "space-x-[10px]",
}: StarRatingProps) {
  const validRating = Math.min(Math.max(rating, 0), 5);

  const roundedRating = Math.floor(validRating * 2) / 2;

  const stars = Array.from({ length: 5 }, (_, index) => {
    let fill = "none";
    let fillId = "";

    if (roundedRating >= index + 1) {
      fill = "currentColor";
    } else if (roundedRating === index + 0.5) {
      fill = `url(#half-${index})`;
      fillId = `half-${index}`;
    }

    return (
      <svg
        key={index}
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill={fill}
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5 text-white"
        aria-hidden="true"
      >
        {fillId && (
          <defs>
            <linearGradient id={fillId} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="50%" stopColor="#FFF" />
              <stop offset="50%" stopColor="transparent" />
            </linearGradient>
          </defs>
        )}
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    );
  });

  return <div className={`flex flex-row ${className}`}>{stars}</div>;
}
