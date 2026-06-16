import { motion } from 'framer-motion';
import { STATS } from '../../data/config';
import styles from './Estadisticas.module.css';

export default function Estadisticas() {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.grid}`}>
        {STATS.map((stat, i) => (
          <motion.div
            key={stat.etiqueta}
            className={styles.card}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
          >
            <span className={styles.valor}>{stat.valor}</span>
            <span className={styles.etiqueta}>{stat.etiqueta}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
