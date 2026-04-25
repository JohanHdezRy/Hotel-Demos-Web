const FOOTER_COLS = [
  {
    title: "Quick Links",
    links: [
      "Rooms & Suites",
      "Dining",
      "Explore Charleston",
      "Meetings & Events",
    ],
  },
  {
    title: "Amenities",
    links: ["Pool & Terrace", "Fitness Center", "Concierge", "Parking"],
  },
  {
    title: "Policies",
    links: ["Pet Policy", "Cancellation", "Privacy", "Accessibility"],
  },
];

export default function Footer() {
  return (
    <footer
      className="bg-[#1C1C1C] px-6 md:px-12 pt-[60px] pb-4 text-white/50"
      id="contact"
    >
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 mb-10">
        <div>
          <h4 className="text-[#D2AA00] font-[var(--font-playfair-sc)] text-[.9rem] tracking-[2px] mb-4">
            Hotel Bella Grace
          </h4>
          <p className="text-[.8rem] leading-[1.8]">
            185 East Bay Street
            <br />
            Charleston, SC 29401
          </p>
          <p className="text-[.8rem] mt-1">+1 (843) 990-7500</p>
        </div>
        {FOOTER_COLS.map((col) => (
          <div key={col.title}>
            <h4 className="text-[#D2AA00] font-[var(--font-playfair-sc)] text-[.9rem] tracking-[2px] mb-4">
              {col.title}
            </h4>
            {col.links.map((l) => (
              <a
                key={l}
                href="#"
                className="block text-[.8rem] leading-[1.8] hover:text-[#D2AA00] transition-colors duration-200"
              >
                {l}
              </a>
            ))}
          </div>
        ))}
      </div>
      <div className="max-w-[1200px] mx-auto pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row sm:justify-between gap-2 text-[.7rem] text-white/30">
        <span>© 2026 Hotel Bella Grace. Marriott Bonvoy.</span>
        <span>Demo — React + TypeScript</span>
      </div>
    </footer>
  );
}
