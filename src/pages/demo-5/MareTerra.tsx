import { Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import SignatureDishes from "./components/SignatureDishes";
import MenuSection from "./components/MenuSection";
import ChefStory from "./components/ChefStory";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import Reservations from "./components/Reservations";
import Footer from "./components/Footer";

export function MareTerra() {
  return (
    <main>
      <Link
        to="/"
        className="fixed top-4 left-4 z-[9999] bg-black/65 text-white text-[.72rem] tracking-[1px] px-3.5 py-[7px] rounded-[3px] backdrop-blur-md hover:bg-black/80 transition-colors duration-200"
      >
        ← Demos
      </Link>
      <Navbar />
      <Hero />
      <About />
      <SignatureDishes />
      <MenuSection />
      <ChefStory />
      <Gallery />
      <Testimonials />
      <Reservations />
      <Footer />
    </main>
  );
}
