import { useEffect, useRef, useState } from "react";

export const useScroll = () => {
  const [loadData, setLoadData] = useState(1);
  const targetRef = useRef(null);

  let observer: IntersectionObserver;

  const observe = () => {
    if (targetRef.current) observer.observe(targetRef?.current);
  };

  const unobserve = () => {
    if (targetRef.current) observer.unobserve(targetRef.current);
  };

  useEffect(() => {
    observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) setLoadData((prev) => prev + 1);
      },
      { root: null, threshold: 1.0 },
    );
  });

  return {
    observe,
    unobserve,
    targetRef,
    loadData,
  };
};
