import { useContactAnimation } from "../hooks/useContactAnimation";

interface ContactBlock {
  label: string;
  lines: string[];
}

const BLOCKS: ContactBlock[] = [
  {
    label: "Address",
    lines: ["Carrer de Provença 248", "08008 Barcelona, Spain"],
  },
  {
    label: "Hours",
    lines: [
      "Monday – Friday · 8:00 – 19:00",
      "Saturday – Sunday · 9:00 – 20:00",
    ],
  },
  {
    label: "Contact",
    lines: ["hola@blossomcafe.es", "@blossomcafe_bcn"],
  },
];

export default function Contact() {
  const { sectionRef, headingRef, blocksRef } = useContactAnimation();

  return (
    <section
      id="contact"
      ref={sectionRef}
      aria-labelledby="contact-heading"
      className="bg-foam py-28 px-6"
    >
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <div ref={headingRef} className="mb-20">
          <p className="font-[var(--font-dm-sans)] text-[0.62rem] tracking-[6px] uppercase text-sage mb-4">
            Find Us
          </p>
          <h2
            id="contact-heading"
            className="font-[var(--font-dm-serif)] text-[clamp(2.4rem,5vw,3.8rem)] text-espresso leading-tight"
          >
            Come visit us
          </h2>
          <div aria-hidden="true" className="w-12 h-px bg-latte mt-6" />
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          {/* Left: contact blocks */}
          <div ref={blocksRef} className="flex flex-col gap-12">
            {BLOCKS.map((block) => (
              <div key={block.label} className="contact-block">
                <p className="font-[var(--font-dm-sans)] text-[0.6rem] tracking-[5px] uppercase text-sage/80 mb-3">
                  {block.label}
                </p>
                {block.lines.map((line) => (
                  <p
                    key={line}
                    className="font-[var(--font-dm-sans)] text-[0.95rem] text-text-cafe/80 leading-relaxed"
                  >
                    {line}
                  </p>
                ))}
              </div>
            ))}

            {/* Social + email links */}
            <div className="contact-block flex gap-6 mt-2">
              <a
                href="mailto:hola@blossomcafe.es"
                className="font-[var(--font-dm-sans)] text-[0.72rem] tracking-[2px] uppercase text-espresso border-b border-espresso/30 pb-0.5 hover:border-sage hover:text-sage transition-colors duration-300"
              >
                Email
              </a>
              <a
                href="https://instagram.com/blossomcafe_bcn"
                target="_blank"
                rel="noopener noreferrer"
                className="font-[var(--font-dm-sans)] text-[0.72rem] tracking-[2px] uppercase text-espresso border-b border-espresso/30 pb-0.5 hover:border-sage hover:text-sage transition-colors duration-300"
              >
                Instagram
              </a>
            </div>
          </div>

          {/* Right: map placeholder / decorative */}
          <div className="relative">
            <div className="aspect-square md:aspect-auto md:h-full min-h-[320px] overflow-hidden bg-latte/15 relative">
              <img
                src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=900&q=80"
                alt="Barcelona street near Blossom Café"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover opacity-75"
              />
              {/* Location tag */}
              <div className="absolute bottom-6 left-6 bg-foam/90 backdrop-blur-sm px-5 py-4">
                <p className="font-[var(--font-dm-sans)] text-[0.6rem] tracking-[4px] uppercase text-sage mb-1">
                  Eixample, Barcelona, Spain
                </p>
                <p className="font-[var(--font-dm-serif)] text-[1.05rem] text-espresso">
                  Carrer de Provença 248
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer strip */}
        <div className="mt-24 pt-10 border-t border-latte/30 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="font-[var(--font-dm-serif)] text-[1.4rem] text-espresso/25">
            Blossom Café
          </p>
          <p className="font-[var(--font-dm-sans)] text-[0.68rem] text-text-cafe/30 tracking-[2px]">
            © 2025 Blossom Café · Barcelona · Specialty Coffee & Brunch
          </p>
        </div>
      </div>
    </section>
  );
}
