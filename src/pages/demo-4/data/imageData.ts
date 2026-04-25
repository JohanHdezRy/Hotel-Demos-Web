import hotel from "../../../styles/img/demo-4/hotel.jpg";
import hote2 from "../../../styles/img/demo-4/hotel2.jpg"
import hote3 from "../../../styles/img/demo-4/hotel3.jpg";
import room2 from "../../../styles/img/demo-4/room.jpg";
import room1 from "../../../styles/img/demo-4/room2.jpg";
import room3 from "../../../styles/img/demo-4/room3.jpg";
import room4 from "../../../styles/img/demo-4/room4.jpg";
import room5 from "../../../styles/img/demo-4/room5.jpg";
import room6 from "../../../styles/img/demo-4/room6.jpg";
import room7 from "../../../styles/img/demo-4/room7.jpg";
import room8 from "../../../styles/img/demo-4/room8.jpg";
import fea1 from "../../../styles/img/demo-4/rest.jpg";
import fea2 from "../../../styles/img/demo-4/rest2.jpg";
import fea3 from "../../../styles/img/demo-4/fitness1.jpg";
import fea4 from "../../../styles/img/demo-4/lobby.jpg";
import fea5 from "../../../styles/img/demo-4/spa1.jpg";
import fea6 from "../../../styles/img/demo-4/terrace.jpg";
import fea7 from "../../../styles/img/demo-4/restaurant1.jpg";
import fea8 from "../../../styles/img/demo-4/spa2.jpg";
import art from "../../../styles/img/demo-4/art.jpg";
import type { FeatureItem, RoomItem, ActivityItem, BlogItem } from "../types";


export const heroImages: string[] = [hotel, hote2, hote3];

export const featureImages: FeatureItem[] = [
  { img: fea3, label: "Retreats" },
  { img: fea2, label: "Art @ El Fenn" },
  { img: fea5, label: "Spa & Pools" },
  { img: fea1, label: "Restaurant" },
  { img: fea4, label: "Interior Styling" },
  { img: fea6, label: "Our Ethos" },
];

export const roomImages: RoomItem[] = [
  { img: room1, name: "Small Rooms", price: "€342" },
  { img: room2, name: "Medium Rooms", price: "€428" },
  { img: room3, name: "Large Rooms", price: "€523" },
  { img: room4, name: "Extra Large Rooms", price: "€618" },
  { img: room5, name: "XL with Terrace", price: "€950" },
  { img: room6, name: "Family Suite (2 Bed)", price: "€950" },
  { img: room7, name: "Family Suite (3 Bed)", price: "€1,140" },
  { img: room8, name: "Cosy Rooms", price: "€342" },
];

export const rooftopImage: string = fea6;

export const activityImages: ActivityItem[] = [
  { img: fea1, label: "Eating", sub: "Food & Drink" },
  { img: fea7, label: "Drinking", sub: "Rooftop Bar" },
  { img: fea5, label: "Relaxing", sub: "Spa & Pools" },
  { img: fea8, label: "Shopping", sub: "Boutique" },
];

export const blogImages: BlogItem[] = [
  {
    img: art,
    title: "Day Trips from Marrakech",
    excerpt:
      "Discover the best excursions from the Red City, from Atlas Mountains to Essaouira coast.",
  },
  {
    img: fea4,
    title: "Guide to Marrakech Districts",
    excerpt:
      "Navigate the vibrant souks, palaces, and hidden gardens across the city's unique neighborhoods.",
  },
  {
    img: hotel,
    title: "Art Exhibitions Spring 2026",
    excerpt:
      "A curated guide to the most exciting contemporary art shows in Morocco this season.",
  },
];
