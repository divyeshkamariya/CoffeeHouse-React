import { useState } from 'react';

import { ArrowRight, MapPin, Clock, CheckCircle2 } from 'lucide-react';
import PageHero from '../components/PageHero';
export default function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <PageHero
        kicker="WE'D LOVE TO HEAR FROM YOU"
        title="Get in touch"
        subtitle="Questions, ideas, or just want to say hello? We're all ears."
      />
      <section className="section container contact-layout">
        <div className="contact-info">
          <span className="eyebrow">COME SAY HELLO</span>
          <h2>
            Let's make your
            <br />
            <em>day a little warmer.</em>
          </h2>
          <p>
            Questions about the menu, a table for friends or a birthday cake order? Leave us a note
            and we’ll get back to you.
          </p>
          <div className="contact-line">
            <MapPin />
            <div>
              <strong>Location</strong>
              <span>Ahmedabad, Gujarat</span>
            </div>
          </div>
          <div className="contact-line">
            <Clock />
            <div>
              <strong>Opening hours</strong>
              <span>Daily, 8:00 AM – 10:00 PM</span>
            </div>
          </div>
          <div className="map-frame">
            <iframe
              title="Ahmedabad map"
              src="https://www.google.com/maps?q=Ahmedabad&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
        <div className="contact-form">
          <span className="eyebrow">DROP A NOTE</span>
          <h3>Send us a message</h3>
          {sent ? (
            <div className="form-success">
              <CheckCircle2 /> This is a frontend demo. Your message was not sent to a server.
              <button onClick={() => setSent(false)}>Write another</button>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
                e.currentTarget.reset();
              }}
            >
              <label>
                Your name
                <input required name="name" placeholder="Enter your name" />
              </label>
              <label>
                Email address
                <input required name="email" type="email" placeholder="you@example.com" />
              </label>
              <label>
                Subject
                <input name="subject" placeholder="What's on your mind?" />
              </label>
              <label>
                Message
                <textarea name="message" required rows="5" placeholder="Tell us more..." />
              </label>
              <button className="btn btn-dark" type="submit">
                Preview submission <ArrowRight size={17} />
              </button>
              <small>Demo only — no message is transmitted or stored.</small>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
