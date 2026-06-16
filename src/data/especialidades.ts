import type { Especialidad } from '../types';

export const CAPITULOS = {
  cardiometabolico: {
    label: 'Cardiometabólico y Vital',
    descripcion: 'El núcleo clínico de la red: especialistas que cuidan el corazón, la circulación, el metabolismo y la función renal.',
    icono: 'heart-pulse',
  },
  cirugia: {
    label: 'Cirugía con Enfoque de Resultados',
    descripcion: 'Procedimientos quirúrgicos de alta complejidad con protocolos actualizados y recuperación óptima.',
    icono: 'scalpel',
  },
  'oncologia-piel': {
    label: 'Oncología, Piel e Infectología',
    descripcion: 'Diagnóstico y tratamiento de neoplasias, enfermedades cutáneas y cuadros infecciosos complejos.',
    icono: 'ribbon',
  },
  'digestivo-metabolico': {
    label: 'Sistema Digestivo y Metabólico',
    descripcion: 'Especialistas en cronicidad, funcionalidad y calidad de vida del paciente metabólico y digestivo.',
    icono: 'stomach',
  },
  'mujer-pediatria': {
    label: 'Mujer, Neonatos y Pediatría Integral',
    descripcion: 'Atención integral a la mujer en todas sus etapas y cuidado especializado del recién nacido.',
    icono: 'person-pregnant',
  },
  'neuro-complementarias': {
    label: 'Neuro, Ortopedia y Especialidades Complementarias',
    descripcion: 'Columna, sistema nervioso, aparato locomotor y especialidades de soporte integral.',
    icono: 'brain',
  },
} as const;

export const ESPECIALIDADES: Especialidad[] = [
  // Cardiometabólico
  { id: 'angiologia', nombre: 'Angiología', capitulo: 'cardiometabolico', descripcion: 'Enfermedades vasculares periféricas y manejo de circulación.' },
  { id: 'cardiologia', nombre: 'Cardiología', capitulo: 'cardiometabolico', descripcion: 'Atención integral del paciente cardiovascular con enfoque en prevención y tratamiento.' },
  { id: 'medicina-critica', nombre: 'Medicina Crítica e Interna', capitulo: 'cardiometabolico', descripcion: 'Cobertura hospitalaria de alto nivel para pacientes complejos o en estado crítico.' },
  { id: 'nefrologia', nombre: 'Nefrología', capitulo: 'cardiometabolico', descripcion: 'Diagnóstico y manejo de enfermedades renales con enfoque preventivo y terapéutico.' },
  // Cirugía
  { id: 'cirugia-general', nombre: 'Cirugía General', capitulo: 'cirugia', descripcion: 'Procedimientos quirúrgicos con alta tasa de éxito y recuperación óptima.' },
  { id: 'cirugia-oncologica', nombre: 'Cirugía Oncológica', capitulo: 'cirugia', descripcion: 'Cirugía de precisión para tumores sólidos con protocolos actualizados.' },
  { id: 'cirugia-mama-gyo', nombre: 'Oncología Mamaria y Ginecológica', capitulo: 'cirugia', descripcion: 'Patología mamaria y oncología ginecológica con manejo multidisciplinario.' },
  // Oncología / Piel
  { id: 'cirugia-plastica', nombre: 'Cirugía Plástica', capitulo: 'oncologia-piel', descripcion: 'Reconstrucción postoncológica y procedimientos estéticos de alta demanda.' },
  { id: 'dermatologia', nombre: 'Dermatología', capitulo: 'oncologia-piel', descripcion: 'Diagnóstico y tratamiento de afecciones cutáneas complejas.' },
  { id: 'hematologia', nombre: 'Hematología', capitulo: 'oncologia-piel', descripcion: 'Manejo de enfermedades hematológicas benignas y malignas.' },
  { id: 'infectologia', nombre: 'Infectología', capitulo: 'oncologia-piel', descripcion: 'Control de infecciones complejas, resistencias y cuadros febriles.' },
  // Digestivo
  { id: 'gastroenterologia', nombre: 'Gastroenterología', capitulo: 'digestivo-metabolico', descripcion: 'Diagnóstico y tratamiento endoscópico y funcional del aparato digestivo.' },
  { id: 'endocrinologia', nombre: 'Endocrinología', capitulo: 'digestivo-metabolico', descripcion: 'Manejo de diabetes, tiroides y alteraciones hormonales.' },
  { id: 'geriatria', nombre: 'Geriatría', capitulo: 'digestivo-metabolico', descripcion: 'Atención integral del adulto mayor con polifarmacia y fragilidad controlada.' },
  { id: 'nutricion', nombre: 'Nutrición', capitulo: 'digestivo-metabolico', descripcion: 'Planes nutricionales clínicos alineados a tratamientos y condiciones crónicas.' },
  // Mujer y Pediatría
  { id: 'ginecologia', nombre: 'Ginecología y Obstetricia', capitulo: 'mujer-pediatria', descripcion: 'Atención prenatal, parto, patología ginecológica y seguimiento integral de la mujer.' },
  { id: 'neonatologia', nombre: 'Pediatría y Neonatología', capitulo: 'mujer-pediatria', descripcion: 'Cuidado especializado del recién nacido y del paciente pediátrico.' },
  // Neuro y complementarias
  { id: 'neurocirugia', nombre: 'Neurocirugía', capitulo: 'neuro-complementarias', descripcion: 'Columna, cráneo y sistema nervioso periférico.' },
  { id: 'ortopedia', nombre: 'Ortopedia', capitulo: 'neuro-complementarias', descripcion: 'Atención quirúrgica y conservadora del aparato locomotor.' },
  { id: 'orl', nombre: 'Otorrinolaringología', capitulo: 'neuro-complementarias', descripcion: 'Oído, nariz y garganta, incluyendo trastornos de la voz y equilibrio.' },
  { id: 'reumatologia', nombre: 'Reumatología', capitulo: 'neuro-complementarias', descripcion: 'Enfermedades autoinmunes y del sistema musculoesquelético.' },
  { id: 'urologia', nombre: 'Urología', capitulo: 'neuro-complementarias', descripcion: 'Sistema urinario masculino y femenino, y sistema reproductor masculino.' },
];
