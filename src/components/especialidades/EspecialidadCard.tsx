import { Link } from 'react-router-dom';
import type { Especialidad } from '../../types';
import { MEDICOS } from '../../data/medicos';
import styles from './EspecialidadCard.module.css';

interface EspecialidadCardProps {
  especialidad: Especialidad;
}

export default function EspecialidadCard({ especialidad }: EspecialidadCardProps) {
  const medicosDeEsp = MEDICOS.filter(m => m.especialidad === especialidad.id);

  return (
    <div className={styles.card}>
      <h3 className={styles.nombre}>{especialidad.nombre}</h3>
      <p className={styles.desc}>{especialidad.descripcion}</p>
      {medicosDeEsp.length > 0 && (
        <ul className={styles.medicos}>
          {medicosDeEsp.map(m => (
            <li key={m.id}>
              <Link to={`/medicos/${m.slug}`} className={styles.medicoLink}>
                {m.nombre}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
