import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faEnvelope, faPhone, faClock } from '@fortawesome/free-solid-svg-icons';
import FormularioContacto from '../components/contacto/FormularioContacto';
import styles from './Contacto.module.css';

const INFO = [
  { icon: faMapMarkerAlt, label: 'Ubicación', valor: 'Hospital Ángeles del Pedregal\nPedregal de San Ángel, Ciudad de México' },
  { icon: faEnvelope, label: 'Correo', valor: 'contacto@axisredmedica.mx' },
  { icon: faPhone, label: 'Teléfono', valor: '+52 (55) 5555-5555' },
  { icon: faClock, label: 'Horario de atención', valor: 'Lunes a Viernes\n9:00 – 18:00 hrs' },
];

export default function Contacto() {
  return (
    <main>
      <section className={styles.hero}>
        <div className="container">
          <p className={styles.eyebrow}>Contáctanos</p>
          <h1 className={styles.title}>Estamos para orientarte</h1>
          <p className={styles.subtitle}>
            Cuéntanos tu caso y te conectaremos con el especialista más adecuado de la red bädi.
          </p>
        </div>
      </section>

      <section className={styles.content}>
        <div className={`container ${styles.grid}`}>
          <div className={styles.infoCol}>
            <h2 className={styles.infoTitle}>Información de contacto</h2>
            <p className={styles.infoDesc}>
              Nuestro equipo responde en un plazo máximo de 24 horas hábiles. Para urgencias médicas, acude directamente a Hospital Ángeles del Pedregal.
            </p>
            <ul className={styles.infoList}>
              {INFO.map(item => (
                <li key={item.label} className={styles.infoItem}>
                  <div className={styles.infoIcon}>
                    <FontAwesomeIcon icon={item.icon} />
                  </div>
                  <div>
                    <p className={styles.infoLabel}>{item.label}</p>
                    <p className={styles.infoVal} style={{ whiteSpace: 'pre-line' }}>{item.valor}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.formCol}>
            <h2 className={styles.formTitle}>Envíanos un mensaje</h2>
            <FormularioContacto />
          </div>
        </div>
      </section>
    </main>
  );
}
