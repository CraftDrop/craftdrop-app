import { useState, useRef } from "react";

const useScrollCarousel = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const containerRef = useRef(null);

  const handleScroll = () => {
    const { scrollLeft, offsetWidth, scrollWidth } = containerRef.current;
    const maxScroll = scrollWidth - offsetWidth;
    const position =
      scrollLeft === maxScroll ? "end" : scrollLeft > 0 ? "middle" : "start";
    setScrollPosition(position);
  };

  const scrollToNext = () => {
    const container = containerRef.current;
    if (container) {
      const nextScrollLeft = container.scrollLeft + container.offsetWidth;
      container.scrollTo({
        left: nextScrollLeft,
        behavior: "smooth",
      });
    }
  };

  const scrollToPrevious = () => {
    const container = containerRef.current;
    if (container) {
      const nextScrollLeft = container.scrollLeft - container.offsetWidth;
      container.scrollTo({
        left: nextScrollLeft,
        behavior: "smooth",
      });
    }
  };

  return {
    containerRef,
    handleScroll,
    scrollPosition,
    scrollToNext,
    scrollToPrevious,
  };
};

export default useScrollCarousel;
