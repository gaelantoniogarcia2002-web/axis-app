import type { Capitulo } from '../../types';
import { CAPITULOS } from '../../data/especialidades';
import styles from './Badge.module.css';

interface BadgeProps {
  capitulo: Capitulo;
}

export default function Badge({ capitulo }: BadgeProps) {
  return (
    <span className={`${styles.badge} ${styles[capitulo.replace(/-/g, '_') as keyof typeof styles]}`}>
      {CAPITULOS[capitulo].label}
    </span>
  );
}
