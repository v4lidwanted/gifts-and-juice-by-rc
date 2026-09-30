import { Link } from "react-router-dom";

import birthday18 from "../assets/gifts/birthday/WhatsApp Image 2026-09-28 at 12.34.22.jpeg";
import birthday14 from "../assets/gifts/birthday/WhatsApp Image 2026-09-25 at 21.57.06.jpeg";
import birthday13 from "../assets/gifts/birthday/WhatsApp Image 2026-09-25 at 21.57.05.jpeg";
import birthday10 from "../assets/gifts/birthday/photo_2026-09-25_14-41-34.jpg";
import balloon1 from "../assets/gifts/balloon-gift-wrap/photo_2026-09-25_14-43-20.jpg";
import balloon6 from "../assets/gifts/balloon-gift-wrap/WhatsApp Image 2026-09-25 at 22.01.38.jpeg";

function FeaturedGifts() {
  const gifts = [
    {
      image: birthday18,
      category: "Gift Sets",
      name: "Gift Box Deluxe",
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
      image: birthday10,
      category: "Gift Sets",
      name: "Special Treats Package",
    },
    {
      image: balloon1,
      category: "Balloon Decor Services",
      name: "Balloon Gift Surprise",
    },
    {
      image: balloon6,
      category: "Balloon Decor Services",
      name: "5 Senses Package",
    },
  ];

  return (
    <section className="featured-section">
      <div className="featured-header">
        <div>
          <p className="eyebrow">FEATURED SERVICES</p>

          <h2>
            Made to make
            <br />
            someone smile.
          </h2>
        </div>

        <p>
          Thoughtful gifts and beautiful surprises created
          for birthdays, celebrations and special moments.
        </p>
      </div>

      <div className="gift-grid">
        {gifts.map((gift) => (
          <article className="gift-card" key={gift.image}>
            <div className="gift-image">
              <img src={gift.image} alt={gift.name} />
            </div>

            <div className="gift-info">
              <p>{gift.category}</p>
              <h3>{gift.name}</h3>
            </div>
          </article>
        ))}
      </div>

      <div className="featured-action">
        <Link to="/gifts" className="btn btn-secondary">
            View All Gifts
        </Link>
      </div>
    </section>
  );
}

export default FeaturedGifts;