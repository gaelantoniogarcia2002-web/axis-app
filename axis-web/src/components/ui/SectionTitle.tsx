import styles from './SectionTitle.module.css';

interface SectionTitleProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionTitle({ eyebrow, title, subtitle, centered = false, light = false }: SectionTitleProps) {
  return (
    <div className={[styles.wrapper, centered && styles.centered, light && styles.light].filter(Boolean).join(' ')}>
      {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
      <h2 className={styles.title}>{title}</h2>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </div>
  );
}
