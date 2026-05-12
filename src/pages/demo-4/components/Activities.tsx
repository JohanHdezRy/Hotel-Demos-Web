import RevealSection from "../../../components/animations/RevealSection";
import GlareHover from "../../../components/animations/GlareHover";
import { WARM } from "../data/tokens";
import { activityImages } from "../data/imageData";

export default function Activities() {
  return (
    <section
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4"
      id="dining"
    >
      {activityImages.map((a, i) => (
        <RevealSection key={i} delay={i * 0.1} variant="fadeUp">
          <div
            className="relative overflow-hidden cursor-pointer group"
            style={{ aspectRatio: ".75" }}
          >
            <GlareHover
              glareColor={WARM}
              glareOpacity={0.22}
              glareSize={300}
              borderRadius={0}
            >
              <img
                src={a.img}
                alt={a.label}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.08]"
              />
            </GlareHover>
            <div
              className="absolute inset-0 flex flex-col items-center justify-end pb-6 sm:pb-[30px] px-5"
              style={{
                background:
                  "linear-gradient(180deg,transparent 40%,rgba(26,26,26,.7) 100%)",
              }}
            >
              <h3 className="text-white font-medium text-[1rem] sm:text-[1.1rem] uppercase tracking-[2px]">
                {a.label}
              </h3>
              <span
                className="text-[.7rem] sm:text-[.75rem] uppercase tracking-[2px] mt-1.5"
                style={{ color: WARM }}
              >
                {a.sub}
              </span>
            </div>
          </div>
        </RevealSection>
      ))}
    </section>
  );
}
