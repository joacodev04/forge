import { socialLinks } from '../data/siteContent'

const contactCards = [
  {
    title: 'Cobertura',
    value: 'Argentina, Espana e internacional',
    text: 'Trabajamos remoto y con foco en procesos claros, seguimiento y entregas iterativas.',
  },
  {
    title: 'Tipo de cliente',
    value: 'Comercios, servicios y marcas',
    text: 'Ideal para negocios que necesitan una web premium o un sistema propio para ordenar su operacion.',
  },
  {
    title: 'Canal activo',
    value: '@forgesolutionsarg',
    text: 'Podemos usar este punto como base hasta que me pases WhatsApp, mail o formulario real.',
  },
]

export function ContactPage() {
  return (
    <div className="page">
      <section className="page-header">
        <span className="page-header__eyebrow">Contacto</span>
        <h1>Una presencia sobria para vender mejor y operar con mas control.</h1>
        <p>
          La pagina ya queda lista para incorporar datos reales de contacto, formulario, agenda o
          CTA directo a WhatsApp en la siguiente iteracion.
        </p>
      </section>

      <section className="contact-grid">
        {contactCards.map((card) => (
          <article className="contact-card" key={card.title}>
            <span>{card.title}</span>
            <strong>{card.value}</strong>
            <p>{card.text}</p>
          </article>
        ))}
      </section>

      <section className="cta-banner">
        <div>
          <span className="cta-banner__eyebrow">Redes y presencia</span>
          <h2>Mientras tanto, esta identidad ya refleja el estilo oscuro y minimalista que pediste.</h2>
        </div>
        <div className="cta-banner__links">
          {socialLinks.map((item) => (
            <a
              key={item.label}
              className="button button--ghost"
              href={item.href}
              target={item.href.startsWith('http') ? '_blank' : undefined}
              rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
            >
              {item.label}
            </a>
          ))}
        </div>
      </section>
    </div>
  )
}
