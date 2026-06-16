import { motion } from 'framer-motion';
import Button from '../ui/Button';
import styles from './CTAContacto.module.css';

export default function CTAContacto() {
  return (
    <section className={styles.section}>
      <div className="container">
        <motion.div
          className={styles.inner}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className={styles.eyebrow}>¿Necesitas atención especializada?</p>
          <h2 className={styles.title}>Estamos listos para orientarte</h2>
          <p className={styles.desc}>
            Cuéntanos sobre tus necesidades y te conectaremos con el especialista de la red AXIS más adecuado para tu caso.
          </p>
          <div className={styles.actions}>
            <Button href="/contacto" variant="primary">Agendar consulta</Button>
            <Button href="/medicos" variant="outline">Conocer médicos</Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
