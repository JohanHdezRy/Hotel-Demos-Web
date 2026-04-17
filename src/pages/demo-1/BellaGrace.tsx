import { useEffect, useRef, useState } from "react";
import { ScrollTop } from "../../components/ScrollTop";
import { Link, useNavigate } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useNavbarScroll } from "../../hooks/useNavbarScroll";
import { useCarousel } from "../../hooks/useCarousel";
import { useGsapHero } from "../../hooks/useGsapHero";
import RevealSection from "../../components/animations/RevealSection";
import Marquee from "../../components/animations/Marquee";
import GlareHover from "../../components/animations/GlareHover";
import room1 from "../../styles/img/demo-1/room1.jpg";
import room2 from "../../styles/img/demo-1/room2.jpg";
import room3 from "../../styles/img/demo-1/room3.jpg";
import rst from "../../styles/img/demo-1/restaurant1.jpg";
import spa from "../../styles/img/demo-1/spa1.jpg";
import pool from "../../styles/img/demo-1/pool1.jpg";
import city from "../../styles/img/demo-1/cozumel1.jpg";
import city2 from "../../styles/img/demo-1/cozumel2.jpg";
import city3 from "../../styles/img/demo-1/cozumel3.jpeg";
import lounge from "../../styles/img/demo-1/yard2.jpg";
import yard from "../../styles/img/demo-1/yard1.jpg";
import suite from "../../styles/img/demo-1/suite1.jpg";
import fitness from "../../styles/img/demo-1/fitness1.jpg";
import dinner from "../../styles/img/demo-1/dinner.jpg";
import lobby from "../../styles/img/demo-1/lobby.jpg";
import hotel from "../../styles/img/demo-1/hotel.jpg";
import vino from "../../styles/img/demo-1/vino.jpg";
import cafe from "../../styles/img/demo-1/cafe.jpg";
import tea from "../../styles/img/demo-1/tea.jpg";
import more from "../../styles/img/demo-1/random.jpg";

gsap.registerPlugin(ScrollTrigger);

const IMG = {
  heroFacade: hotel,
  lobby,
  room1,
  room2,
  room3,
  restaurant: rst,
  spa,
  pool,
  city1: city,
  city2,
  city3,
  lounge,
  courtyard: yard,
  suite,
  fitness,
  dining2: dinner,
  vino: vino,
  cafe,
  tea,
  more,
};

const placeGallery = [IMG.city1, IMG.city2, IMG.city3];
const amenities = [
  { img: IMG.pool, title: "Pool & Terrace" },
  { img: IMG.fitness, title: "Fitness Center" },
  { img: IMG.dining2, title: "Breakfast Room" },
];

/* ── Static room data ── */
type StaticRoom = {
  id: string;
  name: string;
  capacity: number;
  type: string;
  price: number;
  images: string[];
};

const STATIC_ROOMS: StaticRoom[] = [
  {
    id: "r1",
    name: "Classic King Room",
    images: [room1, room2, room3],
    capacity: 2,
    type: "STANDARD",
    price: 189,
  },
  {
    id: "r2",
    name: "Deluxe Queen Suite",
    images: [room2, suite, room3],
    capacity: 2,
    type: "DELUXE",
    price: 249,
  },
  {
    id: "r3",
    name: "Junior Suite",
    images: [room3, room1, suite],
    capacity: 3,
    type: "SUITE",
    price: 359,
  },
];

/* ── Shared mini components ── */
function Btn({
  href,
  variant,
  children,
}: {
  href: string;
  variant: "outline" | "dark" | "burgundy";
  children: React.ReactNode;
}) {
  const base =
    "inline-block px-9 py-3 text-[.78rem] tracking-[2px] uppercase font-semibold rounded-[2px] cursor-pointer transition-all duration-300 text-center";
  const variants = {
    outline:
      "border-[1.5px] border-white/50 text-white bg-transparent hover:bg-white hover:text-[#1C1C1C]",
    dark: "border-[1.5px] border-[#1C1C1C] text-[#1C1C1C] bg-transparent hover:bg-[#1C1C1C] hover:text-white",
    burgundy:
      "border-none bg-[#A90023] text-white px-10 py-3.5 rounded-[24px] hover:bg-[#7d001a]",
  };
  return (
    <a href={href} className={`${base} ${variants[variant]}`}>
      {children}
    </a>
  );
}

function CarouselControls({
  prev,
  next,
  current,
  total,
  center,
}: {
  prev: () => void;
  next: () => void;
  current: number;
  total: number;
  center?: boolean;
}) {
  return (
    <div
      className={`flex items-center gap-5 mb-[30px] ${center ? "justify-center mt-4 mb-0" : ""}`}
    >
      <button
        onClick={prev}
        className="bg-transparent border-none text-[1.2rem] cursor-pointer text-[#1C1C1C] px-[10px] py-1 transition-colors duration-200 tracking-[8px] hover:text-[#A90023]"
      >
        ←
      </button>
      <span className="text-[.85rem] tracking-[2px] text-[#757575]">
        {String(current + 1).padStart(2, "0")} /{" "}
        {String(total).padStart(2, "0")}
      </span>
      <button
        onClick={next}
        className="bg-transparent border-none text-[1.2rem] cursor-pointer text-[#1C1C1C] px-[10px] py-1 transition-colors duration-200 tracking-[8px] hover:text-[#A90023]"
      >
        →
      </button>
    </div>
  );
}

function RoomCard({
  room,
  onReserve,
}: {
  room: (typeof STATIC_ROOMS)[0];
  onReserve: () => void;
}) {
  const [activeImg, setActiveImg] = useState(0);
  const total = room.images.length;

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-[0_2px_20px_rgba(0,0,0,.06)] hover:shadow-[0_8px_40px_rgba(0,0,0,.12)] transition-shadow duration-300">
      <div className="relative h-[500px] overflow-hidden">
        {room.images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`${room.name} ${i + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
              i === activeImg ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setActiveImg((p) => (p - 1 + total) % total);
          }}
          className="absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-black/40 text-white flex items-center justify-center hover:bg-black/60 transition-colors text-base leading-none"
        >
          ‹
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation();
            setActiveImg((p) => (p + 1) % total);
          }}
          className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-black/40 text-white flex items-center justify-center hover:bg-black/60 transition-colors text-base leading-none"
        >
          ›
        </button>
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
          {room.images.map((_, i) => (
            <button
              key={i}
              onClick={(e) => {
                e.stopPropagation();
                setActiveImg(i);
              }}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === activeImg ? "w-4 bg-white" : "w-1.5 bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
      <div className="px-5 py-4">
        <h3 className="font-[var(--font-playfair-sc)] text-[.9rem] tracking-[2px] text-[#1C1C1C]">
          {room.name}
        </h3>
        <p className="text-[.75rem] text-[#999] mt-1">
          {room.capacity} guests · {room.type}
        </p>
        <p className="text-[.85rem] font-semibold text-[#1C1C1C] mt-1">
          ${room.price}
          <span className="text-[.72rem] font-normal text-[#999]">/night</span>
        </p>
        <button
          onClick={onReserve}
          className="mt-4 w-full py-2.5 bg-[#A90023] text-white text-[.72rem] tracking-[1.5px] uppercase rounded-[20px] hover:bg-[#7d001a] transition-colors duration-300 border-none cursor-pointer"
        >
          Reserve
        </button>
      </div>
    </div>
  );
}

export function BellaGrace() {
  const scrolled = useNavbarScroll(80);
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const {
    index: placeSlide,
    next: nextPlace,
    prev: prevPlace,
  } = useCarousel(placeGallery.length);
  const heroRef = useGsapHero<HTMLElement>();
  const barRef = useRef<HTMLElement>(null);
  const barListRef = useRef<HTMLUListElement>(null);
  const barFillRef = useRef<HTMLDivElement>(null);
  const barSlideRefs = useRef<(HTMLDivElement | null)[]>([]);
  const galleryRef = useRef<HTMLDivElement>(null);
  const stripRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const gallery = galleryRef.current;
    const strip = stripRef.current;
    if (!gallery || !strip) return;

    const ctx = gsap.context(() => {
      const getDistance = () => strip.scrollWidth - window.innerWidth;

      gsap.to(strip, {
        x: () => -getDistance(),
        ease: "none",
        scrollTrigger: {
          trigger: gallery,
          start: "top top",
          end: () => "+=" + getDistance(),
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (!barRef.current || !barListRef.current || !barFillRef.current) return;

    const ctx = gsap.context(() => {
      const listItems = gsap.utils.toArray<HTMLLIElement>(
        "li",
        barListRef.current!,
      );
      const slides = barSlideRefs.current.filter(
        (s): s is HTMLDivElement => s !== null,
      );

      // First item active by default
      gsap.set(listItems[0], { color: "#A90023" });
      gsap.set(slides[0], { autoAlpha: 1 });
      gsap.set(barFillRef.current!, {
        scaleY: 1 / listItems.length,
        transformOrigin: "top left",
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: barRef.current,
          start: "top top",
          end: "+=" + listItems.length * 120 + "%",
          pin: true,
          scrub: true,
        },
      });

      listItems.forEach((item, i) => {
        const prev = listItems[i - 1];
        if (prev) {
          tl.set(item, { color: "#A90023" }, 0.5 * i)
            .to(slides[i], { autoAlpha: 1, duration: 0.2 }, "<")
            .set(prev, { color: "#fffce1" }, "<")
            .to(slides[i - 1], { autoAlpha: 0, duration: 0.2 }, "<");
        }
      });

      tl.to(
        barFillRef.current!,
        {
          scaleY: 1,
          transformOrigin: "top left",
          ease: "none",
          duration: tl.duration(),
        },
        0,
      ).to({}, {});
    }, barRef);

    return () => ctx.revert();
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  const NAV_LINKS = [
    { label: "Rooms", id: "rooms" },
    { label: "Dining", id: "dining" },
    { label: "Explore", id: "explore" },
    { label: "Amenities", id: "amenities" },
  ] as const;

  const navBase =
    "fixed top-0 left-0 w-full z-[1000] px-6 md:px-12 flex items-center gap-5 transition-all duration-[400ms]";
  const navScroll = scrolled
    ? "bg-white/[0.97] shadow-[0_2px_16px_rgba(0,0,0,.06)] py-3"
    : "bg-transparent py-[18px]";

  return (
    <div className="bg-white text-[#1C1C1C] font-[var(--font-source-sans)] overflow-x-hidden">
      {/* ═══ NAVBAR ═══ */}
      <nav className={`${navBase} ${navScroll}`}>
        <Link
          to="/"
          className={`text-[.75rem] tracking-[1px] transition-colors duration-[400ms] ${scrolled ? "text-[#A90023]" : "text-white/80"}`}
        >
          ← Demos
        </Link>
        <span
          className={`font-[var(--font-playfair-sc)] text-base tracking-[3px] transition-colors duration-[400ms] ${scrolled ? "text-[#1C1C1C]" : "text-white"}`}
        >
          HOTEL BELLA GRACE
        </span>
        {/* Desktop links */}
        <div className="ml-auto hidden md:flex gap-6 items-center">
          {NAV_LINKS.map(({ label, id }) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className={`text-[.72rem] tracking-[2px] uppercase font-semibold transition-colors duration-300 hover:text-[#D2AA00] bg-transparent border-none cursor-pointer ${scrolled ? "text-[#1C1C1C]" : "text-white/85"}`}
            >
              {label}
            </button>
          ))}
          <button
            onClick={() => scrollToSection("contact")}
            className="text-[.72rem] tracking-[2px] uppercase font-semibold px-[22px] py-2 border-[1.5px] border-[#A90023] bg-[#A90023] text-white rounded-[2px] transition-all duration-300 hover:bg-[#7d001a] cursor-pointer"
          >
            Check Availability
          </button>
        </div>
        {/* Mobile hamburger */}
        <button
          className="ml-auto flex md:hidden flex-col gap-[5px] p-2 bg-transparent border-none cursor-pointer"
          onClick={() => setMobileMenuOpen((p) => !p)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-5 h-px transition-all duration-300 ${scrolled ? "bg-[#1C1C1C]" : "bg-white"} ${mobileMenuOpen ? "rotate-45 translate-y-[6px]" : ""}`}
          />
          <span
            className={`block w-5 h-px transition-all duration-300 ${scrolled ? "bg-[#1C1C1C]" : "bg-white"} ${mobileMenuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-5 h-px transition-all duration-300 ${scrolled ? "bg-[#1C1C1C]" : "bg-white"} ${mobileMenuOpen ? "-rotate-45 -translate-y-[6px]" : ""}`}
          />
        </button>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-[999] bg-[#1C1C1C] flex flex-col items-center justify-center gap-8 transition-opacity duration-300 md:hidden ${
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {NAV_LINKS.map(({ label, id }) => (
          <button
            key={id}
            onClick={() => scrollToSection(id)}
            className="text-white text-[1.05rem] tracking-[4px] uppercase bg-transparent border-none cursor-pointer hover:text-[#D2AA00] transition-colors duration-300"
          >
            {label}
          </button>
        ))}
        <button
          onClick={() => {
            scrollToSection("contact");
            setMobileMenuOpen(false);
          }}
          className="mt-4 px-10 py-3 bg-[#A90023] text-white text-[.8rem] tracking-[2px] uppercase rounded-[2px] hover:bg-[#7d001a] transition-colors duration-300 border-none cursor-pointer"
        >
          Check Availability
        </button>
      </div>

      {/* ═══ HERO ═══ */}
      <header
        ref={heroRef}
        className="relative h-[96vh] min-h-[540px] overflow-hidden"
      >
        <img
          src={IMG.heroFacade}
          alt="Hotel Bella Grace facade"
          className="gh-img w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-[#1c1c1c]/40" />
        <div className="absolute top-1/2 right-[5%] -translate-y-1/2 text-right text-white max-w-[520px]">
          <p className="gh-label text-[.78rem] tracking-[2px] mb-3 opacity-80">
            Residence Inn by Marriott
          </p>
          <div style={{ overflow: "hidden" }}>
            <p className="gh-line font-[var(--font-playfair-sc)] text-[2.6rem] leading-[1.15] tracking-[2px]">
              HOTEL BELLA GRACE
            </p>
          </div>
          <div style={{ overflow: "hidden" }} className="mb-4">
            <p className="gh-line font-[var(--font-playfair-sc)] text-[1.1rem] leading-[1.2] tracking-[2px] text-white/70">
              CHARLESTON HISTORIC DISTRICT
            </p>
          </div>
          <div className="gh-meta mt-2 text-[.85rem] flex justify-end gap-2.5 items-center">
            <span className="text-[#266F97] text-[.7rem] tracking-[2px]">
              ●●●●○
            </span>
            <span>4.4 · 376 Reviews</span>
          </div>
        </div>
      </header>

      {/* ═══ MARQUEE ═══ */}
      <Marquee
        items={[
          "BELLA GRACE",
          "CHARLESTON",
          "HISTORIC DISTRICT",
          "RESIDENCE INN",
          "OYSTER BAR",
          "POOL & TERRACE",
          "MARRIOTT BONVOY",
        ]}
        speed={28}
      />

      {/* ═══ WELCOME ═══ */}
      <section className="text-center px-6 pt-20 pb-[60px] max-w-[800px] mx-auto">
        <RevealSection variant="fadeUp">
          <div className="w-full h-px bg-[#D2D2D2] relative mb-5 before:content-[''] before:absolute before:-top-[3px] before:left-0 before:w-[7px] before:h-[7px] before:bg-[#D2D2D2] before:rounded-full after:content-[''] after:absolute after:-top-[3px] after:right-0 after:w-[7px] after:h-[7px] after:bg-[#D2D2D2] after:rounded-full" />
          <p className="text-[.65rem] tracking-[4px] uppercase text-[#757575] mb-4">
            WELCOME TO HOTEL BELLA GRACE / CHARLESTON HISTORIC DISTRICT
          </p>
          <h2 className="font-[var(--font-cormorant)] text-[3rem] font-light text-[#1C1C1C] mb-5 tracking-[4px]">
            HOTEL BELLA GRACE
          </h2>
          <p className="text-[.95rem] leading-[1.9] text-[#666]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
        </RevealSection>
      </section>

      {/* ═══ ARCHITECTURAL GEM — Horizontal Gallery ═══ */}
      <section ref={galleryRef} className="py-16 overflow-x-hidden">
        <RevealSection variant="fadeLeft">
          <h2 className="font-[var(--font-cormorant)] text-[2.5rem] font-light tracking-[6px] text-[#999] text-center mb-6">
            AN ARCHITECTURAL GEM
          </h2>
        </RevealSection>
        <div className="overflow-x-hidden">
          <div
            ref={stripRef}
            className="flex flex-nowrap will-change-transform"
          >
            {[
              IMG.heroFacade,
              IMG.lobby,
              IMG.courtyard,
              IMG.room1,
              IMG.room2,
              IMG.room3,
              IMG.suite,
              IMG.spa,
            ].map((img, i) => (
              <div
                key={i}
                className="flex-shrink-0 p-8 box-content"
                style={{ width: "33vw" }}
              >
                <img
                  src={img}
                  alt={`Gallery ${i + 1}`}
                  className="w-full aspect-square object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ ROOMS ═══ */}
      <section className="px-15 md:px-15 pt-20 pb-[60px]" id="rooms">
        <RevealSection variant="fadeUp">
          <h2 className="font-[var(--font-playfair-sc)] text-[2.5rem] tracking-[4px] text-[#1C1C1C] mb-2">
            ROOMS & SUITES
          </h2>
          <p className="text-[.8rem] text-[#999] tracking-[1px] mb-8">
            Select your room type
          </p>
        </RevealSection>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {STATIC_ROOMS.map((room, i) => (
            <RevealSection key={room.id} variant="fadeUp" delay={i * 0.1}>
              <RoomCard room={room} onReserve={() => navigate("/demo-1/reserve", { state: { room } })} />
            </RevealSection>
          ))}
        </div>
      </section>

      {/* ═══ BAR — GreenSock pin animation ═══ */}
      <section
        ref={barRef}
        id="dining"
        className="w-full h-screen flex justify-center items-center border-t-2 border-dashed border-white/20 border-b-2 border-dashed"
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
            className="text-[80px] m-0 p-0 pr-[10px] list-none flex-shrink-0"
          >
            <li className="py-4">Drinks</li>
            <li className="py-4">Coffee</li>
            <li className="py-4">Tea</li>
            <li className="py-4">AND MORE</li>
          </ul>

          {/* Right: slides */}
          <div className="flex-1 relative">
            {[IMG.vino, IMG.cafe, IMG.tea, IMG.more].map((img, i) => (
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

      {/* ═══ AMENITIES ═══ */}
      <section className="px-6 md:px-12 py-20" id="amenities">
        <RevealSection variant="fadeUp">
          <h2 className="font-[var(--font-playfair-sc)] text-[1.8rem] tracking-[4px] text-[#1C1C1C] mb-5">
            HOTEL AMENITIES
          </h2>
        </RevealSection>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-2.5">
          {amenities.map((a, i) => (
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
                    className="w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                </GlareHover>
                <h3 className="font-normal text-[.95rem] py-4">{a.title}</h3>
              </div>
            </RevealSection>
          ))}
        </div>
      </section>

      {/* ═══ SUITE ESCAPE ═══ */}
      <section className="bg-[#1C1C1C] text-white grid grid-cols-1 md:grid-cols-2 min-h-[480px]">
        <div className="overflow-hidden">
          <img
            src={IMG.lounge}
            alt="Suite escape"
            className="w-full h-full object-cover"
          />
        </div>
        <RevealSection variant="fadeRight">
          <div className="px-[60px] py-20 flex flex-col justify-center">
            <h2 className="font-[var(--font-cormorant)] text-[2.2rem] font-light tracking-[4px] text-white mb-6">
              A SUITE ESCAPE
            </h2>
            <p className="text-[.9rem] leading-[1.8] text-white/60 mb-[30px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <Btn href="#" variant="outline">
              Learn More
            </Btn>
          </div>
        </RevealSection>
      </section>

      {/* ═══ HISTORY & CULTURE ═══ */}
      <section className="grid grid-cols-1 md:grid-cols-2 min-h-[440px]">
        <div className="overflow-hidden">
          <img
            src={IMG.suite}
            alt="History"
            className="w-full h-full object-cover"
          />
        </div>
        <RevealSection variant="fadeLeft">
          <div className="px-[60px] py-20 flex flex-col justify-center">
            <h2 className="font-[var(--font-playfair-sc)] text-[1.6rem] tracking-[3px] mb-5">
              ENTRENCHED IN HISTORY, ART, AND CULTURE
            </h2>
            <p className="text-[.9rem] leading-[1.8] text-[#666] mb-[30px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </p>
            <Btn href="#" variant="dark">
              Learn More
            </Btn>
          </div>
        </RevealSection>
      </section>

      {/* ═══ A SENSE OF PLACE ═══ */}
      <section className="px-6 md:px-12 py-20 text-center" id="explore">
        <RevealSection variant="fadeLeft">
          <h2 className="font-[var(--font-cormorant)] text-[2.4rem] font-light tracking-[4px] text-[#999] mb-5">
            A SENSE OF PLACE
          </h2>
          <p className="max-w-[700px] mx-auto mb-[30px] text-[.9rem] leading-[1.8] text-[#666]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <Btn href="#" variant="dark">
            Learn More
          </Btn>
        </RevealSection>
        <RevealSection variant="scale" delay={0.15}>
          <div className="flex gap-3 justify-center overflow-hidden mt-[30px]">
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

      {/* ═══ FOOTER ═══ */}
      <footer
        className="bg-[#1C1C1C] px-6 md:px-12 pt-[60px] pb-4 text-white/50"
        id="contact"
      >
        <div className="max-w-[1200px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 mb-10">
          <div>
            <h4 className="text-[#D2AA00] font-[var(--font-playfair-sc)] text-[.9rem] tracking-[2px] mb-4">
              Hotel Bella Grace
            </h4>
            <p className="text-[.8rem] leading-[1.8]">
              185 East Bay Street
              <br />
              Charleston, SC 29401
            </p>
            <p className="text-[.8rem] mt-1">+1 (843) 990-7500</p>
          </div>
          {[
            {
              title: "Quick Links",
              links: [
                "Rooms & Suites",
                "Dining",
                "Explore Charleston",
                "Meetings & Events",
              ],
            },
            {
              title: "Amenities",
              links: [
                "Pool & Terrace",
                "Fitness Center",
                "Concierge",
                "Parking",
              ],
            },
            {
              title: "Policies",
              links: ["Pet Policy", "Cancellation", "Privacy", "Accessibility"],
            },
          ].map((col) => (
            <div key={col.title}>
              <h4 className="text-[#D2AA00] font-[var(--font-playfair-sc)] text-[.9rem] tracking-[2px] mb-4">
                {col.title}
              </h4>
              {col.links.map((l) => (
                <a
                  key={l}
                  href="#"
                  className="block text-[.8rem] leading-[1.8] hover:text-[#D2AA00] transition-colors duration-200"
                >
                  {l}
                </a>
              ))}
            </div>
          ))}
        </div>
        <div className="max-w-[1200px] mx-auto pt-6 border-t border-white/[0.08] flex justify-between text-[.7rem] text-white/30">
          <span>© 2026 Hotel Bella Grace. Marriott Bonvoy.</span>
          <span>Demo — React + TypeScript</span>
        </div>
      </footer>

      <ScrollTop
        bg="#A90023"
        color="#fff"
        hoverBg="#D2AA00"
        hoverColor="#1C1C1C"
      />

    </div>
  );
}
