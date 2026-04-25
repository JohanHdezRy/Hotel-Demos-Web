import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { cn } from "../../../lib/utils";
import { useMenuTabs } from "../hooks/useMenuTabs";

export default function MenuSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { menuTabs, activeTab, activeTabData, changeTab, contentRef } =
    useMenuTabs();

  useGSAP(
    () => {
      gsap.fromTo(
        ".menu-header",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
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
    <section
      id="menu"
      ref={containerRef}
      className="bg-midnight py-24 lg:py-32"
    >
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="menu-header text-center mb-14">
          <span className="text-gold-mare tracking-widest font-[var(--font-jost)] text-xs font-light uppercase block mb-4">
            Our Menu
          </span>
          <h2 className="font-[var(--font-cormorant)] italic text-5xl lg:text-6xl text-cream mb-3">
            The Menu
          </h2>
          <p className="font-[var(--font-jost)] text-cream/50 text-sm tracking-wide">
            Spring — Summer 2026 Season
          </p>
        </div>

        {/* Tabs */}
        <div className="flex items-center justify-center gap-0 border-b border-gold-mare/20 mb-10 overflow-x-auto">
          {menuTabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => changeTab(tab.id)}
              className={cn(
                "px-6 py-4 font-[var(--font-jost)] text-sm tracking-widest uppercase transition-all duration-300 whitespace-nowrap border-b-2 -mb-px",
                activeTab === tab.id
                  ? "border-gold-mare text-cream"
                  : "border-transparent text-cream/50 hover:text-cream/80",
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Menu items */}
        <div ref={contentRef}>
          <div className="grid md:grid-cols-2 gap-0">
            {activeTabData.items.map((item, index) => (
              <div
                key={item.id}
                className={cn(
                  "flex justify-between items-start py-5 px-2",
                  "border-b border-gold-mare/10",
                  index % 2 === 0
                    ? "md:pr-8"
                    : "md:pl-8 md:border-l md:border-l-gold-mare/10",
                )}
              >
                <div className="flex-1 mr-4">
                  <h3 className="font-[var(--font-cormorant)] italic text-xl text-cream leading-tight mb-1">
                    {item.name}
                  </h3>
                  <p className="font-[var(--font-jost)] text-cream/60 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <span className="font-[var(--font-jost)] text-terracotta font-medium text-base shrink-0 mt-1">
                  {item.price} €
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Download CTA */}
        <div className="text-center mt-14">
          <a
            href="#reservations"
            className="inline-block border border-gold-mare/50 text-gold-mare hover:bg-gold-mare hover:text-midnight transition-all duration-300 px-10 py-4 font-[var(--font-jost)] text-xs tracking-widest uppercase"
          >
            View Full Menu — Reserve
          </a>
        </div>
      </div>
    </section>
  );
}
