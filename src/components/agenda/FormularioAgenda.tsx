import { useState, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faCalendarCheck } from '@fortawesome/free-solid-svg-icons';
import { agendaCitaSchema, type AgendaCitaFormData } from '../../lib/validations';
import { ESPECIALIDADES } from '../../data/especialidades';
import { MEDICOS } from '../../data/medicos';
import { SITE_CONFIG } from '../../data/config';
import Stepper from './Stepper';
import Button from '../ui/Button';
import styles from './FormularioAgenda.module.css';

export default function FormularioAgenda() {
  const [paso, setPaso] = useState(1);
  const [enviando, setEnviando] = useState(false);
  const [error, setError] = useState('');
  const [datosConfirmados, setDatosConfirmados] = useState<AgendaCitaFormData | null>(null);

  const { register, handleSubmit, watch, formState: { errors }, getValues } = useForm<AgendaCitaFormData>({
    resolver: zodResolver(agendaCitaSchema),
    defaultValues: { modalidad: 'presencial' },
  });

  const especialidadSel = watch('especialidad');
  const motivo = watch('motivo') ?? '';

  const medicosFiltrados = useMemo(
    () => MEDICOS.filter(m => !especialidadSel || m.especialidad === especialidadSel),
    [especialidadSel],
  );

  const onSubmitPaso1 = () => setPaso(2);

  const onConfirmar = async () => {
    const data = getValues();
    setEnviando(true);
    setError('');
    try {
      const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
      const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

      if (!supabaseUrl || !supabaseKey) {
        await new Promise(r => setTimeout(r, 800));
        setDatosConfirmados(data);
        setPaso(3);
        return;
      }

      const res = await fetch(`${supabaseUrl}/rest/v1/agenda_citas`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'apikey': supabaseKey,
          'Authorization': `Bearer ${supabaseKey}`,
          'Prefer': 'return=minimal',
        },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error('Error al agendar');
      setDatosConfirmados(data);
      setPaso(3);
    } catch {
      setError('Hubo un problema al confirmar tu cita. Por favor intenta de nuevo o escríbenos por WhatsApp.');
    } finally {
      setEnviando(false);
    }
  };

  const medicoConfirmado = datosConfirmados && MEDICOS.find(m => m.id === datosConfirmados.medicoId);
  const especialidadConfirmada = datosConfirmados && ESPECIALIDADES.find(e => e.id === datosConfirmados.especialidad);

  return (
    <div className={styles.wrap}>
      <Stepper pasoActual={paso} />

      {paso === 1 && (
        <form className={styles.form} onSubmit={handleSubmit(onSubmitPaso1)} noValidate>
          <h2 className={styles.formTitle}>Completa los siguientes datos para agendar tu cita</h2>

          <div className={styles.row}>
            <div className={styles.field}>
              <label className={styles.label}>Especialidad</label>
              <select {...register('especialidad')} className={[styles.input, errors.especialidad && styles.inputError].filter(Boolean).join(' ')}>
                <option value="">Selecciona una especialidad</option>
                {ESPECIALIDADES.map(e => <option key={e.id} value={e.id}>{e.nombre}</option>)}
              </select>
              {errors.especialidad && <span className={styles.error}>{errors.especialidad.message}</span>}
            </div>

            <div className={styles.field}>
              <label className={styles.label}>Médico</label>
              <select {...register('medicoId')} className={[styles.input, errors.medicoId && styles.inputError].filter(Boolean).join(' ')}>
                <option value="">Selecciona un médico</option>
                {medicosFiltrados.map(m => <option key={m.id} value={m.id}>{m.nombre}</option>)}
              </select>
              {errors.medicoId && <span className={styles.error}>{errors.medicoId.message}</span>}
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.field}>
              <label className={styles.label}>Fecha</label>
              <input
                {...register('fecha')}
                type="date"
                min={new Date().toISOString().split('T')[0]}
                className={[styles.input, errors.fecha && styles.inputError].filter(Boolean).join(' ')}
              />
              {errors.fecha && <span className={styles.error}>{errors.fecha.message}</span>}
            </div>

            <div className={styles.field}>
              <label className={styles.label}>Hora</label>
              <input
                {...register('hora')}
                type="time"
                className={[styles.input, errors.hora && styles.inputError].filter(Boolean).join(' ')}
              />
              {errors.hora && <span className={styles.error}>{errors.hora.message}</span>}
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.field}>
              <label className={styles.label}>Modalidad</label>
              <select {...register('modalidad')} className={styles.input}>
                <option value="presencial">Presencial</option>
                <option value="virtual">Virtual</option>
              </select>
            </div>

            <div className={styles.field}>
              <label className={styles.label}>Hospital</label>
              <input value={SITE_CONFIG.hospital} disabled className={styles.input} />
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.field}>
              <label className={styles.label}>Nombre del paciente</label>
              <input {...register('nombrePaciente')} placeholder="Ingresa el nombre completo" className={[styles.input, errors.nombrePaciente && styles.inputError].filter(Boolean).join(' ')} />
              {errors.nombrePaciente && <span className={styles.error}>{errors.nombrePaciente.message}</span>}
            </div>

            <div className={styles.field}>
              <label className={styles.label}>Teléfono</label>
              <input {...register('telefono')} type="tel" placeholder="55 1234 5678" className={[styles.input, errors.telefono && styles.inputError].filter(Boolean).join(' ')} />
              {errors.telefono && <span className={styles.error}>{errors.telefono.message}</span>}
            </div>
          </div>

          <div className={styles.field}>
            <label className={styles.label}>Correo electrónico</label>
            <input {...register('email')} type="email" placeholder="correo@ejemplo.com" className={[styles.input, errors.email && styles.inputError].filter(Boolean).join(' ')} />
            {errors.email && <span className={styles.error}>{errors.email.message}</span>}
          </div>

          <div className={styles.row}>
            <div className={styles.field}>
              <label className={styles.label}>Aseguradora (opcional)</label>
              <input {...register('aseguradora')} placeholder="Selecciona tu aseguradora" className={styles.input} />
            </div>

            <div className={styles.field}>
              <label className={styles.label}>Núm. de póliza (opcional)</label>
              <input {...register('numPoliza')} placeholder="Ingresa tu número de póliza" className={styles.input} />
            </div>
          </div>

          <div className={styles.field}>
            <label className={styles.label}>Motivo de consulta</label>
            <textarea
              {...register('motivo')}
              rows={3}
              maxLength={500}
              placeholder="Cuéntanos brevemente el motivo de tu consulta"
              className={`${styles.input} ${styles.textarea}`}
            />
            <span className={styles.charCount}>{motivo.length}/500</span>
          </div>

          <p className={styles.privacidad}>Tu información está protegida y se utiliza únicamente para gestionar tu cita.</p>

          <Button type="submit" variant="primary">
            <FontAwesomeIcon icon={faCalendarCheck} /> Agenda tu cita
          </Button>
        </form>
      )}

      {paso === 2 && (
        <div className={styles.confirmCard}>
          <h2 className={styles.formTitle}>Verifica tus datos y confirma tu cita</h2>
          <dl className={styles.resumen}>
            <div><dt>Especialidad</dt><dd>{ESPECIALIDADES.find(e => e.id === getValues('especialidad'))?.nombre}</dd></div>
            <div><dt>Médico</dt><dd>{MEDICOS.find(m => m.id === getValues('medicoId'))?.nombre}</dd></div>
            <div><dt>Fecha</dt><dd>{getValues('fecha')}</dd></div>
            <div><dt>Hora</dt><dd>{getValues('hora')}</dd></div>
            <div><dt>Modalidad</dt><dd>{getValues('modalidad') === 'presencial' ? 'Presencial' : 'Virtual'}</dd></div>
            <div><dt>Paciente</dt><dd>{getValues('nombrePaciente')}</dd></div>
            <div><dt>Teléfono</dt><dd>{getValues('telefono')}</dd></div>
            <div><dt>Correo</dt><dd>{getValues('email')}</dd></div>
            {getValues('aseguradora') && <div><dt>Aseguradora</dt><dd>{getValues('aseguradora')}</dd></div>}
            {getValues('motivo') && <div><dt>Motivo</dt><dd>{getValues('motivo')}</dd></div>}
          </dl>

          {error && <p className={styles.errorGlobal}>{error}</p>}

          <div className={styles.confirmActions}>
            <Button variant="ghost" onClick={() => setPaso(1)}>Editar datos</Button>
            <Button variant="primary" onClick={onConfirmar} disabled={enviando}>
              {enviando ? 'Confirmando...' : 'Confirmar cita'}
            </Button>
          </div>
        </div>
      )}

      {paso === 3 && datosConfirmados && (
        <div className={styles.successCard}>
          <FontAwesomeIcon icon={faCircleCheck} className={styles.successIcon} />
          <h2 className={styles.successTitle}>¡Tu cita quedó agendada!</h2>
          <p className={styles.successDesc}>
            Te esperamos el <strong>{datosConfirmados.fecha}</strong> a las <strong>{datosConfirmados.hora}</strong> con{' '}
            <strong>{medicoConfirmado?.nombre}</strong> ({especialidadConfirmada?.nombre}) en {SITE_CONFIG.hospital}.
          </p>
          <p className={styles.successNota}>
            Nota: esta demo aún no está conectada a un sistema de citas real — un miembro del equipo bädi confirmará
            tu cita por teléfono o correo. Si necesitas algo urgente, escríbenos por WhatsApp.
          </p>
        </div>
      )}
    </div>
  );
}
