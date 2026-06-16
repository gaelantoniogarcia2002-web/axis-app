import { useState, useMemo } from 'react';
import { MEDICOS } from '../data/medicos';
import MedicoCard from '../components/medicos/MedicoCard';
import FiltrosMedicos from '../components/medicos/FiltrosMedicos';
import styles from './Medicos.module.css';

export default function Medicos() {
  const [busqueda, setBusqueda] = useState('');
  const [especialidad, setEspecialidad] = useState('');
  const [capitulo, setCapitulo] = useState('');

  const medicosFiltrados = useMemo(() => {
    return MEDICOS.filter(m => {
      const matchNombre = !busqueda || m.nombre.toLowerCase().includes(busqueda.toLowerCase());
      const matchEsp = !especialidad || m.especialidad === especialidad;
      const matchCap = !capitulo || m.capitulo === capitulo;
      return matchNombre && matchEsp && matchCap;
    });
  }, [busqueda, especialidad, capitulo]);

  return (
    <main>
      <section className={styles.hero}>
        <div className="container">
          <p className={styles.eyebrow}>Red AXIS</p>
          <h1 className={styles.title}>Nuestros especialistas</h1>
          <p className={styles.subtitle}>
            27 médicos especialistas titulares con sede en Hospital Ángeles del Pedregal.
          </p>
        </div>
      </section>

      <section className={styles.content}>
        <div className="container">
          <FiltrosMedicos
            busqueda={busqueda}
            onBusqueda={setBusqueda}
            especialidadFiltro={especialidad}
            onEspecialidad={setEspecialidad}
            capituloFiltro={capitulo}
            onCapitulo={setCapitulo}
          />

          {medicosFiltrados.length === 0 ? (
            <div className={styles.empty}>
              <p>No se encontraron médicos con los filtros seleccionados.</p>
            </div>
          ) : (
            <>
              <p className={styles.count}>{medicosFiltrados.length} especialista{medicosFiltrados.length !== 1 ? 's' : ''}</p>
              <div className={styles.grid}>
                {medicosFiltrados.map(m => (
                  <MedicoCard key={m.id} medico={m} />
                ))}
              </div>
            </>
          )}
        </div>
      </section>
    </main>
  );
}
