import { useEffect, useRef, useState } from "react";

export const useIntersectionObserver = (
  options = {
    threshold: 0.5,
  }
) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const targetRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      // Callback function to handle intersection changes
      entries.forEach((entry) => {
        setIsIntersecting(entry.isIntersecting);
      });
    }, options);

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, [options]);

  return { targetRef, isIntersecting };
};
