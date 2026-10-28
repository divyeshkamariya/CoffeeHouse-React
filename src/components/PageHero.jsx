export default function PageHero({ kicker, title, subtitle }) {
  return (
    <section className="page-hero">
      <div className="container">
        <span className="eyebrow">{kicker}</span>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </section>
  );
}
