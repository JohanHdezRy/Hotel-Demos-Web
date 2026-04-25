import type { CSSProperties } from "react";

export const ACCENT = "#F5A200";
export const ACCENT_DARK = "#D4880A";
export const BROWN = "#1E0F00";
export const WARM_MID = "#3D1F00";
export const CREAM = "#FAF5EE";

export const CLIMATE: CSSProperties = {
  fontFamily: "'Climate Crisis', sans-serif",
  fontWeight: 400,
  fontVariationSettings: '"YEAR" 1979',
};

export const MONTSERRAT = (weight: 300 | 400 | 700 = 400): CSSProperties => ({
  fontFamily: "'Montserrat Alternates', sans-serif",
  fontWeight: weight,
});
