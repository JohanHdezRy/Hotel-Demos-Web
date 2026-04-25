import RevealSection from "../../../components/animations/RevealSection";
import { WARM } from "../data/tokens";
import { rooftopImage } from "../data/imageData";

export default function Rooftop() {
  return (
    <section
      className="relative min-h-[420px] sm:min-h-[500px] overflow-hidden flex items-center justify-center"
      id="rooftop"
    >
      <img
        src={rooftopImage}
        alt="Rooftop terrace"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <RevealSection variant="scale">
        <div
          className="relative z-10 text-center px-6 sm:px-10 py-10 sm:py-[60px] max-w-[90vw] sm:max-w-[700px] mx-4 sm:mx-auto rounded-[4px]"
          style={{ background: "rgba(26,26,26,.6)" }}
        >
          <h2 className="text-white font-light text-[1.7rem] sm:text-[2.2rem] tracking-[1px] mb-3 sm:mb-4">
            The Rooftop
          </h2>
          <p className="text-white/85 text-[.875rem] sm:text-[.95rem] leading-[1.8] mb-2.5">
            Our celebrated rooftop terrace is open daily for non-residents.
            Enjoy panoramic views over the medina and Atlas Mountains while
            savoring craft cocktails and Moroccan-inspired sharing plates.
          </p>
          <div className="text-[.85rem] sm:text-[.9rem] font-medium" style={{ color: WARM }}>
            Open daily 12:30 — 23:00
          </div>
        </div>
      </RevealSection>
    </section>
  );
}
