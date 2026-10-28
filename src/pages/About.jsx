import { Link } from 'react-router-dom';
import { ShoppingBag, ArrowRight, Clock, Heart } from 'lucide-react';
import PageHero from '../components/PageHero';
export default function About() {
  return (
    <>
      <PageHero
        kicker="THE HEART BEHIND THE CUP"
        title="Our story"
        subtitle="Good coffee is our craft. Making people feel at home is our passion."
      />
      <section className="section container about-layout">
        <div className="about-visual">
          <img src="/assets/coffee1.jpg" alt="Freshly brewed coffee" />
        </div>
        <div className="about-text">
          <span className="eyebrow">WELCOME TO COFFEE HOUSE</span>
          <h2>
            A place to pause,
            <br />
            <em>sip & connect.</em>
          </h2>
          <p>
            We believe the best conversations happen over a great cup of coffee. From carefully
            selected beans to the last little swirl of milk, every detail matters.
          </p>
          <p>
            Whether you're meeting a friend, getting work done, or simply taking a break, we want
            every visit to feel warm, relaxed, and memorable.
          </p>
          <div className="value-list">
            <div>
              <Heart size={20} />
              <span>Made with care</span>
            </div>
            <div>
              <Clock size={20} />
              <span>Fresh every day</span>
            </div>
            <div>
              <ShoppingBag size={20} />
              <span>Something for everyone</span>
            </div>
          </div>
          <Link to="/menu" className="btn btn-dark">
            Explore the menu <ArrowRight size={17} />
          </Link>
        </div>
      </section>
    </>
  );
}
