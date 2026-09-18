import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faMapMarkerAlt, faHospital } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { SITE_CONFIG } from '../data/config';
import FormularioAgenda from '../components/agenda/FormularioAgenda';
import Button from '../components/ui/Button';
import styles from './AgendaCita.module.css';

export default function AgendaCita() {
  const mapsQuery = encodeURIComponent(SITE_CONFIG.hospital);

  return (
    <main>
      <section className={styles.hero}>
        <div className={styles.heroOverlay} />
        <div className={`container ${styles.heroInner}`}>
          <FontAwesomeIcon icon={faHospital} className={styles.heroIcon} />
          <h1 className={styles.title}>Agenda tu cita</h1>
          <p className={styles.subtitle}>
            Reserva tu consulta con nuestros especialistas en {SITE_CONFIG.hospital}.
          </p>
        </div>
      </section>

      <section className={styles.content}>
        <div className={`container ${styles.grid}`}>
          <FormularioAgenda />

          <aside className={styles.sidebar}>
            <div className={styles.whatsappCard}>
              <FontAwesomeIcon icon={faWhatsapp} className={styles.whatsappIcon} />
              <h3 className={styles.cardTitle}>¿Necesitas ayuda?</h3>
              <p className={styles.cardDesc}>Un asesor te ayudará a encontrar el mejor horario para ti.</p>
              <Button href="https://wa.me/525555555555" variant="whatsapp" className={styles.whatsappBtn}>
                Escríbenos por WhatsApp
              </Button>
            </div>

            <div className={styles.infoCard}>
              <h3 className={styles.cardTitle}>
                <FontAwesomeIcon icon={faClock} /> Horarios de atención
              </h3>
              <p className={styles.cardDesc}>
                Lunes a Viernes: 7:00 – 20:00<br />
                Sábados: 8:00 – 14:00
              </p>
              <p className={styles.cardNota}>Atención con previa cita.</p>
            </div>

            <div className={styles.infoCard}>
              <h3 className={styles.cardTitle}>
                <FontAwesomeIcon icon={faMapMarkerAlt} /> Ubicación
              </h3>
              <p className={styles.cardDesc}>{SITE_CONFIG.hospital}<br />{SITE_CONFIG.ciudad}</p>
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
    </main>
  );
}
