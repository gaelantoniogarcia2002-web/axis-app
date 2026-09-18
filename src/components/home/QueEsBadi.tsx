import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldHalved, faUserDoctor, faNetworkWired } from '@fortawesome/free-solid-svg-icons';
import SectionTitle from '../ui/SectionTitle';
import styles from './QueEsBadi.module.css';

const PILARES = [
  {
    icon: faUserDoctor,
    titulo: 'Especialistas de primer nivel',
    desc: 'Médicos titulares con cédula vigente, formación de posgrado y experiencia comprobada en Hospital Ángeles del Pedregal.',
  },
  {
    icon: faNetworkWired,
    titulo: 'Red coordinada',
    desc: 'Los 27 especialistas trabajan de forma articulada, compartiendo protocolos, historial y criterios clínicos para cada paciente.',
  },
  {
    icon: faShieldHalved,
    titulo: 'Respaldo para aseguradoras',
    desc: 'Diseñada para satisfacer los estándares de VUMI Group y otras aseguradoras de primer nivel con documentación y seguimiento riguroso.',
  },
];

export default function QueEsBadi() {
  return (
    <section className={styles.section}>
      <div className="container">
        <SectionTitle
          eyebrow="¿Qué es bädi?"
          title="Una red médica diferente"
          subtitle="No somos un directorio. Somos una red cerrada de especialistas que se conocen, colaboran y se respaldan mutuamente para ofrecerte la mejor atención posible."
          centered
        />
        <div className={styles.grid}>
          {PILARES.map((p, i) => (
            <motion.div
              key={p.titulo}
              className={styles.card}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
            >
              <div className={styles.iconWrap}>
                <FontAwesomeIcon icon={p.icon} className={styles.icon} />
              </div>
              <h3 className={styles.titulo}>{p.titulo}</h3>
              <p className={styles.desc}>{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
