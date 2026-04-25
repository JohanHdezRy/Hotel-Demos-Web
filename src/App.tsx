import { lazy, Suspense, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Landing } from "./pages/Landing";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

const BellaGrace = lazy(() =>
  import("./pages/demo-1/BellaGrace").then((m) => ({ default: m.BellaGrace })),
);
const RoomReservation = lazy(() =>
  import("./pages/demo-1/RoomReservation").then((m) => ({
    default: m.RoomReservation,
  })),
);
const FreshBox = lazy(() =>
  import("./pages/demo-2/FreshBox").then((m) => ({ default: m.FreshBox })),
);
const MiconStreet = lazy(() =>
  import("./pages/demo-3/MiconStreet").then((m) => ({
    default: m.MiconStreet,
  })),
);
const ElFenn = lazy(() =>
  import("./pages/demo-4/ElFenn").then((m) => ({ default: m.ElFenn })),
);
const MareTerra = lazy(() =>
  import("./pages/demo-5/MareTerra").then((m) => ({ default: m.MareTerra })),
);
const BlossomCafe = lazy(() =>
  import("./pages/demo-6/BlossomCafe").then((m) => ({
    default: m.BlossomCafe,
  })),
);

function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#111]">
      <span className="text-white/30 text-sm tracking-[4px] uppercase animate-pulse">
        Loading…
      </span>
    </div>
  );
}

export default function App() {
  return (
    <Suspense fallback={<PageLoader />}>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/demo-1" element={<BellaGrace />} />
        <Route path="/demo-1/reserve" element={<RoomReservation />} />
        <Route path="/demo-2" element={<FreshBox />} />
        <Route path="/demo-3" element={<MiconStreet />} />
        <Route path="/demo-4" element={<ElFenn />} />
        <Route path="/demo-5" element={<MareTerra />} />
        <Route path="/demo-6" element={<BlossomCafe />} />
      </Routes>
    </Suspense>
  );
}
