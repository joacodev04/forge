import { Link } from 'react-router-dom'
import { ProjectCard } from '../components/ProjectCard'
import { SectionHeading } from '../components/SectionHeading'
import { projects } from '../data/siteContent'

export function ProjectsPage() {
  return (
    <div className="page">
      <section className="page-header">
        <span className="page-header__eyebrow">Proyectos</span>
        <h1>Una estructura lista para mostrar resultados, no solo diseño.</h1>
        <p>
          Esta seccion funciona como showcase: hoy incluye casos de ejemplo y despues podemos
          reemplazarlos por proyectos reales, metricas o capturas.
        </p>
      </section>

      <section className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </section>

      <section className="content-section content-section--compact">
        <SectionHeading
          eyebrow="Escalabilidad"
          title="La arquitectura ya queda preparada para crecer."
          description="Agregar nuevas paginas, casos, integraciones o una seccion de blog despues no requiere rehacer el sitio."
          align="center"
        />
        <div className="centered-action">
          <Link className="button button--ghost" to="/contacto">
            Quiero sumar mas secciones
          </Link>
        </div>
      </section>
    </div>
  )
}
