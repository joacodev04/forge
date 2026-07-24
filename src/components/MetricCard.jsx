export function MetricCard({ value, label, className = '', ...props }) {
  return (
    <article className={className ? `metric-card ${className}` : 'metric-card'} {...props}>
      <strong>{value}</strong>
      <span>{label}</span>
    </article>
  )
}
