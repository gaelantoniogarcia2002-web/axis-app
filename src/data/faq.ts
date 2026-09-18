import type { PreguntaFrecuente } from '../types';

/**
 * FAQ genérico de la práctica médica (no son afirmaciones específicas sobre un
 * médico en particular), seguro de mostrar sin datos adicionales del cliente.
 */
export const FAQ_MEDICO: PreguntaFrecuente[] = [
  {
    id: 'agendar',
    pregunta: '¿Cómo agendo una cita con este especialista?',
    respuesta: 'Puedes agendar tu cita dando clic en el botón "Agendar consulta" de este perfil, escribiéndonos por WhatsApp o llamando directamente a bädi Medical Group.',
  },
  {
    id: 'primera-consulta',
    pregunta: '¿Qué debo llevar a mi primera consulta?',
    respuesta: 'Identificación oficial, tu carnet o póliza de seguro médico (si aplica) y, de tenerlos, estudios o expedientes médicos previos relacionados con el motivo de tu consulta.',
  },
  {
    id: 'aseguradoras',
    pregunta: '¿Aceptan aseguradoras?',
    respuesta: 'Trabajamos con distintas aseguradoras de primer nivel, incluyendo VUMI Group. Contáctanos para confirmar la cobertura específica de tu póliza antes de tu cita.',
  },
  {
    id: 'reprogramar',
    pregunta: '¿Puedo reprogramar o cancelar mi cita?',
    respuesta: 'Sí. Escríbenos por WhatsApp o llama a bädi Medical Group con anticipación para reprogramar o cancelar tu cita sin costo.',
  },
];
