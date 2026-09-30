import "./App.css";
import logo from "./assets/logo/photo_2026-09-25_14-36-14.jpg";
import heroImage from "./assets/gifts/birthday/WhatsApp Image 2026-09-28 at 12.34.22.jpeg";
import WhatWeOffer from "./components/WhatWeOffer";
import FeaturedGifts from "./components/FeaturedGifts";
import Gifts from "./pages/Gifts";
import About from "./pages/About";
import CustomGifts from "./pages/CustomGifts";
import Contact from "./pages/Contact";
import ScrollToTop from "./components/ScrollToTop";
import JuicePreview from "./components/JuicePreview";
import useScrollDirection from "./hooks/useScrollDirection";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function Home() {

  return (
    <>
      <img
        src={heroImage}
        alt=""
        className="site-bg-image"
      />

      <section className="hero">

        <div className="hero-content">
          <p className="eyebrow">GIFTS & JUICE BY RC</p>

          <h1>
            Thoughtful gifts.
            <br />
            Refreshing moments.
          </h1>

          <p className="hero-text">
            Discover beautiful gifts, personalised surprises,
            refreshing juices and thoughtful creations made
            to make every moment special.
          </p>

          <div className="hero-buttons">
            <Link to="/gifts" className="btn btn-primary">
              Explore Gift Sets and Decor Services
            </Link>

            <Link to="/gifts?category=juices" className="btn btn-secondary">
              Discover Our Juices
            </Link>
          </div>
        </div>
      </section>

      <WhatWeOffer />

      <FeaturedGifts />

      <JuicePreview />
    </>
  );
}

function App() {
  const scrollDirection = useScrollDirection();
  return (
    <BrowserRouter>
      <ScrollToTop />

  <div className="app">

  <header className={`navbar ${scrollDirection === "down" ? "navbar-hidden" : "navbar-visible"}`}>
    <Link to="/" className="logo">
      <img src={logo} alt="Gifts & Juice by RC logo" />
    </Link>

    <nav>
      <Link to="/">Home</Link>
      <Link to="/gifts">Services</Link>
      <Link to="/custom-gifts">Custom Gifts</Link>
      <Link to="/about">About Us</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  </header>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/gifts" element={<Gifts />} />
            <Route path="/custom-gifts" element={<CustomGifts />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;