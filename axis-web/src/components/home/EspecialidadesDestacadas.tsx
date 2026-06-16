import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeartPulse, faSyringe, faRibbon, faLeaf, faBrain, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { CAPITULOS } from '../../data/especialidades';
import type { Capitulo } from '../../types';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';
import styles from './EspecialidadesDestacadas.module.css';

const ICON_MAP = {
  cardiometabolico: faHeartPulse,
  cirugia: faSyringe,
  'oncologia-piel': faRibbon,
  'digestivo-metabolico': faLeaf,
  'mujer-pediatria': faBrain,
  'neuro-complementarias': faBrain,
} as const;

const CAPITULOS_DESTACADOS: Capitulo[] = [
  'cardiometabolico',
  'cirugia',
  'oncologia-piel',
  'digestivo-metabolico',
  'mujer-pediatria',
  'neuro-complementarias',
];

export default function EspecialidadesDestacadas() {
  return (
    <section className={styles.section}>
      <div className="container">
        <SectionTitle
          eyebrow="Especialidades"
          title="Cobertura médica integral"
          subtitle="Seis capítulos clínicos que agrupan más de 20 especialidades para atender las necesidades médicas más complejas."
          centered
        />
        <div className={styles.grid}>
          {CAPITULOS_DESTACADOS.map(key => (
            <Link key={key} to={`/especialidades#${key}`} className={styles.card}>
              <div className={styles.iconWrap}>
                <FontAwesomeIcon icon={ICON_MAP[key]} className={styles.icon} />
              </div>
              <h3 className={styles.nombre}>{CAPITULOS[key].label}</h3>
              <p className={styles.desc}>{CAPITULOS[key].descripcion}</p>
              <span className={styles.verMas}>
                Ver especialidades <FontAwesomeIcon icon={faArrowRight} />
              </span>
            </Link>
          ))}
        </div>
        <div className={styles.cta}>
          <Button href="/especialidades" variant="ghost">Ver todas las especialidades</Button>
        </div>
      </div>
    </section>
  );
}
