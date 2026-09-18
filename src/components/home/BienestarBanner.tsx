import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCheck, faHandHoldingHeart, faShieldHalved, faHeartCircleCheck } from '@fortawesome/free-solid-svg-icons';
import styles from './BienestarBanner.module.css';

const ITEMS = [
  { icon: faUserCheck, label: 'Atención personalizada' },
  { icon: faHandHoldingHeart, label: 'Calidez humana' },
  { icon: faShieldHalved, label: 'Seguridad y confianza' },
  { icon: faHeartCircleCheck, label: 'Compromiso con tu salud' },
];

export default function BienestarBanner() {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.text}>
          <h3 className={styles.title}>Tu bienestar es nuestra prioridad</h3>
          <p className={styles.desc}>
            Ofrecemos atención médica personalizada, con ética, empatía y compromiso en cada etapa de tu tratamiento.
          </p>
        </div>
        <div className={styles.items}>
          {ITEMS.map(item => (
            <div key={item.label} className={styles.item}>
              <FontAwesomeIcon icon={item.icon} className={styles.icon} />
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
