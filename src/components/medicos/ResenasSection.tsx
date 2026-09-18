import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarOutline } from '@fortawesome/free-regular-svg-icons';
import type { Resena } from '../../types';
import styles from './ResenasSection.module.css';

interface ResenasSectionProps {
  resenas: Resena[];
}

export default function ResenasSection({ resenas }: ResenasSectionProps) {
  const promedio = resenas.length
    ? resenas.reduce((sum, r) => sum + r.rating, 0) / resenas.length
    : 0;

  return (
    <div className={styles.wrap}>
      <h3 className={styles.title}>Lo que opinan los pacientes</h3>

      {resenas.length === 0 ? (
        <p className={styles.empty}>
          Aún no hay reseñas de pacientes para este especialista.
        </p>
      ) : (
        <>
          <div className={styles.resumen}>
            <span className={styles.promedio}>{promedio.toFixed(1)}</span>
            <div>
              <div className={styles.estrellas}>
                {Array.from({ length: 5 }, (_, i) => (
                  <FontAwesomeIcon key={i} icon={i < Math.round(promedio) ? faStar : faStarOutline} />
                ))}
              </div>
              <span className={styles.count}>({resenas.length} reseña{resenas.length !== 1 ? 's' : ''})</span>
            </div>
          </div>

          <div className={styles.lista}>
            {resenas.map(r => (
              <blockquote key={r.id} className={styles.resena}>
                <p className={styles.texto}>&ldquo;{r.texto}&rdquo;</p>
                <cite className={styles.autor}>— {r.autor}</cite>
              </blockquote>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
