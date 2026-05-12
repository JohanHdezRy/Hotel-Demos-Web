import { useCallback, useEffect, useState } from "react";
import { testimonials } from "../data/testimonialsData";

const AUTOPLAY_MS = 6000;

export function useTestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = testimonials.length;

  const goNext = useCallback(
    () => setCurrentIndex((prev) => (prev + 1) % total),
    [total],
  );
  const goPrev = useCallback(
    () => setCurrentIndex((prev) => (prev - 1 + total) % total),
    [total],
  );
  const goTo = useCallback((index: number) => setCurrentIndex(index), []);

  const handleMouseEnter = useCallback(() => setPaused(true), []);
  const handleMouseLeave = useCallback(() => setPaused(false), []);

  // Single source of truth for the autoplay interval. Pause flips it on/off
  // without ever leaving two intervals coexisting between renders.
  useEffect(() => {
    if (paused) return;
    const id = setInterval(
      () => setCurrentIndex((prev) => (prev + 1) % total),
      AUTOPLAY_MS,
    );
    return () => clearInterval(id);
  }, [paused, total]);

  return {
    testimonials,
    currentIndex,
    goNext,
    goPrev,
    goTo,
    handleMouseEnter,
    handleMouseLeave,
  };
}
