import React from "react";
import useScrollCarousel from "../utils/useScrollCarousel";
import ArtCard from "./common/artCard";
import { GrNext, GrPrevious } from "react-icons/gr";

const FeatureCarousel = ({ label, data }) => {
  const {
    containerRef,
    handleScroll,
    scrollPosition,
    scrollToNext,
    scrollToPrevious,
  } = useScrollCarousel();

  return (
    <div className="flex flex-col">
      <div className="flex items-center gap-2">
        <div className="border-t-2 ml-4 lg:ml-8 h-4 border-gray-600 w-[2rem] mt-4 "></div>
        <div className="flex-shrink-0">
          <h1 className="text-left text-3xl font-semibold">{label}</h1>
        </div>
        <div className="border-t-2 h-4 border-gray-600 w-full mt-4"></div>
      </div>
      <div
        ref={containerRef}
        className="flex overflow-x-auto gap-8 py-8 px-8 items-center"
        onScroll={handleScroll}
      >
        {data.map((item) => (
          <div key={item.id} className="flex-grow-0 flex-shrink-0">
            <ArtCard artData={item} />
          </div>
        ))}
        {scrollPosition !== "start" && (
          <div className="hidden sm:block cursor-pointer">
            <GrPrevious
              className="absolute left-0 bg-gray-400 bg-opacity-50 transform -translate-y-1/2 p-2 rounded-full shadow-md h-12 w-12 "
              onClick={scrollToPrevious}
            />
          </div>
        )}

        {scrollPosition !== "end" && (
          <div className="hidden sm:block cursor-pointer">
            <GrNext
              className="absolute right-0 bg-gray-400 bg-opacity-50 transform -translate-y-1/2 p-2 rounded-full shadow-md h-12 w-12 "
              onClick={scrollToNext}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default FeatureCarousel;
