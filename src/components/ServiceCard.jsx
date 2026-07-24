export function ServiceCard({ number, title, description, bullets, className = '', ...props }) {
  return (
    <article className={className ? `info-card ${className}` : 'info-card'} {...props}>
      <div className="info-card__topline">
        <span>{number}</span>
      </div>
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
