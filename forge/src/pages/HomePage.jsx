import { Link } from 'react-router-dom'
import { MetricCard } from '../components/MetricCard'
import { ProjectCard } from '../components/ProjectCard'
import { SectionHeading } from '../components/SectionHeading'
import { ServiceCard } from '../components/ServiceCard'
import { metrics, processSteps, projects, services, socialLinks } from '../data/siteContent'

export function HomePage() {
  return (
    <div className="page page--home">
      <section className="hero">
        <div className="hero__copy">
          <span className="hero__eyebrow">Forge Solutions</span>
          <h1>
            Software, webs y sistemas de gestion para negocios que necesitan
            <span> crecer con orden.</span>
          </h1>
          <p className="hero__lead">
            Creamos soluciones digitales a medida para comercios, marcas y equipos que quieren
            vender mejor, automatizar tareas y operar con claridad.
          </p>

          <div className="hero__actions">
            <Link className="button button--primary" to="/contacto">
              Hablemos de tu proyecto
            </Link>
            <Link className="button button--ghost" to="/servicios">
              Ver servicios
            </Link>
          </div>

          <div className="hero__chips">
            {socialLinks.map((item) => (
              <a
                key={item.label}
                className="chip"
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
              >
                <span>{item.label}</span>
                <strong>{item.value}</strong>
              </a>
            ))}
          </div>
        </div>

        <div className="hero-panel">
          <div className="hero-panel__surface">
            <div className="hero-panel__header">
              <span className="hero-panel__dot" />
              <span className="hero-panel__dot" />
              <span className="hero-panel__dot" />
            </div>

            <div className="hero-panel__body">
              <div className="hero-panel__pill">Minimal systems. Real impact.</div>
              <div className="hero-panel__title">Forge Stack</div>
              <div className="hero-panel__grid">
                <div className="hero-panel__card hero-panel__card--large">
                  <span>01</span>
                  <strong>Webs que convierten</strong>
                  <p>Diseño claro, ritmo visual y foco comercial.</p>
                </div>
                <div className="hero-panel__card">
                  <span>02</span>
                  <strong>Gestion centralizada</strong>
                </div>
                <div className="hero-panel__card">
                  <span>03</span>
                  <strong>Automatizacion aplicada</strong>
                </div>
                <div className="hero-panel__glow" aria-hidden="true" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="metrics-grid">
        {metrics.map((metric) => (
          <MetricCard key={metric.label} {...metric} />
        ))}
      </section>

      <section className="content-section">
        <SectionHeading
          eyebrow="Servicios"
          title="Una base tecnica prolija, con una presencia visual premium."
          description="Disenamos productos digitales oscuros, sobrios y funcionales, sin ruido visual y con decisiones de negocio claras."
        />
        <div className="cards-grid">
          {services.map((service) => (
            <ServiceCard key={service.id} {...service} />
          ))}
        </div>
      </section>

      <section className="content-section content-section--split">
        <div>
          <SectionHeading
            eyebrow="Proceso"
            title="No vendemos una plantilla: construimos alrededor de tu operacion."
            description="Cada solucion parte de una necesidad comercial concreta y termina en una experiencia simple para el usuario final."
          />
        </div>

        <div className="timeline">
          {processSteps.map((step, index) => (
            <article key={step.title} className="timeline__item">
              <span className="timeline__index">0{index + 1}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section">
        <SectionHeading
          eyebrow="Casos"
          title="Ejemplos del tipo de soluciones que podemos lanzar."
          description="La pagina queda lista para sumar proyectos reales, capturas o estudios de caso cuando quieras."
        />
        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </section>
    </div>
  )
}
