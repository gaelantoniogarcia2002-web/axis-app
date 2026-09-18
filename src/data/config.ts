export const SITE_CONFIG = {
  nombre: 'bädi',
  nombreCompleto: 'bädi Medical Group',
  tagline: 'SALUD QUE ACOMPAÑA',
  descripcion: 'Más de 27 especialistas trabajando juntos para brindar atención médica integral. Red cerrada de especialistas en Hospital Ángeles del Pedregal.',
  hospital: 'Hospital Ángeles del Pedregal',
  ciudad: 'Ciudad de México',
  keywords: ['red médica', 'especialistas', 'hospital angeles', 'VUMI', 'atención médica', 'México', 'bädi medical group'],
};

export const STATS = [
  { valor: '27+', etiqueta: 'Especialistas' },
  { valor: '15+', etiqueta: 'Especialidades' },
  { valor: '100%', etiqueta: 'Titulares' },
  { valor: '1', etiqueta: 'Red coordinada' },
] as const;

export const NAV_LINKS = [
  { label: 'Inicio', href: '/' },
  { label: 'Especialidades', href: '/especialidades' },
  { label: 'Médicos', href: '/medicos' },
  { label: 'Modelo bädi', href: '/modelo' },
  { label: 'Nosotros', href: '/nosotros' },
  { label: 'Agenda tu cita', href: '/agenda-cita' },
  { label: 'Contacto', href: '/contacto' },
] as const;
