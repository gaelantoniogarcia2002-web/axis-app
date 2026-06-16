import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { ESPECIALIDADES, CAPITULOS } from '../../data/especialidades';
import type { Capitulo } from '../../types';
import styles from './FiltrosMedicos.module.css';

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
  return (
    <div className={styles.filtros}>
      <div className={styles.searchWrap}>
        <FontAwesomeIcon icon={faMagnifyingGlass} className={styles.searchIcon} />
        <input
          type="text"
          placeholder="Buscar por nombre..."
          value={busqueda}
          onChange={e => onBusqueda(e.target.value)}
          className={styles.search}
        />
      </div>

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
  );
}
