import { useBookingData } from "./hooks/useBookingData";
import { BG, INK, ACCENT } from "./data/tokens";
import { ScrollTop } from "../../components/ScrollTop";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Intro from "./components/Intro";
import Rooms from "./components/Rooms";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import BookingSection from "./components/BookingSection";
import Footer from "./components/Footer";

export function MiconStreet() {
  const data = useBookingData();

  return (
    <div
      style={{
        background: BG,
        color: INK,
        fontFamily: "'Inter', system-ui, sans-serif",
        overflowX: "hidden",
      }}
    >
      <Navbar />
      <Hero data={data} />
      <Intro />
      <Rooms />
      <Services />
      <Gallery />
      <BookingSection data={data} />
      <Footer />
      <ScrollTop bg={ACCENT} color="#fff" hoverBg={INK} hoverColor={BG} />
    </div>
  );
}
