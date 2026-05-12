import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { Award } from "lucide-react";

const awards = [
  {
    year: "2024",
    title: "Michelin Star",
    body: "Michelin Guide Spain & Portugal",
  },
  {
    year: "2022",
    title: "Best Italian Restaurant",
    body: "Madrid Gastronomy Awards",
  },
  {
    year: "2019",
    title: "Revelation Chef",
    body: "Lo Mejor de la Gastronomía",
  },
];

export default function ChefStory() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".chef-img-col",
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
        ".chef-text-col",
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
        ".award-item",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".awards-list",
            start: "top 80%",
          },
        },
      );
    },
    { scope: containerRef },
  );

  return (
    <section id="chef" ref={containerRef} className="bg-linen py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-[5fr_7fr] gap-16 lg:gap-24 items-center">
          {/* Image column */}
          <div className="chef-img-col relative order-2 lg:order-1">
            <div className="absolute -bottom-4 -left-4 w-full h-full border border-gold-mare/40 z-0" />
            <img
              src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=700&q=80"
              alt="Chef Marco Ricci"
              loading="lazy"
              decoding="async"
              width={700}
              height={900}
              className="relative z-10 w-full object-cover max-h-[600px]"
            />
          </div>

          {/* Text column */}
          <div className="chef-text-col order-1 lg:order-2">
            <span className="text-gold-mare tracking-widest font-[var(--font-jost)] text-xs font-light uppercase block mb-6">
              The Artist
            </span>
            <h2 className="font-[var(--font-cormorant)] italic text-5xl lg:text-6xl text-midnight leading-tight mb-6">
              Chef Marco Ricci
            </h2>
            <p className="font-[var(--font-jost)] text-text-muted-mare text-base leading-relaxed mb-5">
              Born in Bologna in 1972, Marco Ricci learned to make pasta
              alongside his grandmother before mastering the culinary arts at
              the Milan Cooking Academy. After years honing his technique in
              Rome, Naples, and Venice, he arrived in Madrid with a clear
              mission: to bring the most authentic Italy.
            </p>
            <p className="font-[var(--font-jost)] text-text-muted-mare text-base leading-relaxed mb-10">
              His philosophy is simple: respect for the ingredient, loyalty to
              tradition, and just enough boldness to surprise. At Mare e Terra,
              every dish tells a story of terroir, of sea and fertile land.
            </p>

            {/* Awards */}
            <div className="awards-list space-y-4">
              {awards.map((award) => (
                <div
                  key={award.year}
                  className="award-item flex items-start gap-4 border-b border-parchment pb-4"
                >
                  <div className="text-gold-mare mt-0.5 shrink-0">
                    <Award size={18} />
                  </div>
                  <div>
                    <div className="flex items-baseline gap-3">
                      <span className="font-[var(--font-cormorant)] italic text-lg text-midnight">
                        {award.title}
                      </span>
                      <span className="font-[var(--font-jost)] text-xs text-gold-mare">
                        {award.year}
                      </span>
                    </div>
                    <p className="font-[var(--font-jost)] text-text-muted-mare text-sm">
                      {award.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
