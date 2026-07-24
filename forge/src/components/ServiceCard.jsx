export function ServiceCard({ title, description, bullets }) {
  return (
    <article className="info-card">
      <div className="info-card__accent" aria-hidden="true" />
      <h3>{title}</h3>
      <p>{description}</p>
      <ul className="info-card__list">
        {bullets.map((bullet) => (
          <li key={bullet}>{bullet}</li>
        ))}
      </ul>
    </article>
  )
}
