import { useEffect, useState } from "react";

/**
 * Returns true once the window has been scrolled past `threshold` pixels.
 * Used by back-to-top buttons and similar scroll-revealed UI.
 */
export function useScrollVisibility(threshold = 600) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > threshold);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return visible;
}
