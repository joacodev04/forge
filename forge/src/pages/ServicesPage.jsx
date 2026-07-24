import { Link } from 'react-router-dom'
import { SectionHeading } from '../components/SectionHeading'
import { ServiceCard } from '../components/ServiceCard'
import { services } from '../data/siteContent'

export function ServicesPage() {
  return (
    <div className="page">
      <section className="page-header">
        <span className="page-header__eyebrow">Servicios</span>
        <h1>Soluciones digitales a medida para comercios, equipos y marcas.</h1>
        <p>
          Desde una web institucional hasta un sistema de gestion interno, el objetivo es el
          mismo: menos friccion, mas control y una mejor presencia digital.
        </p>
      </section>

      <section className="cards-grid">
        {services.map((service) => (
          <ServiceCard key={service.id} {...service} />
        ))}
      </section>

      <section className="cta-banner">
        <div>
          <span className="cta-banner__eyebrow">Forge Solutions</span>
          <h2>Si tu negocio ya crecio, tu software tambien tiene que hacerlo.</h2>
        </div>
        <Link className="button button--primary" to="/contacto">
          Solicitar propuesta
        </Link>
      </section>
    </div>
  )
}
