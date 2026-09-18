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

Puntos exactos en el código donde aparece "AXIS" y deben actualizarse. El naming
("bädi Medical Group", tagline "SALUD QUE ACOMPAÑA") y la paleta de color primaria
(`#0270FD` / `#002C83`) ya están confirmados por el Manual de Marca; lo que falta es el
archivo de logo aislado y aplicar los cambios en el código:

- [ ] `src/data/config.ts` — `nombre`, `nombreCompleto`, `descripcion`, `keywords`, label
      "Modelo AXIS" en `NAV_LINKS`
- [ ] `index.html` — `<title>`, `<meta name="description">`
- [ ] `src/components/layout/Header.tsx:21` — logo de texto "AXIS"
- [ ] `src/components/layout/Footer.tsx:15,43,54` — logo de texto, email de contacto
      (`contacto@axisredmedica.mx` → nuevo dominio), copyright
- [ ] `src/components/home/QueSesAxis.tsx` — renombrar componente (`QueEsBadi.tsx`) y copy
      "¿Qué es AXIS?"
- [ ] `roadmap.md` — actualizar o archivar como referencia histórica del naming anterior
- [ ] `src/styles/globals.css` — reemplazar tipografías `Playfair Display` + `Inter` (Google
      Fonts vía `<link>`) por `@font-face` self-hosted con **Batica Sans**
      (`src/assets/fonts/BaticaSans-Regular.otf`, para títulos/marca) y **Myriad Pro**
      (`src/assets/fonts/MyriadPro-Regular.ttf`, para cuerpo de texto). Solo hay peso
      "Regular" de cada una — si se necesitan bold/italic hay que pedirlos.
- [ ] `index.html` — quitar los `<link>` de Google Fonts (Playfair Display/Inter) ya que se
      pasa a fuentes self-hosted
- [ ] `src/styles/globals.css` — actualizar `--color-navy` → `#002C83` y agregar
      `--color-blue-primary: #0270FD` (o reemplazar el rol de `--color-gold` según se defina
      el uso de acentos); revisar todos los componentes que referencian estos tokens

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

Lo que sigue pendiente:

- El logo solo existe en JPG con fondo blanco — para usarlo sobre el footer navy oscuro
  actual conviene recortar/usar `logo-isotipo.jpg` o `logo-texto.jpg` con tratamiento, o pedir
  un PNG transparente si el resultado visual no convence.
- Solo hay peso "Regular" de Batica Sans y Myriad Pro — si el diseño final pide bold/italic
  para títulos, hay que pedirlos.
- Falta que se suban fotos de médicos e imágenes hero a Drive (no hay ninguna todavía en
  ninguna carpeta ni en el manual).
- Falta confirmar el dominio de email de contacto definitivo (hoy `contacto@axisredmedica.mx`).
- Colores contextuales (rojo urgencias, verde prevención, dorado eventos) sin código exacto
  — de baja prioridad, son de uso situacional y no bloquean el rebranding base del sitio.
