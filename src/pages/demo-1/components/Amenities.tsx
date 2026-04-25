import RevealSection from "../../../components/animations/RevealSection";
import GlareHover from "../../../components/animations/GlareHover";
import { amenitiesGallery } from "../data/galleryData";

export default function Amenities() {
  return (
    <section className="px-6 md:px-12 py-14 sm:py-20" id="amenities">
      <RevealSection variant="fadeUp">
        <h2 className="font-[var(--font-playfair-sc)] text-[clamp(1.4rem,4vw,1.8rem)] tracking-[4px] text-[#1C1C1C] mb-5">
          HOTEL AMENITIES
        </h2>
      </RevealSection>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-2.5">
        {amenitiesGallery.map((a, i) => (
          <RevealSection key={i} delay={i * 0.12} variant="scale">
            <div className="overflow-hidden group">
              <GlareHover
                glareColor="#D2AA00"
                glareOpacity={0.25}
                glareSize={280}
                borderRadius={4}
              >
                <img
                  src={a.img}
                  alt={a.title}
                  className="w-full h-[220px] sm:h-[260px] lg:h-[300px] object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
              </GlareHover>
              <h3 className="font-normal text-sm sm:text-[.95rem] py-4">{a.title}</h3>
            </div>
          </RevealSection>
        ))}
      </div>
    </section>
  );
}
