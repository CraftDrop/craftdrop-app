import React, { useState } from "react";
import useScrollCarousel from "../utils/useScrollCarousel";

const NavCarousel = ({ label }) => {
  const [active, setIsActive] = useState(false);
  const [selected, setSelected] = useState("");

  const handleSelect = (item) => {
    setSelected(item);
    setIsActive(true);
    console.log(item);
  };

  const navItems = [
    "Paintings",
    "Drawings",
    "Sculpture",
    "AI / Digital Art",
    "Collage",
    "Photography",
    "Printmaking",
  ];
  const { containerRef, handleScroll } = useScrollCarousel();

  return (
    <div className="flex flex-col">
      <div
        ref={containerRef}
        className="flex overflow-x-auto gap-4 px-8 items-center"
        onScroll={handleScroll}
      >
        {navItems.map((item) => (
          <div key={item.id} className="flex-grow-0 flex-shrink-0 pt-1">
            <a href={`/category/${item}`}>
              <button
                name={item}
                onClick={() => handleSelect(item)}
                className={`${
                  selected === item ? "bg-gray-800 bg-opacity-75" : ""
                } cursor-pointer hover:bg-gray-800 hover:bg-opacity-75 active:bg-gray-800 active:bg-opacity-75 p-2 rounded-lg font-semibold shadow-slate-400 transition ease-in-out duration-300 hover:scale-105`}
              >
                <span>{item}</span>
              </button>
            </a>
          </div>
        ))}
        {/* {scrollPosition !== "start" && (
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
        )} */}
      </div>
    </div>
  );
};

export default NavCarousel;
