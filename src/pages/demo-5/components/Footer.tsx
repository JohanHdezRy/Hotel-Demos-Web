const navColumns = [
  {
    title: "Navigation",
    links: [
      { label: "Home", href: "#hero" },
      { label: "About", href: "#about" },
      { label: "Signature Dishes", href: "#dishes" },
      { label: "Menu", href: "#menu" },
      { label: "Chef", href: "#chef" },
    ],
  },
  {
    title: "Experience",
    links: [
      { label: "Gallery", href: "#gallery" },
      { label: "Testimonials", href: "#testimonials" },
      { label: "Reserve a Table", href: "#reservations" },
      { label: "Tasting Menu", href: "#menu" },
      { label: "Wine List", href: "#menu" },
    ],
  },
];

const schedule = [
  { days: "Tuesday — Friday", hours: "13:30 – 16:00 / 20:30 – 23:30" },
  { days: "Saturday — Sunday", hours: "13:00 – 16:30 / 20:00 – 00:00" },
  { days: "Monday", hours: "Closed" },
];

export default function Footer() {
  return (
    <footer className="bg-midnight border-t border-gold-mare/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-14">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-1">
            <a href="#hero" className="block mb-4">
              <span className="font-[var(--font-cormorant)] italic text-3xl text-cream">
                Mare e Terra
              </span>
            </a>
            <p className="font-[var(--font-jost)] text-cream/50 text-sm leading-relaxed mb-6">
              Fine Italian cuisine in Madrid. Handmade fresh pasta and the
              finest Atlantic seafood, since 2002.
            </p>
            {/* Social */}
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="font-[var(--font-jost)] text-cream/70 hover:text-gold-mare transition-colors duration-300 text-xs tracking-widest uppercase"
              >
                Instagram
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="font-[var(--font-jost)] text-cream/70 hover:text-gold-mare transition-colors duration-300 text-xs tracking-widest uppercase"
              >
                Facebook
              </a>
            </div>
          </div>

          {/* Nav columns */}
          {navColumns.map((col) => (
            <div key={col.title}>
              <h3 className="font-[var(--font-jost)] text-xs tracking-widest uppercase text-gold-mare mb-5">
                {col.title}
              </h3>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="font-[var(--font-jost)] text-cream/50 hover:text-cream text-sm transition-colors duration-300"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Schedule */}
          <div>
            <h3 className="font-[var(--font-jost)] text-xs tracking-widest uppercase text-gold-mare mb-5">
              Hours
            </h3>
            <ul className="space-y-3">
              {schedule.map((item) => (
                <li key={item.days}>
                  <div className="font-[var(--font-jost)] text-cream/70 text-xs tracking-wide">
                    {item.days}
                  </div>
                  <div className="font-[var(--font-jost)] text-cream/65 text-xs">
                    {item.hours}
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <div className="font-[var(--font-jost)] text-cream/70 text-xs tracking-wide mb-1">
                Address
              </div>
              <address className="not-italic font-[var(--font-jost)] text-cream/65 text-xs leading-relaxed">
                Calle de Velázquez, 45
                <br />
                28001 Madrid, Spain
              </address>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gold-mare/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-[var(--font-jost)] text-cream/55 text-xs">
            &copy; {new Date().getFullYear()} Mare e Terra. All rights reserved.
          </p>
          <div className="flex gap-6">
            <button
              type="button"
              className="font-[var(--font-jost)] text-cream/60 hover:text-cream text-xs transition-colors duration-300 bg-transparent border-0 p-0 cursor-pointer"
            >
              Privacy Policy
            </button>
            <button
              type="button"
              className="font-[var(--font-jost)] text-cream/60 hover:text-cream text-xs transition-colors duration-300 bg-transparent border-0 p-0 cursor-pointer"
            >
              Legal Notice
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
