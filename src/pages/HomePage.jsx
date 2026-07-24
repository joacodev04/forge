import { Link } from 'react-router-dom'
import { AppLink } from '../components/AppLink'
import { MetricCard } from '../components/MetricCard'
import { ReviewCard } from '../components/ReviewCard'
import { SectionHeading } from '../components/SectionHeading'
import { ServiceCard } from '../components/ServiceCard'
import { SuggestionCard } from '../components/SuggestionCard'
import {
  clientReviews,
  clientSuggestions,
  contactChannels,
  metrics,
  services,
} from '../data/siteContent'

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
            Software para comercios,
            <span> webs y sistemas de gestión</span>
          </h1>

          <div className="hero__note" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1150">
            <p>
              Desarrollamos páginas web, sistemas de gestión, automatizaciones e interfaces a
              medida para negocios que quieren vender mejor y ordenar su operación.
            </p>
          </div>

          <div className="hero__actions hero__actions--centered" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1200">
            <Link className="button button--primary" to="/proyectos">
              Ver Reseñas
            </Link>
            <Link className="button button--ghost" to="/contacto">
              Contáctanos
            </Link>
          </div>

          <div className="hero__meta" data-aos="fade-up" data-aos-delay="500" data-aos-duration="1250">
            <span>WEBS COMERCIALES</span>
            <span>SISTEMAS DE GESTIÓN</span>
            <span>AUTOMATIZACIÓN E IA</span>
          </div>
        </div>
      </section>

      <section className="content-section content-section--intro">
        <div className="intro-grid">
          <SectionHeading
            eyebrow="Sobre Forge"
            title="Desarrollo real para operaciones reales."
            description="Creamos soluciones digitales que ayudan a vender, organizar información, automatizar tareas y profesionalizar la presencia online."
            data-aos="fade-up"
            data-aos-duration="1100"
          />
          <p className="intro-grid__text" data-aos="fade-up" data-aos-delay="150" data-aos-duration="1150">
            Trabajamos con comercios, marcas y equipos que necesitan una web clara, un sistema
            útil o una automatización que les ahorre tiempo y mejore el seguimiento del negocio.
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
          eyebrow="Sugerencias y reseñas"
          title="Lo que más nos piden y cómo nos recomiendan"
          description="Reemplazamos la sección de casos por sugerencias frecuentes y reseñas de clientes para mostrar mejor el tipo de trabajo que hacemos."
          data-aos="fade-up"
          data-aos-duration="1100"
        />

        <div className="suggestions-grid suggestions-grid--preview">
          {clientSuggestions.map((item, index) => (
            <SuggestionCard
              key={item.title}
              {...item}
              data-aos="fade-up"
              data-aos-delay={120 + index * 120}
              data-aos-duration={1100 + index * 50}
            />
          ))}
        </div>

        <div className="reviews-grid reviews-grid--preview">
          {clientReviews.slice(0, 3).map((review, index) => (
            <ReviewCard
              key={review.name}
              {...review}
              data-aos={index % 2 === 0 ? 'fade-up' : 'zoom-in'}
              data-aos-delay={160 + index * 120}
              data-aos-duration={1150 + index * 50}
            />
          ))}
          <article className="project-callout" data-aos="zoom-in" data-aos-delay="520" data-aos-duration="1300">
            <span className="project-callout__eyebrow">OPINIONES</span>
            <h3>Clientes que valoran claridad, orden y una solución pensada para su negocio.</h3>
            <p>Podés usar esta sección para mostrar después testimonios reales, capturas o videos breves.</p>
            <Link className="button button--dark" to="/contacto">
              Quiero mi propuesta
            </Link>
          </article>
        </div>
      </section>

      <section className="content-section impact-panel">
        <SectionHeading
          eyebrow="Impacto"
          title="Soluciones pensadas para ventas, control y seguimiento."
          description="Buscamos que cada herramienta sea clara de usar, visualmente sólida y útil para el día a día del negocio."
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
