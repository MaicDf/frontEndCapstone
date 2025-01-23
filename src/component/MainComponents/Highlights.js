import dish1 from '../../static/Salad.jpg';
import dish2 from '../../static/fish.jpg';
import dish3 from '../../static/hotdogs.jpg';

export default function Highlights() {
  return (
    <section className="highlights">
      <h2>Specials</h2>
      <button>Online Menu</button>
      <div className="cards">
        <div className="card">
          <img src={dish1} alt="Dish 1" />
          <h3>Dish Title 1</h3>
          <p>$10.99</p>
          <p>Description of the dish.</p>
          <button>Order a Delivery</button>
        </div>
        <div className="card">
          <img src={dish1} alt="Dish 2" />
          <h3>Dish Title 2</h3>
          <p>$12.99</p>
          <p>Description of the dish.</p>
          <button>Order a Delivery</button>
        </div>
        <div className="card">
          <img src={dish1} alt="Dish 3" />
          <h3>Dish Title 3</h3>
          <p>$14.99</p>
          <p>Description of the dish.</p>
          <button>Order a Delivery</button>
        </div>
      </div>
    </section>
  );
}
