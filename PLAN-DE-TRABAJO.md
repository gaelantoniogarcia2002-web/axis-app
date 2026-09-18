# Plan de trabajo — Rebranding AXIS → Badi Medical Group

> Generado a partir de la revisión de la carpeta de Google Drive **"Pagina web Badi Medical Group"**
> (`https://drive.google.com/drive/folders/1c2-0DQMwm9FAb-_TybIJtfV-APjocirU`)

## 1. Contenido revisado en Drive

La carpeta contiene:

- `TIPOGRAFÍAS/` — **2 archivos de fuente**: `BaticaSans-Regular.otf` (tipografía principal,
  confirmada por el manual) y `Myriad Pro Regular.ttf` (tipografía secundaria, probablemente
  para cuerpo de texto). ✅ Ya descargadas a `src/assets/fonts/`.
- `LOGO/` — subcarpeta **vacía**, sin archivos cargados (aún no hay un archivo de logo
  exportable, ej. SVG/PNG con fondo transparente).
- `Mockups/` — **4 imágenes PNG** con el diseño de marca aplicado a piezas físicas
  (gafete, tarjeta de presentación, llavero, empaque): `Mkp 3.png`, `Mkp 4.png`, `Mkp 5.png`,
  `Mkp 6.png`. Confirman el naming de marca: **"bädi MEDICAL GROUP"**, tagline
  **"SALUD QUE ACOMPAÑA"**. Ya descargadas a `src/assets/images/mockups/`.
- `Patrones/` — **4 imágenes** de texturas/patrones decorativos de marca (4500×4500):
  `Patronrs-01.png`, `Patronrs-02.png`, `patrones-05.jpg`, `patrones-06.jpg`. ✅ Ya
  descargadas a `src/assets/images/patrones/`.
- `Manual de Marca bädi.pdf` (31 MB, en la raíz de la carpeta) — brand book oficial. Ver
  resumen en la sección 1.1.

Aún no hay fotos de médicos, imágenes hero, ni un archivo de logo aislado y reutilizable
(favicon, header, etc.) — solo referencias visuales dentro de los mockups y del manual.

### 1.1 Resumen del Manual de Marca

El PDF pesa 31 MB (supera el límite de descarga directa de la herramienta de 10 MB), así que
se leyó su contenido textual pero **no se pudieron extraer visualmente los códigos de color
exactos** de la sección 4 (paleta cromática, son swatches sin texto asociado). Puntos
confirmados oficialmente por el manual:

- **Significado de la marca**: "bädi" viene del otomí, "el que sabe" — conocimiento médico
  al servicio del paciente. Concepto central: *"bädi transforma el conocimiento en cuidado"*.
- **Personalidad de marca**: sabia, experta, humana, precisa, contemporánea, confiable, premium.
- **Misión**: brindar atención médica integral y especializada mediante una red coordinada de
  profesionales de alta trayectoria.
- **Visión**: ser una red médica de referencia por excelencia clínica y coordinación
  multidisciplinaria.
- **Valores**: excelencia clínica, atención integral, profesionalismo, colaboración,
  eficiencia, compromiso con el paciente, resultados.
- **Público objetivo**: pacientes que buscan especialistas coordinados y atención integral,
  no solo una consulta puntual.
- **Tipografía oficial: "Batica Sans"** (para marca/títulos) — reemplaza a Playfair Display +
  Inter, que es lo que usa hoy el sitio. Junto a ella se recibió también **Myriad Pro**,
  probablemente como tipografía secundaria para cuerpo de texto. Ambas ya están en
  `src/assets/fonts/`, solo en peso Regular.
- **Reglas de uso del logo**: incluye isotipo, logotipo e imagotipo (cada uno con su área de
  reserva); variantes por contexto (urgencias/alto impacto, eventos y comunicación premium,
  documentos corporativos monocromáticos, uso general en sitio web/redes), positivo y
  negativo, usos incorrectos. El archivo aislado (SVG/PNG) sigue sin existir en Drive
  (`LOGO/` vacía) — pendiente que el cliente lo suba.
- **Paleta de colores** (confirmada por el cliente a partir del manual, y verificada contra
  el logo real):
  - Azul primario: `#0270FD`
  - Azul oscuro/secundario: `#002C83`
  - Colores contextuales por aplicación (elegidos por Claude, ya que el manual no da el
    código exacto — son de uso situacional, no colores base del sitio):
    - Rojo urgencias: `#DC2626`
    - Verde prevención/bienestar: `#16A34A`
    - Dorado eventos/premium: `#C9A84C` (se reutiliza el gold que ya usaba el sitio AXIS,
      porque el manual describe el mismo uso — eventos, reconocimientos, comunicación premium)
- **Logo**: se descargaron 4 variantes (todas JPG 4500×4500, fondo blanco) a
  `src/assets/images/logo/`:
  - `logo.jpg` — vertical (isotipo arriba, wordmark debajo)
  - `logo-horizontal.jpg` — isotipo + wordmark en línea
  - `logo-isotipo.jpg` — solo la cruz, sin texto
  - `logo-texto.jpg` — solo el wordmark "bädi MEDICAL GROUP"

  Confirmado por el cliente: **no existe variante negativa** (para fondo oscuro/footer). Todas
  son JPG sobre fondo blanco, no PNG/SVG transparente — al aplicarlas sobre el footer navy
  actual del sitio quedarían con un recuadro blanco visible; para eso conviene usar
  `logo-isotipo.jpg`/`logo-texto.jpg` recortados o pedir una versión en PNG transparente más
  adelante si hace falta.

## 2. Estado actual del repo

`axis-app` ya tiene una web funcional construida con **React 19 + Vite + TypeScript**
(el `roadmap.md` original proponía Next.js, pero la implementación real usa Vite; este plan
respeta lo ya construido en vez de migrar de framework).

Estructura relevante:

```
src/
├── pages/          Home, Nosotros, Especialidades, Medicos, Modelo, Contacto
├── components/      layout/ ui/ home/ especialidades/ medicos/ contacto/
├── data/            config.ts, especialidades.ts, medicos.ts
├── styles/          globals.css (tokens: --color-navy, --color-gold, tipografías Playfair+Inter)
└── assets/          hero.png (placeholder), vite.svg, typescript.svg
```

Confirmado con el usuario: **es el mismo proyecto**, solo cambia de marca de "AXIS" a
"Badi Medical Group".

## 3. Checklist de rebranding (texto y metadata)

**✅ Implementado** (ver commit de implementación). El naming, la paleta y las tipografías
ya están aplicados en el código:

- [x] `src/data/config.ts` — `nombre: 'bädi'`, `nombreCompleto: 'bädi Medical Group'`,
      `tagline: 'SALUD QUE ACOMPAÑA'`, `keywords`, label "Modelo bädi" en `NAV_LINKS`
- [x] `index.html` — `<title>`, quitados los `<link>` de Google Fonts (Playfair/Inter)
- [x] `src/components/layout/Header.tsx` — logo real (`logo-horizontal-trim.png`) en vez de
      texto, dentro de una tarjeta blanca (el JPG no tiene fondo transparente)
- [x] `src/components/layout/Footer.tsx` — wordmark "bädi" / "MEDICAL GROUP" con la fuente
      real, tagline, email (`contacto@badimedicalgroup.mx`), copyright dinámico desde
      `SITE_CONFIG`
- [x] `src/components/home/QueSesAxis.tsx` → renombrado a `QueEsBadi.tsx`
      (+ `QueEsBadi.module.css`), copy "¿Qué es bädi?", import actualizado en `Home.tsx`
- [x] `roadmap.md` — marcado como documento histórico, con referencia a este plan
- [x] `src/styles/globals.css` — `@font-face` self-hosted con **Batica Sans**
      (`src/assets/fonts/BaticaSans-Regular.otf`, asignada a `--font-serif`, usada para
      marca/títulos) y **Myriad Pro** (`src/assets/fonts/MyriadPro-Regular.ttf`, asignada a
      `--font-sans`, cuerpo de texto). Se mantuvieron los nombres de variable existentes
      para no tocar los 23 módulos CSS que ya las referencian. Solo hay peso "Regular" de
      cada una — si se necesitan bold/italic hay que pedirlos.
- [x] `src/styles/globals.css` — `--color-navy` → `#002C83`, nueva `--color-blue: #0270FD`
      y contextuales `--color-urgencias: #DC2626` / `--color-prevencion: #16A34A`.
      `--color-gold` se conserva para acentos premium (eyebrows, footer)
- [x] `src/components/ui/Button.module.css` — el botón primario (CTA) pasó de gold/navy a
      `--color-blue`/blanco, ya que el azul es el color primario de marca y el gold queda
      reservado para acentos premium/eventos según el manual
- [x] Reemplazadas todas las menciones de "AXIS" en el copy de las páginas
      (Nosotros, Modelo, Especialidades, Medicos, Contacto, CTAContacto,
      FormularioContacto) por "bädi" / "bädi Medical Group"
- [x] Logos recortados (whitespace trim con Pillow) a
      `src/assets/images/logo/*-trim.png` para uso en UI — los originales sin recortar se
      conservan como fuente

## 4. Estructura de `/src/assets` preparada

Se creó la siguiente estructura, versionada vacía con `.gitkeep`, lista para recibir los
archivos en cuanto se suban a Drive:

```
src/assets/
├── images/
│   ├── logo/       ← ✅ logo.jpg, logo-horizontal.jpg, logo-isotipo.jpg, logo-texto.jpg
│   │                  (4500×4500, fondo blanco — no existe variante negativa, confirmado)
│   ├── hero/       ← imágenes hero por página (Home, Nosotros, etc.) — PENDIENTE
│   ├── medicos/    ← fotos de perfil de cada médico — PENDIENTE
│   ├── general/    ← fotos institucionales, hospital, misceláneos — PENDIENTE
│   ├── mockups/    ← ✅ Mkp 3-6.png (piezas de marca: gafete, tarjeta, llavero, empaque)
│   └── patrones/   ← ✅ patron-01/02.png, patron-05/06.jpg (texturas decorativas de marca)
└── fonts/          ← ✅ BaticaSans-Regular.otf, MyriadPro-Regular.ttf
```

## 5. Pasos siguientes (cuando Drive tenga contenido)

1. Descargar cada archivo de Drive con la herramienta de Google Drive y guardarlo en la
   subcarpeta de `/src/assets` que corresponda.
2. Reemplazar los placeholders actuales (`src/assets/hero.png`, `AvatarPlaceholder.tsx`) por
   los assets reales, actualizando los `import` en los componentes (`Hero.tsx`,
   `MedicoCard.tsx`, `Header.tsx`/`Footer.tsx` para el logo).
3. Optimizar imágenes (compresión, WebP/AVIF donde aplique) antes de commitear.
4. ✅ Tipografías recibidas (Batica Sans + Myriad Pro) — falta declarar los `@font-face` en
   `globals.css` y reemplazar las referencias a Playfair Display/Inter en los componentes.
5. Aplicar el checklist de rebranding de la sección 3 con el copy definitivo del cliente.
6. `pnpm build` y revisión visual de las 6 páginas antes de mergear a `main`.

## 6. Rama de trabajo

Todo el trabajo (esta preparación de estructura, y el rebranding posterior) se desarrolla en
la rama `claude/drive-connection-2lkv44`, sin tocar `main` hasta validación del cliente.

## 7. Pendientes / bloqueos

Ya resueltos gracias al Manual de Marca y a la confirmación directa del cliente:

- ✅ Naming y tono de marca: **"bädi Medical Group"**, tagline **"SALUD QUE ACOMPAÑA"**,
  misión/visión/valores.
- ✅ Paleta de color primaria: `#0270FD` (azul primario) y `#002C83` (azul oscuro/secundario);
  contextuales elegidas: `#DC2626` urgencias, `#16A34A` prevención, `#C9A84C` eventos.
- ✅ Tipografías: **Batica Sans** (principal) y **Myriad Pro** (secundaria), archivos
  descargados en `src/assets/fonts/` (solo peso Regular de cada una).
- ✅ Las 4 variantes del logo descargadas (vertical, horizontal, isotipo, solo texto), todas
  sobre fondo blanco. Confirmado con el cliente: no existe variante negativa.
- ✅ 4 imágenes de `Patrones/` descargadas (`src/assets/images/patrones/`).
- ✅ Implementación en código: colores, tipografías, logo, textos (ver sección 3).

Lo que sigue pendiente:

- El logo solo existe en JPG con fondo blanco. En el Header se resolvió mostrándolo dentro
  de una tarjeta blanca redondeada; en el Footer (navy oscuro) se optó por no usar la imagen
  y mantener el wordmark como texto con la tipografía real, para evitar un recuadro blanco
  sobre fondo oscuro. Si se consigue una versión PNG transparente/negativa más adelante,
  se puede reemplazar el wordmark de texto del footer por la imagen real.
- Solo hay peso "Regular" de Batica Sans y Myriad Pro — si el diseño final pide bold/italic
  para títulos, hay que pedirlos (actualmente `font-weight: 700` en títulos usa el navegador
  sintetizando el bold a partir del Regular, no es un peso real de la fuente).
- Falta que se suban fotos de médicos e imágenes hero a Drive (no hay ninguna todavía en
  ninguna carpeta ni en el manual) — los placeholders (`hero.png`, `AvatarPlaceholder.tsx`)
  siguen en uso.
- Dominio de email de contacto: se usó `contacto@badimedicalgroup.mx` como valor razonable
  a falta de uno confirmado explícitamente — verificar con el cliente que sea el correcto.
- `favicon.svg` sigue siendo el ícono original de AXIS — no se actualizó porque no hay una
  versión vectorial (SVG) del isotipo de bädi, solo JPG rasterizado.
- Colores contextuales (rojo urgencias, verde prevención, dorado eventos) sin código exacto
  — de baja prioridad, son de uso situacional y no bloquean el rebranding base del sitio.

## 8. Rediseño UI/UX — referencia visual (mockup "TICENA" en Drive)

El cliente compartió `pg web (1).pdf` (10.9 MB, en la raíz de la carpeta de Drive) como guía
de UI/UX. Es un mockup con marca de ejemplo **"TICENA — Grupo Médico de Especialistas"**
(nombre de plantilla, no nuestra marca) que define una estructura de sitio mucho más grande
y funcional que la actual. Confirmado con el cliente: **replicar toda la estructura y flujos
para bädi**, con los colores/marca reales de bädi.

El PDF no se pudo descargar completo (supera el límite de 10MB), pero el cliente compartió
capturas de pantalla de las 5 páginas clave, lo que permitió extraer el sistema de diseño
exacto por muestreo de píxeles.

### 8.1 Sistema de diseño confirmado por el mockup

- **Azul primario de botones/CTA**: `~#0050F8`–`#0058F8` en el mockup → **coincide con
  nuestro `--color-blue: #0270FD`** ya definido. No hace falta cambiarlo.
- **Navy oscuro (banners/footer)**: `~#002878`–`#003080` en el mockup → **coincide con
  nuestro `--color-navy: #002C83`** ya definido. Tampoco hace falta cambiarlo.
- **Verde WhatsApp** (botones outline "Escríbenos por WhatsApp"): usar el verde oficial de
  WhatsApp `#25D366` — nueva variable `--color-whatsapp`.
- Tarjetas blancas con esquinas redondeadas grandes y sombra suave (`--radius-card`,
  `--shadow-card` ya existen y sirven).
- Botones: primario sólido azul, secundario outline azul ("Ver perfil"), WhatsApp outline
  verde con ícono.
- Fila superior de franja clara/durazno sobre el header parece ser fondo de la presentación
  del PDF, no parte real del sitio — se ignora.

### 8.2 Inventario de páginas y componentes nuevos

**Home** (rediseño de lo existente):
- Header: logo + nav con subrayado azul en el item activo + botón "Agenda tu cita" sólido
- Hero: 2 columnas — texto (eyebrow ubicación, título, subtítulo, 2 CTAs: "Agenda tu cita"
  sólido + "Escríbenos por WhatsApp" outline verde) a la izquierda, foto de equipo médico
  con forma geométrica azul detrás a la derecha (**sin foto real todavía** — placeholder)
- Barra de stats: 4 items con ícono + label + sublabel (especialistas, atención integral,
  tecnología médica, hospital sede)
- Fila 2 columnas: carrusel "Especialistas destacados" (tarjetas pequeñas circulares) +
  grid "Nuestras especialidades" (íconos + label, con especialidades de `data/especialidades.ts`)
- Banner navy "Tu bienestar es nuestra prioridad" con 4 íconos+label
- Sección hospital: foto + checklist de instalaciones + botón outline
- Footer: 4 columnas (marca + redes sociales, contacto, ubicación, horarios) + barra inferior

**Especialistas** (nueva funcionalidad sobre la página `Medicos.tsx` existente):
- Buscador por nombre/especialidad/síntoma
- Pills de filtro por especialidad ("Todas" + top especialidades + "Más filtros")
- Grid de tarjetas: foto, ❤ favorito, nombre, especialidad, desc corta, botones
  "Ver perfil" (outline) + "Agendar" (sólido, con ícono calendario)
- Banner "¿Prefieres agendar por WhatsApp?"

**Perfil de médico** (`MedicoDetalle.tsx` — rediseño grande):
- Breadcrumb, foto + info (cédulas, bio, formación/experiencia/pacientes), CTAs
- 3 columnas: Servicios principales (checklist) / Horarios de consulta (tabla) /
  Ubicación (mapa+foto)
- Reseñas (rating agregado + estrellas + quotes) — **requiere nuevo modelo de datos**
- FAQ acordeón — **requiere nuevo modelo de datos**
- Artículos relacionados (blog) — **requiere nuevo modelo de datos + sección Blog**

**Agenda tu cita** (página nueva, no existe hoy):
- Header con foto de fondo del hospital
- Stepper de 3 pasos (Selecciona / Confirma / Asiste)
- Formulario: especialidad, médico, fecha, hora, modalidad, hospital, datos del paciente,
  aseguradora, motivo (con contador de caracteres)
- Sidebar: ayuda por WhatsApp, horarios, ubicación

**Contacto** (rediseño grande de `Contacto.tsx`):
- Hero con foto + CTA WhatsApp grande
- 3 tarjetas de canal (Call Center, Coordinación médica, Atención a pacientes)
- Formulario + Información de contacto + Síguenos + Visítanos (mapa)
- FAQ acordeón
- Banner final "Estamos para ayudarte"

### 8.3 Modelos de datos nuevos requeridos

- `reviews.ts` — reseñas por médico (autor, rating, texto)
- `faq.ts` — preguntas frecuentes (generales y por médico/especialidad)
- `articulos.ts` — blog/artículos de bienestar (para perfil de médico y sección Blog)
- Extender `medicos.ts` con: foto (pendiente), badge tipo "Alta Especialidad", cédulas,
  formación, años de experiencia, pacientes atendidos, servicios/procedimientos, horarios
  de consulta por día, rating agregado

### 8.4 Plan de implementación por fases

1. **✅ Fase 1 — Fundación** (implementada): Header (siempre blanco, sin transparencia sobre
   hero oscuro), Footer (4 columnas + redes sociales) y Home completamente rediseñados:
   Hero de 2 columnas (texto + panel gráfico azul con el isotipo, placeholder mientras no haya
   foto real de equipo médico), barra de stats con íconos, fila "Especialistas destacados" +
   "Nuestras especialidades", banner navy "Tu bienestar es nuestra prioridad", sección de
   hospital con checklist. Se agregó `--color-whatsapp: #25D366` y la variante de botón
   `whatsapp`. Se eliminaron `QueEsBadi.tsx` y el `EspecialidadesDestacadas.tsx` original
   (reemplazados por los nuevos componentes de Home, sin uso en otras páginas). Verificado
   que Nosotros/Médicos/etc. no se rompieron con el nuevo Header (siguen usando
   `position: fixed` + el mismo `--header-height`, solo cambió a blanco permanente).
2. **✅ Fase 2 — Especialistas** (implementada): `Medicos.tsx` con hero claro + mini-stats
   inline, `FiltrosMedicos` rediseñado (buscador de ancho completo + pills de especialidad
   con "Más filtros" que revela los selects de capítulo/especialidad completos), `MedicoCard`
   rediseñado (foto grande, botón de favorito ❤ con estado local sin persistencia, botones
   "Ver perfil" + "Agendar" separados del área clicable de la tarjeta), banner "¿Prefieres
   agendar por WhatsApp?" al final del listado. Se agregaron los tamaños `xs`/`full` a
   `AvatarPlaceholder` y la variante `whatsapp` de `Button` ya creada en la Fase 1 se
   reutilizó aquí.
   **Bug encontrado y corregido durante la verificación visual**: el pill activo de
   especialidad quedaba con texto invisible (mismo color que el fondo) cuando además estaba
   en `:hover` — `.pill:hover` (dos clases, mayor especificidad) le ganaba el color de texto
   a `.pillActive` (una clase). Se corrigió agregando `.pillActive:hover` explícito. Este es
   exactamente el estado en el que queda el pill justo después de que un usuario le hace
   clic, así que era un bug real, no solo un artefacto de la captura de pantalla.
3. **✅ Fase 3 — Perfil de médico** (implementada): `MedicoDetalle.tsx` con breadcrumb,
   header de 2 columnas (foto + nombre/especialidad/cédulas/bio/CTAs), fila de 3 tarjetas
   (Servicios principales / Horarios de consulta / Ubicación con link a Google Maps), y fila
   de 2 columnas (Reseñas / FAQ). Se agregó un componente `Accordion` reutilizable en `ui/`
   (pensado para reusarse en Contacto/Agenda en fases siguientes).

   **Decisión importante — no se fabricaron datos de médicos reales**: el mockup de
   referencia muestra cédula profesional, años de experiencia, pacientes atendidos y reseñas
   de pacientes con nombre y calificación. Esos son datos factuales específicos sobre
   personas reales e identificables (los 29 médicos de `medicos.ts` son médicos reales del
   cliente) — inventarlos habría significado publicar credenciales profesionales y
   testimonios de pacientes falsos, lo cual es un riesgo real (legal y de confianza), no solo
   un detalle de diseño. En su lugar:
   - `resenas.ts` se creó con el arreglo `RESENAS` **vacío a propósito** — `ResenasSection`
     muestra un estado honesto ("Aún no hay reseñas") en vez de un rating/testimonios
     inventados. Cuando el cliente tenga reseñas reales verificadas, se agregan con el mismo
     shape (`Resena`: autor, rating, texto, fecha) y el componente ya las muestra.
   - `faq.ts` sí se llenó, pero con preguntas **genéricas de la práctica** (cómo agendar,
     qué llevar, aseguradoras, cancelaciones) — no son afirmaciones específicas sobre un
     médico en particular, así que no hay nada que fabricar.
   - El tipo `Medico` se extendió con campos opcionales (`cedulaEspecialidad`, `formacion`,
     `experienciaAnios`, `pacientesAtendidos`, `horariosConsulta`, `procedimientosDestacados`
     ya existía) que hoy están **vacíos para los 29 médicos**. La UI los muestra solo si
     existen; si no, muestra un texto honesto tipo "Formación, experiencia y otros datos de
     este especialista se publicarán próximamente" o "Contáctanos para conocer los horarios".
   - Se **omitió la sección de "Artículos y consejos" (blog)** del mockup — requeriría
     inventar contenido editorial completo; queda para cuando exista la sección Blog.
   - Ubicación usa un link de búsqueda de Google Maps por nombre del hospital (dato público
     real), no coordenadas o dirección inventadas.

   **Actualización — texto lorem ipsum agregado a pedido del cliente** (solo para ver el
   diseño con contenido, no son datos reales): `medicos.ts` ahora aplica un objeto
   `LOREM_EXTRAS` (cédulas `0000000`, formación/curriculum/procedimientos en lorem ipsum,
   12 años de experiencia, "+1,000" pacientes, horarios Lun/Mié/Vie) a los 29 médicos vía
   `.map()`. `resenas.ts` genera 2 reseñas lorem ipsum por médico con autor explícitamente
   genérico ("Paciente de ejemplo A/B") para que quede inequívoco que es contenido de
   muestra y no un testimonio real. Reemplazar `LOREM_EXTRAS` y `RESENAS` por datos reales
   cuando el cliente los proporcione.

   **Pendiente del cliente para completar esta fase de verdad**: cédulas profesionales,
   formación, años de experiencia, servicios/procedimientos y horarios de consulta reales
   por cada médico; reseñas de pacientes reales y verificadas (con su consentimiento).

   Se eliminó `Badge.tsx`/`Badge.module.css` (sin uso tras quitar el badge de capítulo de
   `MedicoCard` en la Fase 2 y de `MedicoDetalle` en esta fase).
4. **Fase 4 — Agenda tu cita**: página y flujo nuevos (formulario, sin backend real todavía
   — solo UI, el envío requiere definir a dónde llega la cita)
5. **Fase 5 — Contacto**: rediseño grande con canales múltiples y WhatsApp

**Pendiente de decidir para fases siguientes**: la navegación del mockup es
"Inicio, Especialistas, Especialidades, Agenda tu cita, Blog, Contacto" (sin "Nosotros" ni
"Modelo"), distinta a la actual `NAV_LINKS`. Por ahora se dejó el menú actual intacto para no
sacar a Nosotros/Modelo de la navegación; hay que decidir con el cliente si se ajusta el menú
cuando existan las páginas de Agenda y Blog.

**Bloqueos de contenido que persisten en todas las fases**: fotos reales de médicos, foto
del hospital, foto de equipo médico para el hero — se usan placeholders hasta que se suban
a Drive. El número de WhatsApp/teléfono de call center también es un placeholder
(`+52 55 5555-5555`) hasta que el cliente confirme el real.
