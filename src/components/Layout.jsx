import { NavLink, Outlet } from 'react-router-dom'
import { AppLink } from './AppLink'
import { contactChannels, socialLinks, whatsappContact } from '../data/siteContent'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/servicios', label: 'Servicios' },
  { to: '/proyectos', label: 'Casos' },
  { to: '/contacto', label: 'Contacto' },
]

export function Layout() {
  return (
    <div className="site-shell">
      <header className="topbar">
        <div className="container topbar__inner">
          <NavLink className="brand" to="/" aria-label="Forge Solutions">
            <span className="brand__mark">
              <img className="brand__logo" src="/forge-logo-mark.png" alt="Forge logo" />
            </span>
            <span className="brand__meta">
              <strong>Forge Solutions</strong>
              <span>Software a medida</span>
            </span>
          </NavLink>

          <nav className="topbar__nav" aria-label="Principal">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  isActive ? 'topbar__link topbar__link--active' : 'topbar__link'
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <NavLink className="button button--nav" to="/contacto">
            Hablemos
          </NavLink>
        </div>
      </header>

      <main className="container">
        <Outlet />
      </main>

      <footer className="site-footer">
        <div className="container site-footer__grid">
          <div className="site-footer__brand" data-aos="fade-up" data-aos-delay="50" data-aos-duration="1050">
            <div className="site-footer__brandHead">
              <span className="brand__mark brand__mark--footer">
                <img className="site-footer__logo" src="/forge-logo-mark.png" alt="Forge logo" />
              </span>
              <strong>Forge Solutions</strong>
            </div>
            <p>
              Software, webs y sistemas de gestión para comercios, equipos y negocios que quieren
              crecer con orden.
            </p>
          </div>

          <div className="site-footer__column" data-aos="fade-up" data-aos-delay="150" data-aos-duration="1100">
            <span className="site-footer__label">Navegación</span>
            {navItems.map((item) => (
              <NavLink key={item.to} className="site-footer__link" to={item.to} end={item.to === '/'}>
                {item.label}
              </NavLink>
            ))}
          </div>

          <div className="site-footer__column" data-aos="fade-up" data-aos-delay="250" data-aos-duration="1150">
            <span className="site-footer__label">Contacto</span>
            {contactChannels.map((item) => (
              <AppLink
                key={item.title}
                className="site-footer__link site-footer__link--stack"
                href={item.href}
                external={item.external}
              >
                <strong>{item.title}</strong>
                <span>{item.value}</span>
              </AppLink>
            ))}
          </div>

          <div className="site-footer__socialRow" data-aos="fade-up" data-aos-delay="350" data-aos-duration="1200">
            <span className="site-footer__label">Redes</span>
            <div className="site-footer__socials">
              {socialLinks.map((item) => (
                <AppLink
                  key={item.label}
                  className="social-chip"
                  href={item.href}
                  external={item.external}
                >
                  {item.label}
                </AppLink>
              ))}
            </div>
          </div>
        </div>
      </footer>

      <AppLink
        className="whatsapp-float"
        href={whatsappContact.href}
        external={whatsappContact.external}
        aria-label={`Escribir por WhatsApp al ${whatsappContact.displayValue}`}
      >
        <span className="whatsapp-float__icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" role="img" focusable="false">
            <path d="M19.05 4.94A9.77 9.77 0 0 0 12.09 2C6.68 2 2.28 6.4 2.28 11.81c0 1.73.45 3.43 1.31 4.94L2 22l5.42-1.54a9.8 9.8 0 0 0 4.67 1.19h.01c5.41 0 9.81-4.4 9.81-9.81a9.73 9.73 0 0 0-2.86-6.9Zm-6.96 15.05h-.01a8.1 8.1 0 0 1-4.13-1.13l-.3-.18-3.22.91.86-3.14-.2-.32a8.13 8.13 0 0 1-1.25-4.32c0-4.49 3.66-8.14 8.16-8.14 2.17 0 4.2.85 5.73 2.38a8.04 8.04 0 0 1 2.38 5.77c0 4.49-3.66 8.15-8.12 8.15Zm4.47-6.09c-.24-.12-1.43-.71-1.65-.79-.22-.08-.38-.12-.54.12-.16.24-.62.79-.76.95-.14.16-.28.18-.52.06-.24-.12-1.01-.37-1.92-1.18-.71-.63-1.19-1.41-1.33-1.65-.14-.24-.02-.37.1-.49.1-.1.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.31-.74-1.79-.2-.48-.4-.41-.54-.42h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2 0 1.18.86 2.31.98 2.47.12.16 1.68 2.56 4.07 3.59.57.25 1.02.4 1.37.51.58.18 1.11.15 1.53.09.47-.07 1.43-.58 1.63-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28Z" />
          </svg>
        </span>
        <span className="whatsapp-float__content">
          <strong>{whatsappContact.label}</strong>
          <span>{whatsappContact.value}</span>
        </span>
      </AppLink>
    </div>
  )
}
