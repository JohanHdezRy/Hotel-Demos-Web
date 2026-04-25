import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { cn } from "../../../lib/utils";
import type { GalleryImage } from "../types";

const galleryImages: GalleryImage[] = [
  {
    id: "1",
    url: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
    alt: "Restaurant ambiance",
    span: "wide",
  },
  {
    id: "2",
    url: "https://images.unsplash.com/photo-1551183053-bf91798d773c?w=600&q=80",
    alt: "Tagliolini al nero di seppia",
  },
  {
    id: "3",
    url: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=600&q=80",
    alt: "Chef in the kitchen",
    span: "tall",
  },
  {
    id: "4",
    url: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=600&q=80",
    alt: "Pappardelle al ragù",
  },
  {
    id: "5",
    url: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=600&q=80",
    alt: "Branzino",
  },
  {
    id: "6",
    url: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?w=800&q=80",
    alt: "Restaurant interior",
    span: "wide",
  },
  {
    id: "7",
    url: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=600&q=80",
    alt: "Linguine agli scampi",
  },
  {
    id: "8",
    url: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80",
    alt: "Elegant table setting",
  },
];

export default function Gallery() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".gallery-item",
        { opacity: 0, scale: 0.95 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          stagger: 0.08,
          ease: "power2.out",
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
    <section
      id="gallery"
      ref={containerRef}
      className="bg-midnight py-24 lg:py-32"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-gold-mare tracking-widest font-[var(--font-jost)] text-xs font-light uppercase block mb-4">
            Images
          </span>
          <h2 className="font-[var(--font-cormorant)] italic text-5xl lg:text-6xl text-cream">
            Gallery
          </h2>
        </div>

        {/* Masonry grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 auto-rows-[200px]">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className={cn(
                "gallery-item relative overflow-hidden group cursor-pointer",
                image.span === "wide" && "col-span-2",
                image.span === "tall" && "row-span-2",
              )}
            >
              <img
                src={image.url}
                alt={image.alt}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-midnight/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="font-[var(--font-jost)] text-cream text-xs tracking-widest uppercase">
                  {image.alt}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
