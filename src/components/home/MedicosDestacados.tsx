import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { MEDICOS } from '../../data/medicos';
import { ESPECIALIDADES } from '../../data/especialidades';
import AvatarPlaceholder from '../medicos/AvatarPlaceholder';
import styles from './MedicosDestacados.module.css';

const DESTACADOS = MEDICOS.slice(0, 4);

export default function MedicosDestacados() {
  return (
    <div className={styles.wrap}>
      <div className={styles.header}>
        <h3 className={styles.title}>Especialistas destacados</h3>
        <Link to="/medicos" className={styles.verTodos}>Ver todos</Link>
      </div>
      <div className={styles.grid}>
        {DESTACADOS.map(medico => {
          const especialidad = ESPECIALIDADES.find(e => e.id === medico.especialidad);
          return (
            <Link key={medico.id} to={`/medicos/${medico.slug}`} className={styles.card}>
              <div className={styles.avatarWrap}>
                <AvatarPlaceholder nombre={medico.nombre} size="xs" foto={medico.foto} />
              </div>
              <span className={styles.nombre}>{medico.nombre}</span>
              <span className={styles.especialidad}>{especialidad?.nombre}</span>
              <span className={styles.verPerfil}>
                Ver perfil <FontAwesomeIcon icon={faArrowRight} />
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
