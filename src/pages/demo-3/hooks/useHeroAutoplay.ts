import { useEffect } from "react";
import { useCarousel } from "../../../hooks/useCarousel";

/**
 * Carousel state + autoplay for the Costa Mare hero. Returns the same shape
 * as `useCarousel` so the consumer can drive it directly from the result.
 */
export function useHeroAutoplay(length: number, intervalMs = 6000) {
  const carousel = useCarousel(length);

  useEffect(() => {
    const t = setInterval(carousel.next, intervalMs);
    return () => clearInterval(t);
  }, [carousel.next, intervalMs]);

  return carousel;
}
