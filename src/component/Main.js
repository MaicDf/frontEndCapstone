import About from "./MainComponents/About";
import Highlights from "./MainComponents/Highlights";
import Hero from "./MainComponents/Hero";
import Testimonials from "./MainComponents/Testimonials";
export default function Main() {
  return (
    <main>
      <Hero />
      <Highlights />
      <Testimonials />
      <About />
    </main>
  );
}
