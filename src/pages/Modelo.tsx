import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapPin, faRoute, faBolt } from '@fortawesome/free-solid-svg-icons';
import SectionTitle from '../components/ui/SectionTitle';
import Button from '../components/ui/Button';
import styles from './Modelo.module.css';

const PASOS = [
  {
    num: '01',
    icon: faMapPin,
    titulo: 'Mapeo',
    subtitulo: 'Perfil y necesidades del paciente',
    desc: 'Comenzamos por entender a fondo al paciente: su historial clínico, condición actual, necesidades específicas y expectativas. Este primer paso nos permite diseñar una ruta completamente personalizada.',
    puntos: [
      'Revisión de historial médico previo',
      'Identificación de especialidades necesarias',
      'Evaluación de urgencia y complejidad',
      'Coordinación con la aseguradora si aplica',
    ],
    fondo: 'navy',
  },
  {
    num: '02',
    icon: faRoute,
    titulo: 'Diseño',
    subtitulo: 'Ruta clínica personalizada',
    desc: 'Con base en el perfil del paciente, diseñamos una ruta clínica que integra los especialistas más adecuados de la red AXIS, con protocolos coordinados y tiempos optimizados.',
    puntos: [
      'Selección del especialista idóneo',
      'Diseño de protocolo de atención',
      'Coordinación de citas y procedimientos',
      'Documentación y registro para aseguradora',
    ],
    fondo: 'white',
  },
  {
    num: '03',
    icon: faBolt,
    titulo: 'Activación',
    subtitulo: 'Coordinación con red AXIS',
    desc: 'Ponemos en marcha la ruta clínica. Los especialistas de AXIS se coordinan entre sí para asegurar que el paciente reciba atención integral, oportuna y sin fricciones.',
    puntos: [
      'Primer contacto con el especialista',
      'Seguimiento entre especialistas en red',
      'Comunicación continua con el paciente',
      'Reportes a aseguradora si se requiere',
    ],
    fondo: 'navy',
  },
];

export default function Modelo() {
  return (
    <main>
      <section className={styles.hero}>
        <div className="container">
          <p className={styles.eyebrow}>Cómo funciona</p>
          <h1 className={styles.title}>El modelo AXIS</h1>
          <p className={styles.subtitle}>
            Un proceso de 3 pasos diseñado para conectar a los pacientes con el especialista correcto, en el momento adecuado, sin fricción.
          </p>
        </div>
      </section>

      <div className={styles.pasos}>
        {PASOS.map((paso, i) => (
          <section
            key={paso.num}
            className={[styles.paso, paso.fondo === 'navy' ? styles.pasoNavy : styles.pasoWhite].join(' ')}
          >
            <div className={`container ${styles.pasoGrid}`}>
              <motion.div
                className={styles.pasoNum}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <span className={styles.numLabel}>{paso.num}</span>
                <div className={styles.numIcon}>
                  <FontAwesomeIcon icon={paso.icon} />
                </div>
              </motion.div>

              <motion.div
                className={styles.pasoContent}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <p className={[styles.pasoEyebrow, paso.fondo === 'navy' ? styles.lightMuted : styles.darkMuted].join(' ')}>
                  Paso {i + 1}
                </p>
                <h2 className={[styles.pasoTitulo, paso.fondo === 'navy' ? styles.lightTitle : styles.darkTitle].join(' ')}>
                  {paso.titulo}
                </h2>
                <p className={[styles.pasoSub, paso.fondo === 'navy' ? styles.lightGold : styles.darkGold].join(' ')}>
                  {paso.subtitulo}
                </p>
                <p className={[styles.pasoDesc, paso.fondo === 'navy' ? styles.lightText : styles.darkText].join(' ')}>
                  {paso.desc}
                </p>
                <ul className={styles.puntos}>
                  {paso.puntos.map(p => (
                    <li key={p} className={[styles.punto, paso.fondo === 'navy' ? styles.lightText : styles.darkText].join(' ')}>
                      {p}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </section>
        ))}
      </div>

      <section className={styles.cta}>
        <div className="container">
          <SectionTitle
            eyebrow="¿Listo para comenzar?"
            title="Inicia tu proceso con AXIS"
            subtitle="Cuéntanos tu caso y te conectamos con el especialista adecuado."
            centered
          />
          <div className={styles.ctaActions}>
            <Button href="/contacto" variant="primary">Agendar consulta</Button>
            <Button href="/medicos" variant="ghost">Conocer especialistas</Button>
          </div>
        </div>
      </section>
    </main>
  );
}
