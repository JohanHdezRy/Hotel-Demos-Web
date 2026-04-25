import RevealSection from "../../../components/animations/RevealSection";
import { WARM, BLACK, LIGHT } from "../data/tokens";

export default function About() {
  return (
    <section
      className="px-5 sm:px-10 lg:px-20 xl:px-[100px] py-16 sm:py-20 lg:py-[100px] text-center max-w-[2000px] mx-auto"
      style={{ background: LIGHT }}
      id="about"
    >
      <RevealSection variant="fadeLeft">
        <h2
          className="font-[var(--font-roboto)] font-light text-[1.8rem] sm:text-[2rem] lg:text-[2.4rem] tracking-[1px] mb-4 sm:mb-5"
          style={{ color: BLACK }}
        >
          Luxury with Authenticity
        </h2>
        <div
          className="w-[50px] sm:w-[60px] h-0.5 mx-auto mb-6 sm:mb-[30px]"
          style={{ background: WARM }}
        />
        <p className="font-[var(--font-open-sans)] text-[.9rem] sm:text-base leading-[1.9] text-[#666] max-w-[700px] mx-auto mb-4">
          El Fenn is a boutique riad hotel nestled in the heart of Marrakech's
          medina. With 28 individually styled rooms and suites, three pools, a
          rooftop restaurant, spa, and a curated art collection, it offers an
          intimate escape blending mid-century European furniture with
          traditional Moroccan craftsmanship.
        </p>
        <p className="font-[var(--font-open-sans)] text-[.9rem] sm:text-base leading-[1.9] text-[#666] max-w-[700px] mx-auto mb-4">
          Designed as a private home that welcomes guests, each space tells a
          story through vibrant colors, handpicked antiques, and contemporary
          art. The result is a sanctuary of warmth and character unlike any
          other in the Red City.
        </p>
        <div
          className="text-[.8rem] sm:text-[.85rem] font-medium tracking-[1.5px] uppercase mt-6 sm:mt-[30px]"
          style={{ color: WARM }}
        >
          Condé Nast Traveler Gold List — 2017, 2021, 2022, 2024
        </div>
      </RevealSection>
    </section>
  );
}
