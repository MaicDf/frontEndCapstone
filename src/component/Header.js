import Nav from './Nav';
import './styles/header.css';
import logo from '../static/logo.jpg';
export default function Header() {
  return (
    <header>
      <img className="logo" src={logo} alt="Little Lemon Logo" />
      <Nav />
    </header>
  );
}
