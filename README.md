# NYX — Soluciones Digitales

Sitio web de NYX, agencia de crecimiento digital. Diseño editorial dark, performance-first, sin frameworks pesados.

> *"Antes del amanecer, la estrategia."*

---

## Stack

- **HTML / CSS / JS vanilla** — sin build step, sin framework. Cero overhead.
- **Fonts:** Fraunces (display serif), Geist (body sans), Geist Mono (metadatos). Servidas vía Google Fonts.
- **Sin dependencias** de Node, npm o cualquier toolchain. Abrís `index.html` y funciona.

---

## Estructura

```
nyx-soluciones-digitales/
├── index.html                 # Home (única página por ahora)
├── assets/
│   ├── css/styles.css         # Todos los estilos
│   ├── js/main.js             # Nav scroll, reveals, cursor follow
│   ├── img/                   # Fotos del equipo, og-image, etc
│   └── fonts/                 # Reservado para self-host futuro
├── pages/                     # Futuro: blog/, casos/, servicios/
├── docs/
│   ├── design-system.md       # Tokens: colores, tipos, espaciados, motion
│   └── content-guidelines.md  # Tono de voz y reglas editoriales
├── CLAUDE.md                  # Contexto del proyecto para Claude Code
├── README.md
└── .gitignore
```

---

## Cómo correrlo localmente

Abrir `index.html` directamente en el navegador funciona, pero las fonts pueden cachearse raro. Mejor con un server estático:

```bash
# Opción 1: Python
python3 -m http.server 8000

# Opción 2: Node (si tenés npx)
npx serve .

# Opción 3: VS Code → extensión "Live Server" → Right-click index.html → "Open with Live Server"
```

Luego: `http://localhost:8000`

---

## Deploy

Recomendado: **Netlify** o **Vercel** con drag-and-drop o conectando este repo. Sin build command, output `/` (raíz del repo).

Alternativas: Cloudflare Pages, GitHub Pages (rama `main`, root).

---

## Workflow con Claude Code / Cursor

1. Abrí la carpeta del repo en Cursor o lanzá Claude Code desde la raíz.
2. Claude lee `CLAUDE.md` automáticamente — ahí está todo el contexto del proyecto.
3. Para mantener consistencia visual, leé `docs/design-system.md` antes de proponer cambios de UI.
4. Para tono de voz y copywriting, ver `docs/content-guidelines.md`.

---

## Roadmap (corto)

- [ ] Reemplazar SVG placeholders del equipo por fotos reales
- [ ] Reemplazar testimonios placeholder por reales
- [ ] Sustituir números de casos por reales
- [ ] Formulario de auditoría real (no `mailto:`)
- [ ] Plantilla de post de blog + listado de blog
- [ ] OG image real
- [ ] Script de tracking GA4 / Meta Pixel
- [ ] Páginas individuales por servicio
- [ ] Versión mobile audit (revisión fina)

---

© MMXXVI · NYX Soluciones Digitales
