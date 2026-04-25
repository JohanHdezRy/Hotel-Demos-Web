import RevealSection from "../../../components/animations/RevealSection";
import { WARM, PINK, BLACK } from "../data/tokens";

export default function Newsletter() {
  return (
    <section
      className="px-5 sm:px-10 py-16 sm:py-20 text-center"
      style={{ background: BLACK }}
    >
      <RevealSection variant="fadeUp">
        <h2 className="text-white font-light text-[1.5rem] sm:text-[1.8rem] tracking-[1px] mb-3">
          Get the El Fenn Hotlist
        </h2>
        <p className="text-white/60 text-[.875rem] sm:text-[.9rem] mb-7 sm:mb-[30px] max-w-[500px] mx-auto leading-[1.7]">
          Sign up for our fortnightly newsletter featuring travel tips, events,
          and insider guides to Marrakech.
        </p>
        {/* Stack on mobile, row on sm+ */}
        <div className="flex flex-col sm:flex-row max-w-[440px] mx-auto gap-0">
          <input
            type="email"
            placeholder="Your email address"
            className="flex-1 px-[18px] py-3.5 border border-[#444] bg-transparent text-white text-[.9rem] outline-none transition-colors duration-300 placeholder:text-[#666] focus:border-[#c2956b] min-h-[50px] sm:min-h-0"
          />
          <button
            className="px-7 py-3.5 text-white border-none text-[.75rem] font-semibold uppercase tracking-[2px] cursor-pointer transition-colors duration-300 min-h-[50px] sm:min-h-0"
            style={{ background: WARM }}
            onMouseOver={(e) => (e.currentTarget.style.background = PINK)}
            onMouseOut={(e) => (e.currentTarget.style.background = WARM)}
          >
            Subscribe
          </button>
        </div>
      </RevealSection>
    </section>
  );
}
