import RevealSection from "../../../components/animations/RevealSection";
import GlareHover from "../../../components/animations/GlareHover";
import { WARM } from "../data/tokens";
import { featureImages } from "../data/imageData";

export default function FeaturesGrid() {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1 p-1">
      {featureImages.map((f, i) => (
        <RevealSection key={i} delay={i * 0.1} variant="fadeUp">
          <div className="relative overflow-hidden aspect-square cursor-pointer group">
            <GlareHover
              glareColor={WARM}
              glareOpacity={0.2}
              glareSize={320}
              borderRadius={0}
            >
              <img
                src={f.img}
                alt={f.label}
                className="w-full h-full object-cover transition-transform duration-[600ms] group-hover:scale-[1.06]"
              />
            </GlareHover>
            <div
              className="absolute inset-0 flex flex-col items-center justify-center transition-colors duration-[400ms] group-hover:bg-[#1a1a1a]/55"
              style={{ background: "rgba(26,26,26,.35)" }}
            >
              <h3 className="text-white font-normal text-[1.1rem] sm:text-[1.3rem] tracking-[2px] uppercase">
                {f.label}
              </h3>
              <span
                className="text-[.7rem] sm:text-[.75rem] uppercase tracking-[2px] mt-2 sm:mt-2.5 opacity-0 translate-y-2.5 transition-all duration-[400ms] group-hover:opacity-100 group-hover:translate-y-0"
                style={{ color: WARM }}
              >
                Discover →
              </span>
            </div>
          </div>
        </RevealSection>
      ))}
    </section>
  );
}
