import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMapMarkerAlt, faEnvelope, faPhone, faClock, faHeadset, faUserDoctor,
  faCommentDots, faShieldHalved,
} from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp, faFacebookF, faInstagram, faLinkedinIn, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { SITE_CONFIG } from '../data/config';
import { FAQ_CONTACTO } from '../data/faq';
import FormularioContacto from '../components/contacto/FormularioContacto';
import Accordion from '../components/ui/Accordion';
import Button from '../components/ui/Button';
import styles from './Contacto.module.css';

const CANALES = [
  {
    icon: faHeadset,
    titulo: 'Call Center',
    desc: 'Llámanos para agendar tu cita o resolver tus dudas.',
    valor: '+52 (55) 5555-5555',
    nota: 'Línea principal',
    accion: { label: 'Llamar ahora', href: 'tel:+525555555555' },
  },
  {
    icon: faUserDoctor,
    titulo: 'Coordinación médica',
    desc: 'Para médicos que desean referir pacientes o casos especiales.',
    valor: 'coordinacion@badimedicalgroup.mx',
    nota: 'Correo electrónico',
    accion: { label: 'Enviar correo', href: 'mailto:coordinacion@badimedicalgroup.mx' },
  },
  {
    icon: faCommentDots,
    titulo: 'Atención a pacientes',
    desc: 'Información, dudas generales y seguimiento de citas.',
    valor: '+52 (55) 5555-5555',
    nota: 'WhatsApp',
    accion: { label: 'Escríbenos ahora', href: 'https://wa.me/525555555555' },
  },
];

const SOCIAL_LINKS = [
  { icon: faFacebookF, label: 'Facebook', href: '#' },
  { icon: faInstagram, label: 'Instagram', href: '#' },
  { icon: faLinkedinIn, label: 'LinkedIn', href: '#' },
  { icon: faYoutube, label: 'YouTube', href: '#' },
];

export default function Contacto() {
  const mapsQuery = encodeURIComponent(SITE_CONFIG.hospital);

  return (
    <main>
      <section className={styles.hero}>
        <div className={`container ${styles.heroGrid}`}>
          <div>
            <h1 className={styles.title}>Contáctanos</h1>
            <p className={styles.subtitle}>
              Estamos para ayudarte. Elige el canal que prefieras para agendar tu cita, resolver dudas o recibir orientación médica personalizada.
            </p>
            <Button href="https://wa.me/525555555555" variant="whatsapp" className={styles.heroWhatsapp}>
              <FontAwesomeIcon icon={faWhatsapp} /> Escríbenos por WhatsApp
            </Button>
            <p className={styles.heroNota}>
              <FontAwesomeIcon icon={faShieldHalved} /> Atención rápida, segura y confidencial
            </p>
          </div>
          <div className={styles.heroVisual}>
            <FontAwesomeIcon icon={faHeadset} />
          </div>
        </div>
      </section>

      <section className={styles.canales}>
        <div className={`container ${styles.canalesGrid}`}>
          {CANALES.map(c => (
            <div key={c.titulo} className={styles.canalCard}>
              <span className={styles.canalIcon}><FontAwesomeIcon icon={c.icon} /></span>
              <h3 className={styles.canalTitulo}>{c.titulo}</h3>
              <p className={styles.canalDesc}>{c.desc}</p>
              <p className={styles.canalNota}>{c.nota}</p>
              <p className={styles.canalValor}>{c.valor}</p>
              <Button href={c.accion.href} variant="ghost" className={styles.canalBtn}>{c.accion.label}</Button>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.content}>
        <div className={`container ${styles.grid}`}>
          <div className={styles.formCol}>
            <h2 className={styles.sectionTitle}>Envíanos un mensaje</h2>
            <p className={styles.sectionDesc}>Completa el formulario y te contactaremos a la brevedad.</p>
            <FormularioContacto />
          </div>

          <aside className={styles.sidebar}>
            <div className={styles.infoCard}>
              <h3 className={styles.cardTitle}>Información de contacto</h3>
              <ul className={styles.infoList}>
                <li>
                  <FontAwesomeIcon icon={faEnvelope} className={styles.infoIcon} />
                  <div>
                    <p className={styles.infoVal}>contacto@badimedicalgroup.mx</p>
                    <p className={styles.infoSub}>Respuesta en menos de 24 horas</p>
                  </div>
                </li>
                <li>
                  <FontAwesomeIcon icon={faPhone} className={styles.infoIcon} />
                  <div>
                    <p className={styles.infoVal}>+52 (55) 5555-5555</p>
                    <p className={styles.infoSub}>Línea principal</p>
                  </div>
                </li>
                <li>
                  <FontAwesomeIcon icon={faWhatsapp} className={styles.infoIcon} />
                  <div>
                    <p className={styles.infoVal}>+52 (55) 5555-5555</p>
                    <p className={styles.infoSub}>WhatsApp</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className={styles.infoCard}>
              <h3 className={styles.cardTitle}><FontAwesomeIcon icon={faClock} /> Horario de atención</h3>
              <p className={styles.infoVal}>Lunes a Viernes: 7:00 – 20:00<br />Sábados: 8:00 – 14:00</p>
              <p className={styles.infoSub}>Atención con previa cita.</p>
            </div>

            <div className={styles.infoCard}>
              <h3 className={styles.cardTitle}>Síguenos</h3>
              <div className={styles.social}>
                {SOCIAL_LINKS.map(s => (
                  <a key={s.label} href={s.href} aria-label={s.label} className={styles.socialLink}>
                    <FontAwesomeIcon icon={s.icon} />
                  </a>
                ))}
              </div>
            </div>

            <div className={styles.infoCard}>
              <h3 className={styles.cardTitle}><FontAwesomeIcon icon={faMapMarkerAlt} /> Visítanos</h3>
              <p className={styles.infoVal}>{SITE_CONFIG.hospital}<br />{SITE_CONFIG.ciudad}</p>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${mapsQuery}`}
                target="_blank"
                rel="noreferrer"
                className={styles.mapLink}
              >
                Ver en Google Maps →
              </a>
            </div>
          </aside>
        </div>
      </section>

      <section className={styles.faqSection}>
        <div className={`container ${styles.faqInner}`}>
          <h2 className={styles.sectionTitle}>Preguntas frecuentes</h2>
          <Accordion items={FAQ_CONTACTO} />
        </div>
      </section>

      <section className={styles.ctaBanner}>
        <div className={`container ${styles.ctaInner}`}>
          <div>
            <h3 className={styles.ctaTitle}>Estamos para ayudarte</h3>
            <p className={styles.ctaDesc}>Nuestro equipo te acompañará en cada paso para que recibas la atención que mereces.</p>
          </div>
          <Button href="https://wa.me/525555555555" variant="whatsapp" className={styles.ctaBtn}>
            <FontAwesomeIcon icon={faWhatsapp} /> Escríbenos por WhatsApp
          </Button>
        </div>
      </section>
    </main>
  );
}
