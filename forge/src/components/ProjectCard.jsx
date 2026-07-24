export function ProjectCard({ category, title, summary }) {
  return (
    <article className="project-card">
      <span className="project-card__tag">{category}</span>
      <h3>{title}</h3>
      <p>{summary}</p>
    </article>
  )
}
