import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as faHeartSolid, faCalendarCheck } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartOutline } from '@fortawesome/free-regular-svg-icons';
import type { Medico } from '../../types';
import { ESPECIALIDADES } from '../../data/especialidades';
import Button from '../ui/Button';
import AvatarPlaceholder from './AvatarPlaceholder';
import styles from './MedicoCard.module.css';

interface MedicoCardProps {
  medico: Medico;
}

export default function MedicoCard({ medico }: MedicoCardProps) {
  const [favorito, setFavorito] = useState(false);
  const especialidad = ESPECIALIDADES.find(e => e.id === medico.especialidad);

  return (
    <div className={styles.card}>
      <button
        type="button"
        className={styles.favBtn}
        onClick={() => setFavorito(f => !f)}
        aria-label={favorito ? 'Quitar de favoritos' : 'Agregar a favoritos'}
        aria-pressed={favorito}
      >
        <FontAwesomeIcon icon={favorito ? faHeartSolid : faHeartOutline} />
      </button>

      <Link to={`/medicos/${medico.slug}`} className={styles.link}>
        <div className={styles.photoWrap}>
          <AvatarPlaceholder nombre={medico.nombre} foto={medico.foto} size="full" />
        </div>
        <h3 className={styles.nombre}>{medico.nombre}</h3>
        <p className={styles.especialidad}>{especialidad?.nombre ?? medico.especialidad}</p>
        <p className={styles.descripcion}>{medico.descripcion}</p>
      </Link>

      <div className={styles.actions}>
        <Button href={`/medicos/${medico.slug}`} variant="ghost" className={styles.actionBtn}>
          Ver perfil
        </Button>
        <Button href="/agenda-cita" variant="primary" className={styles.actionBtn}>
          <FontAwesomeIcon icon={faCalendarCheck} /> Agendar
        </Button>
      </div>
    </div>
  );
}
