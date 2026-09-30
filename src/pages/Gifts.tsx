import { useState, useEffect } from "react";

import birthday1 from "../assets/gifts/birthday/photo_2026-09-25_14-40-02.jpg";
import birthday3 from "../assets/gifts/birthday/photo_2026-09-25_14-40-32.jpg";
import birthday4 from "../assets/gifts/birthday/photo_2026-09-25_14-40-41.jpg";
import birthday5 from "../assets/gifts/birthday/photo_2026-09-25_14-40-50.jpg";
import birthday6 from "../assets/gifts/birthday/photo_2026-09-25_14-41-04.jpg";
import birthday7 from "../assets/gifts/birthday/photo_2026-09-25_14-41-11.jpg";
import birthday8 from "../assets/gifts/birthday/photo_2026-09-25_14-41-17.jpg";
import birthday9 from "../assets/gifts/birthday/photo_2026-09-25_14-41-25.jpg";
import birthday10 from "../assets/gifts/birthday/photo_2026-09-25_14-41-34.jpg";
import birthday11 from "../assets/gifts/birthday/WhatsApp Image 2026-09-25 at 21.57.03.jpeg";
import birthday12 from "../assets/gifts/birthday/WhatsApp Image 2026-09-25 at 21.57.04.jpeg";
import birthday13 from "../assets/gifts/birthday/WhatsApp Image 2026-09-25 at 21.57.05.jpeg";
import birthday14 from "../assets/gifts/birthday/WhatsApp Image 2026-09-25 at 21.57.06.jpeg";
import birthday16 from "../assets/gifts/birthday/WhatsApp Image 2026-09-25 at 22.01.36.jpeg";
import birthday17 from "../assets/gifts/birthday/WhatsApp Image 2026-09-28 at 12.34.20.jpeg";
import birthday18 from "../assets/gifts/birthday/WhatsApp Image 2026-09-28 at 12.34.22.jpeg";

import balloon2 from "../assets/gifts/balloon-gift-wrap/photo_2026-09-25_14-43-46.jpg";
import balloon3 from "../assets/gifts/balloon-gift-wrap/photo_2026-09-25_14-43-35.jpg";
import balloon4 from "../assets/gifts/balloon-gift-wrap/WhatsApp Image 2026-09-25 at 22.01.36.jpeg";
import balloon5 from "../assets/gifts/balloon-gift-wrap/WhatsApp Image 2026-09-25 at 22.01.37.jpeg";
import balloon6 from "../assets/gifts/balloon-gift-wrap/WhatsApp Image 2026-09-25 at 22.01.38.jpeg";
import balloon7 from "../assets/gifts/balloon-gift-wrap/WhatsApp Image 2026-09-28 at 12.36.34.jpeg";

import cocoPine from "../assets/juices/classic/WhatsApp Image 2026-09-25 at 21.57.06.jpeg";
import zestyOrange from "../assets/juices/classic/WhatsApp Image 2026-09-25 at 21.57.07.jpeg";
import pineMelon from "../assets/juices/classic/WhatsApp Image 2026-09-25 at 22.01.35.jpeg";
import pineapple from "../assets/juices/classic/WhatsApp Image 2026-09-25 at 22.01.36.jpeg";

type ServiceCategory = "Gift Sets" | "Balloon Decor Services" | "Juices";

type Service = {
  image: string;
  category: ServiceCategory;
  name: string;
};

function Gifts() {
  const [activeCategory, setActiveCategory] =
  useState<ServiceCategory>("Gift Sets");

useEffect(() => {
  const params = new URLSearchParams(window.location.search);
  const category = params.get("category");

  if (category === "juices") {
    setActiveCategory("Juices");
  }
}, []);

  const services: Service[] = [
    // GIFT SETS — NEWEST FIRST
    {
      image: birthday18,
      category: "Gift Sets",
      name: "Gift Box Deluxe",
    },
    {
      image: birthday17,
      category: "Gift Sets",
      name: "Snacks & Treats Package",
    },
    {
      image: birthday16,
      category: "Gift Sets",
      name: "Surprise Box",
    },
    {
      image: birthday14,
      category: "Gift Sets",
      name: "Birthday Card",
    },
    {
      image: birthday13,
      category: "Gift Sets",
      name: "Flower Bouquet",
    },
    {
      image: birthday12,
      category: "Gift Sets",
      name: "Birthday Gift Card",
    },
    {
      image: birthday11,
      category: "Gift Sets",
      name: "Snacks Package",
    },
    {
      image: birthday10,
      category: "Gift Sets",
      name: "Special Treat",
    },
    {
      image: birthday9,
      category: "Gift Sets",
      name: "Birthday Variety Box",
    },
    {
      image: birthday8,
      category: "Gift Sets",
      name: "Birthday Surprise",
    },
    {
      image: birthday7,
      category: "Gift Sets",
      name: "Gift Box",
    },
    {
      image: birthday6,
      category: "Gift Sets",
      name: "Thoughtful Gift Box",
    },
    {
      image: birthday5,
      category: "Gift Sets",
      name: "Birthday Gift Box",
    },
    {
      image: birthday4,
      category: "Gift Sets",
      name: "Birthday Package",
    },
    {
      image: birthday3,
      category: "Gift Sets",
      name: "Special Surprise Package",
    },
    {
      image: birthday1,
      category: "Gift Sets",
      name: "Birthday Gift Collection",
    },

    // BALLOON SERVICES — NEWEST FIRST
    {
      image: balloon7,
      category: "Balloon Decor Services",
      name: "Room Decor Package",
    },
    {
      image: balloon6,
      category: "Balloon Decor Services",
      name: "5 Senses Package",
    },
    {
      image: balloon5,
      category: "Balloon Decor Services",
      name: "Room Decor",
    },
    {
      image: balloon4,
      category: "Balloon Decor Services",
      name: "Balloon Room Decor",
    },
    {
      image: balloon3,
      category: "Balloon Decor Services",
      name: "Special Balloon Gift",
    },
    {
      image: balloon2,
      category: "Balloon Decor Services",
      name: "Celebration Balloon Set",
    },

    // JUICES
    {
      image: cocoPine,
      category: "Juices",
      name: "Coco-Pine Juice",
    },
    {
      image: zestyOrange,
      category: "Juices",
      name: "Zesty Orange Juice",
    },
    {
      image: pineMelon,
      category: "Juices",
      name: "Pine Melon Juice",
    },
    {
      image: pineapple,
      category: "Juices",
      name: "Pineapple Juice",
    },
  ];

  const filteredServices = services.filter(
    (service) => service.category === activeCategory
  );

  return (
    <section className="gifts-page">
      <div className="page-header">
        <p className="eyebrow">OUR SERVICES</p>

        <h1>
          Gifts, balloons<br />
          & juices.
        </h1>

        <p>
          Explore our collection of thoughtful gift sets,
          beautiful balloon services and refreshing juices
          for every special moment.
        </p>
      </div>

      <div className="gift-filters">
        {(
          ["Gift Sets", "Balloon Decor Services", "Juices"] as ServiceCategory[]
        ).map((category) => (
          <button
            key={category}
            className={
              activeCategory === category
                ? "filter-btn active"
                : "filter-btn"
            }
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="catalogue-grid">
        {filteredServices.map((service) => (
          <article className="catalogue-card" key={service.image}>
            <div className="catalogue-image">
              <img src={service.image} alt={service.name} />
            </div>

            <div className="catalogue-info">
              <p>{service.category}</p>
              <h2>{service.name}</h2>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Gifts;
