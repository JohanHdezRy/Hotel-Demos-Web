import room from "../../../styles/img/demo-3/room.jpg";
import room2 from "../../../styles/img/demo-3/room2.jpg";
import room3 from "../../../styles/img/demo-3/room3.jpg";
import room4 from "../../../styles/img/demo-3/room4.jpg";
import room5 from "../../../styles/img/demo-3/room5.jpg";
import room6 from "../../../styles/img/demo-3/room6.jpg";
import type { Room } from "../types";

export type { Room };

export const ROOMS: Room[] = [
  {
    tag: "Ground floor · 400 sqft",
    name: "Ocean View King",
    img: room,
    specs: ["King bed", "Sleeps 2", "Private balcony", "400 sqft"],
    desc: "A corner room with full-length glass doors opening onto a private balcony, twelve steps from the sand. Sound of the surf guaranteed.",
    amenities: [
      "King-size bed, hand-woven linens",
      "Rain shower + standalone tub",
      "Private balcony, full ocean view",
      "Nespresso machine, welcome pantry",
      "Hand-thrown ceramics in bath",
      "Complimentary beach kit",
    ],
    price: 320,
  },
  {
    tag: "Top floor · 500 sqft",
    name: "Garden Suite",
    img: room2,
    specs: ["King bed", "Sleeps 2", "Garden terrace", "500 sqft"],
    desc: "A top-floor suite with an open-air garden terrace and a soaking tub under the stars. Breakfast included; sunset cocktail on the house.",
    amenities: [
      "King-size bed, organic linens",
      "Open-air rain shower",
      "Outdoor soaking tub",
      "Private garden terrace 180 sqft",
      "In-suite espresso bar",
      "Daily breakfast + sunset cocktail",
    ],
    price: 410,
  },
  {
    tag: "Beachfront · 1,200 sqft",
    name: "Beachfront Villa",
    img: room3,
    specs: ["2 bedrooms", "Sleeps 4", "Private plunge pool", "1,200 sqft"],
    desc: "A stand-alone villa with two bedrooms and a private plunge pool on a deck that extends into the dunes. Butler service included.",
    amenities: [
      "Two king bedrooms",
      "Private plunge pool (4 × 8 m)",
      "Living room + dining area",
      "Outdoor kitchen + grill",
      "Dedicated butler service",
      "Beach cabana with day bed",
    ],
    price: 720,
  },
  {
    tag: "Penthouse · 1,800 sqft",
    name: "Presidential Penthouse",
    img: room4,
    specs: ["2 bedrooms", "Sleeps 4", "Rooftop terrace", "1,800 sqft"],
    desc: "The entire top floor of the east wing. Wraparound rooftop with an infinity pool and outdoor dining for eight.",
    amenities: [
      "Two king bedrooms + office",
      "Rooftop infinity pool",
      "Outdoor dining for 8",
      "Private chef available",
      "Grand piano in living room",
      "Airport transfer included",
    ],
    price: 1480,
  },
];

/* Additional room images referenced by Gallery */
export { room5, room6 };
