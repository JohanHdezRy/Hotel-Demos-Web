import RevealSection from "../../../components/animations/RevealSection";
import GlareHover from "../../../components/animations/GlareHover";
import { WARM, BLACK, LIGHT } from "../data/tokens";
import { blogImages } from "../data/imageData";

export default function Blog() {
  return (
    <section
      className="px-5 sm:px-8 lg:px-10 py-14 sm:py-[90px]"
      style={{ background: LIGHT }}
      id="blog"
    >
      <RevealSection variant="fadeUp">
        <h2
          className="text-center font-light text-[1.7rem] sm:text-[2rem] tracking-[1px] mb-10 sm:mb-[50px]"
          style={{ color: BLACK }}
        >
          The El Fenn Blog
        </h2>
      </RevealSection>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-[30px] max-w-[1100px] mx-auto">
        {blogImages.map((b, i) => (
          <RevealSection key={i} delay={i * 0.12} variant="fadeUp">
            <div className="bg-white rounded-[6px] overflow-hidden shadow-[0_2px_15px_rgba(0,0,0,.06)] transition-all duration-300 cursor-pointer hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,.10)]">
              <GlareHover
                glareColor={WARM}
                glareOpacity={0.15}
                glareSize={260}
                borderRadius={0}
              >
                <img
                  src={b.img}
                  alt={b.title}
                  className="w-full object-cover"
                  style={{ aspectRatio: "16/10" }}
                />
              </GlareHover>
              <div className="p-4 sm:p-5">
                <h4
                  className="text-[.95rem] sm:text-base font-medium leading-[1.4] mb-2"
                  style={{ color: BLACK }}
                >
                  {b.title}
                </h4>
                <p className="text-[.82rem] sm:text-[.85rem] text-[#888] leading-[1.6]">
                  {b.excerpt}
                </p>
              </div>
            </div>
          </RevealSection>
        ))}
      </div>
    </section>
  );
}
