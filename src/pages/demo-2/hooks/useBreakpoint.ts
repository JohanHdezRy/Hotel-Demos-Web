import { useState, useEffect } from "react";

interface Breakpoint {
  isMobile: boolean;   // < 640px
  isTablet: boolean;   // 640px – 1023px
  isDesktop: boolean;  // >= 1024px
  width: number;
}

export function useBreakpoint(): Breakpoint {
  const [width, setWidth] = useState<number>(
    typeof window !== "undefined" ? window.innerWidth : 1280
  );

  useEffect(() => {
    const handler = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  return {
    isMobile: width < 640,
    isTablet: width >= 640 && width < 1024,
    isDesktop: width >= 1024,
    width,
  };
}
