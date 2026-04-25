import { ScrollTop } from "../../components/ScrollTop";
import Marquee from "../../components/animations/Marquee";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Welcome from "./components/Welcome";
import HorizontalGallery from "./components/HorizontalGallery";
import Rooms from "./components/Rooms";
import DiningBar from "./components/DiningBar";
import Amenities from "./components/Amenities";
import SuiteEscape from "./components/SuiteEscape";
import HistoryCulture from "./components/HistoryCulture";
import SenseOfPlace from "./components/SenseOfPlace";
import Availability from "./components/Availability";
import Footer from "./components/Footer";

export function BellaGrace() {
  return (
    <div className="bg-white text-[#1C1C1C] font-[var(--font-source-sans)] overflow-x-hidden">
      <Navbar />
      <Hero />
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
      <Welcome />
      <HorizontalGallery />
      <Rooms />
      <DiningBar />
      <Amenities />
      <SuiteEscape />
      <HistoryCulture />
      <SenseOfPlace />
      <Availability />
      <Footer />
      <ScrollTop
        bg="#A90023"
        color="#fff"
        hoverBg="#D2AA00"
        hoverColor="#1C1C1C"
      />
    </div>
  );
}
