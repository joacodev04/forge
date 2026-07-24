import { Link } from 'react-router-dom'
import { SectionHeading } from '../components/SectionHeading'
import { ServiceCard } from '../components/ServiceCard'
import { processSteps, services } from '../data/siteContent'

export function ServicesPage() {
  return (
    <div className="page">
      <section className="page-header page-header--narrow" data-aos="fade-up" data-aos-duration="1100">
        <span className="page-header__eyebrow">Servicios</span>
        <h1>Webs, sistemas de gestión, automatizaciones e IA para negocios en crecimiento.</h1>
        <p>
          En Forge Solutions desarrollamos herramientas concretas: páginas web, sistemas para
          operar mejor, automatizaciones internas y software a medida para comercios y equipos.
        </p>
      </section>

      <section className="cards-grid cards-grid--three">
        {services.map((service, index) => (
          <ServiceCard
            key={service.id}
            {...service}
            data-aos="fade-up"
            data-aos-delay={100 + index * 120}
            data-aos-duration={1100 + index * 50}
          />
        ))}
      </section>

      <section className="content-section content-section--split">
        <SectionHeading
          eyebrow="Proceso"
          title="Un proceso claro para construir software útil."
          description="Cada proyecto parte de una necesidad real y termina en una herramienta clara, mantenible y lista para escalar."
          data-aos="fade-right"
          data-aos-duration="1150"
        />

        <div className="timeline">
          {processSteps.map((step, index) => (
            <article
              key={step.title}
              className="timeline__item"
              data-aos="fade-left"
              data-aos-delay={140 + index * 120}
              data-aos-duration={1100 + index * 50}
            >
              <span className="timeline__index">0{index + 1}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="cta-banner" data-aos="zoom-in" data-aos-duration="1250">
        <div>
          <span className="cta-banner__eyebrow">Forge Solutions</span>
          <h2>Si tu negocio depende de planillas, mensajes sueltos o procesos manuales, lo ordenamos con software.</h2>
        </div>
        <Link className="button button--primary" to="/contacto">
          Solicitar propuesta
        </Link>
      </section>
    </div>
  )
}
