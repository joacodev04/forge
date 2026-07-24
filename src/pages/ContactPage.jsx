import { AppLink } from '../components/AppLink'
import { contactChannels, socialLinks } from '../data/siteContent'

export function ContactPage() {
  return (
    <div className="page">
      <section className="page-header page-header--narrow" data-aos="fade-up" data-aos-duration="1100">
        <span className="page-header__eyebrow">Contacto</span>
        <h1>WhatsApp, correo e Instagram para iniciar tu proyecto.</h1>
        <p>
          Si querés avanzar con una web, un sistema de gestión o una automatización, podés
          escribirnos por WhatsApp, Instagram o al correo forgesolutionsarg@gmail.com.
        </p>
      </section>

      <section className="contact-grid">
        {contactChannels.map((channel, index) => (
          <AppLink
            className="contact-card"
            key={channel.title}
            href={channel.href}
            external={channel.external}
            data-aos="fade-up"
            data-aos-delay={100 + index * 120}
            data-aos-duration={1100 + index * 50}
          >
            <span>{channel.title}</span>
            <strong>{channel.value}</strong>
            <p>{channel.note}</p>
          </AppLink>
        ))}
      </section>

      <section className="cta-banner cta-banner--stacked" data-aos="zoom-in" data-aos-duration="1250">
        <div>
          <span className="cta-banner__eyebrow">Canales</span>
          <h2>Elegí el canal que te resulte más cómodo y contanos qué tipo de software necesitás.</h2>
        </div>
        <div className="cta-banner__links">
          {socialLinks.map((item) => (
            <AppLink
              key={item.label}
              className="button button--ghost"
              href={item.href}
              external={item.external}
            >
              {item.label}
            </AppLink>
          ))}
        </div>
      </section>
    </div>
  )
}
