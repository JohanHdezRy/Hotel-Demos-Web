import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useHorizontalGallery() {
  const galleryRef = useRef<HTMLDivElement>(null);
  const stripRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const gallery = galleryRef.current;
    const strip = stripRef.current;
    if (!gallery || !strip) return;

    const ctx = gsap.context(() => {
      const getDistance = () => strip.scrollWidth - window.innerWidth;

      gsap.to(strip, {
        x: () => -getDistance(),
        ease: "none",
        scrollTrigger: {
          trigger: gallery,
          start: "top top",
          end: () => "+=" + getDistance(),
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return { galleryRef, stripRef };
}
