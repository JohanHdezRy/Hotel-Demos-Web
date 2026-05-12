import RevealSection from "../../../components/animations/RevealSection";
import { useHorizontalGallery } from "../hooks/useHorizontalGallery";
import hotel from "../../../styles/img/demo-1/hotel.jpg";
import lobby from "../../../styles/img/demo-1/lobby.jpg";
import yard from "../../../styles/img/demo-1/yard1.jpg";
import room1 from "../../../styles/img/demo-1/room1.jpg";
import room2 from "../../../styles/img/demo-1/room2.jpg";
import room3 from "../../../styles/img/demo-1/room3.jpg";
import suite from "../../../styles/img/demo-1/suite1.jpg";
import spa from "../../../styles/img/demo-1/spa1.jpg";

const STRIP_IMAGES = [hotel, lobby, yard, room1, room2, room3, suite, spa];

export default function HorizontalGallery() {
  const { galleryRef, stripRef } = useHorizontalGallery();

  return (
    <section className="py-16">
      <RevealSection variant="fadeLeft">
        <h2 className="font-[var(--font-cormorant)] text-[clamp(1.8rem,5vw,2.5rem)] font-light tracking-[6px] text-[#999] text-center mb-6">
          AN ARCHITECTURAL GEM
        </h2>
      </RevealSection>

      {/* Mobile: touch-scrollable snap carousel */}
      <div className="sm:hidden overflow-x-auto snap-x snap-mandatory scrollbar-none">
        <div className="flex flex-nowrap">
          {STRIP_IMAGES.map((img, i) => (
            <div key={i} className="snap-center flex-shrink-0 w-[80vw] px-2">
              <img
                src={img}
                alt={`Gallery ${i + 1}`}
                loading="lazy"
                decoding="async"
                className="w-full aspect-square object-cover rounded-[4px]"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Tablet / Desktop: GSAP horizontal scroll */}
      <div ref={galleryRef} className="hidden sm:block overflow-x-hidden">
        <div className="overflow-x-hidden">
          <div
            ref={stripRef}
            className="flex flex-nowrap will-change-transform"
          >
            {STRIP_IMAGES.map((img, i) => (
              <div
                key={i}
                className="flex-shrink-0 p-8 box-content"
                style={{ width: "33vw" }}
              >
                <img
                  src={img}
                  alt={`Gallery ${i + 1}`}
                  loading="lazy"
                  decoding="async"
                  className="w-full aspect-square object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
