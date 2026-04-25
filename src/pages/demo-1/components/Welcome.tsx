import RevealSection from "../../../components/animations/RevealSection";

export default function Welcome() {
  return (
    <section className="text-center px-6 pt-14 sm:pt-20 pb-[60px] max-w-[800px] mx-auto">
      <RevealSection variant="fadeUp">
        <div className="w-full h-px bg-[#D2D2D2] relative mb-5 before:content-[''] before:absolute before:-top-[3px] before:left-0 before:w-[7px] before:h-[7px] before:bg-[#D2D2D2] before:rounded-full after:content-[''] after:absolute after:-top-[3px] after:right-0 after:w-[7px] after:h-[7px] after:bg-[#D2D2D2] after:rounded-full" />
        <p className="text-[.6rem] sm:text-[.65rem] tracking-[3px] sm:tracking-[4px] uppercase text-[#757575] mb-4">
          WELCOME TO HOTEL BELLA GRACE / CHARLESTON HISTORIC DISTRICT
        </p>
        <h2 className="font-[var(--font-cormorant)] text-[clamp(2rem,7vw,3rem)] font-light text-[#1C1C1C] mb-5 tracking-[4px]">
          HOTEL BELLA GRACE
        </h2>
        <p className="text-sm sm:text-[.95rem] leading-[1.9] text-[#666]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
      </RevealSection>
    </section>
  );
}
