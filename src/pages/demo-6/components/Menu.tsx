import { menuData } from "../data/menuData";
import { useScrollReveal } from "../../../hooks/useScrollReveal";
import { useMenuAnimation } from "../hooks/useMenuAnimation";
import { cn } from "../../../lib/utils";

export default function Menu() {
  const { ref: sectionRef, isVisible: sectionVisible } =
    useScrollReveal<HTMLElement>({ threshold: 0.06 });
  const { activeCategory, setActiveCategory, activeData, headingRef, listRef } =
    useMenuAnimation();

  return (
    <section
      id="menu"
      ref={sectionRef}
      aria-labelledby="menu-heading"
      className={cn(
        "bg-foam py-28 px-6 transition-opacity duration-700",
        sectionVisible ? "opacity-100" : "opacity-0",
      )}
    >
      <div className="max-w-5xl mx-auto">
        {/* Section heading */}
        <div ref={headingRef} className="mb-16">
          <p className="font-[var(--font-dm-sans)] text-[0.62rem] tracking-[6px] uppercase text-sage mb-4">
            Our Menu
          </p>
          <h2
            id="menu-heading"
            className="font-[var(--font-dm-serif)] text-[clamp(2.4rem,5vw,3.8rem)] text-espresso leading-tight"
          >
            Made with intention
          </h2>
          <div aria-hidden="true" className="w-12 h-px bg-latte mt-6" />
        </div>

        {/* Category tabs */}
        <div
          role="tablist"
          aria-label="Menu categories"
          className="flex gap-0 mb-14 border-b border-latte/40"
        >
          {menuData.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls={`menu-panel-${cat.id}`}
                id={`menu-tab-${cat.id}`}
                onClick={() => setActiveCategory(cat.id)}
                className={cn(
                  "font-[var(--font-dm-sans)] text-[0.75rem] tracking-[3px] uppercase pb-4 pr-10 transition-all duration-300 border-b-2 -mb-px",
                  isActive
                    ? "text-espresso border-espresso"
                    : "text-text-cafe/40 border-transparent hover:text-text-cafe/70",
                )}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {activeData && (
          <div
            role="tabpanel"
            id={`menu-panel-${activeData.id}`}
            aria-labelledby={`menu-tab-${activeData.id}`}
          >
            {/* Category sublabel */}
            <p className="font-[var(--font-dm-sans)] text-[0.78rem] text-text-cafe/50 mb-10 italic">
              {activeData.sublabel}
            </p>

            {/* Menu items list */}
            <ul ref={listRef} className="divide-y divide-latte/30">
              {activeData.items.map((item) => (
                <li
                  key={item.id}
                  className="group flex items-start justify-between gap-8 py-7"
                >
                  <div className="flex-1 min-w-0">
                    <h3 className="font-[var(--font-dm-serif)] text-[1.15rem] text-espresso mb-1 group-hover:text-sage transition-colors duration-300">
                      {item.name}
                    </h3>
                    <p className="font-[var(--font-dm-sans)] text-[0.82rem] text-text-cafe/55 leading-relaxed max-w-lg">
                      {item.description}
                    </p>
                  </div>
                  <span className="font-[var(--font-dm-sans)] text-[0.88rem] text-text-cafe/70 font-medium whitespace-nowrap pt-0.5 min-w-[56px] text-right">
                    {item.price}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Footer note */}
        <p className="font-[var(--font-dm-sans)] text-[0.7rem] text-text-cafe/35 mt-12 pt-8 border-t border-latte/25 italic">
          All pastries baked in-house. Oat, soy & almond milk available.
          Seasonal items may vary.
        </p>
      </div>
    </section>
  );
}
