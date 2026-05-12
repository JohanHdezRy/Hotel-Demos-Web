import type { CSSProperties } from "react";
import {
  ACCENT,
  BROWN,
  WARM_MID,
  CLIMATE,
  MONTSERRAT,
} from "../data/freshboxTokens";
import { CATEGORIES, MENU } from "../data/freshboxMenuData";
import { useScrollReveal } from "../../../hooks/useScrollReveal";
import { useBreakpoint } from "../hooks/useBreakpoint";
import { useMenuFilter } from "../hooks/useMenuFilter";

export function FreshboxMenuSection() {
  const { active, setActive, hovered, setHovered, filtered } =
    useMenuFilter(MENU);
  const { ref, isVisible } = useScrollReveal();
  const { isMobile, isTablet } = useBreakpoint();

  const revealStyle: CSSProperties = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(0)" : "translateY(40px)",
    transition: "opacity 0.7s ease, transform 0.7s ease",
  };

  // Grid columns: 1 on mobile, 2 on tablet, 4 on desktop
  const gridCols = isMobile ? 1 : isTablet ? 2 : 4;
  // On desktop keep the bento-style large span; on smaller viewports flatten
  const useBento = !isMobile && !isTablet;

  // Card height varies per breakpoint
  const cardHeight = isMobile ? 220 : isTablet ? 200 : 260;

  return (
    <section
      id="menu"
      ref={ref}
      style={{
        padding: isMobile ? "60px 16px" : isTablet ? "80px 32px" : "100px 60px",
        background: "#fff",
        ...revealStyle,
      }}
    >
      {/* Section header */}
      <div style={{ textAlign: "center", marginBottom: isMobile ? 36 : 60 }}>
        <div
          style={{
            ...MONTSERRAT(700),
            fontSize: 13,
            color: ACCENT,
            letterSpacing: 2,
            textTransform: "uppercase",
            marginBottom: 12,
          }}
        >
          Daily Curated
        </div>
        <h2
          style={{
            ...CLIMATE,
            fontSize: isMobile
              ? "clamp(28px, 8vw, 48px)"
              : "clamp(36px,4vw,64px)",
            color: BROWN,
            lineHeight: 1.1,
          }}
        >
          Our Menu
        </h2>
      </div>

      {/* Category pills — horizontal scroll on mobile/tablet */}
      <div
        className={isMobile || isTablet ? "freshbox-tabs-scroll" : ""}
        style={{
          display: "flex",
          gap: 10,
          marginBottom: isMobile ? 32 : 56,
          // On mobile/tablet: scrollable strip; on desktop: centered wrap
          ...(isMobile || isTablet
            ? {
                overflowX: "auto",
                WebkitOverflowScrolling: "touch",
                scrollbarWidth: "none",
                msOverflowStyle: "none",
                paddingBottom: 4,
                // Stretch to full bleed past section padding
                marginLeft: isMobile ? -16 : -32,
                marginRight: isMobile ? -16 : -32,
                paddingLeft: isMobile ? 16 : 32,
                paddingRight: isMobile ? 16 : 32,
              }
            : {
                justifyContent: "center",
                flexWrap: "wrap",
              }),
        }}
      >
        {CATEGORIES.map((c) => (
          <button
            key={c.id}
            onClick={() => setActive(c.id)}
            style={{
              ...MONTSERRAT(700),
              display: "flex",
              alignItems: "center",
              gap: 6,
              padding: isMobile ? "8px 16px" : "10px 22px",
              borderRadius: 999,
              border: active === c.id ? "none" : "1.5px solid #E8DDD0",
              background: active === c.id ? ACCENT : "#fff",
              color: active === c.id ? "#fff" : WARM_MID,
              fontSize: isMobile ? 13 : 14,
              cursor: "pointer",
              boxShadow: active === c.id ? `0 4px 16px ${ACCENT}44` : "none",
              transition: "all 0.2s",
              // Prevent shrinking in scroll container
              flexShrink: 0,
              whiteSpace: "nowrap",
            }}
          >
            <span>{c.emoji}</span> {c.label}
          </button>
        ))}
      </div>

      {/* Menu Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${gridCols}, 1fr)`,
          gridAutoRows: cardHeight,
          gap: isMobile ? 12 : 16,
          maxWidth: 1200,
          margin: "0 auto",
        }}
      >
        {filtered.map((item, i) => {
          // Bento large card only on desktop when it's the first item
          const isLarge = useBento && item.size === "large" && i === 0;
          return (
            <div
              key={item.id}
              onMouseEnter={() => setHovered(item.id)}
              onMouseLeave={() => setHovered(null)}
              style={{
                gridColumn: isLarge ? "span 2" : "span 1",
                gridRow: isLarge ? "span 2" : "span 1",
                borderRadius: isMobile ? 16 : 20,
                overflow: "hidden",
                position: "relative",
                cursor: "pointer",
                transform: hovered === item.id ? "scale(1.02)" : "scale(1)",
                transition: "transform 0.3s ease",
                boxShadow:
                  hovered === item.id
                    ? "0 20px 48px rgba(30,15,0,0.18)"
                    : "0 4px 16px rgba(30,15,0,0.06)",
              }}
            >
              <img
                src={item.img}
                alt={item.name}
                loading="lazy"
                decoding="async"
                width={700}
                height={500}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                  transform: hovered === item.id ? "scale(1.06)" : "scale(1)",
                  transition: "transform 0.5s ease",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    hovered === item.id
                      ? "linear-gradient(to top, rgba(30,15,0,0.85) 0%, rgba(30,15,0,0.2) 60%, transparent 100%)"
                      : "linear-gradient(to top, rgba(30,15,0,0.7) 0%, transparent 60%)",
                  transition: "background 0.3s",
                }}
              />
              {item.tag !== undefined && item.tag !== "" && (
                <div
                  style={{
                    ...MONTSERRAT(700),
                    position: "absolute",
                    top: 12,
                    left: 12,
                    background: ACCENT,
                    color: "#fff",
                    fontSize: 11,
                    padding: "4px 10px",
                    borderRadius: 999,
                    letterSpacing: 0.5,
                  }}
                >
                  {item.tag}
                </div>
              )}
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: isLarge ? 28 : isMobile ? 14 : 18,
                }}
              >
                <div
                  style={{
                    ...CLIMATE,
                    fontSize: isLarge ? 28 : isMobile ? 16 : 18,
                    color: "#fff",
                    marginBottom: 4,
                  }}
                >
                  {item.name}
                </div>
                {hovered === item.id && (
                  <div
                    style={{
                      ...MONTSERRAT(300),
                      fontSize: 13,
                      color: "rgba(255,255,255,0.7)",
                      marginBottom: 8,
                    }}
                  >
                    {item.desc}
                  </div>
                )}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <span
                    style={{
                      ...MONTSERRAT(700),
                      color: ACCENT,
                      fontSize: isLarge ? 22 : 16,
                    }}
                  >
                    {item.price}
                  </span>
                  {hovered === item.id && (
                    <button
                      style={{
                        ...MONTSERRAT(700),
                        background: "#fff",
                        color: BROWN,
                        border: "none",
                        borderRadius: 999,
                        padding: "6px 16px",
                        fontSize: 12,
                        cursor: "pointer",
                      }}
                    >
                      + Add
                    </button>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
