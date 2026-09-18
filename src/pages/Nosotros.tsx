import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHospital, faUserDoctor, faHandshake } from '@fortawesome/free-solid-svg-icons';
import SectionTitle from '../components/ui/SectionTitle';
import Button from '../components/ui/Button';
import styles from './Nosotros.module.css';

const VALORES = [
  { icon: faUserDoctor, titulo: 'Excelencia clínica', desc: 'Todos nuestros médicos son especialistas titulares con cédula vigente y formación en instituciones de primer nivel.' },
  { icon: faHandshake, titulo: 'Trabajo en red', desc: 'La colaboración entre especialistas es el corazón de bädi. Cada caso se aborda de manera coordinada y multidisciplinaria.' },
  { icon: faHospital, titulo: 'Infraestructura de primer nivel', desc: 'Operamos dentro de Hospital Ángeles del Pedregal, una de las instituciones médicas más reconocidas de México.' },
];

export default function Nosotros() {
  return (
    <main>
      <section className={styles.hero}>
        <div className={styles.heroOverlay} />
        <div className={`container ${styles.heroContent}`}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className={styles.eyebrow}>Sobre bädi</p>
            <h1 className={styles.title}>Quiénes somos</h1>
            <p className={styles.subtitle}>
              bädi Medical Group es una red cerrada de especialistas médicos de alta prescripción con sede en Hospital Ángeles del Pedregal, Ciudad de México.
            </p>
          </motion.div>
        </div>
      </section>

      <section className={styles.mision}>
        <div className={`container ${styles.misionGrid}`}>
          <div>
            <SectionTitle
              eyebrow="Nuestra misión"
              title="Atención médica coordinada para los casos más complejos"
            />
            <p className={styles.text}>
              bädi nació de la convicción de que la medicina de excelencia requiere colaboración. En un sistema fragmentado, los pacientes con condiciones complejas pierden tiempo valioso coordinando entre especialistas que no se conocen y no comparten información.
            </p>
            <p className={styles.text}>
              Nuestra red resuelve esto: 27 especialistas en 15+ especialidades que trabajan bajo protocolos compartidos, se conocen personalmente y se coordinan para ofrecer la mejor ruta clínica posible a cada paciente.
            </p>
            <div className={styles.misionActions}>
              <Button href="/modelo" variant="ghost">Conocer el modelo bädi</Button>
            </div>
          </div>
          <div className={styles.misionStats}>
            <div className={styles.statCard}>
              <span className={styles.statVal}>2024</span>
              <span className={styles.statLabel}>Año de fundación</span>
            </div>
            <div className={styles.statCard}>
              <span className={styles.statVal}>27</span>
              <span className={styles.statLabel}>Especialistas</span>
            </div>
            <div className={styles.statCard}>
              <span className={styles.statVal}>15+</span>
              <span className={styles.statLabel}>Especialidades</span>
            </div>
            <div className={styles.statCard}>
              <span className={styles.statVal}>1</span>
              <span className={styles.statLabel}>Hospital sede</span>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.valores}>
        <div className="container">
          <SectionTitle
            eyebrow="Nuestros valores"
            title="Lo que nos distingue"
            centered
          />
          <div className={styles.valoresGrid}>
            {VALORES.map(v => (
              <div key={v.titulo} className={styles.valorCard}>
                <div className={styles.valorIcon}>
                  <FontAwesomeIcon icon={v.icon} />
                </div>
                <h3 className={styles.valorTitulo}>{v.titulo}</h3>
                <p className={styles.valorDesc}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.vumi}>
        <div className="container">
          <div className={styles.vumiInner}>
            <SectionTitle
              eyebrow="Alianzas"
              title="Respaldo para aseguradoras internacionales"
              subtitle="bädi fue diseñada para satisfacer los estándares de calidad, documentación y seguimiento que exigen aseguradoras de primer nivel como VUMI Group."
              light
            />
            <Button href="/contacto" variant="primary">Solicitar información institucional</Button>
          </div>
        </div>
      </section>
    </main>
  );
}
