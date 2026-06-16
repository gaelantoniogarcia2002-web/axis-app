import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { SITE_CONFIG, NAV_LINKS } from '../../data/config';
import styles from './Footer.module.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.brand}>
          <div className={styles.logo}>
            <span className={styles.logoText}>AXIS</span>
            <span className={styles.logoSub}>Red Médica de Alta Especialidad</span>
          </div>
          <p className={styles.tagline}>
            Red cerrada de especialistas de alta prescripción con sede en {SITE_CONFIG.hospital}.
          </p>
        </div>

        <div className={styles.links}>
          <h4 className={styles.colTitle}>Navegación</h4>
          <ul>
            {NAV_LINKS.map(link => (
              <li key={link.href}>
                <Link to={link.href} className={styles.link}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.contact}>
          <h4 className={styles.colTitle}>Contacto</h4>
          <ul className={styles.contactList}>
            <li>
              <FontAwesomeIcon icon={faMapMarkerAlt} className={styles.icon} />
              <span>Hospital Ángeles del Pedregal,<br />Ciudad de México</span>
            </li>
            <li>
              <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />
              <a href="mailto:contacto@axisredmedica.mx" className={styles.link}>contacto@axisredmedica.mx</a>
            </li>
            <li>
              <FontAwesomeIcon icon={faPhone} className={styles.icon} />
              <a href="tel:+525555555555" className={styles.link}>+52 (55) 5555-5555</a>
            </li>
          </ul>
        </div>
      </div>

      <div className={`container ${styles.bottom}`}>
        <p className={styles.copy}>© {year} AXIS Red Médica. Todos los derechos reservados.</p>
        <p className={styles.vumi}>Propuesta exclusiva para <strong>VUMI Group</strong></p>
      </div>
    </footer>
  );
}
