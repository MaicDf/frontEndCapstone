import { Link } from 'react-router-dom'; // Import Link from React Router

export default function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <a href="#hero">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#highlights">Menu</a>
        </li>
        <li>
          <Link to="/booking">Reservations</Link> {/* Update link */}
        </li>
        <li>
          <a href="#highlights">Order Online</a>
        </li>
        <li>
          <a href="#login">Login</a>
        </li>
      </ul>
    </nav>
  );
}
