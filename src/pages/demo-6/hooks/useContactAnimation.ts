import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useContactAnimation() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const blocksRef = useRef<HTMLDivElement>(null);

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

      if (blocksRef.current) {
        const items = blocksRef.current.querySelectorAll(".contact-block");
        gsap.from(items, {
          scrollTrigger: {
            trigger: blocksRef.current,
            start: "top 80%",
            once: true,
          },
          opacity: 0,
          y: 22,
          duration: 0.7,
          stagger: 0.12,
          ease: "power2.out",
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return { sectionRef, headingRef, blocksRef };
}
