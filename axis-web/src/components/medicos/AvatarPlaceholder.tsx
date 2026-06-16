import { getInitials } from '../../lib/utils';
import styles from './AvatarPlaceholder.module.css';

interface AvatarPlaceholderProps {
  nombre: string;
  size?: 'sm' | 'md' | 'lg';
  foto?: string;
}

export default function AvatarPlaceholder({ nombre, size = 'md', foto }: AvatarPlaceholderProps) {
  if (foto) {
    return <img src={foto} alt={nombre} className={`${styles.avatar} ${styles[size]}`} />;
  }
  return (
    <div className={`${styles.placeholder} ${styles[size]}`} aria-label={nombre}>
      <span className={styles.initials}>{getInitials(nombre)}</span>
    </div>
  );
}
