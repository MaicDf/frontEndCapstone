export default function Footer() {
  return (
    <footer>
      <div className="logo">Little Lemon</div>
      <div className="footer-sections">
        <section className="navigation">
          <h3>Navigation</h3>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#menu">Menu</a>
            </li>
            <li>
              <a href="#reservations">Reservations</a>
            </li>
            <li>
              <a href="#order-online">Order Online</a>
            </li>
            <li>
              <a href="#login">Login</a>
            </li>
          </ul>
        </section>
        <section className="contact">
          <h3>Contact</h3>
          <p>123 Main Street, Chicago, IL</p>
          <p>Phone: (555) 555-5555</p>
          <p>Email: info@littlelemon.com</p>
        </section>
        <section className="social-media">
          <h3>Follow Us</h3>
          <ul>
            <li>
              <a href="https://facebook.com">Facebook</a>
            </li>
            <li>
              <a href="https://twitter.com">Twitter</a>
            </li>
            <li>
              <a href="https://instagram.com">Instagram</a>
            </li>
          </ul>
        </section>
      </div>
    </footer>
  );
}
