import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays, faClipboardCheck, faHandshakeAngle, faCheck } from '@fortawesome/free-solid-svg-icons';
import styles from './Stepper.module.css';

const PASOS = [
  { num: 1, icon: faCalendarDays, titulo: 'Selecciona', desc: 'Elige especialidad, médico, fecha y hora' },
  { num: 2, icon: faClipboardCheck, titulo: 'Confirma', desc: 'Verifica tus datos y confirma tu cita' },
  { num: 3, icon: faHandshakeAngle, titulo: 'Asiste', desc: 'Te esperamos el día de tu consulta' },
];

interface StepperProps {
  pasoActual: number;
}

export default function Stepper({ pasoActual }: StepperProps) {
  return (
    <div className={styles.stepper}>
      {PASOS.map((paso, i) => {
        const completado = paso.num < pasoActual;
        const activo = paso.num === pasoActual;
        return (
          <div key={paso.num} className={styles.pasoWrap}>
            {i > 0 && <span className={[styles.linea, (completado || activo) && styles.lineaActiva].filter(Boolean).join(' ')} />}
            <div className={styles.paso}>
              <span className={[styles.circulo, activo && styles.circuloActivo, completado && styles.circuloCompletado].filter(Boolean).join(' ')}>
                <FontAwesomeIcon icon={completado ? faCheck : paso.icon} />
              </span>
              <div>
                <p className={styles.pasoTitulo}>{paso.num}. {paso.titulo}</p>
                <p className={styles.pasoDesc}>{paso.desc}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
