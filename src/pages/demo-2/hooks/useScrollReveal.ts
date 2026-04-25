import { useEffect, useRef, useState } from "react";

interface ScrollRevealResult {
  ref: React.RefObject<HTMLElement | null>;
  isVisible: boolean;
}

export function useScrollReveal(threshold = 0.15): ScrollRevealResult {
  const ref = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isVisible };
}
