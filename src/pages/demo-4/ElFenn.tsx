import { Link } from "react-router-dom";
import { ScrollTop } from "../../components/ScrollTop";
import { WARM, PINK } from "./data/tokens";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import FeaturesGrid from "./components/FeaturesGrid";
import Rooms from "./components/Rooms";
import Rooftop from "./components/Rooftop";
import Activities from "./components/Activities";
import Blog from "./components/Blog";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

export function ElFenn() {
  return (
    <>
      <Link
        to="/"
        className="fixed top-4 left-4 z-[9999] bg-black/65 text-white text-[.72rem] tracking-[1px] px-3.5 py-[7px] rounded-[3px] backdrop-blur-md hover:bg-black/80 transition-colors duration-200"
      >
        ← Demos
      </Link>

      <Header />
      <Hero />
      <About />
      <FeaturesGrid />
      <Rooms />
      <Rooftop />
      <Activities />
      <Blog />
      <Newsletter />
      <Footer />

      <ScrollTop bg={WARM} color="#fff" hoverBg={PINK} hoverColor="#fff" />
    </>
  );
}
