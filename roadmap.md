> ⚠️ **Documento histórico.** Este roadmap corresponde a la propuesta original bajo el
> nombre "AXIS" y a un stack basado en Next.js que no se implementó (el sitio real usa
> React + Vite). El proyecto se rebrandeó a **bädi Medical Group**. Para el estado actual,
> los assets de marca y el checklist de implementación vigente, ver
> [`PLAN-DE-TRABAJO.md`](./PLAN-DE-TRABAJO.md). Se conserva este archivo como referencia
> histórica de la visión de producto original.

# AXIS — Roadmap v0.1
> Red Cerrada de Especialistas Médicos de Alta Prescripción  
> Sitio web institucional · propuesta exclusiva para VUMI Group

---

## 1. Visión del proyecto

AXIS es una red médica cerrada de alta especialidad (27+ médicos, 15+ especialidades) con sede en Hospital Ángeles del Pedregal, Ciudad de México. El sitio web debe transmitir **prestigio, confianza, exclusividad y respaldo clínico**, dirigido principalmente a aseguradoras (VUMI Group) y pacientes referidos.

---

## 2. Stack técnico recomendado

| Capa | Tecnología | Justificación |
|------|-----------|---------------|
| Framework | **Next.js 14** (App Router) | SSR/SSG para SEO médico, rutas dinámicas para perfiles de doctores |
| Lenguaje | **TypeScript** | Tipado estricto para datos de médicos y especialidades |
| Estilos | **CSS Modules** | Estilos encapsulados por componente, variables CSS globales para tokens AXIS, sin dependencia de utilidades externas |
| Animaciones | **Framer Motion** | Transiciones fluidas y de alta calidad acordes al estilo premium |
| Formularios | **React Hook Form + Zod** | Validación robusta del formulario de contacto/citas |
| Iconos | **Font Awesome para React (`@fortawesome/react-fontawesome`)** | Librería completa, íconos médicos disponibles en el set `free-solid` y `pro` |
| Fuentes | **next/font** con Playfair Display + Inter | Carga optimizada sin layout shift |
| Backend | **Supabase** | Base de datos PostgreSQL, Auth, Storage para fotos, y Realtime si se necesita |
| Email | **Supabase Edge Functions + Resend** | Envío de emails desde el backend sin exponer claves en el cliente |
| Linting | **ESLint + Prettier** | Consistencia de código desde el inicio |
| Deploy | **Vercel** | Integración nativa con Next.js; variables de entorno de Supabase en el dashboard |

---

## 3. Estructura de carpetas

```
axis-web/
├── app/
│   ├── layout.tsx              # Layout raíz con fuentes y metadatos globales
│   ├── page.tsx                # HOME
│   ├── nosotros/
│   │   └── page.tsx
│   ├── especialidades/
│   │   └── page.tsx
│   ├── medicos/
│   │   ├── page.tsx            # Directorio con filtros
│   │   └── [slug]/
│   │       └── page.tsx        # Perfil individual de médico
│   ├── modelo/
│   │   └── page.tsx
│   ├── contacto/
│   │   └── page.tsx
│   └── api/
│       └── contacto/
│           └── route.ts        # API Route para formulario
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── Navigation.tsx
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Badge.tsx
│   │   └── SectionTitle.tsx
│   ├── home/
│   │   ├── Hero.tsx
│   │   ├── QueSesAxis.tsx
│   │   ├── Beneficios.tsx
│   │   ├── EspecialidadesDestacadas.tsx
│   │   ├── Estadisticas.tsx
│   │   └── CTAContacto.tsx
│   ├── especialidades/
│   │   ├── EspecialidadCard.tsx
│   │   └── EspecialidadGrid.tsx
│   ├── medicos/
│   │   ├── MedicoCard.tsx
│   │   ├── MedicoGrid.tsx
│   │   └── FiltrosMedicos.tsx
│   └── contacto/
│       └── FormularioContacto.tsx
├── data/
│   ├── medicos.ts              # Array tipado con todos los médicos
│   ├── especialidades.ts       # Definición de especialidades y capítulos
│   └── config.ts               # Constantes (colores, textos globales, metadatos)
├── lib/
│   ├── utils.ts                # Helpers (slugify, cn, etc.)
│   └── validations.ts          # Schemas Zod para formularios
├── types/
│   └── index.ts                # Interfaces TypeScript del dominio
├── public/
│   ├── images/
│   │   ├── medicos/            # Fotos profesionales (placeholder en v0.1)
│   │   └── general/            # Logo, hero, etc.
│   └── fonts/                  # Si se prefiere self-host
├── styles/
│   └── globals.css             # Variables CSS + reset
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## 4. Tipos TypeScript del dominio

```typescript
// types/index.ts

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
  especialidad: string;               // ID de Especialidad
  capitulo: Capitulo;
  descripcion: string;                // Enfoque médico breve
  hospital: string;
  foto?: string;                      // ruta en /public/images/medicos/
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
```

---

## 5. Datos estáticos — médicos y especialidades

### 5.1 Capítulos y especialidades (`data/especialidades.ts`)

```typescript
export const CAPITULOS = {
  cardiometabolico: {
    label: 'Cardiometabólico y Vital',
    descripcion: 'El núcleo clínico de la red: especialistas que cuidan el corazón, la circulación, el metabolismo y la función renal.',
  },
  cirugia: {
    label: 'Cirugía con Enfoque de Resultados',
    descripcion: 'Procedimientos quirúrgicos de alta complejidad con protocolos actualizados y recuperación óptima.',
  },
  'oncologia-piel': {
    label: 'Oncología, Piel e Infectología',
    descripcion: 'Diagnóstico y tratamiento de neoplasias, enfermedades cutáneas y cuadros infecciosos complejos.',
  },
  'digestivo-metabolico': {
    label: 'Sistema Digestivo y Metabólico',
    descripcion: 'Especialistas en cronicidad, funcionalidad y calidad de vida del paciente metabólico y digestivo.',
  },
  'mujer-pediatria': {
    label: 'Mujer, Neonatos y Pediatría Integral',
    descripcion: 'Atención integral a la mujer en todas sus etapas y cuidado especializado del recién nacido.',
  },
  'neuro-complementarias': {
    label: 'Neuro, Ortopedia y Especialidades Complementarias',
    descripcion: 'Columna, sistema nervioso, aparato locomotor y especialidades de soporte integral.',
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
  // Mujer y pediatría
  { id: 'ginecologia', nombre: 'Ginecología y Obstetricia', capitulo: 'mujer-pediatria', descripcion: 'Atención prenatal, parto, patología ginecológica y seguimiento integral de la mujer.' },
  { id: 'neonatologia', nombre: 'Pediatría y Neonatología', capitulo: 'mujer-pediatria', descripcion: 'Cuidado especializado del recién nacido y del paciente pediátrico.' },
  // Neuro y complementarias
  { id: 'neurocirugia', nombre: 'Neurocirugía', capitulo: 'neuro-complementarias', descripcion: 'Columna, cráneo y sistema nervioso periférico.' },
  { id: 'ortopedia', nombre: 'Ortopedia', capitulo: 'neuro-complementarias', descripcion: 'Atención quirúrgica y conservadora del aparato locomotor.' },
  { id: 'orl', nombre: 'Otorrinolaringología', capitulo: 'neuro-complementarias', descripcion: 'Oído, nariz y garganta, incluyendo trastornos de la voz y equilibrio.' },
  { id: 'reumatologia', nombre: 'Reumatología', capitulo: 'neuro-complementarias', descripcion: 'Enfermedades autoinmunes y del sistema musculoesquelético.' },
  { id: 'urologia', nombre: 'Urología', capitulo: 'neuro-complementarias', descripcion: 'Sistema urinario masculino y femenino, y sistema reproductor masculino.' },
];
```

### 5.2 Médicos (`data/medicos.ts`)

```typescript
export const MEDICOS: Medico[] = [
  // --- Cardiometabólico ---
  { id: 'm01', slug: 'victor-navarro-ceja', nombre: 'Víctor Hugo Navarro Ceja', especialidad: 'angiologia', capitulo: 'cardiometabolico', descripcion: 'Especialista en enfermedades vasculares periféricas y manejo de circulación.', hospital: 'Hospital Ángeles del Pedregal' },
  { id: 'm02', slug: 'manuel-ruiz-goytortua', nombre: 'Manuel Ruiz Goytortúa', especialidad: 'cardiologia', capitulo: 'cardiometabolico', descripcion: 'Atención integral del paciente cardiovascular con enfoque en prevención y tratamiento.', hospital: 'Hospital Ángeles del Pedregal' },
  { id: 'm03', slug: 'arturo-ferrer', nombre: 'Arturo Ferrer', especialidad: 'medicina-critica', capitulo: 'cardiometabolico', descripcion: 'Cobertura hospitalaria de alto nivel para pacientes complejos o en estado crítico.', hospital: 'Hospital Ángeles del Pedregal' },
  { id: 'm04', slug: 'jorge-isaias', nombre: 'Jorge Isaías', especialidad: 'medicina-critica', capitulo: 'cardiometabolico', descripcion: 'Medicina crítica e interna con amplia experiencia en pacientes de alta complejidad.', hospital: 'Hospital Ángeles del Pedregal' },
  { id: 'm05', slug: 'itzel-martinez', nombre: 'Itzel Anahí Martínez', especialidad: 'nefrologia', capitulo: 'cardiometabolico', descripcion: 'Diagnóstico y manejo de enfermedades renales con enfoque preventivo y terapéutico.', hospital: 'Hospital Ángeles del Pedregal' },
  // --- Cirugía ---
  { id: 'm06', slug: 'jose-hernandez-amador', nombre: 'José Fernando Hernández Amador', especialidad: 'cirugia-general', capitulo: 'cirugia', descripcion: 'Procedimientos quirúrgicos con alta tasa de éxito y recuperación óptima.', hospital: 'Hospital Ángeles del Pedregal' },
  { id: 'm07', slug: 'jefferson-martinez-abonce', nombre: 'Jefferson Matt Martínez Abonce', especialidad: 'cirugia-general', capitulo: 'cirugia', descripcion: 'Cirugía general con enfoque en mínima invasión y recuperación acelerada.', hospital: 'Hospital Ángeles del Pedregal' },
  { id: 'm08', slug: 'jorge-monges-jones', nombre: 'Jorge Monges Jones', especialidad: 'cirugia-oncologica', capitulo: 'cirugia', descripcion: 'Cirugía oncológica de precisión para tumores sólidos con protocolos actualizados.', hospital: 'Hospital Ángeles del Pedregal' },
  { id: 'm09', slug: 'javier-gomez-pedroso', nombre: 'Javier Gómez Pedroso Rea', especialidad: 'cirugia-mama-gyo', capitulo: 'cirugia', descripcion: 'Especialista en patología mamaria y oncología ginecológica con manejo multidisciplinario.', hospital: 'Hospital Ángeles del Pedregal' },
  // --- Oncología / Piel ---
  { id: 'm10', slug: 'francisco-perez-penilla', nombre: 'Francisco Pérez Penilla', especialidad: 'cirugia-plastica', capitulo: 'oncologia-piel', descripcion: 'Reconstrucción postoncológica y procedimientos estéticos de alta demanda.', hospital: 'Hospital Ángeles del Pedregal' },
  { id: 'm11', slug: 'adriana-miranda-gomez', nombre: 'Adriana Miranda Gómez', especialidad: 'dermatologia', capitulo: 'oncologia-piel', descripcion: 'Diagnóstico y tratamiento de afecciones cutáneas complejas.', hospital: 'Hospital Ángeles del Pedregal' },
  { id: 'm12', slug: 'elia-apodaca', nombre: 'Elia Apodaca', especialidad: 'hematologia', capitulo: 'oncologia-piel', descripcion: 'Manejo de enfermedades hematológicas benignas y malignas.', hospital: 'Hospital Ángeles del Pedregal' },
  { id: 'm13', slug: 'daniel-seniscal', nombre: 'Daniel A. Seniscal A.', especialidad: 'infectologia', capitulo: 'oncologia-piel', descripcion: 'Control de infecciones complejas, resistencias y cuadros febriles de origen a estudio.', hospital: 'Hospital Ángeles del Pedregal' },
  // --- Digestivo / Metabólico ---
  { id: 'm14', slug: 'andres-de-hoyos', nombre: 'Andrés de Hoyos', especialidad: 'gastroenterologia', capitulo: 'digestivo-metabolico', descripcion: 'Diagnóstico y tratamiento endoscópico y funcional del aparato digestivo.', hospital: 'Hospital Ángeles del Pedregal' },
  { id: 'm15', slug: 'rodrigo-soto-solis', nombre: 'Rodrigo Soto-Solís', especialidad: 'gastroenterologia', capitulo: 'digestivo-metabolico', descripcion: 'Gastroenterología avanzada con enfoque en patología funcional y endoscopia terapéutica.', hospital: 'Hospital Ángeles del Pedregal' },
  { id: 'm16', slug: 'pedro-gomez-romero', nombre: 'Pedro Gómez Romero', especialidad: 'endocrinologia', capitulo: 'digestivo-metabolico', descripcion: 'Manejo de diabetes, tiroides y alteraciones hormonales con enfoque preventivo.', hospital: 'Hospital Ángeles del Pedregal' },
  { id: 'm17', slug: 'fernanda-flores-porras', nombre: 'Fernanda Flores Porras', especialidad: 'geriatria', capitulo: 'digestivo-metabolico', descripcion: 'Atención integral del adulto mayor con polifarmacia y fragilidad controlada.', hospital: 'Hospital Ángeles del Pedregal' },
  { id: 'm18', slug: 'xorge-miron', nombre: 'Xorge Mirón', especialidad: 'nutricion', capitulo: 'digestivo-metabolico', descripcion: 'Planes nutricionales clínicos alineados a tratamientos y condiciones crónicas.', hospital: 'Hospital Ángeles del Pedregal' },
  // --- Mujer y Pediatría ---
  { id: 'm19', slug: 'ignacio-lara-barragan', nombre: 'Ignacio Alejandro Lara Barragán Bernal', especialidad: 'ginecologia', capitulo: 'mujer-pediatria', descripcion: 'Atención prenatal, parto, patología ginecológica y seguimiento integral de la mujer.', hospital: 'Hospital Ángeles del Pedregal' },
  { id: 'm20', slug: 'diana-lara-barragan', nombre: 'Diana Elizabeth Lara Barragán Singh', especialidad: 'ginecologia', capitulo: 'mujer-pediatria', descripcion: 'Ginecología y obstetricia con enfoque en salud integral femenina.', hospital: 'Hospital Ángeles del Pedregal' },
  { id: 'm21', slug: 'jose-huerta-hentschel', nombre: 'José Manuel Huerta Hentschel', especialidad: 'ginecologia', capitulo: 'mujer-pediatria', descripcion: 'Obstetricia de alto riesgo y patología ginecológica avanzada.', hospital: 'Hospital Ángeles del Pedregal' },
  { id: 'm22', slug: 'eva-hernandez-archundia', nombre: 'Eva Hernández Archundia', especialidad: 'neonatologia', capitulo: 'mujer-pediatria', descripcion: 'Cuidado especializado del recién nacido y del paciente pediátrico en sus primeras etapas de vida.', hospital: 'Hospital Ángeles del Pedregal' },
  // --- Neuro y Complementarias ---
  { id: 'm23', slug: 'jose-antonio-soriano', nombre: 'José Antonio Soriano', especialidad: 'neurocirugia', capitulo: 'neuro-complementarias', descripcion: 'Neurocirugía de columna, cráneo y sistema nervioso periférico.', hospital: 'Hospital Ángeles del Pedregal' },
  { id: 'm24', slug: 'sergio-soriano', nombre: 'Sergio Soriano', especialidad: 'neurocirugia', capitulo: 'neuro-complementarias', descripcion: 'Neurocirugía ortopédica con especialidad en patología de columna.', hospital: 'Hospital Ángeles del Pedregal' },
  { id: 'm25', slug: 'hector-soriano', nombre: 'Héctor Soriano', especialidad: 'ortopedia', capitulo: 'neuro-complementarias', descripcion: 'Ortopedia especializada en rodilla y cadera con enfoque quirúrgico y conservador.', hospital: 'Hospital Ángeles del Pedregal' },
  { id: 'm26', slug: 'milton-trujeque-arcos', nombre: 'Milton Trujeque Arcos', especialidad: 'ortopedia', capitulo: 'neuro-complementarias', descripcion: 'Trauma y cirugía de hombro con atención del aparato locomotor.', hospital: 'Hospital Ángeles del Pedregal' },
  { id: 'm27', slug: 'daniel-rodriguez-araiza', nombre: 'Daniel Rodríguez Araiza', especialidad: 'orl', capitulo: 'neuro-complementarias', descripcion: 'Diagnóstico y tratamiento de afecciones del oído, nariz y garganta, incluyendo voz y equilibrio.', hospital: 'Hospital Ángeles del Pedregal' },
  { id: 'm28', slug: 'karina-santana', nombre: 'Karina Santana', especialidad: 'reumatologia', capitulo: 'neuro-complementarias', descripcion: 'Manejo de enfermedades autoinmunes y del sistema musculoesquelético.', hospital: 'Hospital Ángeles del Pedregal' },
  { id: 'm29', slug: 'manuel-bustamante', nombre: 'Manuel Bustamante', especialidad: 'urologia', capitulo: 'neuro-complementarias', descripcion: 'Sistema urinario de hombres y mujeres, y sistema reproductor masculino.', hospital: 'Hospital Ángeles del Pedregal' },
];
```

---

## 6. Sistema de diseño — CSS Modules y variables globales

```css
/* styles/globals.css */
:root {
  /* Colores AXIS */
  --color-navy:       #102B46;
  --color-navy-80:    rgba(16, 43, 70, 0.8);
  --color-gold:       #C9A84C;
  --color-gold-light: #E8D5A3;
  --color-white:      #FFFFFF;
  --color-gray-50:    #F8F9FA;
  --color-gray-100:   #F1F3F5;
  --color-gray-200:   #E9ECEF;
  --color-gray-600:   #6C757D;
  --color-gray-900:   #212529;

  /* Tipografía */
  --font-serif: 'Playfair Display', Georgia, serif;
  --font-sans:  'Inter', 'Montserrat', system-ui, sans-serif;

  /* Espaciado base */
  --spacing-xs:  4px;
  --spacing-sm:  8px;
  --spacing-md:  16px;
  --spacing-lg:  24px;
  --spacing-xl:  40px;
  --spacing-2xl: 64px;
  --spacing-3xl: 96px;

  /* Radios */
  --radius-sm:   6px;
  --radius-card: 12px;
  --radius-full: 9999px;

  /* Sombras */
  --shadow-card:       0 2px 16px rgba(16, 43, 70, 0.08);
  --shadow-card-hover: 0 8px 32px rgba(16, 43, 70, 0.16);

  /* Transiciones */
  --transition-fast:   150ms ease;
  --transition-normal: 250ms ease;
  --transition-slow:   400ms ease;
}

/* Reset mínimo */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
body { font-family: var(--font-sans); color: var(--color-gray-900); background: var(--color-white); }
```

Cada componente tiene su propio `ComponentName.module.css` importado localmente:

```css
/* components/ui/Button.module.css */
.primary {
  background: var(--color-gold);
  color: var(--color-navy);
  font-family: var(--font-sans);
  font-weight: 600;
  padding: var(--spacing-sm) var(--spacing-lg);
  border-radius: var(--radius-full);
  border: none;
  cursor: pointer;
  transition: opacity var(--transition-fast);
}
.primary:hover { opacity: 0.88; }

.outline {
  background: transparent;
  color: var(--color-white);
  border: 2px solid var(--color-white);
  padding: var(--spacing-sm) var(--spacing-lg);
  border-radius: var(--radius-full);
  cursor: pointer;
  transition: background var(--transition-fast), color var(--transition-fast);
}
.outline:hover { background: var(--color-white); color: var(--color-navy); }
```

---

## 7. Páginas — especificaciones de componentes

### 7.1 HOME (`app/page.tsx`)

**Hero**
- Fondo: imagen clínica oscura con overlay `axis-navy/80`
- H1 con `font-serif`, blanco
- Subtexto `font-sans` gris claro
- Dos botones: primario (gold) + secundario (outline blanco)
- Animación de entrada con Framer Motion (`fadeInUp`)

**Estadísticas**
- Fila de 4 cards con número grande `font-serif text-5xl text-axis-gold` + descripción
- Datos: `27 Especialistas`, `15+ Especialidades`, `100% Titulares`, `1 Red coordinada`

**Especialidades destacadas**
- Grid 3 columnas (desktop), 1 (mobile)
- Máximo 6 cards con ícono + nombre + descripción corta

**CTA Contacto**
- Sección con fondo `axis-navy`, texto blanco
- Botón principal a `/contacto`

### 7.2 ESPECIALIDADES (`app/especialidades/page.tsx`)

- Tabs o acordeón por capítulo (los 6 definidos)
- Al seleccionar capítulo → muestra grid de `EspecialidadCard`
- Cada card: nombre especialidad + descripción + lista de médicos de esa especialidad (nombre con link a perfil)

### 7.3 MÉDICOS (`app/medicos/page.tsx`)

- Barra de búsqueda por nombre
- Filtros: `select` por especialidad y por capítulo
- Grid responsivo: 3 cols desktop, 2 tablet, 1 mobile
- `MedicoCard`: foto (placeholder si no hay) + nombre + especialidad + badge de capítulo + botón "Ver perfil"

### 7.4 PERFIL MÉDICO (`app/medicos/[slug]/page.tsx`)

- Generado estáticamente con `generateStaticParams` a partir del array `MEDICOS`
- Layout: foto grande + información personal a la derecha
- Secciones: Enfoque médico, Hospital, Procedimientos destacados, CTA "Agendar consulta"

### 7.5 MODELO AXIS (`app/modelo/page.tsx`)

- Timeline vertical de 3 pasos:
  1. **Mapeo** — Perfil y necesidades del paciente
  2. **Diseño** — Ruta clínica personalizada
  3. **Activación** — Coordinación con red AXIS
- Fondo alternado `axis-navy` / blanco para cada paso
- Ícono numérico dorado por paso

### 7.6 CONTACTO (`app/contacto/page.tsx`)

Campos con React Hook Form + validación Zod:
- `nombre` (string, requerido)
- `telefono` (string, requerido, pattern E.164 o MX)
- `email` (string, email válido)
- `especialidadInteres` (select con opciones de `ESPECIALIDADES`)
- `mensaje` (textarea, opcional)

API Route `/api/contacto/route.ts` → envía email con Resend

---

## 8. SEO y metadatos

```typescript
// app/layout.tsx
export const metadata = {
  title: { default: 'AXIS — Red Médica de Alta Especialidad', template: '%s | AXIS' },
  description: 'Más de 27 especialistas trabajando juntos para brindar atención médica integral. Red cerrada de especialistas en Hospital Ángeles del Pedregal.',
  keywords: ['red médica', 'especialistas', 'hospital angeles', 'VUMI', 'atención médica', 'México'],
  openGraph: { type: 'website', locale: 'es_MX' },
};
```

---

## 9. Fases de desarrollo

### Fase 0.1 — MVP estático (este roadmap)
- [ ] Scaffold Next.js + TypeScript + Tailwind
- [ ] Datos en JSON local (médicos y especialidades)
- [ ] Todas las páginas del sitemap con placeholder de imágenes
- [ ] Formulario de contacto funcional (API Route con Resend)
- [ ] Diseño responsivo completo
- [ ] Deploy en Vercel

### Fase 0.2 — Contenido real
- [ ] Integrar fotos profesionales de médicos
- [ ] Añadir cédulas, CV resumido, horarios y procedimientos
- [ ] Logo vectorial AXIS
- [ ] Mapa de ubicación (Google Maps embed)
- [ ] Testimonios de pacientes

### Fase 1.0 — CMS y funcionalidades avanzadas
- [ ] Migrar datos a Sanity o Contentful
- [ ] Sistema de agendamiento (Cal.com o custom)
- [ ] Panel de administración para médicos
- [ ] Analytics (Vercel Analytics + Google Analytics 4)
- [ ] Internacionalización (es / en para VUMI Group)

---

## 10. Comandos de inicio

```bash
# Crear proyecto (seleccionar: React → TypeScript)
pnpm create vite@latest axis-web -- --template react-ts

cd axis-web

# Instalar dependencias base
pnpm install

# Estilos y animaciones
pnpm add framer-motion

# Formularios y validación
pnpm add react-hook-form zod @hookform/resolvers

# Iconos Font Awesome
pnpm add @fortawesome/fontawesome-svg-core \
         @fortawesome/free-solid-svg-icons \
         @fortawesome/free-regular-svg-icons \
         @fortawesome/react-fontawesome

# Enrutamiento
pnpm add react-router-dom

# Backend Supabase
pnpm add @supabase/supabase-js

# Variables de entorno (.env.local)
# VITE_SUPABASE_URL=...
# VITE_SUPABASE_ANON_KEY=...

# Dev
pnpm dev
```

> **Nota:** Con Vite el enrutamiento lo maneja **React Router v6** y no hay SSR por defecto. Para la v0.1 es suficiente. Si en fases posteriores se necesita SEO avanzado, evaluar migrar a Vite SSR o Next.js.

---

## 11. Material pendiente de los médicos

Para completar los perfiles en Fase 0.2, solicitar a cada médico:

| Campo | Formato |
|-------|---------|
| Fotografía profesional | JPG/PNG 800×800px mínimo, fondo neutro |
| Cédula profesional | Número de cédula SSA |
| CV resumido | Máx. 150 palabras: formación + trayectoria |
| Procedimientos destacados | Lista de 3–5 procedimientos clave |
| Horarios de consulta | Días y horas por consultorio |
| Contacto directo | Teléfono y/o email de consultorio |
| Redes sociales | Instagram, LinkedIn (opcional) |
| Logotipo personal | Vector SVG o PDF (si aplica) |

---

## 12. Notas de arquitectura

- Enrutamiento con **React Router v6** — definir rutas en `src/router.tsx` con `createBrowserRouter`
- Los arrays de `MEDICOS` y `ESPECIALIDADES` en `src/data/` sirven como **seed inicial**; en Fase 0.2 se migran a tablas Supabase con la misma estructura de tipos
- Supabase Storage para fotos de médicos: bucket `medicos-fotos` con política pública de lectura
- El formulario de contacto en v0.1 llama directamente al cliente Supabase (`supabase.from('contacto_submissions').insert(...)`) — usar solo la `ANON_KEY` con Row Level Security habilitado en la tabla
- Las fotos en v0.1 usan un placeholder SVG con iniciales del médico generado en componente
- Variables de entorno con prefijo `VITE_` (no `NEXT_PUBLIC_`) — acceder con `import.meta.env.VITE_SUPABASE_URL`
- CSS Modules garantizan que no haya colisión de clases entre componentes — nombrar las clases semánticamente (`.hero`, `.card`, `.badge`), no por estilo (`.blueText`, `.bigFont`)

### Esquema Supabase para Fase 0.2

```sql
-- Tabla médicos
create table medicos (
  id          uuid primary key default gen_random_uuid(),
  slug        text unique not null,
  nombre      text not null,
  especialidad_id text references especialidades(id),
  capitulo    text not null,
  descripcion text,
  hospital    text,
  cedula      text,
  curriculum  text,
  foto_url    text,   -- URL de Supabase Storage
  procedimientos text[],
  horarios    text,
  telefono    text,
  email       text,
  created_at  timestamptz default now()
);

-- Tabla contacto (guarda submissions del formulario)
create table contacto_submissions (
  id                 uuid primary key default gen_random_uuid(),
  nombre             text not null,
  telefono           text not null,
  email              text not null,
  especialidad_interes text,
  mensaje            text,
  created_at         timestamptz default now()
);
```

---

*Generado para: AXIS Red Médica · Hospital Ángeles del Pedregal · Propuesta VUMI Group*  
*Versión: 0.1 · Junio 2026*