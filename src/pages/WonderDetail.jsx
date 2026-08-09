import { Link, useParams } from "react-router-dom";
import { wonders } from "../data/wonders";

export default function WonderDetail() {
  const { slug } = useParams();
  const wonder = wonders.find((item) => item.slug === slug);

  if (!wonder) {
    return (
      <main className="page-shell">
        <section className="container simple-page">
          <p className="eyebrow">Not found</p>
          <h1>Wonder not found</h1>
          <p>The page you opened does not match one of the current wonders.</p>
          <Link className="back-link" to="/">
            Back to all wonders
          </Link>
        </section>
      </main>
    );
  }

  return (
    <main className="page-shell">
      <section className="container detail-page">
        <Link className="back-link" to="/">
          Back to all wonders
        </Link>

        <div className="detail-hero">
          <img src={wonder.image} alt={wonder.name} />
          <div className="detail-copy">
            <p className="eyebrow">Wonder details</p>
            <h1>{wonder.name}</h1>
            <p>{wonder.summary}</p>
          </div>
        </div>

        <div className="detail-grid">
          <article className="detail-panel detail-story">
            <h2>About this landmark</h2>
            <p>{wonder.details}</p>
          </article>

          <aside className="detail-panel facts-panel">
            <h2>Quick facts</h2>
            <dl>
              <div>
                <dt>Location</dt>
                <dd>{wonder.location}</dd>
              </div>
              <div>
                <dt>Period</dt>
                <dd>{wonder.period}</dd>
              </div>
            </dl>
          </aside>
        </div>

        <section className="detail-panel">
          <h2>Highlights</h2>
          <div className="highlight-list">
            {wonder.highlights.map((highlight) => (
              <span key={highlight}>{highlight}</span>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}
