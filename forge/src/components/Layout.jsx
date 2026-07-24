import { NavLink, Outlet } from 'react-router-dom'

const navItems = [
  { to: '/', label: 'Inicio' },
  { to: '/servicios', label: 'Servicios' },
  { to: '/proyectos', label: 'Proyectos' },
  { to: '/contacto', label: 'Contacto' },
]

function ForgeMark() {
  return (
    <div className="brand-mark" aria-hidden="true">
      <span className="brand-mark__bar brand-mark__bar--top" />
      <span className="brand-mark__bar brand-mark__bar--mid" />
      <span className="brand-mark__bar brand-mark__bar--side" />
      <span className="brand-mark__dot" />
    </div>
  )
}

export function Layout() {
  return (
    <div className="site-shell">
      <div className="bg-orb bg-orb--left" aria-hidden="true" />
      <div className="bg-orb bg-orb--right" aria-hidden="true" />

      <header className="topbar">
        <div className="container topbar__inner">
          <NavLink className="brand" to="/">
            <ForgeMark />
            <div>
              <strong>Forge Solutions</strong>
              <span>Software para negocios que crecen</span>
            </div>
          </NavLink>

          <nav className="topbar__nav" aria-label="Principal">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  isActive ? 'topbar__link topbar__link--active' : 'topbar__link'
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>

      <main className="container">
        <Outlet />
      </main>

      <footer className="footer container">
        <div>
          <strong>Forge Solutions</strong>
          <p>Soluciones digitales sobrias, utiles y pensadas para operar mejor.</p>
        </div>
        <p className="footer__meta">Software | Automatizacion | Web | IA</p>
      </footer>
    </div>
  )
}
