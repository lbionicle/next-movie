import React from "react";

const shimmer =
  "before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent";

export const SliderCardSkeleton: React.FC = () => {
  const skeletons: number[] = Array.from({ length: 5 });

  const visibilityClasses = [
    "block",
    "hidden xs:block",
    "hidden lg:block",
    "hidden xl:block",
    "hidden 2xl:block",
  ];

  return (
    <div className="w-full overflow-hidden">
      <div className="relative overflow-hidden">
        <div className="grid grid-cols-1 gap-4 overflow-hidden xs:grid-cols-2 xs:gap-[25px] md:gap-[30px] lg:grid-cols-3 lg:gap-10 xl:grid-cols-4 2xl:grid-cols-5">
          {skeletons.map((_, index) => (
            <div
              key={index}
              className={`overflow-hidden rounded-md ${visibilityClasses[index] || "hidden"}`}
            >
              <div className="relative aspect-[2/3]">
                <div
                  className={`h-full w-full ${shimmer} animate-pulse bg-gray-300`}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
