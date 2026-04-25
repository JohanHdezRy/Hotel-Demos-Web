import { useDiningBar } from "../hooks/useDiningBar";
import vino from "../../../styles/img/demo-1/vino.jpg";
import cafe from "../../../styles/img/demo-1/cafe.jpg";
import tea from "../../../styles/img/demo-1/tea.jpg";
import more from "../../../styles/img/demo-1/random.jpg";

const SLIDES = [vino, cafe, tea, more];
const LABELS = ["Drinks", "Coffee", "Tea", "And More"];

export default function DiningBar() {
  const { barRef, barListRef, barFillRef, barSlideRefs } = useDiningBar();

  return (
    <>
      {/* Mobile layout — simple vertical stack, no GSAP pin */}
      <section
        className="sm:hidden px-6 py-14 border-t-2 border-dashed border-[#e0e0e0]"
        id="dining"
      >
        <h2 className="font-[var(--font-cormorant)] text-[clamp(1.8rem,8vw,2.8rem)] font-light tracking-[4px] text-[#999] mb-8">
          DINING &amp; BAR
        </h2>
        <div className="grid grid-cols-1 gap-6">
          {SLIDES.map((img, i) => (
            <div key={i} className="flex flex-col gap-3">
              <img
                src={img}
                alt={LABELS[i]}
                className="w-full h-[220px] object-cover rounded-[6px]"
              />
              <p className="text-[1.2rem] font-[var(--font-cormorant)] tracking-[2px] text-[#1C1C1C]">
                {LABELS[i]}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Tablet / Desktop — original GSAP pinned layout */}
      <section
        ref={barRef}
        id="dining-desktop"
        className="hidden sm:flex w-full h-screen justify-center items-center border-t-2 border-dashed border-white/20 border-b-2"
      >
        <div className="w-full max-w-[1200px] mx-auto flex px-[10px] relative">
          {/* Vertical fill line */}
          <div
            ref={barFillRef}
            className="absolute top-0 left-0 w-[2px] h-full bg-[#A90023]"
          />

          {/* Left: list */}
          <ul
            ref={barListRef}
            className="text-[clamp(40px,6vw,80px)] m-0 p-0 pr-[10px] list-none flex-shrink-0"
          >
            <li className="py-4">Drinks</li>
            <li className="py-4">Coffee</li>
            <li className="py-4">Tea</li>
            <li className="py-4">AND MORE</li>
          </ul>

          {/* Right: slides */}
          <div className="flex-1 relative">
            {SLIDES.map((img, i) => (
              <div
                key={i}
                ref={(el) => {
                  barSlideRefs.current[i] = el;
                }}
                className="absolute w-1/2 top-1/2 -translate-y-1/2 right-4 rounded-[10px] overflow-hidden"
                style={{ opacity: 0, visibility: "hidden" }}
              >
                <img
                  src={img}
                  alt={`Slide ${i + 1}`}
                  className="w-full max-w-[600px] object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
