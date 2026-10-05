import { Link } from "react-router-dom";

function WhatWeOffer() {
  return (
    <section className="offer-section">
      <div className="section-heading">
        <p className="eyebrow">WHAT WE OFFER</p>

        <h2>
          Something special for
          <br />
          every moment.
        </h2>

        <p>
          From thoughtful gifts to refreshing juices, we create
          experiences designed to make your moments memorable.
        </p>
      </div>

      <div className="offer-grid">
        <div className="offer-card gifts-card">
          <span className="offer-number">01</span>

          <h3>Gifts & Decor</h3>

          <p>
            Thoughtful gifts, beautiful decorations and
            personalised surprises for the people you love.
          </p>

          <Link to="/gifts">Explore Gifts →</Link>
        </div>

        <div className="offer-card offer-juice-card">
          <span className="offer-number">02</span>

          <h3>Fresh Juices</h3>

          <p>
            Refreshing juices made to bring
            freshness and goodness to your day.
          </p>

          <Link to="/gifts?category=juices">Explore Juices →</Link>
        </div>

        <div className="offer-card custom-card">
          <span className="offer-number">03</span>

          <h3>Custom Gifts</h3>

          <p>
            Have something special in mind? Tell us what you
            want and let's create something uniquely yours.
          </p>

          <Link to="/custom-gifts">Make a Request →</Link>
        </div>
      </div>
    </section>
  );
}

export default WhatWeOffer;