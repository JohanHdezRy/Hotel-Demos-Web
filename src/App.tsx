import { lazy, Suspense, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Landing } from "./pages/Landing";
import { ErrorBoundary } from "./components/ErrorBoundary";

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

function PageLoader({ tint }: { tint?: string }) {
  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{ background: tint ?? "#111" }}
    >
      <span className="text-white/65 text-sm tracking-[4px] uppercase animate-pulse">
        Loading…
      </span>
    </div>
  );
}

function Lazy({
  children,
  tint,
}: {
  children: React.ReactNode;
  tint?: string;
}) {
  return <Suspense fallback={<PageLoader tint={tint} />}>{children}</Suspense>;
}

export default function App() {
  return (
    <ErrorBoundary>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route
          path="/demo-1"
          element={
            <Lazy tint="#1C1C1C">
              <BellaGrace />
            </Lazy>
          }
        />
        <Route
          path="/demo-1/reserve"
          element={
            <Lazy tint="#1C1C1C">
              <RoomReservation />
            </Lazy>
          }
        />
        <Route
          path="/demo-2"
          element={
            <Lazy tint="#3D1200">
              <FreshBox />
            </Lazy>
          }
        />
        <Route
          path="/demo-3"
          element={
            <Lazy tint="#16130e">
              <MiconStreet />
            </Lazy>
          }
        />
        <Route
          path="/demo-4"
          element={
            <Lazy tint="#1a1a1a">
              <ElFenn />
            </Lazy>
          }
        />
        <Route
          path="/demo-5"
          element={
            <Lazy tint="#1c1410">
              <MareTerra />
            </Lazy>
          }
        />
        <Route
          path="/demo-6"
          element={
            <Lazy tint="#1a1208">
              <BlossomCafe />
            </Lazy>
          }
        />
      </Routes>
    </ErrorBoundary>
  );
}
