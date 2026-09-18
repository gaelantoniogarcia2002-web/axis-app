import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import Button from '../ui/Button';
import isotipo from '../../assets/images/logo/logo-isotipo-trim.png';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={`container ${styles.grid}`}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className={styles.inner}
        >
          <p className={styles.eyebrow}>
            <FontAwesomeIcon icon={faLocationDot} /> Hospital Ángeles del Pedregal · Ciudad de México
          </p>
          <h1 className={styles.title}>
            La red médica de<br />
            <span className={styles.highlight}>alta especialidad</span><br />
            que necesitas
          </h1>
          <p className={styles.subtitle}>
            27 especialistas titulares. 15 especialidades. Una red coordinada para la atención médica más exigente.
          </p>
          <div className={styles.actions}>
            <Button href="/agenda-cita" variant="primary">Agenda tu cita</Button>
            <Button href="https://wa.me/525555555555" variant="whatsapp">
              <FontAwesomeIcon icon={faWhatsapp} /> Escríbenos por WhatsApp
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
          className={styles.visual}
        >
          <img src={isotipo} alt="" className={styles.visualMark} />
        </motion.div>
      </div>
    </section>
  );
}
