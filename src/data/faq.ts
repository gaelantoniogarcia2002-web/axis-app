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

/** FAQ de la página de Contacto — enfocado en el proceso de canalización, no en un médico específico. */
export const FAQ_CONTACTO: PreguntaFrecuente[] = [
  {
    id: 'como-agendar',
    pregunta: '¿Cómo puedo agendar una cita?',
    respuesta: 'Puedes agendar en línea desde "Agenda tu cita", escribirnos por WhatsApp o llamar directamente a nuestra línea principal. Un miembro del equipo confirmará tu cita.',
  },
  {
    id: 'canalizacion',
    pregunta: '¿Cómo canalizan mi caso con el especialista correcto?',
    respuesta: 'Cuéntanos brevemente tu motivo de consulta (por WhatsApp, teléfono o el formulario) y nuestro equipo te conecta con el especialista de la red bädi más adecuado según tu caso.',
  },
  {
    id: 'documentos',
    pregunta: '¿Qué documentos necesito para mi primera consulta?',
    respuesta: 'Identificación oficial, tu carnet o póliza de seguro médico (si aplica) y, de tenerlos, estudios o expedientes médicos previos relacionados con tu motivo de consulta.',
  },
];
