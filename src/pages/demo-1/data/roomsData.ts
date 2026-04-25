import room1 from "../../../styles/img/demo-1/room1.jpg";
import room2 from "../../../styles/img/demo-1/room2.jpg";
import room3 from "../../../styles/img/demo-1/room3.jpg";
import suite from "../../../styles/img/demo-1/suite1.jpg";
import type { StaticRoom } from "../types";

export type { StaticRoom };

export const STATIC_ROOMS: StaticRoom[] = [
  {
    id: "r1",
    name: "Classic King Room",
    images: [room1, room2, room3],
    capacity: 2,
    type: "STANDARD",
    price: 189,
  },
  {
    id: "r2",
    name: "Deluxe Queen Suite",
    images: [room2, suite, room3],
    capacity: 2,
    type: "DELUXE",
    price: 249,
  },
  {
    id: "r3",
    name: "Junior Suite",
    images: [room3, room1, suite],
    capacity: 3,
    type: "SUITE",
    price: 359,
  },
];

export const AMENITIES: Record<
  string,
  { icon: string; title: string; desc: string }[]
> = {
  STANDARD: [
    {
      icon: "wifi",
      title: "High-Speed WiFi",
      desc: "Complimentary fiber connection throughout.",
    },
    {
      icon: "pool",
      title: "Pool & Terrace",
      desc: "Heated outdoor pool with city views.",
    },
    {
      icon: "fitness",
      title: "Fitness Center",
      desc: "State-of-the-art equipment, open 24h.",
    },
    {
      icon: "breakfast",
      title: "Breakfast Room",
      desc: "Continental breakfast included daily.",
    },
  ],
  DELUXE: [
    {
      icon: "view",
      title: "City View",
      desc: "Floor-to-ceiling windows overlooking Charleston.",
    },
    {
      icon: "pool",
      title: "Pool & Terrace",
      desc: "Heated outdoor pool with terrace access.",
    },
    {
      icon: "bar",
      title: "Mini Bar",
      desc: "Curated selection refreshed daily.",
    },
    {
      icon: "spa",
      title: "Spa Access",
      desc: "Complimentary access to the wellness floor.",
    },
  ],
  SUITE: [
    {
      icon: "butler",
      title: "Dedicated Butler",
      desc: "24/7 personalized service at your request.",
    },
    {
      icon: "pool",
      title: "Private Plunge Pool",
      desc: "Heated infinity-edge pool on your terrace.",
    },
    {
      icon: "wine",
      title: "Curated Cellar",
      desc: "Temperature-controlled wine selection.",
    },
    {
      icon: "wellness",
      title: "Wellness Suite",
      desc: "In-suite dry sauna and massage tables.",
    },
  ],
  PENTHOUSE: [
    {
      icon: "butler",
      title: "Dedicated Butler",
      desc: "24/7 personalized service via private elevator.",
    },
    {
      icon: "pool",
      title: "Private Plunge Pool",
      desc: "Heated infinity-edge pool on the terrace.",
    },
    {
      icon: "wine",
      title: "Curated Cellar",
      desc: "Temperature-controlled wine wall, sommelier selections.",
    },
    {
      icon: "wellness",
      title: "Wellness Suite",
      desc: "In-suite dry sauna and twin massage tables.",
    },
  ],
};
