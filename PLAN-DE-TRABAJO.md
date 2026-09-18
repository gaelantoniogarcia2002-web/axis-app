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

Aún no hay fotos de médicos, imágenes hero, ni un archivo de logo aislado y reutilizable
(favicon, header, etc.) — solo referencias visuales dentro de los mockups.

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

Puntos exactos en el código donde aparece "AXIS" y deben actualizarse cuando el cliente
confirme el naming/copy definitivo de Badi Medical Group:

- [ ] `src/data/config.ts` — `nombre`, `nombreCompleto`, `descripcion`, `keywords`, label
      "Modelo AXIS" en `NAV_LINKS`
- [ ] `index.html` — `<title>`, `<meta name="description">`
- [ ] `src/components/layout/Header.tsx:21` — logo de texto "AXIS"
- [ ] `src/components/layout/Footer.tsx:15,43,54` — logo de texto, email de contacto
      (`contacto@axisredmedica.mx` → nuevo dominio), copyright
- [ ] `src/components/home/QueSesAxis.tsx` — renombrar componente (`QueEsBadi.tsx`) y copy
      "¿Qué es AXIS?"
- [ ] `roadmap.md` — actualizar o archivar como referencia histórica del naming anterior
- [ ] `src/styles/globals.css` — validar si la paleta navy/gold (`--color-navy`, `--color-gold`)
      se mantiene o cambia con la nueva identidad de marca (pendiente de definir con cliente)

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
│   └── mockups/    ← ✅ Mkp 3-6.png (piezas de marca: gafete, tarjeta, llavero, empaque)
└── fonts/          ← tipografías de la carpeta TIPOGRAFÍAS de Drive, si se decide self-host
                        en vez de usar Google Fonts (actualmente Playfair Display + Inter
                        vía <link> en index.html) — PENDIENTE
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

- Falta un archivo de **logo** reutilizable (SVG/PNG transparente) — la carpeta `LOGO/` en
  Drive sigue vacía; los mockups solo lo muestran aplicado a piezas físicas.
- Falta que se suban fotos de médicos, imágenes hero y tipografías reales a Drive.
- Naming de marca visible en los mockups: **"bädi MEDICAL GROUP"**, tagline
  **"SALUD QUE ACOMPAÑA"** — falta confirmar con el cliente si este es el texto final para
  header/footer/metadata, y el dominio de email de contacto definitivo.
- Falta confirmar si la paleta de color actual del sitio (navy/gold) se conserva o cambia
  con la nueva identidad (los mockups usan un estilo propio que conviene revisar antes de
  tocar `globals.css`).
