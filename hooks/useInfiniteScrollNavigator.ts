import { RefObject, useEffect, useRef, useState } from "react";

export const useInfiniteScrollNavigator = (scrollContainerRef: RefObject<HTMLElement>) => {
  const startRef = useRef(null);
  const endRef = useRef(null);
  const [isScrollingUp, setIsScrollingUp] = useState(false);
  const [prevPosition, setPrevPosition] = useState(0);

  const moveToElement = (element: HTMLElement) => {
    element.scrollIntoView({ behavior: "smooth" });
  };

  const handleScrollNavClick = () => {
    if (endRef.current && startRef.current) isScrollingUp ? moveToElement(endRef.current) : moveToElement(startRef.current);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (scrollContainerRef.current) {
        const currentPosition = scrollContainerRef.current.scrollTop;
        setIsScrollingUp(prevPosition < currentPosition);
        setPrevPosition(currentPosition);
      }
    };
    if (scrollContainerRef.current) scrollContainerRef.current.addEventListener("scroll", handleScroll);
    return () => {
      if (scrollContainerRef.current) scrollContainerRef.current.removeEventListener("scroll", handleScroll);
    };
  }, [prevPosition, scrollContainerRef.current]);

  return { startRef, endRef, handleScrollNavClick, isScrollingUp };
};
