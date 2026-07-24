export function SuggestionCard({ category, title, summary, className = '', ...props }) {
  return (
    <article
      className={className ? `suggestion-card ${className}` : 'suggestion-card'}
      {...props}
    >
      <span className="suggestion-card__tag">{category}</span>
      <h3>{title}</h3>
      <p>{summary}</p>
    </article>
  )
}
