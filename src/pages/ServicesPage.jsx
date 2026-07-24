import { Link } from 'react-router-dom'
import { SectionHeading } from '../components/SectionHeading'
import { ServiceCard } from '../components/ServiceCard'
import { processSteps, services } from '../data/siteContent'

export function ServicesPage() {
  return (
    <div className="page">
      <section className="page-header page-header--narrow" data-aos="fade-up" data-aos-duration="1100">
        <span className="page-header__eyebrow">Servicios</span>
        <h1>Soluciones digitales para vender mejor, operar mejor y comunicar mejor.</h1>
        <p>
          Forge Solutions combina desarrollo web, software a medida y automatización con una capa
          visual cuidada para que la marca y el producto hablen el mismo idioma.
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
          title="Un flujo simple para construir algo serio."
          description="Cada proyecto parte de un diagnóstico comercial y termina en una interfaz mantenible, clara y preparada para crecer."
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
          <h2>Si tu operación ya es compleja, la solución no puede sentirse improvisada.</h2>
        </div>
        <Link className="button button--primary" to="/contacto">
          Solicitar propuesta
        </Link>
      </section>
    </div>
  )
}
