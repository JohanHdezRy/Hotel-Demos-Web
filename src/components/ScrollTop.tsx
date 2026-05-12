import { useState } from "react";
import type { CSSProperties } from "react";
import { useScrollVisibility } from "../hooks/useScrollVisibility";

interface Props {
  bg: string;
  color: string;
  hoverBg?: string;
  hoverColor?: string;
}

export function ScrollTop({ bg, color, hoverBg, hoverColor }: Props) {
  const show = useScrollVisibility(600);
  const [hovered, setHovered] = useState(false);

  const style: CSSProperties = {
    position: "fixed",
    bottom: 30,
    right: 30,
    width: 46,
    height: 46,
    background: hovered ? hoverBg || color : bg,
    color: hovered ? hoverColor || bg : color,
    border: "none",
    cursor: "pointer",
    fontSize: "1.2rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    opacity: show ? 1 : 0,
    transition: "all .3s",
    zIndex: 999,
  };

  return (
    <button
      type="button"
      aria-label="Scroll to top"
      style={style}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span aria-hidden="true">↑</span>
    </button>
  );
}
