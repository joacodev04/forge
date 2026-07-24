export function ProjectCard({
  category,
  title,
  summary,
  image,
  size = 'standard',
  className = '',
  ...props
}) {
  return (
    <article
      className={
        className ? `project-card project-card--${size} ${className}` : `project-card project-card--${size}`
      }
      {...props}
    >
      <div className="project-card__media">
        <img src={image} alt={title} loading="lazy" />
      </div>
      <div className="project-card__body">
        <span className="project-card__tag">{category}</span>
        <h3>{title}</h3>
        <p>{summary}</p>
      </div>
    </article>
  )
}
