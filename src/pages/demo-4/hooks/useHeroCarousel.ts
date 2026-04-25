import { useEffect } from "react";
import { useCarousel } from "../../../hooks/useCarousel";
import { heroImages } from "../data/imageData";

const AUTOPLAY_INTERVAL = 5500;

/**
 * Encapsulates carousel state + autoplay for the El Fenn hero section.
 * Returns the same shape as useCarousel so Hero can use it directly.
 */
export function useHeroCarousel() {
  const carousel = useCarousel(heroImages.length);

  useEffect(() => {
    const t = setInterval(carousel.next, AUTOPLAY_INTERVAL);
    return () => clearInterval(t);
  }, [carousel.next]);

  return carousel;
}
