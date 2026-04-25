import type { CSSProperties } from "react";
import {
  ACCENT,
  BROWN,
  CREAM,
  CLIMATE,
  MONTSERRAT,
} from "../data/freshboxTokens";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { useBreakpoint } from "../hooks/useBreakpoint";
import burger from "../../../styles/img/demo-2/burger.png";

const lines = ["FLAVOR that", "makes", "HISTORY!"];

export function FreshboxHero() {
  const { ref, isVisible } = useScrollReveal(0.1);
  const { isMobile, isTablet } = useBreakpoint();

  const revealStyle: CSSProperties = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(0)" : "translateY(40px)",
    transition: "opacity 0.7s ease, transform 0.7s ease",
  };

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      style={{
        minHeight: "100vh",
        background: CREAM,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: isMobile
          ? "90px 20px 60px"
          : isTablet
          ? "100px 32px 60px"
          : "100px 40px 60px",
        position: "relative",
        overflow: "hidden",
        ...revealStyle,
      }}
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          maxWidth: 1200,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* Giant stacked text */}
        <div
          style={{
            width: "100%",
            textAlign: "center",
            lineHeight: 0.88,
            userSelect: "none",
          }}
        >
          {lines.map((line, i) => (
            <div
              key={i}
              style={{
                ...CLIMATE,
                // Tighten clamp floor on mobile to keep 3 lines from overflowing
                fontSize: isMobile
                  ? "clamp(48px, 14vw, 80px)"
                  : isTablet
                  ? "clamp(64px, 12vw, 120px)"
                  : "clamp(80px, 14vw, 180px)",
                color: i === lines.length - 1 ? ACCENT : BROWN,
                display: "block",
                letterSpacing: isMobile ? 1 : 3,
                position: "relative",
                zIndex: i < 2 ? 3 : 1,
              }}
            >
              {line}
            </div>
          ))}
        </div>

        {/* Burger images — hidden on mobile to keep layout clean */}
        {!isMobile && (
          <>
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "100%",
                transform: "translate(-50%, -50%) scaleX(-1)",
                zIndex: 2,
                width: isTablet ? "clamp(160px, 24%, 280px)" : "clamp(240px, 32%, 420px)",
                pointerEvents: "none",
              }}
            >
              <img
                src={burger}
                alt="Delicious burger"
                style={{
                  width: "100%",
                  borderRadius: 20,
                  objectFit: "cover",
                  aspectRatio: "3/4",
                  display: "block",
                }}
              />
            </div>
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "0%",
                transform: "translate(-50%, -50%)",
                zIndex: 2,
                width: isTablet ? "clamp(160px, 24%, 280px)" : "clamp(240px, 32%, 420px)",
                pointerEvents: "none",
              }}
            >
              <img
                src={burger}
                alt="Delicious burger"
                style={{
                  width: "100%",
                  borderRadius: 20,
                  objectFit: "cover",
                  aspectRatio: "3/4",
                  display: "block",
                }}
              />
            </div>
          </>
        )}

        {/* Mobile: single centered burger image below text */}
        {isMobile && (
          <div
            style={{
              marginTop: 32,
              width: "min(260px, 70vw)",
              pointerEvents: "none",
            }}
          >
            <img
              src={burger}
              alt="Delicious burger"
              style={{
                width: "100%",
                borderRadius: 20,
                objectFit: "cover",
                aspectRatio: "3/4",
                display: "block",
              }}
            />
          </div>
        )}
      </div>

      {/* CTAs */}
      <div
        style={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          gap: 12,
          alignItems: "center",
          marginTop: isMobile ? 28 : 48,
          position: "relative",
          zIndex: 4,
          width: isMobile ? "100%" : "auto",
          maxWidth: isMobile ? 320 : "none",
        }}
      >
        <button
          style={{
            ...MONTSERRAT(700),
            background: ACCENT,
            color: "#fff",
            border: "none",
            borderRadius: 999,
            padding: isMobile ? "14px 0" : "14px 36px",
            fontSize: 15,
            cursor: "pointer",
            boxShadow: `0 8px 24px ${ACCENT}55`,
            letterSpacing: 0.5,
            width: isMobile ? "100%" : "auto",
          }}
        >
          ORDER NOW
        </button>
        <button
          style={{
            ...MONTSERRAT(700),
            background: "transparent",
            color: BROWN,
            border: `2px solid ${BROWN}`,
            borderRadius: 999,
            padding: isMobile ? "12px 0" : "12px 28px",
            fontSize: 15,
            cursor: "pointer",
            width: isMobile ? "100%" : "auto",
          }}
        >
          VIEW MENU
        </button>
      </div>
    </section>
  );
}
