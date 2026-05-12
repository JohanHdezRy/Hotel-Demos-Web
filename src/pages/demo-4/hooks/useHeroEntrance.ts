import { useEffect, useRef } from "react";
import gsap from "gsap";

/**
 * GSAP entrance timeline for the El Fenn hero overlay. Animates `.ef-label`,
 * `.ef-title`, and `.ef-sub` scoped to the returned ref. Cleans up via
 * `ctx.revert()` on unmount.
 */
export function useHeroEntrance() {
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!overlayRef.current) return;
    const ctx = gsap.context(() => {
      gsap
        .timeline({ defaults: { ease: "power4.out" }, delay: 0.2 })
        .from(".ef-label", { opacity: 0, y: 14, duration: 0.7 }, 0)
        .from(".ef-title", { yPercent: 105, duration: 1 }, 0.25)
        .from(".ef-sub", { opacity: 0, y: 16, duration: 0.8 }, 0.7);
    }, overlayRef);
    return () => ctx.revert();
  }, []);

  return overlayRef;
}
