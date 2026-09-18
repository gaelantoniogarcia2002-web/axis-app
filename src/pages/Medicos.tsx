import { useState, useMemo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserGroup, faHospital } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { MEDICOS } from '../data/medicos';
import { SITE_CONFIG } from '../data/config';
import MedicoCard from '../components/medicos/MedicoCard';
import FiltrosMedicos from '../components/medicos/FiltrosMedicos';
import Button from '../components/ui/Button';
import styles from './Medicos.module.css';

export default function Medicos() {
  const [busqueda, setBusqueda] = useState('');
  const [especialidad, setEspecialidad] = useState('');
  const [capitulo, setCapitulo] = useState('');

  const medicosFiltrados = useMemo(() => {
    return MEDICOS.filter(m => {
      const matchNombre = !busqueda || m.nombre.toLowerCase().includes(busqueda.toLowerCase());
      const matchEsp = !especialidad || m.especialidad === especialidad;
      const matchCap = !capitulo || m.capitulo === capitulo;
      return matchNombre && matchEsp && matchCap;
    });
  }, [busqueda, especialidad, capitulo]);

  return (
    <main>
      <section className={styles.hero}>
        <div className={`container ${styles.heroInner}`}>
          <div>
            <p className={styles.eyebrow}>Red bädi</p>
            <h1 className={styles.title}>Especialistas</h1>
            <p className={styles.subtitle}>
              Conoce a nuestro equipo de médicos especialistas de alto nivel, comprometidos con tu salud y bienestar.
            </p>
          </div>
          <div className={styles.heroStats}>
            <div className={styles.heroStat}>
              <FontAwesomeIcon icon={faUserGroup} className={styles.heroStatIcon} />
              <div>
                <span className={styles.heroStatValor}>{MEDICOS.length}</span>
                <span className={styles.heroStatLabel}>especialistas de alto nivel</span>
              </div>
            </div>
            <div className={styles.heroStat}>
              <FontAwesomeIcon icon={faHospital} className={styles.heroStatIcon} />
              <div>
                <span className={styles.heroStatValor}>{SITE_CONFIG.hospital}</span>
                <span className={styles.heroStatLabel}>Nuestro hospital sede</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.content}>
        <div className="container">
          <FiltrosMedicos
            busqueda={busqueda}
            onBusqueda={setBusqueda}
            especialidadFiltro={especialidad}
            onEspecialidad={setEspecialidad}
            capituloFiltro={capitulo}
            onCapitulo={setCapitulo}
          />

          {medicosFiltrados.length === 0 ? (
            <div className={styles.empty}>
              <p>No se encontraron médicos con los filtros seleccionados.</p>
            </div>
          ) : (
            <>
              <p className={styles.count}>{medicosFiltrados.length} especialista{medicosFiltrados.length !== 1 ? 's' : ''}</p>
              <div className={styles.grid}>
                {medicosFiltrados.map(m => (
                  <MedicoCard key={m.id} medico={m} />
                ))}
              </div>
            </>
          )}

          <div className={styles.whatsappBanner}>
            <div>
              <h3 className={styles.whatsappTitle}>¿Prefieres agendar por WhatsApp?</h3>
              <p className={styles.whatsappDesc}>Escríbenos y uno de nuestros asesores te ayudará a encontrar al especialista ideal para ti.</p>
            </div>
            <Button href="https://wa.me/525555555555" variant="whatsapp">
              <FontAwesomeIcon icon={faWhatsapp} /> Escríbenos por WhatsApp
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
