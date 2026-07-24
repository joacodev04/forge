import { Link } from 'react-router-dom'

export function AppLink({ href, external = false, children, ...props }) {
  if (external) {
    return (
      <a href={href} target="_blank" rel="noreferrer" {...props}>
        {children}
      </a>
    )
  }

  return (
    <Link to={href} {...props}>
      {children}
    </Link>
  )
}
