const values = [
  {
    title: "Clear Context",
    text: "Every landmark is presented with location, period, story, and architectural highlights in one focused place.",
  },
  {
    title: "Visual First",
    text: "Large imagery and clean layouts help each wonder feel memorable before the details begin.",
  },
  {
    title: "Built To Grow",
    text: "The content is structured so more landmarks, maps, timelines, and galleries can be added later.",
  },
];

const stats = [
  ["7", "world wonders"],
  ["4", "continents"],
  ["2000+", "years of history"],
];

export default function About() {
  return (
    <main className="page-shell">
      <section className="container page-hero about-hero">
        <div>
          <p className="eyebrow">About</p>
          <h1>A calm guide to places that changed how the world remembers</h1>
          <p>
            Wonders brings together history, architecture, geography, and visual
            storytelling for the modern Seven Wonders of the World.
          </p>
        </div>
      </section>

      <section className="container stat-strip">
        {stats.map(([number, label]) => (
          <div key={label}>
            <strong>{number}</strong>
            <span>{label}</span>
          </div>
        ))}
      </section>

      <section className="container about-story">
        <div className="story-copy">
          <p className="eyebrow">Purpose</p>
          <h2>Designed for quick discovery and deeper curiosity</h2>
          <p>
            The project collects the seven landmarks into a simple digital
            guide. Each page gives enough context to understand why the place
            matters, while keeping the experience light, readable, and visual.
          </p>
          <p>
            The content focuses on the relationship between people and place:
            how builders used local material, solved hard terrain, created
            ceremonial spaces, and left monuments that still shape travel,
            memory, and culture.
          </p>
        </div>
        <div className="story-image" aria-label="Taj Mahal reflected in water" />
      </section>

      <section className="container value-grid">
        {values.map((value) => (
          <article className="value-card" key={value.title}>
            <h2>{value.title}</h2>
            <p>{value.text}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
