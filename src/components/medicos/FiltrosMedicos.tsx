import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faSliders } from '@fortawesome/free-solid-svg-icons';
import { ESPECIALIDADES, CAPITULOS } from '../../data/especialidades';
import type { Capitulo } from '../../types';
import styles from './FiltrosMedicos.module.css';

const PILLS_ESPECIALIDADES = ['cardiologia', 'gastroenterologia', 'ginecologia', 'ortopedia', 'urologia'];

interface FiltrosMedicosProps {
  busqueda: string;
  onBusqueda: (v: string) => void;
  especialidadFiltro: string;
  onEspecialidad: (v: string) => void;
  capituloFiltro: string;
  onCapitulo: (v: string) => void;
}

export default function FiltrosMedicos({
  busqueda, onBusqueda,
  especialidadFiltro, onEspecialidad,
  capituloFiltro, onCapitulo,
}: FiltrosMedicosProps) {
  const [masFiltros, setMasFiltros] = useState(false);

  const pills = PILLS_ESPECIALIDADES
    .map(id => ESPECIALIDADES.find(e => e.id === id))
    .filter((e): e is NonNullable<typeof e> => Boolean(e));

  return (
    <div className={styles.filtros}>
      <div className={styles.searchWrap}>
        <FontAwesomeIcon icon={faMagnifyingGlass} className={styles.searchIcon} />
        <input
          type="text"
          placeholder="Buscar por nombre o especialidad..."
          value={busqueda}
          onChange={e => onBusqueda(e.target.value)}
          className={styles.search}
        />
      </div>

      <div className={styles.pillsRow}>
        <span className={styles.pillsLabel}>Filtrar por especialidad:</span>
        <button
          type="button"
          className={[styles.pill, !especialidadFiltro && styles.pillActive].filter(Boolean).join(' ')}
          onClick={() => onEspecialidad('')}
        >
          Todas
        </button>
        {pills.map(esp => (
          <button
            key={esp.id}
            type="button"
            className={[styles.pill, especialidadFiltro === esp.id && styles.pillActive].filter(Boolean).join(' ')}
            onClick={() => onEspecialidad(especialidadFiltro === esp.id ? '' : esp.id)}
          >
            {esp.nombre}
          </button>
        ))}
        <button
          type="button"
          className={[styles.pill, styles.masFiltros, masFiltros && styles.pillActive].filter(Boolean).join(' ')}
          onClick={() => setMasFiltros(v => !v)}
        >
          <FontAwesomeIcon icon={faSliders} /> Más filtros
        </button>
      </div>

      {masFiltros && (
        <div className={styles.extra}>
          <select
            value={capituloFiltro}
            onChange={e => { onCapitulo(e.target.value); onEspecialidad(''); }}
            className={styles.select}
          >
            <option value="">Todos los capítulos</option>
            {(Object.keys(CAPITULOS) as Capitulo[]).map(key => (
              <option key={key} value={key}>{CAPITULOS[key].label}</option>
            ))}
          </select>

          <select
            value={especialidadFiltro}
            onChange={e => onEspecialidad(e.target.value)}
            className={styles.select}
          >
            <option value="">Todas las especialidades</option>
            {ESPECIALIDADES
              .filter(e => !capituloFiltro || e.capitulo === capituloFiltro)
              .map(e => (
                <option key={e.id} value={e.id}>{e.nombre}</option>
              ))}
          </select>
        </div>
      )}
    </div>
  );
}
