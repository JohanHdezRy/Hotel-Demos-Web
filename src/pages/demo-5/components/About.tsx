import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

const stats = [
  { label: "Years of experience", value: "22" },
  { label: "Average rating", value: "4.8" },
  { label: "International awards", value: "12" },
];

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".about-text-col",
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
          },
        },
      );
      gsap.fromTo(
        ".about-img-col",
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
          },
        },
      );
      gsap.fromTo(
        ".about-stat",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".about-stats",
            start: "top 80%",
          },
        },
      );
    },
    { scope: containerRef },
  );

  return (
    <section id="about" ref={containerRef} className="bg-linen py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-[5fr_7fr] gap-16 lg:gap-24 items-center">
          {/* Text column */}
          <div className="about-text-col">
            <span className="text-gold-mare tracking-widest font-[var(--font-jost)] text-xs font-light uppercase block mb-6">
              Our Story
            </span>
            <h2 className="font-[var(--font-cormorant)] italic text-5xl lg:text-6xl text-midnight leading-tight mb-8">
              Where the sea
              <br /> meets the land
            </h2>
            <p className="font-[var(--font-jost)] text-text-muted-mare text-base leading-relaxed mb-6">
              Founded in 2002 by Chef Marco Ricci, Mare e Terra was born from an
              obsession: to prove that handmade pasta and Atlantic seafood could
              coexist in perfect harmony on the same plate, guided by the
              immutable principles of Italian tradition.
            </p>
            <p className="font-[var(--font-jost)] text-text-muted-mare text-base leading-relaxed mb-10">
              Every morning, our team handcrafts the pasta in our open kitchen.
              Every afternoon, the finest seafood arrives directly from the
              docks of Galicia and the Mediterranean. The result is honest,
              elegant, and deeply Italian cuisine.
            </p>

            {/* Stats */}
            <div className="about-stats grid grid-cols-3 gap-6 border-t border-parchment pt-8">
              {stats.map((stat) => (
                <div key={stat.label} className="about-stat text-center">
                  <div className="font-[var(--font-cormorant)] text-4xl lg:text-5xl text-terracotta italic mb-1">
                    {stat.value}
                  </div>
                  <div className="font-[var(--font-jost)] text-text-muted-mare text-xs tracking-wide uppercase">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image column */}
          <div className="about-img-col relative">
            <div className="absolute -top-4 -right-4 w-full h-full border border-gold-mare/30 z-0" />
            <img
              src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?w=900&q=80"
              alt="Interior of Mare e Terra restaurant"
              loading="lazy"
              className="relative z-10 w-full h-full object-cover max-h-[600px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
