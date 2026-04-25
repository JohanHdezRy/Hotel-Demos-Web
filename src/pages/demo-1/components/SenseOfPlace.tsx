import RevealSection from "../../../components/animations/RevealSection";
import { useCarousel } from "../../../hooks/useCarousel";
import { CarouselControls } from "./Rooms";
import Btn from "./Btn";
import { placeGallery } from "../data/galleryData";

export default function SenseOfPlace() {
  const {
    index: placeSlide,
    next: nextPlace,
    prev: prevPlace,
  } = useCarousel(placeGallery.length);

  return (
    <section className="px-6 md:px-12 py-14 sm:py-20 text-center" id="explore">
      <RevealSection variant="fadeLeft">
        <h2 className="font-[var(--font-cormorant)] text-[clamp(1.8rem,5vw,2.4rem)] font-light tracking-[4px] text-[#999] mb-5">
          A SENSE OF PLACE
        </h2>
        <p className="max-w-[700px] mx-auto mb-[30px] text-sm sm:text-[.9rem] leading-[1.8] text-[#666]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <Btn href="#" variant="dark">
          Learn More
        </Btn>
      </RevealSection>
      <RevealSection variant="scale" delay={0.15}>
        {/* Mobile: single active image */}
        <div className="sm:hidden mt-[30px] h-[240px] overflow-hidden rounded-[4px]">
          <img
            src={placeGallery[placeSlide]}
            alt="Charleston"
            className="w-full h-full object-cover"
          />
        </div>
        {/* Tablet / Desktop: multi-image strip */}
        <div className="hidden sm:flex gap-3 justify-center overflow-hidden mt-[30px]">
          {placeGallery.map((img, i) => (
            <div
              key={i}
              className={`flex-none h-[280px] overflow-hidden rounded-[4px] transition-all duration-500 ${i === placeSlide ? "basis-1/2 opacity-100" : "basis-[32%] opacity-50"}`}
            >
              <img
                src={img}
                alt="Charleston"
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
        <CarouselControls
          prev={prevPlace}
          next={nextPlace}
          current={placeSlide}
          total={placeGallery.length}
          center
        />
      </RevealSection>
    </section>
  );
}
