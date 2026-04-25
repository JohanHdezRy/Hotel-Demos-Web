import { ACCENT, BROWN, CLIMATE, MONTSERRAT } from "../data/freshboxTokens";
import { useBreakpoint } from "../hooks/useBreakpoint";

const FOOTER_COLUMNS: [string, string[]][] = [
  ["Menu", ["Burgers", "Pizza", "Chicken", "Pasta", "Salads"]],
  [
    "Visit",
    [
      "Mon–Fri 10am–10pm",
      "Sat–Sun 9am–11pm",
      "123 Main Street",
      "Reserve a Table",
    ],
  ],
  ["Company", ["Our Story", "Careers", "Press", "Contact Us"]],
];

export function FreshboxFooter() {
  const { isMobile, isTablet } = useBreakpoint();

  // Desktop: "2fr 1fr 1fr 1fr" | Tablet: "1fr 1fr" | Mobile: "1fr"
  const gridCols = isMobile ? "1fr" : isTablet ? "1fr 1fr" : "2fr 1fr 1fr 1fr";

  return (
    <footer
      style={{
        background: BROWN,
        padding: isMobile
          ? "48px 20px 32px"
          : isTablet
            ? "56px 40px 36px"
            : "60px 80px 40px",
        color: "rgba(255,255,255,0.7)",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: gridCols,
          gap: isMobile ? 36 : 40,
          marginBottom: isMobile ? 36 : 48,
        }}
      >
        {/* Brand column */}
        <div>
          <div
            style={{
              ...CLIMATE,
              fontSize: isMobile ? 24 : 28,
              color: "#fff",
              marginBottom: 14,
            }}
          >
            Fresh<span style={{ color: ACCENT }}>Box</span>
          </div>
          <p
            style={{
              ...MONTSERRAT(300),
              fontSize: 14,
              lineHeight: 1.7,
              maxWidth: 280,
            }}
          >
            Family restaurant since 1998. Handcrafted meals with heart, served
            every day with love.
          </p>
        </div>

        {FOOTER_COLUMNS.map(([title, links]) => (
          <div key={title}>
            <div
              style={{
                ...MONTSERRAT(700),
                fontSize: 12,
                color: "#fff",
                letterSpacing: 2,
                textTransform: "uppercase",
                marginBottom: 16,
              }}
            >
              {title}
            </div>
            {links.map((l) => (
              <div
                key={l}
                style={{
                  ...MONTSERRAT(300),
                  fontSize: 13,
                  marginBottom: 10,
                  cursor: "pointer",
                  transition: "color 0.2s",
                }}
              >
                {l}
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div
        style={{
          borderTop: "1px solid rgba(255,255,255,0.1)",
          paddingTop: 24,
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          justifyContent: isMobile ? "center" : "space-between",
          alignItems: "center",
          gap: isMobile ? 8 : 0,
          textAlign: isMobile ? "center" : "left",
          fontSize: 13,
          ...MONTSERRAT(300),
        }}
      >
        <span>© 2026 FreshBox. All rights reserved.</span>
        <span>Made with ❤️ for families</span>
      </div>
    </footer>
  );
}
