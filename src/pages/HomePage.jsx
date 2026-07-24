import { Link } from 'react-router-dom'
import { AppLink } from '../components/AppLink'
import { MetricCard } from '../components/MetricCard'
import { ProjectCard } from '../components/ProjectCard'
import { SectionHeading } from '../components/SectionHeading'
import { ServiceCard } from '../components/ServiceCard'
import { contactChannels, metrics, projects, services } from '../data/siteContent'

export function HomePage() {
  return (
    <div className="page page--home">
      <section className="hero hero--editorial">
        <div className="hero__visual" data-aos="zoom-out" data-aos-duration="1350">
          <img src="/forge-hero-software.png" alt="Mockup realista de software para Forge Solutions" />
        </div>

        <div className="hero__copy hero__copy--centered">
          <span className="hero__eyebrow" data-aos="fade-up" data-aos-delay="100" data-aos-duration="950">
            Forge Solutions
          </span>
          <h1 data-aos="fade-up" data-aos-delay="200" data-aos-duration="1050">
            Software y soluciones
            <span> digitales a medida</span>
          </h1>

          <div className="hero__note" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1150">
            <p>
              Desarrollamos webs, sistemas de gestión y automatizaciones para negocios que
              necesitan una presencia premium y una operación más clara.
            </p>
          </div>

          <div className="hero__actions hero__actions--centered" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1200">
            <Link className="button button--primary" to="/proyectos">
              Ver Proyectos
            </Link>
            <Link className="button button--ghost" to="/contacto">
              Contáctanos
            </Link>
          </div>

          <div className="hero__meta" data-aos="fade-up" data-aos-delay="500" data-aos-duration="1250">
            <span>WEB DEVELOPMENT</span>
            <span>AI SOLUTIONS</span>
            <span>PROCESS AUTOMATION</span>
          </div>
        </div>
      </section>

      <section className="content-section content-section--intro">
        <div className="intro-grid">
          <SectionHeading
            eyebrow="Sobre Forge"
            title="Ingeniería digital para el negocio real."
            description="Diseñamos experiencias sobrias, sistemas útiles y una narrativa visual alineada a una marca de tecnología premium."
            data-aos="fade-up"
            data-aos-duration="1100"
          />
          <p className="intro-grid__text" data-aos="fade-up" data-aos-delay="150" data-aos-duration="1150">
            La referencia que compartiste tiene un lenguaje visual directo: fondo oscuro, mucho
            aire, tipografía fuerte y pocas decisiones visuales pero bien ejecutadas. Reorienté la
            web completa hacia ese criterio.
          </p>
        </div>
      </section>

      <section className="cards-grid cards-grid--three">
        {services.map((service, index) => (
          <ServiceCard
            key={service.id}
            {...service}
            data-aos="fade-up"
            data-aos-delay={120 + index * 120}
            data-aos-duration={1100 + index * 50}
          />
        ))}
      </section>

      <section className="content-section showcase-band">
        <SectionHeading
          eyebrow="Case studies"
          title="Proyectos Seleccionados"
          description="Assets visuales, composición más editorial y una grilla inspirada en la referencia para mostrar productos y marca."
          data-aos="fade-up"
          data-aos-duration="1100"
        />

        <div className="projects-grid projects-grid--editorial">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              {...project}
              data-aos={index % 2 === 0 ? 'fade-up' : 'zoom-in'}
              data-aos-delay={120 + index * 120}
              data-aos-duration={1200 + index * 50}
            />
          ))}
          <article className="project-callout" data-aos="zoom-in" data-aos-delay="460" data-aos-duration="1300">
            <span className="project-callout__eyebrow">START A PROJECT</span>
            <h3>Listo para sumar tus casos reales, capturas o videos.</h3>
            <p>La base ya está preparada para reemplazar estos placeholders por trabajos reales.</p>
            <Link className="button button--dark" to="/contacto">
              Solicitar propuesta
            </Link>
          </article>
        </div>
      </section>

      <section className="content-section impact-panel">
        <SectionHeading
          eyebrow="Impacto"
          title="Transformamos tu negocio con tecnología simple de usar."
          description="La estética cambia, pero la idea sigue siendo la misma: claridad visual, estructura y foco comercial."
          align="center"
          data-aos="fade-up"
          data-aos-duration="1100"
        />

        <div className="metrics-grid metrics-grid--impact">
          {metrics.map((metric, index) => (
            <MetricCard
              key={metric.label}
              {...metric}
              data-aos="fade-up"
              data-aos-delay={120 + index * 120}
              data-aos-duration={1050 + index * 100}
            />
          ))}
        </div>

        <div className="contact-strip">
          {contactChannels.map((channel, index) => (
            <AppLink
              key={channel.title}
              className="contact-strip__item"
              href={channel.href}
              external={channel.external}
              data-aos="fade-up"
              data-aos-delay={180 + index * 120}
              data-aos-duration={1100 + index * 50}
            >
              <span>{channel.title}</span>
              <strong>{channel.value}</strong>
              <p>{channel.note}</p>
            </AppLink>
          ))}
        </div>
      </section>
    </div>
  )
}
