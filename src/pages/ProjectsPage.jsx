import { Link } from 'react-router-dom'
import { ReviewCard } from '../components/ReviewCard'
import { SectionHeading } from '../components/SectionHeading'
import { SuggestionCard } from '../components/SuggestionCard'
import { clientReviews, clientSuggestions } from '../data/siteContent'

export function ProjectsPage() {
  return (
    <div className="page">
      <section className="page-header page-header--narrow" data-aos="fade-up" data-aos-duration="1100">
        <span className="page-header__eyebrow">Sugerencias y reseñas</span>
        <h1>Lo que más buscan nuestros clientes y cómo describen el trabajo con Forge.</h1>
        <p>
          En lugar de casos, esta página muestra sugerencias frecuentes y reseñas fake para
          comunicar mejor el valor del servicio y el tipo de soluciones que entregamos.
        </p>
      </section>

      <section className="content-section content-section--compact">
        <SectionHeading
          eyebrow="Sugerencias"
          title="Pedidos y necesidades que más se repiten"
          description="Estas son algunas de las soluciones que más nos consultan comercios, marcas y equipos que quieren profesionalizar su operación."
          data-aos="fade-up"
          data-aos-duration="1100"
        />
        <div className="suggestions-grid">
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
      </section>

      <section className="content-section">
        <SectionHeading
          eyebrow="Reseñas"
          title="Opiniones de clientes"
          description="Testimonios fake listos para mostrar confianza, resultados y la percepción de valor sobre el servicio."
          data-aos="fade-up"
          data-aos-duration="1100"
        />
        <div className="reviews-grid">
          {clientReviews.map((review, index) => (
            <ReviewCard
              key={review.name}
              {...review}
              data-aos={index % 2 === 0 ? 'fade-up' : 'zoom-in'}
              data-aos-delay={120 + index * 120}
              data-aos-duration={1150 + index * 50}
            />
          ))}
        </div>
      </section>

      <section className="content-section content-section--compact">
        <SectionHeading
          eyebrow="Siguiente paso"
          title="Después podemos reemplazar estas reseñas por testimonios reales de clientes."
          description="La estructura ya queda lista para sumar nombres reales, logos, capturas, métricas o incluso video-testimonios."
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
