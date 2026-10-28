import PageHero from '../components/PageHero';
export default function Gallery() {
  const images = [
    'bgimg.jpg',
    'coffee1.jpg',
    'coffee2.jpg',
    'coffee3.jpg',
    'coffeeshop.jpg',
    'desert1.jpg',
    'desert2.jpg',
    'desert3.jpg',
    'snack1.jpg',
    'snack2.jpg',
  ];
  return (
    <>
      <PageHero
        kicker="MOMENTS AT COFFEE HOUSE"
        title="The gallery"
        subtitle="A glimpse of the flavors, textures, and little joys that make us who we are."
      />
      <section className="section container gallery-grid">
        {images.map((name, i) => (
          <img
            key={name}
            src={'/assets/' + name}
            alt={`Coffee House gallery image ${i + 1}`}
            loading="lazy"
          />
        ))}
      </section>
    </>
  );
}
