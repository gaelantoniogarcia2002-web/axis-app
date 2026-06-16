export type Capitulo =
  | 'cardiometabolico'
  | 'cirugia'
  | 'oncologia-piel'
  | 'digestivo-metabolico'
  | 'mujer-pediatria'
  | 'neuro-complementarias';

export interface Especialidad {
  id: string;
  nombre: string;
  capitulo: Capitulo;
  descripcion: string;
  icono?: string;
}

export interface Medico {
  id: string;
  slug: string;
  nombre: string;
  especialidad: string;
  capitulo: Capitulo;
  descripcion: string;
  hospital: string;
  foto?: string;
  cedula?: string;
  curriculum?: string;
  procedimientosDestacados?: string[];
  horarios?: string;
  contacto?: {
    telefono?: string;
    email?: string;
    redes?: Record<string, string>;
  };
}

export interface FormularioContactoData {
  nombre: string;
  telefono: string;
  email: string;
  especialidadInteres: string;
  mensaje?: string;
}
