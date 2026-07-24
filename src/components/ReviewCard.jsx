export function ReviewCard({ name, business, quote, rating = '5.0', className = '', ...props }) {
  return (
    <article className={className ? `review-card ${className}` : 'review-card'} {...props}>
      <div className="review-card__topline">
        <span className="review-card__rating">{rating}</span>
        <span className="review-card__stars">★★★★★</span>
      </div>
      <p className="review-card__quote">“{quote}”</p>
      <div className="review-card__meta">
        <strong>{name}</strong>
        <span>{business}</span>
      </div>
    </article>
  )
}
