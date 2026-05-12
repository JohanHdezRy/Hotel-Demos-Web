import { useCallback, useEffect, useRef, useState } from "react";
import { useFocusTrap } from "./useFocusTrap";

/**
 * Shared mobile drawer state for Navbars across demos.
 * Centralizes: open/close state, body-scroll lock, Escape-to-close, and
 * focus trap. Attach the returned `drawerRef` to the drawer container so
 * the trap can move focus inside on open and restore it on close.
 */
export function useMobileDrawer<T extends HTMLElement = HTMLElement>() {
  const [isOpen, setIsOpen] = useState(false);
  const drawerRef = useRef<T>(null);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);
  const toggle = useCallback(() => setIsOpen((v) => !v), []);

  useEffect(() => {
    if (!isOpen) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isOpen]);

  useFocusTrap(drawerRef, isOpen);

  return { isOpen, open, close, toggle, drawerRef };
}
