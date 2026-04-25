import type { CSSProperties } from "react";
import { ACCENT, BROWN, CLIMATE, MONTSERRAT } from "../data/freshboxTokens";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { useBreakpoint } from "../hooks/useBreakpoint";

export function FreshboxSloganSection() {
  const { ref, isVisible } = useScrollReveal();
  const { isMobile, isTablet } = useBreakpoint();

  const revealStyle: CSSProperties = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(0)" : "translateY(40px)",
    transition: "opacity 0.7s ease, transform 0.7s ease",
  };

  const isMobileOrTablet = isMobile || isTablet;

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      style={{
        background: BROWN,
        padding: isMobile ? "60px 20px" : isTablet ? "80px 40px" : "100px 80px",
        display: "grid",
        gridTemplateColumns: isMobileOrTablet ? "1fr" : "1fr 1fr",
        alignItems: "center",
        gap: isMobile ? 40 : isTablet ? 48 : 60,
        position: "relative",
        overflow: "hidden",
        ...revealStyle,
      }}
    >
      {/* Decorative circle */}
      <div
        style={{
          position: "absolute",
          top: -80,
          right: -80,
          width: 400,
          height: 400,
          borderRadius: "50%",
          background: ACCENT,
          opacity: 0.07,
          pointerEvents: "none",
        }}
      />

      {/* Text column */}
      <div>
        <div
          style={{
            ...MONTSERRAT(700),
            fontSize: 13,
            color: ACCENT,
            letterSpacing: 2,
            textTransform: "uppercase",
            marginBottom: 20,
          }}
        >
          Our Promise
        </div>
        <h2
          style={{
            ...CLIMATE,
            fontSize: isMobile
              ? "clamp(28px, 7vw, 40px)"
              : "clamp(36px, 3.5vw, 60px)",
            color: "#fff",
            lineHeight: 1.15,
          }}
        >
          Sit, Savor, or Order Fast —<br />
          <em style={{ color: ACCENT, fontStyle: "normal" }}>
            {" "}
            Your Meal, Your Rules.
          </em>
        </h2>
        <p
          style={{
            ...MONTSERRAT(300),
            marginTop: 24,
            fontSize: isMobile ? 15 : 16,
            lineHeight: 1.7,
            color: "rgba(255,255,255,0.6)",
            maxWidth: 420,
          }}
        >
          Whether you're dining in with your family or grabbing something on the
          go, every FreshBox meal is made with the same love and care.
        </p>
        <button
          style={{
            ...MONTSERRAT(700),
            marginTop: 36,
            background: ACCENT,
            color: "#fff",
            border: "none",
            borderRadius: 999,
            padding: isMobile ? "14px 0" : "14px 36px",
            fontSize: 15,
            cursor: "pointer",
            boxShadow: `0 8px 24px ${ACCENT}55`,
            width: isMobile ? "100%" : "auto",
          }}
        >
          See Our Story
        </button>
      </div>

      {/* Image column */}
      <div style={{ position: "relative" }}>
        <img
          src="https://cdn.pixabay.com/photo/2022/01/23/16/34/drink-6961361_1280.jpg"
          alt="Restaurant atmosphere"
          style={{
            width: "100%",
            borderRadius: 24,
            objectFit: "cover",
            height: isMobile ? 240 : isTablet ? 340 : 420,
            display: "block",
          }}
        />
        {/* Stats badge */}
        <div
          style={{
            position: "absolute",
            bottom: isMobile ? -16 : -20,
            left: isMobile ? 16 : -20,
            background: ACCENT,
            borderRadius: 16,
            padding: isMobile ? "14px 20px" : "20px 28px",
            boxShadow: "0 12px 40px rgba(0,0,0,0.3)",
          }}
        >
          <div
            style={{
              ...CLIMATE,
              fontSize: isMobile ? 24 : 32,
              color: "#fff",
            }}
          >
            25+
          </div>
          <div
            style={{
              ...MONTSERRAT(400),
              fontSize: 13,
              color: "rgba(255,255,255,0.85)",
            }}
          >
            Years Serving Families
          </div>
        </div>
      </div>
    </section>
  );
}
