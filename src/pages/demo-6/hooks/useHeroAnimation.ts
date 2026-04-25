import { useEffect, useRef } from "react";
import gsap from "gsap";

export function useHeroAnimation() {
  const containerRef = useRef<HTMLElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const taglineRef = useRef<HTMLParagraphElement>(null);
  const scrollHintRef = useRef<HTMLDivElement>(null);
  const rulerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(overlayRef.current, { opacity: 0, duration: 1.2 }, 0)
        .from(
          rulerRef.current,
          {
            scaleX: 0,
            transformOrigin: "center",
            duration: 1.0,
            ease: "power2.inOut",
          },
          0.4,
        )
        .from(logoRef.current, { opacity: 0, y: 28, duration: 1.0 }, 0.6)
        .from(taglineRef.current, { opacity: 0, y: 16, duration: 0.8 }, 1.1)
        .from(scrollHintRef.current, { opacity: 0, y: 10, duration: 0.7 }, 1.5);
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return {
    containerRef,
    overlayRef,
    logoRef,
    taglineRef,
    scrollHintRef,
    rulerRef,
  };
}
