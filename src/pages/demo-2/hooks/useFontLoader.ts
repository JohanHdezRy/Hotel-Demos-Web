import { useEffect } from "react";

export function useFontLoader(): void {
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css2?family=Lilita+One&family=Nunito:wght@400;600;700;800;900&display=swap";
    document.head.appendChild(link);
    return () => {
      if (document.head.contains(link)) document.head.removeChild(link);
    };
  }, []);
}
