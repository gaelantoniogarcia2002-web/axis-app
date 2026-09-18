# Plan de trabajo — Rebranding AXIS → Badi Medical Group

> Generado a partir de la revisión de la carpeta de Google Drive **"Pagina web Badi Medical Group"**
> (`https://drive.google.com/drive/folders/1c2-0DQMwm9FAb-_TybIJtfV-APjocirU`)

## 1. Contenido revisado en Drive

La carpeta contiene únicamente:

- `TIPOGRAFÍAS/` — subcarpeta **vacía**, sin archivos cargados.

No hay imágenes, logos, fotos de médicos ni otros assets todavía en Drive. Este plan deja
preparada la estructura del repo para recibirlos en cuanto se suban.

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
│   ├── logo/       ← logo Badi Medical Group (variantes color/mono, SVG preferido)
│   ├── hero/       ← imágenes hero por página (Home, Nosotros, etc.)
│   ├── medicos/    ← fotos de perfil de cada médico
│   └── general/    ← fotos institucionales, hospital, misceláneos
└── fonts/          ← tipografías de la carpeta TIPOGRAFÍAS de Drive, si se decide self-host
                        en vez de usar Google Fonts (actualmente Playfair Display + Inter
                        vía <link> en index.html)
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

- Falta que se suban imágenes y tipografías reales a la carpeta de Drive.
- Falta confirmar con el cliente: nombre a mostrar en header/footer, tagline, dominio de email
  de contacto, y si la paleta de color actual (navy/gold) se conserva.
