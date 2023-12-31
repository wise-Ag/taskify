import { useEffect, useRef, useState } from "react";

export const useInfiniteScroll = ({ callbackFunc }: { callbackFunc: () => void }) => {
  const [isLoading, setIsLoading] = useState(true);
  const targetRef = useRef(null);
  let observer: IntersectionObserver;

  const observe = () => {
    if (targetRef.current && !isLoading) {
      observer.observe(targetRef?.current);
    }
  };

  const unobserve = () => {
    if (targetRef.current) {
      observer.unobserve(targetRef.current);
    }
  };

  useEffect(() => {
    observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          callbackFunc();
        }
      },
      { root: null, threshold: 0.1 },
    );

    observe();

    return () => unobserve();
  }, [isLoading]);

  return {
    setIsLoading,
    targetRef,
  };
};
