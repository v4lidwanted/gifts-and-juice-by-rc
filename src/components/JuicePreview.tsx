import { Link } from "react-router-dom";

import cocoPine from "../assets/juices/classic/WhatsApp Image 2026-09-25 at 21.57.06.jpeg";
import zestyOrange from "../assets/juices/classic/WhatsApp Image 2026-09-25 at 21.57.07.jpeg";
import pineMelon from "../assets/juices/classic/WhatsApp Image 2026-09-25 at 22.01.35.jpeg";
import pineapple from "../assets/juices/classic/WhatsApp Image 2026-09-25 at 22.01.36.jpeg";

function JuicePreview() {
  const juices = [
    {
      image: cocoPine,
      name: "Coco-Pine Juice",
    },
    {
      image: zestyOrange,
      name: "Zesty Orange Juice",
    },
    {
      image: pineMelon,
      name: "Pine Melon Juice",
    },
    {
      image: pineapple,
      name: "Pineapple Juice",
    },
  ];

  return (
    <section className="juice-preview">
      <div className="juice-preview-header">
        <div>
          <p className="eyebrow">OUR JUICES</p>

          <h2>
            Freshness in
            <br />
            every sip.
          </h2>
        </div>

        <p>
          Refreshing juices made for everyday moments,
          celebrations and everything in between.
        </p>
      </div>

      <div className="juice-preview-grid">
        {juices.map((juice) => (
          <article className="juice-preview-card" key={juice.image}>
            <div className="juice-preview-image">
              <img src={juice.image} alt={juice.name} />
            </div>

            <h3>{juice.name}</h3>
          </article>
        ))}
      </div>

      <div className="juice-preview-action">
        <Link
          to="/gifts?category=juices"
          className="btn btn-secondary"
        >
          View All Juices
        </Link>
      </div>
    </section>
  );
}

export default JuicePreview;