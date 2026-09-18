import MedicosDestacados from './MedicosDestacados';
import EspecialidadesGrid from './EspecialidadesGrid';
import styles from './DestacadosRow.module.css';

export default function DestacadosRow() {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.grid}`}>
        <MedicosDestacados />
        <EspecialidadesGrid />
      </div>
    </section>
  );
}
