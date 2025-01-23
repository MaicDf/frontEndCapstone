import { Link } from 'react-router-dom'; // Import Link from React Router

import heroImg from '../../static/957db75e6b654e07f65da12b96dc858c5995ed28.jpg';
export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h2>Little Lemon</h2>
        <p className="location">Chicago</p>
        <p className="description">
          A Mediterranean-inspired restaurant offering authentic dishes and an
          unforgettable dining experience.
        </p>
        <Link to="/booking">
          <button>Reserve a Table</button> {/* Use Link to navigate */}
        </Link>
      </div>
      <div className="hero-image">
        <img src={heroImg} alt="Hero banner" />
      </div>
    </section>
  );
}
