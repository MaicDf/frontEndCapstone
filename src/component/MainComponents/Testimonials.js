import goku from '../../static/goku.png';
export default function Testimonials() {
  return (
    <section className="testimonials">
      <h2>Testimonials</h2>
      <div className="testimonial">
        <img src={goku} alt="User 1" />
        <p>Rating: ⭐⭐⭐⭐⭐</p>
        <h3>User 1</h3>
        <p>This place is amazing!</p>
      </div>
      <div className="testimonial">
        <img src={goku} alt="User 2" />
        <p>Rating: ⭐⭐⭐⭐☆</p>
        <h3>User 2</h3>
        <p>Great food and ambiance!</p>
      </div>
      <div className="testimonial">
        <img src={goku} alt="User 3" />
        <p>Rating: ⭐⭐⭐⭐⭐</p>
        <h3>User 3</h3>
        <p>Exceptional service!</p>
      </div>
    </section>
  );
}
