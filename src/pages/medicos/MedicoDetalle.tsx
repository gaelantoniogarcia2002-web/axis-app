import { useParams, Link, Navigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHospital, faIdCard, faArrowLeft, faCalendarCheck } from '@fortawesome/free-solid-svg-icons';
import { MEDICOS } from '../../data/medicos';
import { ESPECIALIDADES } from '../../data/especialidades';
import AvatarPlaceholder from '../../components/medicos/AvatarPlaceholder';
import Badge from '../../components/ui/Badge';
import Button from '../../components/ui/Button';
import styles from './MedicoDetalle.module.css';

export default function MedicoDetalle() {
  const { slug } = useParams<{ slug: string }>();
  const medico = MEDICOS.find(m => m.slug === slug);

  if (!medico) return <Navigate to="/medicos" replace />;

  const especialidad = ESPECIALIDADES.find(e => e.id === medico.especialidad);
  const colegas = MEDICOS.filter(m => m.capitulo === medico.capitulo && m.id !== medico.id).slice(0, 3);

  return (
    <main>
      <div className={styles.topBar}>
        <div className="container">
          <Link to="/medicos" className={styles.back}>
            <FontAwesomeIcon icon={faArrowLeft} /> Todos los especialistas
          </Link>
        </div>
      </div>

      <section className={styles.perfil}>
        <div className={`container ${styles.perfilGrid}`}>
          <div className={styles.avatarCol}>
            <AvatarPlaceholder nombre={medico.nombre} foto={medico.foto} size="lg" />
            <div className={styles.metaCard}>
              <div className={styles.metaItem}>
                <FontAwesomeIcon icon={faHospital} className={styles.metaIcon} />
                <div>
                  <p className={styles.metaLabel}>Hospital</p>
                  <p className={styles.metaVal}>{medico.hospital}</p>
                </div>
              </div>
              {medico.cedula && (
                <div className={styles.metaItem}>
                  <FontAwesomeIcon icon={faIdCard} className={styles.metaIcon} />
                  <div>
                    <p className={styles.metaLabel}>Cédula profesional</p>
                    <p className={styles.metaVal}>{medico.cedula}</p>
                  </div>
                </div>
              )}
              {medico.horarios && (
                <div className={styles.metaItem}>
                  <FontAwesomeIcon icon={faCalendarCheck} className={styles.metaIcon} />
                  <div>
                    <p className={styles.metaLabel}>Horarios</p>
                    <p className={styles.metaVal}>{medico.horarios}</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className={styles.infoCol}>
            <div className={styles.badges}>
              <Badge capitulo={medico.capitulo} />
            </div>
            <h1 className={styles.nombre}>{medico.nombre}</h1>
            <p className={styles.especialidadNombre}>{especialidad?.nombre ?? medico.especialidad}</p>

            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>Enfoque médico</h2>
              <p className={styles.desc}>{medico.descripcion}</p>
            </div>

            {medico.curriculum && (
              <div className={styles.section}>
                <h2 className={styles.sectionTitle}>Currículum</h2>
                <p className={styles.desc}>{medico.curriculum}</p>
              </div>
            )}

            {medico.procedimientosDestacados && medico.procedimientosDestacados.length > 0 && (
              <div className={styles.section}>
                <h2 className={styles.sectionTitle}>Procedimientos destacados</h2>
                <ul className={styles.procedimientos}>
                  {medico.procedimientosDestacados.map(p => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
            )}

            <div className={styles.cta}>
              <Button href="/contacto" variant="primary">
                <FontAwesomeIcon icon={faCalendarCheck} /> Agendar consulta
              </Button>
            </div>
          </div>
        </div>
      </section>

      {colegas.length > 0 && (
        <section className={styles.colegas}>
          <div className="container">
            <h2 className={styles.colegasTitulo}>Otros especialistas del mismo capítulo</h2>
            <div className={styles.colegasGrid}>
              {colegas.map(c => {
                const espColega = ESPECIALIDADES.find(e => e.id === c.especialidad);
                return (
                  <Link key={c.id} to={`/medicos/${c.slug}`} className={styles.colegaCard}>
                    <AvatarPlaceholder nombre={c.nombre} foto={c.foto} size="sm" />
                    <div>
                      <p className={styles.colegaNombre}>{c.nombre}</p>
                      <p className={styles.colegaEsp}>{espColega?.nombre}</p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
