import type { Resena } from '../types';
import { MEDICOS } from './medicos';

/**
 * Texto de relleno (lorem ipsum) SOLO para visualizar cómo se ve el diseño con
 * reseñas. No son reseñas reales de pacientes — el autor se deja genérico
 * ("Paciente de ejemplo") para que quede claro que es contenido de muestra.
 * Reemplazar por reseñas reales y verificadas cuando existan.
 */
export const RESENAS: Resena[] = MEDICOS.flatMap((medico, i) => [
  {
    id: `${medico.id}-r1`,
    medicoId: medico.id,
    autor: 'Paciente de ejemplo A',
    rating: 5,
    texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    fecha: '2026-01-01',
  },
  {
    id: `${medico.id}-r2`,
    medicoId: medico.id,
    autor: 'Paciente de ejemplo B',
    rating: i % 2 === 0 ? 5 : 4,
    texto: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    fecha: '2026-01-02',
  },
]);

export function getResenasPorMedico(medicoId: string): Resena[] {
  return RESENAS.filter(r => r.medicoId === medicoId);
}
