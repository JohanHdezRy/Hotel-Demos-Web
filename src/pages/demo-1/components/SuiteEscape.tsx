import RevealSection from "../../../components/animations/RevealSection";
import Btn from "./Btn";
import lounge from "../../../styles/img/demo-1/yard2.jpg";

export default function SuiteEscape() {
  return (
    <section className="bg-[#1C1C1C] text-white grid grid-cols-1 md:grid-cols-2 min-h-[480px]">
      <div className="overflow-hidden h-[260px] sm:h-[340px] md:h-auto">
        <img
          src={lounge}
          alt="Suite escape"
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover"
        />
      </div>
      <RevealSection variant="fadeRight">
        <div className="px-6 sm:px-10 md:px-[60px] py-12 sm:py-16 md:py-20 flex flex-col justify-center">
          <h2 className="font-[var(--font-cormorant)] text-[clamp(1.8rem,5vw,2.2rem)] font-light tracking-[4px] text-white mb-6">
            A SUITE ESCAPE
          </h2>
          <p className="text-sm sm:text-[.9rem] leading-[1.8] text-white/60 mb-[30px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <Btn variant="outline">Learn More</Btn>
        </div>
      </RevealSection>
    </section>
  );
}
