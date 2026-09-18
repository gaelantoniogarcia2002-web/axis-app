# Plan de trabajo — Rebranding AXIS → Badi Medical Group

> Generado a partir de la revisión de la carpeta de Google Drive **"Pagina web Badi Medical Group"**
> (`https://drive.google.com/drive/folders/1c2-0DQMwm9FAb-_TybIJtfV-APjocirU`)

## 1. Contenido revisado en Drive

La carpeta contiene:

- `TIPOGRAFÍAS/` — subcarpeta **vacía**, sin archivos cargados.
- `LOGO/` — subcarpeta **vacía**, sin archivos cargados (aún no hay un archivo de logo
  exportable, ej. SVG/PNG con fondo transparente).
- `Mockups/` — **4 imágenes PNG** con el diseño de marca aplicado a piezas físicas
  (gafete, tarjeta de presentación, llavero, empaque): `Mkp 3.png`, `Mkp 4.png`, `Mkp 5.png`,
  `Mkp 6.png`. Confirman el naming de marca: **"bädi MEDICAL GROUP"**, tagline
  **"SALUD QUE ACOMPAÑA"**. Ya descargadas a `src/assets/images/mockups/`.
- `Patrones/` — **4 imágenes** de texturas/patrones decorativos de marca:
  `Patronrs-01.png`, `Patronrs-02.png`, `patrones-05.jpg`, `patrones-06.jpg`. **Aún no
  descargadas al repo.**
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
- **Tipografía oficial: "Batica Sans"** — reemplaza a Playfair Display + Inter, que es lo que
  usa hoy el sitio.
- **Reglas de uso del logo**: incluye isotipo, logotipo e imagotipo (cada uno con su área de
  reserva); variantes por contexto (urgencias/alto impacto, eventos y comunicación premium,
  documentos corporativos monocromáticos, uso general en sitio web/redes), positivo y
  negativo, usos incorrectos. El archivo aislado (SVG/PNG) sigue sin existir en Drive
  (`LOGO/` vacía) — pendiente que el cliente lo suba.
- **Paleta de colores** (confirmada por el cliente a partir del manual):
  - Azul primario: `#0270FD`
  - Azul oscuro/secundario: `#002C83`
  - Colores contextuales por aplicación: rojo (urgencias), verde (prevención/bienestar),
    dorado (eventos/certificaciones premium) — sin código exacto todavía, son de uso
    situacional, no colores base del sitio.

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
- [ ] `src/styles/globals.css` — reemplazar tipografías `Playfair Display` + `Inter` por
      **Batica Sans** (tipografía oficial del manual) — pendiente conseguir los archivos de
      fuente, ya que `TIPOGRAFÍAS/` en Drive sigue vacía
- [ ] `src/styles/globals.css` — actualizar `--color-navy` → `#002C83` y agregar
      `--color-blue-primary: #0270FD` (o reemplazar el rol de `--color-gold` según se defina
      el uso de acentos); revisar todos los componentes que referencian estos tokens

## 4. Estructura de `/src/assets` preparada

Se creó la siguiente estructura, versionada vacía con `.gitkeep`, lista para recibir los
archivos en cuanto se suban a Drive:

```
src/assets/
├── images/
│   ├── logo/       ← logo Badi Medical Group (variantes color/mono, SVG preferido) — PENDIENTE
│   ├── hero/       ← imágenes hero por página (Home, Nosotros, etc.) — PENDIENTE
│   ├── medicos/    ← fotos de perfil de cada médico — PENDIENTE
│   ├── general/    ← fotos institucionales, hospital, misceláneos — PENDIENTE
│   ├── mockups/    ← ✅ Mkp 3-6.png (piezas de marca: gafete, tarjeta, llavero, empaque)
│   └── patrones/   ← patrones/texturas de marca (Patrones/ en Drive) — PENDIENTE de descargar
└── fonts/          ← archivos de "Batica Sans" (tipografía oficial según Manual de Marca),
                        una vez se suban a TIPOGRAFÍAS/ en Drive — PENDIENTE
```

## 5. Pasos siguientes (cuando Drive tenga contenido)

1. Descargar cada archivo de Drive con la herramienta de Google Drive y guardarlo en la
   subcarpeta de `/src/assets` que corresponda.
2. Reemplazar los placeholders actuales (`src/assets/hero.png`, `AvatarPlaceholder.tsx`) por
   los assets reales, actualizando los `import` en los componentes (`Hero.tsx`,
   `MedicoCard.tsx`, `Header.tsx`/`Footer.tsx` para el logo).
3. Optimizar imágenes (compresión, WebP/AVIF donde aplique) antes de commitear.
4. Si se reciben tipografías propias en `TIPOGRAFÍAS/`, decidir self-host (`@font-face` en
   `globals.css` + archivos en `src/assets/fonts/`) vs. mantener Google Fonts.
5. Aplicar el checklist de rebranding de la sección 3 con el copy definitivo del cliente.
6. `pnpm build` y revisión visual de las 6 páginas antes de mergear a `main`.

## 6. Rama de trabajo

Todo el trabajo (esta preparación de estructura, y el rebranding posterior) se desarrolla en
la rama `claude/drive-connection-2lkv44`, sin tocar `main` hasta validación del cliente.

## 7. Pendientes / bloqueos

Ya resueltos gracias al Manual de Marca y a la confirmación directa del cliente:

- ✅ Naming y tono de marca: **"bädi Medical Group"**, tagline **"SALUD QUE ACOMPAÑA"**,
  misión/visión/valores.
- ✅ Paleta de color primaria: `#0270FD` (azul primario) y `#002C83` (azul oscuro/secundario).
- ✅ Tipografía oficial: **Batica Sans**.

Lo que sigue pendiente:

- Falta un archivo de **logo** reutilizable (SVG/PNG transparente, con sus variantes
  isotipo/logotipo/imagotipo) — la carpeta `LOGO/` en Drive sigue vacía; el manual y los
  mockups solo lo muestran aplicado a piezas, no como archivo aislado.
- Falta descargar los 4 archivos de `Patrones/` al repo (`src/assets/images/patrones/`).
- Faltan los archivos de fuente de **Batica Sans** — `TIPOGRAFÍAS/` en Drive sigue vacía.
- Falta que se suban fotos de médicos e imágenes hero a Drive (no hay ninguna todavía en
  ninguna carpeta ni en el manual).
- Falta confirmar el dominio de email de contacto definitivo (hoy `contacto@axisredmedica.mx`).
- Colores contextuales (rojo urgencias, verde prevención, dorado eventos) sin código exacto
  — de baja prioridad, son de uso situacional y no bloquean el rebranding base del sitio.
