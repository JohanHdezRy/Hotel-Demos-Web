import { useHeroAnimation } from "../hooks/useHeroAnimation";

export default function Hero() {
  const {
    containerRef,
    overlayRef,
    logoRef,
    taglineRef,
    scrollHintRef,
    rulerRef,
  } = useHeroAnimation();

  return (
    <section
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden flex items-center justify-center"
      aria-label="Blossom Café introduction"
    >
      {/* Background photo */}
      <img
        src="https://images.unsplash.com/photo-1445116572660-236099ec97a0?w=1800&q=85"
        alt="Blossom Café interior with warm lighting and wooden tables"
        className="absolute inset-0 w-full h-full object-cover"
        fetchPriority="high"
        loading="eager"
        decoding="async"
      />

      {/* Tint overlay */}
      <div ref={overlayRef} className="absolute inset-0 bg-espresso/55" />

      {/* Grain texture layer for tactile warmth */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.04] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJuIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iMC43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNuKSIvPjwvc3ZnPg==')]"
      />

      {/* Centered content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6">
        {/* Horizontal rule */}
        <div
          ref={rulerRef}
          aria-hidden="true"
          className="w-16 h-px bg-latte/60 mb-10"
        />

        {/* Wordmark */}
        <div ref={logoRef} className="mb-6">
          <p className="font-[var(--font-dm-sans)] text-[0.65rem] tracking-[6px] uppercase text-latte/80 mb-4">
            Barcelona · Specialty Coffee
          </p>
          <h1 className="font-[var(--font-dm-serif)] text-[clamp(3.8rem,9vw,8rem)] text-foam leading-none tracking-tight">
            Blossom
          </h1>
          <p className="font-[var(--font-dm-serif)] text-[clamp(1.1rem,2.8vw,2rem)] text-latte italic tracking-widest mt-1">
            Café
          </p>
        </div>

        {/* Tagline */}
        <p
          ref={taglineRef}
          className="font-[var(--font-dm-sans)] text-[0.82rem] tracking-[3px] text-foam/60 uppercase max-w-xs leading-relaxed"
        >
          Good coffee. Simple food. A place to breathe.
        </p>

        {/* Bottom rule */}
        <div aria-hidden="true" className="w-16 h-px bg-latte/40 mt-10" />
      </div>

      {/* Scroll hint */}
      <div
        ref={scrollHintRef}
        aria-hidden="true"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="font-[var(--font-dm-sans)] text-[0.58rem] tracking-[4px] uppercase text-foam/35">
          Scroll
        </span>
        <div className="w-px h-10 bg-foam/25 animate-[scrollPulse_2s_ease-in-out_infinite]" />
      </div>
    </section>
  );
}
