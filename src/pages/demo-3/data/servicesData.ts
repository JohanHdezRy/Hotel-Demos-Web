import spa from "../../../styles/img/demo-3/spa1.jpg";
import gym from "../../../styles/img/demo-3/fitness1.jpg";
import dinner from "../../../styles/img/demo-3/dinner.jpg";
import cozumel2 from "../../../styles/img/demo-3/cozumel2.jpg";
import terrace from "../../../styles/img/demo-3/terrace.jpg";
import hotel4 from "../../../styles/img/demo-3/hotel4.jpg";
import hotel2 from "../../../styles/img/demo-3/hotel2.jpg";
import pool from "../../../styles/img/demo-3/pool1.jpg";
import room from "../../../styles/img/demo-3/room.jpg";
import room2 from "../../../styles/img/demo-3/room2.jpg";
import room5 from "../../../styles/img/demo-3/room5.jpg";
import room6 from "../../../styles/img/demo-3/room6.jpg";
import yard from "../../../styles/img/demo-3/yard1.jpg";
import yard2 from "../../../styles/img/demo-3/yard2.jpg";
import type { Service, GalleryItem } from "../types";

export type { Service, GalleryItem };

export const SERVICES: Service[] = [
  {
    id: "spa",
    num: "01",
    name: "Ocean",
    em: "Spa",
    kicker: "Signature",
    desc: "Six treatment rooms suspended over the bay. Our ocean massage uses warm river stones and oils pressed from the property's own palms.",
    hours: "10am – 9pm · Daily",
    img: spa,
    feature: true,
  },
  {
    id: "dining",
    num: "02",
    name: "Palmera",
    em: "Kitchen",
    kicker: "Restaurant",
    desc: "A seven-course tasting menu, sourced from the village and the sea within fifty kilometers.",
    hours: "7pm – 11pm",
    img: dinner,
  },
  {
    id: "bar",
    num: "03",
    name: "Sunset",
    em: "Bar",
    kicker: "Cocktails",
    desc: "Mezcals, natural wines, and the best west-facing view on the property.",
    hours: "5pm – 12am",
    img: "https://cdn.pixabay.com/photo/2018/08/18/02/32/nature-3614137_1280.jpg",
  },
  {
    id: "yoga",
    num: "04",
    name: "Beach",
    em: "Yoga",
    kicker: "Wellness",
    desc: "Sunrise and sunset classes on the oceanfront platform. Mats, coconut water, and a quiet teacher provided.",
    hours: "06:30 · 17:30",
    img: "https://cdn.pixabay.com/photo/2017/08/05/23/54/yoga-2586830_1280.jpg",
  },
  {
    id: "gym",
    num: "05",
    name: "Fitness",
    em: "Pavilion",
    kicker: "Gym",
    desc: "Ocean-view gym with Peloton, Tonal, free weights, and a trainer on-call.",
    hours: "24 hours",
    img: gym,
  },
  {
    id: "beach",
    num: "06",
    name: "Beach",
    em: "Club",
    kicker: "Day",
    desc: "Private cabanas, paddleboards, a reef just offshore, and a bar that opens at ten.",
    hours: "9am – 6pm",
    img: "https://cdn.pixabay.com/photo/2022/11/05/16/02/antalya-7572191_1280.jpg",
  },
];

export const GALLERY_CATS = ["All", "Rooms", "Spa", "Exterior", "Dining"];

export const GALLERY: GalleryItem[] = [
  { src: hotel2, cat: "exterior", cap: "Oceanfront wing" },
  { src: yard2, cat: "exterior", cap: "Tropical gardens" },
  { src: yard, cat: "spa", cap: "Garden pavilion" },
  { src: dinner, cat: "dining", cap: "restaurant" },
  { src: room, cat: "rooms", cap: "regular room" },
  { src: cozumel2, cat: "exterior", cap: "Centro" },
  { src: hotel4, cat: "exterior", cap: "Beachfront" },
  { src: pool, cat: "spa", cap: "Poolside terrace" },
  { src: terrace, cat: "spa", cap: "roof" },
  { src: room2, cat: "rooms", cap: "Garden Suite" },
  { src: room5, cat: "rooms", cap: "Penthouse" },
  { src: room6, cat: "rooms", cap: "Villa bedroom" },
];

export const GALLERY_LAYOUT = [
  { w: 6, h: 4 },
  { w: 3, h: 2 },
  { w: 3, h: 2 },
  { w: 3, h: 2 },
  { w: 3, h: 2 },
  { w: 4, h: 3 },
  { w: 4, h: 3 },
  { w: 4, h: 3 },
  { w: 6, h: 3 },
  { w: 6, h: 3 },
  { w: 6, h: 3 },
  { w: 6, h: 3 },
];
