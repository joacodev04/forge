export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  className = '',
  ...props
}) {
  return (
    <div
      className={
        className ? `section-heading section-heading--${align} ${className}` : `section-heading section-heading--${align}`
      }
      {...props}
    >
      <span className="section-heading__eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  )
}
