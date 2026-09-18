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
  cedulaEspecialidad?: string;
  curriculum?: string;
  formacion?: string[];
  experienciaAnios?: number;
  pacientesAtendidos?: string;
  procedimientosDestacados?: string[];
  horarios?: string;
  horariosConsulta?: { dia: string; horario: string }[];
  contacto?: {
    telefono?: string;
    email?: string;
    redes?: Record<string, string>;
  };
}

export interface Resena {
  id: string;
  medicoId: string;
  autor: string;
  rating: 1 | 2 | 3 | 4 | 5;
  texto: string;
  fecha: string;
}

export interface PreguntaFrecuente {
  id: string;
  pregunta: string;
  respuesta: string;
}

export interface FormularioContactoData {
  nombre: string;
  telefono: string;
  email: string;
  especialidadInteres: string;
  mensaje?: string;
}
