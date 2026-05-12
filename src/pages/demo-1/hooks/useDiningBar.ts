import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useDiningBar() {
  const barRef = useRef<HTMLElement>(null);
  const barListRef = useRef<HTMLUListElement>(null);
  const barFillRef = useRef<HTMLDivElement>(null);
  const barSlideRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const bar = barRef.current;
    const list = barListRef.current;
    const fill = barFillRef.current;
    if (!bar || !list || !fill) return;

    const ctx = gsap.context(() => {
      const listItems = gsap.utils.toArray<HTMLLIElement>("li", list);
      const slides = barSlideRefs.current.filter(
        (s): s is HTMLDivElement => s !== null,
      );

      gsap.set(listItems[0], { color: "#A90023" });
      gsap.set(slides[0], { autoAlpha: 1 });
      gsap.set(fill, {
        scaleY: 1 / listItems.length,
        transformOrigin: "top left",
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: bar,
          start: "top top",
          end: "+=" + listItems.length * 120 + "%",
          pin: true,
          scrub: true,
        },
      });

      listItems.forEach((item, i) => {
        const prev = listItems[i - 1];
        if (prev) {
          tl.set(item, { color: "#A90023" }, 0.5 * i)
            .to(slides[i], { autoAlpha: 1, duration: 0.2 }, "<")
            .set(prev, { color: "#fffce1" }, "<")
            .to(slides[i - 1], { autoAlpha: 0, duration: 0.2 }, "<");
        }
      });

      tl.to(
        fill,
        {
          scaleY: 1,
          transformOrigin: "top left",
          ease: "none",
          duration: tl.duration(),
        },
        0,
      ).to({}, {});
    }, barRef);

    return () => ctx.revert();
  }, []);

  return { barRef, barListRef, barFillRef, barSlideRefs };
}
