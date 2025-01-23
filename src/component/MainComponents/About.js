import founder1 from '../../static/Founder1.png';
import founder2 from '../../static/Founder2.png';
export default function About() {
  return (
    <section className="about">
      <h2>Little Lemon</h2>
      <p>Chicago</p>
      <p>
        Founded by culinary experts, Little Lemon is your go-to destination for
        Mediterranean delights and a warm dining experience.
      </p>
      <div>
        <img src={founder1} alt="Founder 1" />
        <img src={founder2} alt="Founder 2" />
      </div>
    </section>
  );
}
