import { Link } from "react-router-dom";
import { FreshboxNav } from "./components/FreshboxNav";
import { FreshboxHero } from "./components/FreshboxHero";
import { FreshboxMenuSection } from "./components/FreshboxMenuSection";
import { FreshboxSloganSection } from "./components/FreshboxSloganSection";
import { FreshboxFoodCardsSection } from "./components/FreshboxFoodCardsSection";
import { FreshboxCouponsSection } from "./components/FreshboxCouponsSection";
import { FreshboxFooter } from "./components/FreshboxFooter";
import { ScrollTop } from "../../components/ScrollTop";
import {
  ACCENT,
  ACCENT_DARK,
  CREAM,
  BROWN,
  MONTSERRAT,
} from "./data/freshboxTokens";

export function FreshBox() {
  return (
    <div
      style={{
        background: CREAM,
        ...MONTSERRAT(400),
        color: BROWN,
        overflowX: "hidden",
      }}
    >
      <nav aria-label="Site navigation" className="fixed top-6 left-6 z-50">
        <Link
          to="/"
          aria-label="Back to portfolio home"
          className="text-[0.6rem] tracking-[4px] uppercase flex items-center gap-2 group transition-colors duration-300"
          style={{ color: BROWN + "99" }}
          onMouseEnter={(e) => (e.currentTarget.style.color = BROWN)}
          onMouseLeave={(e) => (e.currentTarget.style.color = BROWN + "99")}
        >
          <span
            aria-hidden="true"
            className="inline-block h-px bg-current transition-all duration-300"
            style={{ width: 20 }}
          />
          Back
        </Link>
      </nav>
      <FreshboxNav />
      <FreshboxHero />
      <FreshboxMenuSection />
      <FreshboxSloganSection />
      <FreshboxFoodCardsSection />
      <FreshboxCouponsSection />
      <FreshboxFooter />
      <ScrollTop
        bg={ACCENT}
        color="#fff"
        hoverBg={ACCENT_DARK}
        hoverColor="#fff"
      />
    </div>
  );
}
