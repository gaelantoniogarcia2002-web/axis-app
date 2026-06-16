import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHospital, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import type { Medico } from '../../types';
import { ESPECIALIDADES } from '../../data/especialidades';
import Badge from '../ui/Badge';
import AvatarPlaceholder from './AvatarPlaceholder';
import styles from './MedicoCard.module.css';

interface MedicoCardProps {
  medico: Medico;
}

export default function MedicoCard({ medico }: MedicoCardProps) {
  const especialidad = ESPECIALIDADES.find(e => e.id === medico.especialidad);

  return (
    <Link to={`/medicos/${medico.slug}`} className={styles.card}>
      <div className={styles.header}>
        <AvatarPlaceholder nombre={medico.nombre} foto={medico.foto} size="md" />
        <div className={styles.info}>
          <h3 className={styles.nombre}>{medico.nombre}</h3>
          <p className={styles.especialidad}>{especialidad?.nombre ?? medico.especialidad}</p>
        </div>
      </div>

      <Badge capitulo={medico.capitulo} />

      <p className={styles.descripcion}>{medico.descripcion}</p>

      <div className={styles.hospital}>
        <FontAwesomeIcon icon={faHospital} className={styles.hospitalIcon} />
        <span>{medico.hospital}</span>
      </div>

      <span className={styles.verPerfil}>
        Ver perfil <FontAwesomeIcon icon={faArrowRight} />
      </span>
    </Link>
  );
}
