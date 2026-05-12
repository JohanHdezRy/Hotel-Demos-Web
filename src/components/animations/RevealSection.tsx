import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";

type RevealVariant =
  | "fadeUp"
  | "fadeLeft"
  | "fadeRight"
  | "scale"
  | "fade"
  | "clipReveal"
  | "slideUp";

interface RevealSectionProps {
  children: ReactNode;
  variant?: RevealVariant;
  delay?: number;
  duration?: number;
  threshold?: number;
  /**
   * If false, the element re-animates back to `hidden` every time it leaves
   * the viewport and re-animates to `visible` on re-entry. Defaults to true,
   * which is what almost every caller wants — change carefully.
   */
  once?: boolean;
  className?: string;
  style?: CSSProperties;
}

type VariantStyles = { hidden: CSSProperties; visible: CSSProperties };

const variants: Record<RevealVariant, VariantStyles> = {
  fadeUp: {
    hidden: { opacity: 0, transform: "translateY(48px)", filter: "blur(4px)" },
    visible: { opacity: 1, transform: "translateY(0)", filter: "blur(0px)" },
  },
  fadeLeft: {
    hidden: { opacity: 0, transform: "translateX(-48px)", filter: "blur(4px)" },
    visible: { opacity: 1, transform: "translateX(0)", filter: "blur(0px)" },
  },
  fadeRight: {
    hidden: { opacity: 0, transform: "translateX(48px)", filter: "blur(4px)" },
    visible: { opacity: 1, transform: "translateX(0)", filter: "blur(0px)" },
  },
  scale: {
    hidden: { opacity: 0, transform: "scale(0.88)", filter: "blur(4px)" },
    visible: { opacity: 1, transform: "scale(1)", filter: "blur(0px)" },
  },
  fade: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  clipReveal: {
    hidden: { clipPath: "inset(0 0 100% 0)", opacity: 1 },
    visible: { clipPath: "inset(0 0 0% 0)", opacity: 1 },
  },
  slideUp: {
    hidden: { opacity: 0, transform: "translateY(64px)" },
    visible: { opacity: 1, transform: "translateY(0)" },
  },
};

export default function RevealSection({
  children,
  variant = "fadeUp",
  delay = 0,
  duration = 0.7,
  threshold = 0.12,
  once = true,
  className,
  style,
}: RevealSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setInView(false);
        }
      },
      { threshold },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, once]);

  const v = variants[variant];
  const transitionProps = ["opacity", "transform", "filter", "clip-path"].join(
    ", ",
  );

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...style,
        ...(inView ? v.visible : v.hidden),
        transitionProperty: transitionProps,
        transitionDuration: `${duration}s`,
        transitionDelay: `${delay}s`,
        transitionTimingFunction: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        willChange: "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}
