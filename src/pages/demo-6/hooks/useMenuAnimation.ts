import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { menuData } from "../data/menuData";

gsap.registerPlugin(ScrollTrigger);

const DEFAULT_CATEGORY_ID = "cafes";

export function useMenuAnimation() {
  const [activeCategory, setActiveCategory] = useState<string>(DEFAULT_CATEGORY_ID);
  const headingRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  const activeData = menuData.find((c) => c.id === activeCategory);

  // Heading reveal on scroll
  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!headingRef.current) return;
      gsap.from(headingRef.current, {
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 85%",
          once: true,
        },
        opacity: 0,
        y: 32,
        duration: 0.9,
        ease: "power3.out",
      });
    });
    return () => ctx.revert();
  }, []);

  // Animate list items on category change
  useEffect(() => {
    if (!listRef.current) return;
    const items = listRef.current.querySelectorAll("li");
    const ctx = gsap.context(() => {
      gsap.fromTo(
        items,
        { opacity: 0, y: 18 },
        {
          opacity: 1,
          y: 0,
          duration: 0.55,
          stagger: 0.07,
          ease: "power2.out",
        },
      );
    }, listRef);
    return () => ctx.revert();
  }, [activeCategory]);

  return {
    activeCategory,
    setActiveCategory,
    activeData,
    headingRef,
    listRef,
  };
}
