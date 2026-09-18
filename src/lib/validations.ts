import { z } from 'zod';

export const contactoSchema = z.object({
  nombre: z.string().min(2, 'El nombre es requerido'),
  telefono: z.string().min(10, 'Ingresa un número válido').regex(/^[\d\s\+\-\(\)]{10,15}$/, 'Formato de teléfono inválido'),
  email: z.string().email('Correo electrónico inválido'),
  especialidadInteres: z.string().min(1, 'Selecciona una especialidad'),
  mensaje: z.string().optional(),
});

export type ContactoFormData = z.infer<typeof contactoSchema>;

export const agendaCitaSchema = z.object({
  especialidad: z.string().min(1, 'Selecciona una especialidad'),
  medicoId: z.string().min(1, 'Selecciona un médico'),
  fecha: z.string().min(1, 'Selecciona una fecha'),
  hora: z.string().min(1, 'Selecciona una hora'),
  modalidad: z.enum(['presencial', 'virtual']),
  nombrePaciente: z.string().min(2, 'El nombre es requerido'),
  telefono: z.string().min(10, 'Ingresa un número válido').regex(/^[\d\s\+\-\(\)]{10,15}$/, 'Formato de teléfono inválido'),
  email: z.string().email('Correo electrónico inválido'),
  aseguradora: z.string().optional(),
  numPoliza: z.string().optional(),
  motivo: z.string().max(500, 'Máximo 500 caracteres').optional(),
});

export type AgendaCitaFormData = z.infer<typeof agendaCitaSchema>;
