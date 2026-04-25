/* ── Types for demo-3 (Costa Mare / MiconStreet) ── */

export type OpenField = "checkin" | "checkout" | "guests" | "room" | null;

export interface Room {
  tag: string;
  name: string;
  img: string;
  specs: string[];
  desc: string;
  amenities: string[];
  price: number;
}

export interface Service {
  id: string;
  num: string;
  name: string;
  em: string;
  kicker: string;
  desc: string;
  hours: string;
  img: string;
  feature?: boolean;
}

export interface GalleryItem {
  src: string;
  cat: string;
  cap: string;
}

export interface GalleryLayout {
  w: number;
  h: number;
}

export interface PickerPosition {
  top: number;
  left: number | undefined;
  right: number | undefined;
}

