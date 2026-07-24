import { Link } from 'react-router-dom'
import { ProjectCard } from '../components/ProjectCard'
import { SectionHeading } from '../components/SectionHeading'
import { projects } from '../data/siteContent'

export function ProjectsPage() {
  return (
    <div className="page">
      <section className="page-header page-header--narrow" data-aos="fade-up" data-aos-duration="1100">
        <span className="page-header__eyebrow">Proyectos</span>
        <h1>Una grilla pensada para mostrar producto, posicionamiento y criterio visual.</h1>
        <p>
          Esta sección ya refleja mejor la referencia: imágenes con peso, bloques negros,
          contraste alto y una composición más cercana a una landing de estudio digital.
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
          <span className="project-callout__eyebrow">FORGE SYSTEM</span>
          <h3>El siguiente paso es cargar casos reales y tu material definitivo.</h3>
          <p>También podemos sumar carrusel, video reel, animaciones y capturas reales.</p>
        </article>
      </section>

      <section className="content-section content-section--compact">
        <SectionHeading
          eyebrow="Escalabilidad"
          title="La arquitectura sigue modular, aunque la interfaz ahora sea más premium."
          description="Las páginas siguen separadas por componentes y rutas, para que continuar el proyecto después sea rápido."
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
