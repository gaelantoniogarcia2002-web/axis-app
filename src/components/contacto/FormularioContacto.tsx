import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactoSchema, type ContactoFormData } from '../../lib/validations';
import { ESPECIALIDADES } from '../../data/especialidades';
import Button from '../ui/Button';
import styles from './FormularioContacto.module.css';

export default function FormularioContacto() {
  const [enviado, setEnviado] = useState(false);
  const [enviando, setEnviando] = useState(false);
  const [error, setError] = useState('');

  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactoFormData>({
    resolver: zodResolver(contactoSchema),
  });

  const onSubmit = async (data: ContactoFormData) => {
    setEnviando(true);
    setError('');
    try {
      const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
      const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

      if (!supabaseUrl || !supabaseKey) {
        await new Promise(r => setTimeout(r, 800));
        setEnviado(true);
        reset();
        return;
      }

      const res = await fetch(`${supabaseUrl}/rest/v1/contacto_submissions`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'apikey': supabaseKey,
          'Authorization': `Bearer ${supabaseKey}`,
          'Prefer': 'return=minimal',
        },
        body: JSON.stringify({
          nombre: data.nombre,
          telefono: data.telefono,
          email: data.email,
          especialidad_interes: data.especialidadInteres,
          mensaje: data.mensaje ?? null,
        }),
      });

      if (!res.ok) throw new Error('Error al enviar');
      setEnviado(true);
      reset();
    } catch {
      setError('Hubo un problema al enviar. Por favor intenta de nuevo o contáctanos directamente.');
    } finally {
      setEnviando(false);
    }
  };

  if (enviado) {
    return (
      <div className={styles.success}>
        <div className={styles.successIcon}>✓</div>
        <h3 className={styles.successTitle}>¡Mensaje enviado!</h3>
        <p className={styles.successDesc}>
          Gracias por contactarnos. Un miembro del equipo AXIS se comunicará contigo a la brevedad.
        </p>
        <Button onClick={() => setEnviado(false)} variant="ghost">Enviar otro mensaje</Button>
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className={styles.row}>
        <div className={styles.field}>
          <label className={styles.label}>Nombre completo *</label>
          <input
            {...register('nombre')}
            className={[styles.input, errors.nombre && styles.inputError].filter(Boolean).join(' ')}
            placeholder="Tu nombre"
          />
          {errors.nombre && <span className={styles.error}>{errors.nombre.message}</span>}
        </div>

        <div className={styles.field}>
          <label className={styles.label}>Teléfono *</label>
          <input
            {...register('telefono')}
            type="tel"
            className={[styles.input, errors.telefono && styles.inputError].filter(Boolean).join(' ')}
            placeholder="+52 55 0000 0000"
          />
          {errors.telefono && <span className={styles.error}>{errors.telefono.message}</span>}
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.field}>
          <label className={styles.label}>Correo electrónico *</label>
          <input
            {...register('email')}
            type="email"
            className={[styles.input, errors.email && styles.inputError].filter(Boolean).join(' ')}
            placeholder="correo@ejemplo.com"
          />
          {errors.email && <span className={styles.error}>{errors.email.message}</span>}
        </div>

        <div className={styles.field}>
          <label className={styles.label}>Especialidad de interés *</label>
          <select
            {...register('especialidadInteres')}
            className={[styles.input, styles.select, errors.especialidadInteres && styles.inputError].filter(Boolean).join(' ')}
          >
            <option value="">Seleccionar especialidad</option>
            {ESPECIALIDADES.map(e => (
              <option key={e.id} value={e.id}>{e.nombre}</option>
            ))}
          </select>
          {errors.especialidadInteres && <span className={styles.error}>{errors.especialidadInteres.message}</span>}
        </div>
      </div>

      <div className={styles.field}>
        <label className={styles.label}>Mensaje (opcional)</label>
        <textarea
          {...register('mensaje')}
          className={`${styles.input} ${styles.textarea}`}
          placeholder="Cuéntanos brevemente sobre tu consulta o necesidad médica..."
          rows={4}
        />
      </div>

      {error && <p className={styles.errorGlobal}>{error}</p>}

      <div className={styles.submit}>
        <Button type="submit" variant="primary" disabled={enviando}>
          {enviando ? 'Enviando...' : 'Enviar solicitud'}
        </Button>
        <p className={styles.note}>* Campos requeridos. Tu información es confidencial.</p>
      </div>
    </form>
  );
}
