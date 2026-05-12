import { useEffect } from "react";
import {
  ACCENT,
  BROWN,
  WARM_MID,
  CREAM,
  CLIMATE,
  MONTSERRAT,
} from "../data/freshboxTokens";
import { useBreakpoint } from "../hooks/useBreakpoint";
import { useNavbarScroll } from "../../../hooks/useNavbarScroll";
import { useMobileDrawer } from "../../../hooks/useMobileDrawer";

const NAV_LINKS = ["Menu", "About", "Coupons", "Contact"] as const;
const DRAWER_ID = "freshbox-mobile-drawer";

export function FreshboxNav() {
  const scrolled = useNavbarScroll(40);
  const {
    isOpen: menuOpen,
    toggle,
    close,
    drawerRef,
  } = useMobileDrawer<HTMLDivElement>();
  const { isMobile, isTablet } = useBreakpoint();

  const isMobileOrTablet = isMobile || isTablet;

  // Close drawer when viewport goes desktop
  useEffect(() => {
    if (!isMobileOrTablet) close();
  }, [isMobileOrTablet, close]);

  const navBg = scrolled || menuOpen ? "rgba(250,245,238,0.97)" : "transparent";
  const navBorder =
    scrolled || menuOpen ? "1px solid rgba(30,15,0,0.08)" : "none";

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          background: navBg,
          backdropFilter: scrolled || menuOpen ? "blur(12px)" : "none",
          borderBottom: navBorder,
          transition: "background 0.35s ease, border-bottom 0.35s ease",
          padding: isMobile ? "0 20px" : "0 40px",
          height: 68,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <div
          style={{ ...CLIMATE, fontSize: 26, color: BROWN, letterSpacing: 2 }}
        >
          Fresh<span style={{ color: ACCENT }}>Box</span>
        </div>

        {/* Desktop links */}
        {!isMobileOrTablet && (
          <div
            style={{
              display: "flex",
              gap: 32,
              fontSize: 14,
              color: WARM_MID,
              ...MONTSERRAT(400),
            }}
          >
            {NAV_LINKS.map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase()}`}
                style={{
                  textDecoration: "none",
                  color: "inherit",
                  opacity: 0.75,
                  transition: "opacity 0.2s",
                }}
                onMouseEnter={(e) =>
                  ((e.target as HTMLElement).style.opacity = "1")
                }
                onMouseLeave={(e) =>
                  ((e.target as HTMLElement).style.opacity = "0.75")
                }
              >
                {l}
              </a>
            ))}
          </div>
        )}

        {/* Desktop CTA */}
        {!isMobileOrTablet && (
          <button
            style={{
              ...MONTSERRAT(700),
              background: ACCENT,
              color: "#fff",
              border: "none",
              borderRadius: 999,
              padding: "10px 24px",
              fontSize: 14,
              cursor: "pointer",
              boxShadow: `0 4px 16px ${ACCENT}55`,
            }}
          >
            Order Now
          </button>
        )}

        {/* Mobile: CTA + Hamburger */}
        {isMobileOrTablet && (
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <button
              style={{
                ...MONTSERRAT(700),
                background: ACCENT,
                color: "#fff",
                border: "none",
                borderRadius: 999,
                padding: "8px 18px",
                fontSize: 13,
                cursor: "pointer",
                boxShadow: `0 4px 12px ${ACCENT}55`,
                whiteSpace: "nowrap",
              }}
            >
              Order Now
            </button>

            {/* Hamburger button */}
            <button
              onClick={toggle}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              aria-controls={DRAWER_ID}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: 6,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: 5,
                width: 36,
                height: 36,
              }}
            >
              <span
                style={{
                  display: "block",
                  width: 22,
                  height: 2,
                  background: BROWN,
                  borderRadius: 2,
                  transformOrigin: "center",
                  transform: menuOpen
                    ? "translateY(7px) rotate(45deg)"
                    : "none",
                  transition: "transform 0.3s ease",
                }}
              />
              <span
                style={{
                  display: "block",
                  width: 22,
                  height: 2,
                  background: BROWN,
                  borderRadius: 2,
                  opacity: menuOpen ? 0 : 1,
                  transition: "opacity 0.2s ease",
                }}
              />
              <span
                style={{
                  display: "block",
                  width: 22,
                  height: 2,
                  background: BROWN,
                  borderRadius: 2,
                  transformOrigin: "center",
                  transform: menuOpen
                    ? "translateY(-7px) rotate(-45deg)"
                    : "none",
                  transition: "transform 0.3s ease",
                }}
              />
            </button>
          </div>
        )}
      </nav>

      {/* Mobile Drawer */}
      {isMobileOrTablet && (
        <>
          {/* Backdrop */}
          <div
            onClick={close}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 98,
              background: "rgba(30,15,0,0.4)",
              opacity: menuOpen ? 1 : 0,
              pointerEvents: menuOpen ? "auto" : "none",
              transition: "opacity 0.35s ease",
            }}
          />

          {/* Drawer panel */}
          <div
            id={DRAWER_ID}
            ref={drawerRef}
            role="dialog"
            aria-modal="true"
            aria-label="Site navigation"
            aria-hidden={!menuOpen}
            style={{
              position: "fixed",
              top: 68,
              left: 0,
              right: 0,
              zIndex: 99,
              background: CREAM,
              borderBottom: `2px solid rgba(30,15,0,0.06)`,
              padding: "24px 20px 32px",
              transform: menuOpen ? "translateY(0)" : "translateY(-8px)",
              opacity: menuOpen ? 1 : 0,
              pointerEvents: menuOpen ? "auto" : "none",
              transition: "transform 0.35s ease, opacity 0.3s ease",
              boxShadow: "0 16px 48px rgba(30,15,0,0.14)",
            }}
          >
            <nav aria-label="Mobile navigation">
              {NAV_LINKS.map((l, i) => (
                <a
                  key={l}
                  href={`#${l.toLowerCase()}`}
                  onClick={close}
                  style={{
                    display: "block",
                    ...MONTSERRAT(700),
                    fontSize: 22,
                    color: BROWN,
                    padding: "14px 0",
                    borderBottom:
                      i < NAV_LINKS.length - 1
                        ? "1px solid rgba(30,15,0,0.07)"
                        : "none",
                    textDecoration: "none",
                    letterSpacing: 0.5,
                    opacity: menuOpen ? 1 : 0,
                    transform: menuOpen ? "translateX(0)" : "translateX(-12px)",
                    transition: `opacity 0.3s ease ${i * 60 + 60}ms, transform 0.3s ease ${i * 60 + 60}ms`,
                  }}
                >
                  {l}
                </a>
              ))}
            </nav>
          </div>
        </>
      )}
    </>
  );
}
