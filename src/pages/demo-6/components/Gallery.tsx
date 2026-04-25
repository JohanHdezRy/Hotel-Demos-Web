import { useGalleryAnimation } from "../hooks/useGalleryAnimation";
import { cn } from "../../../lib/utils";

interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  span: string; // tailwind col/row span classes
}

const IMAGES: GalleryImage[] = [
  {
    id: "g1",
    src: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=900&q=80",
    alt: "Espresso in white cup with crema",
    span: "col-span-2 row-span-2",
  },
  {
    id: "g2",
    src: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=700&q=80",
    alt: "Latte art closeup",
    span: "col-span-1 row-span-1",
  },
  {
    id: "g3",
    src: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=700&q=80",
    alt: "Café interior with wooden tables",
    span: "col-span-1 row-span-2",
  },
  {
    id: "g4",
    src: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=700&q=80",
    alt: "Avocado toast brunch plate",
    span: "col-span-1 row-span-1",
  },
  {
    id: "g5",
    src: "https://images.unsplash.com/photo-1484723091739-30990a88d44b?w=700&q=80",
    alt: "Pastries on marble counter",
    span: "col-span-1 row-span-1",
  },
  {
    id: "g6",
    src: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=700&q=80",
    alt: "Morning coffee ritual",
    span: "col-span-1 row-span-1",
  },
];

export default function Gallery() {
  const { sectionRef, headingRef, gridRef } = useGalleryAnimation();

  return (
    <section
      id="gallery"
      ref={sectionRef}
      aria-labelledby="gallery-heading"
      className="bg-petal py-28 px-6"
    >
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <div
          ref={headingRef}
          className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6"
        >
          <div>
            <p className="font-[var(--font-dm-sans)] text-[0.62rem] tracking-[6px] uppercase text-sage mb-4">
              Gallery
            </p>
            <h2
              id="gallery-heading"
              className="font-[var(--font-dm-serif)] text-[clamp(2.4rem,5vw,3.8rem)] text-espresso leading-tight"
            >
              Every detail matters
            </h2>
            <div aria-hidden="true" className="w-12 h-px bg-latte mt-6" />
          </div>
          <p className="font-[var(--font-dm-sans)] text-[0.82rem] text-text-cafe/50 max-w-xs leading-relaxed md:text-right">
            From the first grind of the morning to the last pastry on the shelf
            — crafted with care, every single day.
          </p>
        </div>

        {/* Asymmetric grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-3 grid-rows-3 gap-3 h-[680px] md:h-[720px]"
        >
          {IMAGES.map((img) => (
            <figure
              key={img.id}
              className={cn(
                "gallery-cell group relative overflow-hidden bg-latte/20",
                img.span,
              )}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
              />
              {/* Hover overlay */}
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-espresso/0 group-hover:bg-espresso/25 transition-colors duration-500 ease-out"
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
