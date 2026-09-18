import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserGroup, faHeartCircleCheck, faLaptopMedical, faHospital } from '@fortawesome/free-solid-svg-icons';
import { SITE_CONFIG } from '../../data/config';
import styles from './Estadisticas.module.css';

const HIGHLIGHTS = [
  { icon: faUserGroup, valor: '27+', label: 'especialistas', sublabel: 'de alto nivel' },
  { icon: faHeartCircleCheck, label: 'Atención integral', sublabel: 'Enfoque humano y cercano' },
  { icon: faLaptopMedical, label: 'Tecnología médica', sublabel: 'Diagnóstico preciso y tratamientos avanzados' },
  { icon: faHospital, label: SITE_CONFIG.hospital, sublabel: 'Nuestro hospital sede' },
];

export default function Estadisticas() {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.card}`}>
        <div className={styles.grid}>
          {HIGHLIGHTS.map((item, i) => (
            <motion.div
              key={item.label}
              className={styles.item}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
            >
              <span className={styles.iconWrap}>
                <FontAwesomeIcon icon={item.icon} className={styles.icon} />
              </span>
              <span className={styles.text}>
                {item.valor && <span className={styles.valor}>{item.valor} </span>}
                <span className={styles.label}>{item.label}</span>
                <span className={styles.sublabel}>{item.sublabel}</span>
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
