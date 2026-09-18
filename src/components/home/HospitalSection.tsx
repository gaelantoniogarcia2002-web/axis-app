import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHospital, faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { SITE_CONFIG } from '../../data/config';
import Button from '../ui/Button';
import styles from './HospitalSection.module.css';

const AMENIDADES = [
  'Quirófanos de alta especialidad',
  'Unidad de cuidados intensivos',
  'Laboratorios y diagnóstico avanzado',
  'Estacionamiento y acceso cómodo',
];

export default function HospitalSection() {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.photo}>
          <FontAwesomeIcon icon={faHospital} className={styles.photoIcon} />
        </div>
        <div className={styles.content}>
          <h3 className={styles.title}>{SITE_CONFIG.hospital}</h3>
          <p className={styles.desc}>
            Contamos con instalaciones de primer nivel y tecnología de vanguardia para brindarte diagnósticos precisos y tratamientos seguros.
          </p>
          <ul className={styles.lista}>
            {AMENIDADES.map(item => (
              <li key={item}>
                <FontAwesomeIcon icon={faCircleCheck} className={styles.check} />
                {item}
              </li>
            ))}
          </ul>
          <Button href="/nosotros" variant="ghost" className={styles.cta}>
            Conoce más sobre nuestra sede
          </Button>
        </div>
      </div>
    </section>
  );
}
