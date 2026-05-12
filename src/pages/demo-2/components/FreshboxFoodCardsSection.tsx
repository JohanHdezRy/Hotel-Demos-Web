import { useState } from "react";
import type { CSSProperties } from "react";
import {
  ACCENT,
  BROWN,
  CREAM,
  CLIMATE,
  MONTSERRAT,
} from "../data/freshboxTokens";
import { FOOD_CARDS } from "../data/freshboxMenuData";
import { useScrollReveal } from "../../../hooks/useScrollReveal";
import { useBreakpoint } from "../hooks/useBreakpoint";

export function FreshboxFoodCardsSection() {
  const [hovered, setHovered] = useState<number | null>(null);
  const { ref, isVisible } = useScrollReveal();
  const { isMobile, isTablet } = useBreakpoint();

  const revealStyle: CSSProperties = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(0)" : "translateY(40px)",
    transition: "opacity 0.7s ease, transform 0.7s ease",
  };

  // On mobile: single column; on tablet/desktop: 2 columns
  const gridCols = isMobile ? 1 : 2;

  return (
    <section
      ref={ref}
      style={{
        padding: isMobile ? "60px 16px" : isTablet ? "80px 32px" : "100px 60px",
        background: CREAM,
        ...revealStyle,
      }}
    >
      {/* Section header */}
      <div
        style={{
          textAlign: "center",
          marginBottom: isMobile ? 36 : 56,
        }}
      >
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
          In Every Plate
        </div>
        <h2
          style={{
            ...CLIMATE,
            fontSize: isMobile
              ? "clamp(28px, 8vw, 44px)"
              : "clamp(32px, 3vw, 54px)",
            color: BROWN,
          }}
        >
          Made with Love
        </h2>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${gridCols}, 1fr)`,
          gap: isMobile ? 14 : 20,
          maxWidth: 1100,
          margin: "0 auto",
        }}
      >
        {FOOD_CARDS.map((card, i) => {
          // On mobile all cards are same height; first card is taller on tablet+
          const cardHeight = isMobile
            ? 220
            : i === 0
              ? isTablet
                ? 320
                : 400
              : isTablet
                ? 240
                : 280;

          return (
            <div
              key={i}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{
                position: "relative",
                borderRadius: isMobile ? 18 : 24,
                overflow: "hidden",
                height: cardHeight,
                cursor: "pointer",
                transform: hovered === i ? "scale(1.015)" : "scale(1)",
                transition: "transform 0.35s ease",
                boxShadow:
                  hovered === i
                    ? "0 24px 60px rgba(30,15,0,0.18)"
                    : "0 6px 20px rgba(30,15,0,0.08)",
              }}
            >
              <img
                src={card.img}
                alt={card.phrase}
                loading="lazy"
                decoding="async"
                width={700}
                height={500}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                  transform: hovered === i ? "scale(1.07)" : "scale(1)",
                  transition: "transform 0.5s ease",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: card.dark
                    ? "linear-gradient(135deg, rgba(30,15,0,0.75) 0%, rgba(30,15,0,0.3) 100%)"
                    : "linear-gradient(135deg, rgba(245,162,0,0.55) 0%, rgba(30,15,0,0.4) 100%)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: isMobile ? 20 : 32,
                }}
              >
                <p
                  style={{
                    ...CLIMATE,
                    fontSize: isMobile
                      ? 20
                      : i === 0
                        ? isTablet
                          ? 26
                          : 32
                        : isTablet
                          ? 18
                          : 22,
                    color: "#fff",
                    lineHeight: 1.2,
                    whiteSpace: "pre-line",
                  }}
                >
                  {card.phrase}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
