import React, { useState, useEffect } from "react";
import CollectionCard from "./collectionCard";
import { GrNext, GrPrevious } from "react-icons/gr";

const Slideshow = ({ data, component: Component }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === data.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(timer);
  }, [data.length]);

  const goToPreviousSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? data.length - 1 : prevIndex - 1
    );
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === data.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative">
      <div className="flex items-center justify-center">
        <Component data={data} index={currentIndex} />
      </div>
      <div className="cursor-pointer">
        <GrPrevious
          className="absolute top-1/2 left-0 bg-gray-400 bg-opacity-50 transform -translate-y-1/2 p-2 rounded-full shadow-md h-10 w-10 lg:h-12 lg:w-12 "
          onClick={goToPreviousSlide}
        />
      </div>
      <div className="cursor-pointer">
        <GrNext
          className="absolute top-1/2 right-0 bg-gray-400 bg-opacity-50 transform -translate-y-1/2 p-2 rounded-full shadow-md h-10 w-10 lg:h-12 lg:w-12"
          onClick={goToNextSlide}
        />
      </div>
    </div>
  );
};

export default Slideshow;
