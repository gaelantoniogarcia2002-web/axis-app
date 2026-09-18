import { useParams, Link, Navigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faIdCard, faCalendarCheck, faGraduationCap, faUserGroup, faClipboardList,
  faClock, faMapMarkerAlt, faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { MEDICOS } from '../../data/medicos';
import { ESPECIALIDADES } from '../../data/especialidades';
import { getResenasPorMedico } from '../../data/resenas';
import { FAQ_MEDICO } from '../../data/faq';
import AvatarPlaceholder from '../../components/medicos/AvatarPlaceholder';
import ResenasSection from '../../components/medicos/ResenasSection';
import Accordion from '../../components/ui/Accordion';
import Button from '../../components/ui/Button';
import styles from './MedicoDetalle.module.css';

export default function MedicoDetalle() {
  const { slug } = useParams<{ slug: string }>();
  const medico = MEDICOS.find(m => m.slug === slug);

  if (!medico) return <Navigate to="/medicos" replace />;

  const especialidad = ESPECIALIDADES.find(e => e.id === medico.especialidad);
  const colegas = MEDICOS.filter(m => m.capitulo === medico.capitulo && m.id !== medico.id).slice(0, 3);
  const resenas = getResenasPorMedico(medico.id);
  const tieneStats = medico.formacion?.length || medico.experienciaAnios || medico.pacientesAtendidos;
  const mapsQuery = encodeURIComponent(medico.hospital);

  return (
    <main>
      <div className={styles.topBar}>
        <div className={`container ${styles.breadcrumb}`}>
          <Link to="/">Inicio</Link>
          <FontAwesomeIcon icon={faChevronRight} className={styles.breadcrumbIcon} />
          <Link to="/medicos">Especialistas</Link>
          <FontAwesomeIcon icon={faChevronRight} className={styles.breadcrumbIcon} />
          <span>{medico.nombre}</span>
        </div>
      </div>

      <section className={styles.perfil}>
        <div className={`container ${styles.perfilGrid}`}>
          <div className={styles.avatarCol}>
            <AvatarPlaceholder nombre={medico.nombre} foto={medico.foto} size="lg" />
          </div>

          <div className={styles.infoCol}>
            <h1 className={styles.nombre}>{medico.nombre}</h1>
            <p className={styles.especialidadNombre}>{especialidad?.nombre ?? medico.especialidad}</p>

            {(medico.cedula || medico.cedulaEspecialidad) && (
              <p className={styles.cedulas}>
                <FontAwesomeIcon icon={faIdCard} />
                {medico.cedula && <span>Céd. Prof. {medico.cedula}</span>}
                {medico.cedulaEspecialidad && <span>Céd. Esp. {medico.cedulaEspecialidad}</span>}
              </p>
            )}

            <p className={styles.desc}>{medico.curriculum ?? medico.descripcion}</p>

            {tieneStats ? (
              <div className={styles.stats}>
                {!!medico.formacion?.length && (
                  <div className={styles.stat}>
                    <FontAwesomeIcon icon={faGraduationCap} className={styles.statIcon} />
                    <div>
                      <p className={styles.statLabel}>Formación</p>
                      <p className={styles.statVal}>{medico.formacion.join(' · ')}</p>
                    </div>
                  </div>
                )}
                {!!medico.experienciaAnios && (
                  <div className={styles.stat}>
                    <FontAwesomeIcon icon={faClock} className={styles.statIcon} />
                    <div>
                      <p className={styles.statLabel}>Experiencia</p>
                      <p className={styles.statVal}>Más de {medico.experienciaAnios} años</p>
                    </div>
                  </div>
                )}
                {medico.pacientesAtendidos && (
                  <div className={styles.stat}>
                    <FontAwesomeIcon icon={faUserGroup} className={styles.statIcon} />
                    <div>
                      <p className={styles.statLabel}>Pacientes atendidos</p>
                      <p className={styles.statVal}>{medico.pacientesAtendidos}</p>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <p className={styles.statsPendientes}>
                Formación, experiencia y otros datos de este especialista se publicarán próximamente.
              </p>
            )}

            <div className={styles.cta}>
              <Button href="/agenda-cita" variant="primary">
                <FontAwesomeIcon icon={faCalendarCheck} /> Agenda tu cita
              </Button>
              <Button href="https://wa.me/525555555555" variant="whatsapp">
                <FontAwesomeIcon icon={faWhatsapp} /> Escríbenos por WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.detalle}>
        <div className={`container ${styles.detalleGrid}`}>
          <div className={styles.detalleCard}>
            <h3 className={styles.detalleTitle}>
              <FontAwesomeIcon icon={faClipboardList} /> Servicios principales
            </h3>
            {medico.procedimientosDestacados?.length ? (
              <ul className={styles.lista}>
                {medico.procedimientosDestacados.map(p => <li key={p}>{p}</li>)}
              </ul>
            ) : (
              <p className={styles.detallePendiente}>
                Escríbenos para conocer los servicios y procedimientos que ofrece este especialista.
              </p>
            )}
          </div>

          <div className={styles.detalleCard}>
            <h3 className={styles.detalleTitle}>
              <FontAwesomeIcon icon={faClock} /> Horarios de consulta
            </h3>
            {medico.horariosConsulta?.length ? (
              <ul className={styles.horarios}>
                {medico.horariosConsulta.map(h => (
                  <li key={h.dia}><span>{h.dia}</span><span>{h.horario}</span></li>
                ))}
              </ul>
            ) : (
              <p className={styles.detallePendiente}>
                Contáctanos para conocer los horarios de consulta de este especialista.
              </p>
            )}
          </div>

          <div className={styles.detalleCard}>
            <h3 className={styles.detalleTitle}>
              <FontAwesomeIcon icon={faMapMarkerAlt} /> Ubicación
            </h3>
            <p className={styles.detalleTexto}>{medico.hospital}</p>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${mapsQuery}`}
              target="_blank"
              rel="noreferrer"
              className={styles.mapLink}
            >
              Ver en Google Maps →
            </a>
          </div>
        </div>
      </section>

      <section className={styles.extra}>
        <div className={`container ${styles.extraGrid}`}>
          <ResenasSection resenas={resenas} />
          <div className={styles.faqCard}>
            <h3 className={styles.detalleTitle}>Preguntas frecuentes</h3>
            <Accordion items={FAQ_MEDICO} />
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
