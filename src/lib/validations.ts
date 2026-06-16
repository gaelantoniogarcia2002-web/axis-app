import { z } from 'zod';

export const contactoSchema = z.object({
  nombre: z.string().min(2, 'El nombre es requerido'),
  telefono: z.string().min(10, 'Ingresa un número válido').regex(/^[\d\s\+\-\(\)]{10,15}$/, 'Formato de teléfono inválido'),
  email: z.string().email('Correo electrónico inválido'),
  especialidadInteres: z.string().min(1, 'Selecciona una especialidad'),
  mensaje: z.string().optional(),
});

export type ContactoFormData = z.infer<typeof contactoSchema>;
