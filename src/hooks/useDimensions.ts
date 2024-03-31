import { debounce } from "@/utils/debounce";
import { useState, useEffect } from "react";

export const useDimensions = () => {
  const [deviceState, setDeviceState] = useState(
    {} as { isDesktop: boolean; isTablet: boolean; isMobile: boolean }
  );

  const getWindowSize = () => {
    if (typeof window === "undefined")
      return {
        isDesktop: true,
        isMobile: false,
        isTablet: false,
      };

    const isMobile = window.innerWidth < 768;
    const isTablet =
      window.innerWidth >= 768 && window.innerWidth <= 1024;

    return {
      isDesktop: window.innerWidth > 1024,
      isTablet,
      isMobile,
    };
  };

  useEffect(() => {
    setDeviceState(getWindowSize() as any);

    const resizeHandler = debounce(() => {
      setDeviceState(getWindowSize() as any);
    }, 100);

    window.addEventListener("resize", resizeHandler);
    window.addEventListener("load", resizeHandler);

    return () => {
      window.removeEventListener("resize", resizeHandler);
      window.removeEventListener("load", resizeHandler);
    };
  }, []);

  return deviceState;
};
