import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useGalleryAnimation() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (headingRef.current) {
        gsap.from(headingRef.current, {
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 85%",
            once: true,
          },
          opacity: 0,
          y: 30,
          duration: 0.9,
          ease: "power3.out",
        });
      }

      if (gridRef.current) {
        const cells = gridRef.current.querySelectorAll(".gallery-cell");
        gsap.from(cells, {
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 80%",
            once: true,
          },
          opacity: 0,
          y: 24,
          scale: 0.98,
          duration: 0.75,
          stagger: 0.09,
          ease: "power2.out",
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return { sectionRef, headingRef, gridRef };
}
