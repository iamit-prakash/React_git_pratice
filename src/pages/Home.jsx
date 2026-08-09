import { Link } from "react-router-dom";
import { wonders } from "../data/wonders";

export default function Home() {
  return (
    <main className="page-shell">
      <section
        className="container video-section top-montage-section"
        aria-labelledby="wonders-video-title"
      >
        <div className="video-copy">
          <p className="eyebrow">Now playing</p>
          <h1 id="wonders-video-title">Seven wonders, one cinematic loop</h1>
          <p>
            No narration, no explanation track. Just a repeating visual tour of
            every wonder with energetic music and beats.
          </p>
        </div>
        <div className="video-shell wonders-montage" aria-label="Looping seven wonders montage">
          <div className="montage-stage">
            {wonders.map((wonder, index) => (
              <figure
                className="montage-slide"
                key={wonder.slug}
                style={{ animationDelay: `${index * 4}s` }}
              >
                <img src={wonder.image} alt={wonder.name} />
                <figcaption>{wonder.name}</figcaption>
              </figure>
            ))}
          </div>
          <audio
            className="montage-audio"
            controls
            loop
            src="https://upload.wikimedia.org/wikipedia/commons/a/ad/Infraction_-_Dance_%28Upbeat_Creative_Future_Pop%29.ogg"
          >
            Your browser does not support the audio element.
          </audio>
          <p className="music-credit">
            Music:{" "}
            <a
              href="https://commons.wikimedia.org/wiki/File:Infraction_-_Dance_(Upbeat_Creative_Future_Pop).ogg"
              target="_blank"
              rel="noreferrer"
            >
              Infraction - Dance
            </a>
          </p>
        </div>
        <div className="video-filmstrip" aria-label="Seven wonders preview images">
          {wonders.map((wonder) => (
            <img src={wonder.image} alt={wonder.name} key={wonder.slug} loading="lazy" />
          ))}
        </div>
      </section>

      <section className="hero-section container home-intro-section">
        <div className="hero-copy">
          <p className="eyebrow">Travel history collection</p>
          <h2>Open a landmark and go deeper</h2>
          <p>
            After the visual loop, explore seven landmarks shaped by craft,
            courage, ceremony, and centuries of human imagination.
          </p>
        </div>
        <div className="hero-panel" aria-label="Featured landmark">
          <span className="panel-kicker">Featured</span>
          <strong>Taj Mahal</strong>
          <p>Marble symmetry, garden geometry, and one of the world's most loved skylines.</p>
        </div>
      </section>

      <section className="container content-section">
        <div className="section-heading">
          <p className="eyebrow">The list</p>
          <h2>Iconic landmarks</h2>
        </div>
        <div className="wonder-grid">
          {wonders.map((wonder, index) => (
            <Link
              className="wonder-card"
              to={`/wonders/${wonder.slug}`}
              key={wonder.name}
              aria-label={`View details about ${wonder.name}`}
            >
              <img src={wonder.image} alt={wonder.name} loading="lazy" />
              <div className="wonder-card-body">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{wonder.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
