import { DISPLAY, MONO, ACCENT, BG, INK } from "../data/tokens";

export default function Footer() {
  return (
    <footer
      id="contact"
      style={{
        background: INK,
        color: BG,
        padding: "clamp(60px, 8vw, 100px) clamp(20px, 5vw, 48px) 40px",
      }}
    >
      {/*
        Column layout:
        - Mobile: single column (stacked)
        - sm: 2-column grid
        - lg: original 4-column (2fr 1fr 1fr 1fr)
      */}
      <div
        className="pb-12 sm:pb-16"
        style={{
          borderBottom: "1px solid rgba(255,255,255,0.12)",
          marginBottom: 32,
        }}
      >
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-12 lg:grid-cols-[2fr_1fr_1fr_1fr]">
          {/* Brand column */}
          <div>
            <h4
              style={{
                fontFamily: DISPLAY,
                fontWeight: 300,
                fontSize: "clamp(36px, 6vw, 48px)",
                letterSpacing: "-0.02em",
                margin: "0 0 16px",
                lineHeight: 1,
              }}
            >
              Costa <em style={{ fontStyle: "italic", color: ACCENT }}>Mare</em>
            </h4>
            <p
              style={{
                color: "rgba(255,255,255,0.6)",
                fontSize: 14,
                maxWidth: 340,
                lineHeight: 1.6,
                margin: 0,
              }}
            >
              42 suites on a mile and a half of private Pacific beach. Tended
              slowly, since 1987.
            </p>
          </div>

          {/* Link columns */}
          {[
            {
              title: "Visit",
              items: [
                "Km 18, Costa Pacifica",
                "Nayarit, Mexico",
                "+52 322 224 1987",
                "hola@costamare.com",
              ],
            },
            {
              title: "Stay",
              items: ["Rooms & Suites", "Spa & Wellness", "Dining", "Reserve"],
            },
            {
              title: "Follow",
              items: ["Instagram", "Journal", "Newsletter", "Weddings"],
            },
          ].map((col) => (
            <div key={col.title}>
              <h5
                style={{
                  fontFamily: MONO,
                  fontSize: 10,
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  margin: "0 0 20px",
                  color: "rgba(255,255,255,0.5)",
                  fontWeight: 500,
                }}
              >
                {col.title}
              </h5>
              <ul
                className="flex flex-col gap-2.5 m-0 p-0"
                style={{
                  listStyle: "none",
                  fontSize: 14,
                  color: "rgba(255,255,255,0.75)",
                }}
              >
                {col.items.map((item) => (
                  <li key={item}>
                    <button
                      type="button"
                      className="hover:text-white transition-colors duration-200 bg-transparent border-0 p-0 cursor-pointer text-left"
                      style={{ color: "inherit" }}
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar — stacked on mobile, inline on sm+ */}
      <div
        className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3"
        style={{
          fontFamily: MONO,
          fontSize: 12,
          letterSpacing: "0.1em",
          color: "rgba(255,255,255,0.4)",
        }}
      >
        <span>© 2026 Costa Mare · All rights reserved</span>
        <span>Privacy · Terms · Accessibility</span>
      </div>
    </footer>
  );
}
