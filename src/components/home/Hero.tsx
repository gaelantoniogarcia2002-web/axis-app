import { motion } from 'framer-motion';
import Button from '../ui/Button';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay} />
      <div className={`container ${styles.content}`}>
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className={styles.inner}
        >
          <p className={styles.eyebrow}>Hospital Ángeles del Pedregal · Ciudad de México</p>
          <h1 className={styles.title}>
            La red médica de<br />
            <span className={styles.highlight}>alta especialidad</span><br />
            que necesitas
          </h1>
          <p className={styles.subtitle}>
            27 especialistas titulares. 15 especialidades. Una red coordinada para la atención médica más exigente.
          </p>
          <div className={styles.actions}>
            <Button href="/contacto" variant="primary">Agendar consulta</Button>
            <Button href="/medicos" variant="outline">Conocer especialistas</Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
