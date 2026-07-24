import { Link } from 'react-router-dom'
import { ProjectCard } from '../components/ProjectCard'
import { SectionHeading } from '../components/SectionHeading'
import { projects } from '../data/siteContent'

export function ProjectsPage() {
  return (
    <div className="page">
      <section className="page-header page-header--narrow" data-aos="fade-up" data-aos-duration="1100">
        <span className="page-header__eyebrow">Proyectos</span>
        <h1>Software que desarrollamos para comercios, equipos y operaciones.</h1>
        <p>
          Estos ejemplos muestran distintos tipos de soluciones que podemos desarrollar:
          sistemas administrativos, dashboards, automatizaciones y CRMs comerciales.
        </p>
      </section>

      <section className="projects-grid projects-grid--editorial">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.title}
            {...project}
            data-aos={index % 2 === 0 ? 'fade-up' : 'zoom-in'}
            data-aos-delay={120 + index * 120}
            data-aos-duration={1200 + index * 50}
          />
        ))}
        <article
          className="project-callout project-callout--alt"
          data-aos="zoom-in"
          data-aos-delay="460"
          data-aos-duration="1300"
        >
          <span className="project-callout__eyebrow">SOLUCIÓN A MEDIDA</span>
          <h3>También armamos módulos específicos según el flujo de cada negocio.</h3>
          <p>Turnos, stock, ventas, clientes, métricas, reportes y automatizaciones en un solo ecosistema.</p>
        </article>
      </section>

      <section className="content-section content-section--compact">
        <SectionHeading
          eyebrow="Escalabilidad"
          title="Cada sistema puede crecer por etapas, sin rehacer todo desde cero."
          description="Podemos empezar con una web o un módulo puntual y después sumar paneles, procesos y nuevas áreas del negocio."
          align="center"
          data-aos="fade-up"
          data-aos-duration="1100"
        />
        <div className="centered-action" data-aos="fade-up" data-aos-delay="140" data-aos-duration="1150">
          <Link className="button button--ghost" to="/contacto">
            Quiero seguir iterando
          </Link>
        </div>
      </section>
    </div>
  )
}
