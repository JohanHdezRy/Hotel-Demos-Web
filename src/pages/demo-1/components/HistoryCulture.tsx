import RevealSection from "../../../components/animations/RevealSection";
import Btn from "./Btn";
import suite from "../../../styles/img/demo-1/suite1.jpg";

export default function HistoryCulture() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 min-h-[440px]">
      <div className="overflow-hidden h-[260px] sm:h-[340px] md:h-auto">
        <img
          src={suite}
          alt="History"
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover"
        />
      </div>
      <RevealSection variant="fadeLeft">
        <div className="px-6 sm:px-10 md:px-[60px] py-12 sm:py-16 md:py-20 flex flex-col justify-center">
          <h2 className="font-[var(--font-playfair-sc)] text-[clamp(1.2rem,4vw,1.6rem)] tracking-[3px] mb-5">
            ENTRENCHED IN HISTORY, ART, AND CULTURE
          </h2>
          <p className="text-sm sm:text-[.9rem] leading-[1.8] text-[#666] mb-[30px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris.
          </p>
          <Btn variant="dark">Learn More</Btn>
        </div>
      </RevealSection>
    </section>
  );
}
