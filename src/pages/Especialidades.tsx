import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CAPITULOS, ESPECIALIDADES } from '../data/especialidades';
import type { Capitulo } from '../types';
import EspecialidadCard from '../components/especialidades/EspecialidadCard';
import styles from './Especialidades.module.css';

const TABS = Object.keys(CAPITULOS) as Capitulo[];

export default function Especialidades() {
  const location = useLocation();
  const hashCapitulo = location.hash.replace('#', '') as Capitulo;
  const initialTab = TABS.includes(hashCapitulo) ? hashCapitulo : TABS[0];
  const [activeTab, setActiveTab] = useState<Capitulo>(initialTab);

  const especialidadesActivas = ESPECIALIDADES.filter(e => e.capitulo === activeTab);

  return (
    <main>
      <section className={styles.hero}>
        <div className="container">
          <p className={styles.eyebrow}>Red bädi</p>
          <h1 className={styles.title}>Especialidades médicas</h1>
          <p className={styles.subtitle}>
            15 especialidades organizadas en 6 capítulos clínicos para una atención integral y coordinada.
          </p>
        </div>
      </section>

      <section className={styles.content}>
        <div className="container">
          <div className={styles.tabs}>
            {TABS.map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={[styles.tab, activeTab === tab && styles.tabActive].filter(Boolean).join(' ')}
                id={tab}
              >
                {CAPITULOS[tab].label}
              </button>
            ))}
          </div>

          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className={styles.capituloHeader}>
              <h2 className={styles.capituloTitle}>{CAPITULOS[activeTab].label}</h2>
              <p className={styles.capituloDesc}>{CAPITULOS[activeTab].descripcion}</p>
            </div>

            <div className={styles.grid}>
              {especialidadesActivas.map(esp => (
                <EspecialidadCard key={esp.id} especialidad={esp} />
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
