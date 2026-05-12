import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { cn } from "../../../lib/utils";
import { dishes } from "../data/dishesData";
import type { Dish } from "../types";

const badgeStyles: Record<Dish["badge"], string> = {
  Signature: "bg-gold-mare text-midnight",
  "Chef's Choice": "bg-ocean text-white",
  Seasonal: "bg-copper text-white",
};

export default function SignatureDishes() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".dish-card",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
          },
        },
      );
    },
    { scope: containerRef },
  );

  return (
    <section id="dishes" ref={containerRef} className="bg-cream py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-gold-mare tracking-widest font-[var(--font-jost)] text-xs font-light uppercase block mb-4">
            Highlights
          </span>
          <h2 className="font-[var(--font-cormorant)] italic text-5xl lg:text-6xl text-midnight">
            Signature Dishes
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {dishes.map((dish) => (
            <div
              key={dish.id}
              className="dish-card group bg-white shadow-sm hover:shadow-xl transition-shadow duration-500 overflow-hidden"
            >
              {/* Image */}
              <div className="relative overflow-hidden h-56">
                <img
                  src={dish.imageUrl}
                  alt={dish.name}
                  loading="lazy"
                  decoding="async"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span
                  className={cn(
                    "absolute top-3 left-3 text-xs font-[var(--font-jost)] tracking-widest uppercase px-3 py-1",
                    badgeStyles[dish.badge],
                  )}
                >
                  {dish.badge}
                </span>
              </div>

              {/* Info */}
              <div className="p-5">
                <h3 className="font-[var(--font-cormorant)] italic text-xl text-midnight mb-2 leading-tight">
                  {dish.name}
                </h3>
                <p className="font-[var(--font-jost)] text-text-muted-mare text-sm leading-relaxed mb-4">
                  {dish.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="font-[var(--font-jost)] text-terracotta font-medium text-lg">
                    {dish.price} €
                  </span>
                  <a
                    href="#reservations"
                    className="text-xs font-[var(--font-jost)] tracking-widest uppercase text-walnut hover:text-terracotta transition-colors duration-300 border-b border-walnut/40 hover:border-terracotta pb-0.5"
                  >
                    Reserve
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
