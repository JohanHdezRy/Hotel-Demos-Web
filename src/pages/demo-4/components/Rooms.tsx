import RevealSection from "../../../components/animations/RevealSection";
import GlareHover from "../../../components/animations/GlareHover";
import { WARM, PINK, BLACK } from "../data/tokens";
import { roomImages } from "../data/imageData";

export default function Rooms() {
  return (
    <section className="px-5 sm:px-8 lg:px-10 py-14 sm:py-[90px] bg-white" id="rooms">
      <RevealSection variant="fadeUp">
        <h2
          className="text-center font-light text-[1.7rem] sm:text-[2rem] tracking-[1px] mb-2 sm:mb-2.5"
          style={{ color: BLACK }}
        >
          The Perfect Night's Sleep
        </h2>
        <p
          className="text-center text-[.875rem] sm:text-[.95rem] mb-10 sm:mb-[50px]"
          style={{ color: "#888" }}
        >
          Discover Our Bedrooms
        </p>
      </RevealSection>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5 max-w-[1200px] mx-auto">
        {roomImages.map((r, i) => (
          <RevealSection key={i} delay={i * 0.08} variant="fadeUp">
            <div className="relative overflow-hidden rounded-[4px] cursor-pointer group">
              <GlareHover
                glareColor={PINK}
                glareOpacity={0.2}
                glareSize={280}
                borderRadius={0}
              >
                <img
                  src={r.img}
                  alt={r.name}
                  className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                />
              </GlareHover>
              <div className="pt-3 sm:pt-4 pb-1">
                <h4
                  className="font-medium text-[.9rem] sm:text-[.95rem] mb-1"
                  style={{ color: BLACK }}
                >
                  {r.name}
                </h4>
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <span
                    className="text-[.85rem] font-medium"
                    style={{ color: WARM }}
                  >
                    From {r.price}+
                  </span>
                  <button
                    className="text-white text-[.65rem] font-semibold uppercase tracking-[1.5px] px-3 py-2 min-h-[36px] border-none cursor-pointer transition-colors duration-300"
                    style={{ background: WARM }}
                    onMouseOver={(e) =>
                      (e.currentTarget.style.background = PINK)
                    }
                    onMouseOut={(e) =>
                      (e.currentTarget.style.background = WARM)
                    }
                  >
                    Book
                  </button>
                </div>
              </div>
            </div>
          </RevealSection>
        ))}
      </div>
    </section>
  );
}
