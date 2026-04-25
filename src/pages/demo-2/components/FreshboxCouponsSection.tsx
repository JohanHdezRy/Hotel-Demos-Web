import { useState } from "react";
import type { CSSProperties } from "react";
import {
  ACCENT,
  BROWN,
  CREAM,
  CLIMATE,
  MONTSERRAT,
} from "../data/freshboxTokens";
import { COUPONS } from "../data/freshboxMenuData";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { useBreakpoint } from "../hooks/useBreakpoint";

export function FreshboxCouponsSection() {
  const [copied, setCopied] = useState<string | null>(null);
  const { ref, isVisible } = useScrollReveal();
  const { isMobile, isTablet } = useBreakpoint();

  const copy = (code: string) => {
    navigator.clipboard?.writeText(code).catch(() => {});
    setCopied(code);
    setTimeout(() => setCopied(null), 2000);
  };

  const revealStyle: CSSProperties = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(0)" : "translateY(40px)",
    transition: "opacity 0.7s ease, transform 0.7s ease",
  };

  // 1 col mobile, 2 col tablet, 3 col desktop
  const gridCols = isMobile ? 1 : isTablet ? 2 : 3;

  return (
    <section
      id="coupons"
      ref={ref as React.RefObject<HTMLElement>}
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
          Save Big
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
          More Bites, More Savings!
        </h2>
        <p
          style={{
            ...MONTSERRAT(300),
            marginTop: 16,
            fontSize: isMobile ? 14 : 16,
            color: "#8C6040",
          }}
        >
          Clip a coupon and enjoy a little extra love from our kitchen.
        </p>
      </div>

      {/* Coupon cards grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${gridCols}, 1fr)`,
          gap: isMobile ? 16 : 24,
          maxWidth: 1100,
          margin: "0 auto",
        }}
      >
        {COUPONS.map((c) => (
          <div
            key={c.code}
            style={{
              background: c.color,
              borderRadius: isMobile ? 18 : 24,
              padding: isMobile ? "28px 24px" : "36px 32px",
              position: "relative",
              overflow: "hidden",
              boxShadow: `0 12px 40px ${c.color}44`,
            }}
          >
            {/* Ticket notch left */}
            <div
              style={{
                position: "absolute",
                left: -1,
                top: "50%",
                transform: "translateY(-50%)",
                width: 20,
                height: 40,
                background: "#fff",
                borderRadius: "0 999px 999px 0",
                zIndex: 2,
              }}
            />
            {/* Ticket notch right */}
            <div
              style={{
                position: "absolute",
                right: -1,
                top: "50%",
                transform: "translateY(-50%)",
                width: 20,
                height: 40,
                background: "#fff",
                borderRadius: "999px 0 0 999px",
                zIndex: 2,
              }}
            />
            <div
              style={{
                borderBottom: "2px dashed rgba(255,255,255,0.3)",
                marginBottom: 20,
                paddingBottom: 20,
              }}
            >
              <div
                style={{
                  ...CLIMATE,
                  fontSize: isMobile ? 26 : 30,
                  color: "#fff",
                  lineHeight: 1.1,
                }}
              >
                {c.off}
              </div>
            </div>
            <div
              style={{
                ...MONTSERRAT(300),
                fontSize: 14,
                color: "rgba(255,255,255,0.85)",
                lineHeight: 1.5,
                marginBottom: 20,
              }}
            >
              {c.desc}
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: 24,
              }}
            >
              <div
                style={{
                  ...MONTSERRAT(300),
                  fontSize: 12,
                  color: "rgba(255,255,255,0.6)",
                }}
              >
                Expires: {c.expires}
              </div>
            </div>
            <div
              style={{
                background: "rgba(255,255,255,0.15)",
                borderRadius: 12,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "12px 16px",
                gap: 8,
              }}
            >
              <span
                style={{
                  fontFamily: "monospace",
                  fontWeight: 700,
                  fontSize: isMobile ? 14 : 16,
                  color: "#fff",
                  letterSpacing: 2,
                }}
              >
                {c.code}
              </span>
              <button
                onClick={() => copy(c.code)}
                style={{
                  ...MONTSERRAT(700),
                  background:
                    copied === c.code
                      ? "rgba(255,255,255,0.4)"
                      : "rgba(255,255,255,0.2)",
                  color: "#fff",
                  border: "none",
                  borderRadius: 8,
                  padding: "6px 14px",
                  fontSize: 12,
                  cursor: "pointer",
                  transition: "all 0.2s",
                  whiteSpace: "nowrap",
                  flexShrink: 0,
                }}
              >
                {copied === c.code ? "Copied!" : "Copy"}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Banner */}
      <div
        style={{
          background: CREAM,
          borderRadius: isMobile ? 20 : 28,
          padding: isMobile ? "32px 24px" : isTablet ? "40px 40px" : "48px 60px",
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          alignItems: isMobile ? "flex-start" : "center",
          justifyContent: "space-between",
          gap: isMobile ? 24 : 20,
          maxWidth: 1100,
          margin: "60px auto 0",
          border: "2px solid #EFE5D8",
        }}
      >
        <div>
          <h3
            style={{
              ...CLIMATE,
              fontSize: isMobile ? 28 : 36,
              color: BROWN,
              marginBottom: 8,
            }}
          >
            Hungry?{" "}
            <span style={{ color: ACCENT }}>We Are Ready.</span>
          </h3>
          <p style={{ ...MONTSERRAT(300), fontSize: 15, color: "#8C6040" }}>
            Order online or walk in — your table is always waiting.
          </p>
        </div>
        <div
          style={{
            display: "flex",
            gap: 12,
            width: isMobile ? "100%" : "auto",
            flexDirection: isMobile ? "column" : "row",
          }}
        >
          <button
            style={{
              ...MONTSERRAT(700),
              background: BROWN,
              color: "#fff",
              border: "none",
              borderRadius: 999,
              padding: isMobile ? "14px 0" : "14px 32px",
              fontSize: 15,
              cursor: "pointer",
              width: isMobile ? "100%" : "auto",
            }}
          >
            Order Online
          </button>
          <button
            style={{
              ...MONTSERRAT(700),
              background: ACCENT,
              color: "#fff",
              border: "none",
              borderRadius: 999,
              padding: isMobile ? "14px 0" : "14px 32px",
              fontSize: 15,
              cursor: "pointer",
              boxShadow: `0 6px 20px ${ACCENT}55`,
              width: isMobile ? "100%" : "auto",
            }}
          >
            Find Us
          </button>
        </div>
      </div>
    </section>
  );
}
