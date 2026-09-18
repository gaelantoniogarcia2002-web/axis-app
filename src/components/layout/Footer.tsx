import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faEnvelope, faPhone, faClock } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram, faLinkedinIn, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { SITE_CONFIG } from '../../data/config';
import styles from './Footer.module.css';

const SOCIAL_LINKS = [
  { icon: faFacebookF, label: 'Facebook', href: '#' },
  { icon: faInstagram, label: 'Instagram', href: '#' },
  { icon: faLinkedinIn, label: 'LinkedIn', href: '#' },
  { icon: faYoutube, label: 'YouTube', href: '#' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.brand}>
          <div className={styles.logo}>
            <span className={styles.logoText}>{SITE_CONFIG.nombre}</span>
            <span className={styles.logoSub}>Medical Group</span>
          </div>
          <p className={styles.tagline}>
            {SITE_CONFIG.tagline}. Red cerrada de especialistas de alta prescripción con sede en {SITE_CONFIG.hospital}.
          </p>
          <div className={styles.social}>
            {SOCIAL_LINKS.map(s => (
              <a key={s.label} href={s.href} aria-label={s.label} className={styles.socialLink}>
                <FontAwesomeIcon icon={s.icon} />
              </a>
            ))}
          </div>
        </div>

        <div className={styles.col}>
          <h4 className={styles.colTitle}>Contacto</h4>
          <ul className={styles.list}>
            <li>
              <FontAwesomeIcon icon={faPhone} className={styles.icon} />
              <a href="tel:+525555555555" className={styles.link}>+52 (55) 5555-5555</a>
            </li>
            <li>
              <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />
              <a href="mailto:contacto@badimedicalgroup.mx" className={styles.link}>contacto@badimedicalgroup.mx</a>
            </li>
          </ul>
        </div>

        <div className={styles.col}>
          <h4 className={styles.colTitle}>Ubicación</h4>
          <ul className={styles.list}>
            <li>
              <FontAwesomeIcon icon={faMapMarkerAlt} className={styles.icon} />
              <span>{SITE_CONFIG.hospital},<br />{SITE_CONFIG.ciudad}</span>
            </li>
          </ul>
          <a href="https://www.google.com/maps" target="_blank" rel="noreferrer" className={styles.mapLink}>
            Ver en Google Maps
          </a>
        </div>

        <div className={styles.col}>
          <h4 className={styles.colTitle}>Horarios de atención</h4>
          <ul className={styles.list}>
            <li>
              <FontAwesomeIcon icon={faClock} className={styles.icon} />
              <span>Lunes a Viernes: 7:00 – 20:00<br />Sábados: 8:00 – 14:00</span>
            </li>
          </ul>
          <p className={styles.note}>Atención con previa cita.</p>
        </div>
      </div>

      <div className={`container ${styles.bottom}`}>
        <p className={styles.copy}>© {year} {SITE_CONFIG.nombreCompleto}. Todos los derechos reservados.</p>
        <div className={styles.legal}>
          <Link to="/contacto" className={styles.legalLink}>Aviso de privacidad</Link>
          <span className={styles.legalDivider}>|</span>
          <Link to="/contacto" className={styles.legalLink}>Términos y condiciones</Link>
        </div>
      </div>
    </footer>
  );
}
