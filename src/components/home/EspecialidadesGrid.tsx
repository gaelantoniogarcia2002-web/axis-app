import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHeartPulse, faBone, faPills, faDroplet, faVenus, faBrain, faStethoscope, faArrowRight,
} from '@fortawesome/free-solid-svg-icons';
import { ESPECIALIDADES } from '../../data/especialidades';
import styles from './EspecialidadesGrid.module.css';

const ICON_MAP: Record<string, typeof faHeartPulse> = {
  cardiologia: faHeartPulse,
  ortopedia: faBone,
  gastroenterologia: faPills,
  urologia: faDroplet,
  ginecologia: faVenus,
  neurocirugia: faBrain,
  'medicina-critica': faStethoscope,
};

const DESTACADAS_IDS = ['cardiologia', 'ortopedia', 'gastroenterologia', 'urologia', 'ginecologia', 'medicina-critica', 'neurocirugia'];

export default function EspecialidadesGrid() {
  const especialidades = DESTACADAS_IDS
    .map(id => ESPECIALIDADES.find(e => e.id === id))
    .filter((e): e is NonNullable<typeof e> => Boolean(e));

  return (
    <div className={styles.wrap}>
      <h3 className={styles.title}>Nuestras especialidades</h3>
      <div className={styles.grid}>
        {especialidades.map(esp => (
          <Link key={esp.id} to={`/especialidades#${esp.capitulo}`} className={styles.pill}>
            <FontAwesomeIcon icon={ICON_MAP[esp.id] ?? faStethoscope} className={styles.icon} />
            <span>{esp.nombre}</span>
          </Link>
        ))}
        <Link to="/especialidades" className={styles.verTodas}>
          Ver todas las <FontAwesomeIcon icon={faArrowRight} />
        </Link>
      </div>
    </div>
  );
}
