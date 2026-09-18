import type { Resena } from '../types';

/**
 * Aún no hay reseñas reales de pacientes. Se deja el arreglo vacío a propósito
 * — no se deben inventar testimonios ni calificaciones falsas atribuidas a
 * pacientes reales o ficticios. Cuando existan reseñas verificadas, agregarlas
 * aquí con el mismo shape.
 */
export const RESENAS: Resena[] = [];

export function getResenasPorMedico(medicoId: string): Resena[] {
  return RESENAS.filter(r => r.medicoId === medicoId);
}
