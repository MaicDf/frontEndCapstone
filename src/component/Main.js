import About from './MainComponents/About';
import Highlights from './MainComponents/Highlights';
import Hero from './MainComponents/Hero';
import './styles/main.css';
import Testimonials from './MainComponents/Testimonials';
export default function Main() {
  return (
    <main>
      <section id="hero">
        <Hero />
      </section>
      <section id="highlights">
        <Highlights />
      </section>
      <section id="testimonials">
        <Testimonials />
      </section>
      <section id="about">
        <About />
      </section>
    </main>
  );
}
