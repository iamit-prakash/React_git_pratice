import { Link } from "react-router-dom";
import { wonders } from "../data/wonders";

const designIdeas = [
  {
    title: "Built With Place",
    text: "Each wonder responds to its landscape, from mountain ridges and desert cliffs to river gardens and dense city centers.",
  },
  {
    title: "Made To Be Remembered",
    text: "The forms are practical, ceremonial, and symbolic at once: walls defend, temples align, statues watch, and tombs preserve memory.",
  },
  {
    title: "Engineering Before Machines",
    text: "Stone cutting, hauling, water control, geometry, and skilled labor shaped these landmarks long before modern construction tools.",
  },
];

export default function Architecture() {
  return (
    <main className="page-shell">
      <section className="container page-hero architecture-hero">
        <div>
          <p className="eyebrow">Architecture</p>
          <h1>Stone, symmetry, scale, and story</h1>
          <p>
            The Seven Wonders are not only famous places. They are lessons in
            structure, landscape, ritual, and the ambition of people building
            beyond the limits of their age.
          </p>
        </div>
        <div className="hero-stat">
          <strong>7</strong>
          <span>landmarks across four continents</span>
        </div>
      </section>

      <section className="container architecture-overview">
        {designIdeas.map((idea) => (
          <article className="insight-card" key={idea.title}>
            <h2>{idea.title}</h2>
            <p>{idea.text}</p>
          </article>
        ))}
      </section>

      <section className="container architecture-feature">
        <div className="feature-copy">
          <p className="eyebrow">Design language</p>
          <h2>Why these buildings still feel powerful</h2>
          <p>
            Their architecture is easy to recognize because every landmark has a
            strong idea: a line across mountains, a city carved from cliffs, a
            statue over a harbor, terraces in clouds, a pyramid that tracks the
            sky, an arena of arches, and a marble garden built around symmetry.
          </p>
        </div>
        <div className="material-list">
          <span>Stone</span>
          <span>Marble</span>
          <span>Brick</span>
          <span>Concrete</span>
          <span>Terraces</span>
          <span>Arches</span>
        </div>
      </section>

      <section className="container architecture-list">
        <div className="section-heading">
          <p className="eyebrow">Landmark notes</p>
          <h2>Architecture by wonder</h2>
        </div>
        <div className="architecture-grid">
          {wonders.map((wonder) => (
            <Link
              className="architecture-card"
              to={`/wonders/${wonder.slug}`}
              key={wonder.slug}
            >
              <img src={wonder.image} alt={wonder.name} loading="lazy" />
              <div>
                <span>{wonder.location}</span>
                <h3>{wonder.name}</h3>
                <p>{wonder.summary}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
