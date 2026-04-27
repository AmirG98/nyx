# NYX — Design System

Sistema de diseño del sitio NYX. Todos los tokens viven como CSS custom properties en `assets/css/styles.css`.

---

## Color

### Surface (fondos)

| Token | Valor | Uso |
|---|---|---|
| `--bg` | `#0E0D0B` | Fondo principal del sitio. Casi-negro cálido con un matiz marrón. **No usar `#000000`.** |
| `--bg-2` | `#15130F` | Surface secundaria: cards, testimonios, CTAs. |
| `--bg-3` | `#1C1A14` | Surface terciaria: estados hover de cards. |

### Lines (bordes y separadores)

| Token | Valor | Uso |
|---|---|---|
| `--line` | `rgba(245, 241, 232, 0.08)` | Líneas hairline, separadores, bordes de cards en reposo. |
| `--line-strong` | `rgba(245, 241, 232, 0.18)` | Bordes de inputs, botones ghost, elementos interactivos. |

### Ink (texto)

| Token | Valor | Uso |
|---|---|---|
| `--ink` | `#F5F1E8` | Texto principal. Marfil cálido. **No usar `#FFFFFF`.** |
| `--ink-2` | `#B8B2A4` | Texto secundario, párrafos de soporte. |
| `--ink-3` | `#6F6A5E` | Metadatos, etiquetas mono, texto terciario. |

### Accent

| Token | Valor | Uso |
|---|---|---|
| `--accent` | `#D4A574` | Dorado/cobre. **Único color de acento del sistema.** Cursivas en titulares, hover states críticos, dot indicators. |
| `--accent-deep` | `#B0834A` | Dorado profundo. Gradientes y avatares. |
| `--accent-soft` | `rgba(212, 165, 116, 0.12)` | Fondos atmosféricos, glows sutiles. |

**Regla del acento:** es un acento, no un color principal. Si hay más de 2-3 elementos dorados visibles en una sección, sobra alguno.

---

## Tipografía

### Familias

```css
--serif: 'Fraunces'       /* display variable serif */
--sans:  'Geist'          /* body sans */
--mono:  'Geist Mono'     /* metadatos */
```

Servidas vía Google Fonts. Considerar self-host en `assets/fonts/` cuando el sitio entre en producción seria.

### Escala de uso

| Contexto | Familia | Peso | Tamaño | Notas |
|---|---|---|---|---|
| Hero headline | `--serif` | 300 | `clamp(56px, 11vw, 188px)` | line-height 0.92, tracking -0.04em |
| Section title (H2) | `--serif` | 300 | `clamp(36px, 5.5vw, 76px)` | line-height 0.98 |
| Lead / lede | `--serif` | 300 | `clamp(22px, 2.6vw, 36px)` | Cursiva opcional para tono editorial |
| Card title (H3) | `--serif` | 300 | 24-42px | Cursiva en audiencias |
| Body | `--sans` | 400 | 14-16px | line-height 1.5-1.65 |
| Button | `--sans` | 500 | 13-14px | tracking -0.005em |
| Metadata / kicker | `--mono` | 400-500 | 11-12px | tracking 0.10-0.16em, UPPERCASE |
| Section number | `--mono` | 400 | 12px | color `--accent`, formato "01 / Manifiesto" |

### Reglas de cursiva

- **Cursiva serif (`<em>` dentro de titulares):** se usa para crear ritmo y jerarquía. Una o dos palabras por titular, máximo. Va en color `--accent`.
- **No abusar:** si todo está en cursiva, nada está en cursiva.
- **Nunca cursiva en body sans (Geist).** La cursiva es un recurso del serif.

### Variable axis (Fraunces)

Fraunces es variable. Usar `font-variation-settings: "opsz" 144;` en titulares grandes para activar el optical size más expresivo. Ya está aplicado en `.hero-headline em`.

---

## Espaciado

No usamos una escala estricta tipo Tailwind. Pero respetamos estos múltiplos:

```
4 · 8 · 12 · 16 · 20 · 24 · 32 · 40 · 48 · 60 · 80 · 100 · 120
```

**Reglas:**
- Padding interno de secciones: `120px` arriba (`section-head` ya lo aplica).
- Gap entre cards: `24-32px`.
- Container max-width: `1440px`. Padding lateral: `32px`.
- Entre h2 y contenido: `80px` desktop / `50px` mobile.

---

## Motion

### Easings

```css
--ease:   cubic-bezier(0.22, 1, 0.36, 1)    /* default. Decelera fuerte al final. */
--ease-2: cubic-bezier(0.65, 0, 0.35, 1)    /* simétrico, más mecánico */
```

Default: `--ease`. Da sensación de cosas que aterrizan suaves.

### Duraciones

| Tipo | Duración |
|---|---|
| Hover state simple (color, opacity) | 0.3s |
| Hover state compuesto (transform + bg) | 0.4-0.5s |
| Reveals on scroll | 1s |
| Animaciones de entrada (hero) | 1.2s con stagger 0.15-0.2s |
| Marquee (logos) | 40s lineal infinito |

**Regla:** nada que pasa más rápido de 200ms en un hover. Nada más lento de 1.2s en una animación de entrada (excepto marquees y loops).

### Reduced motion

Falta agregar `@media (prefers-reduced-motion: reduce)` que desactive transforms y animaciones. **TODO** para una próxima vuelta.

---

## Shapes y radios

| Elemento | Border-radius |
|---|---|
| Cards, panels | `2-4px` |
| Buttons (pills) | `100px` (full pill) |
| Avatars, dots | `50%` |
| Inputs | `100px` (cuando es pill) o `4px` |

**Sin radios redondos genéricos** (`12px`, `16px`). Lo nuestro es: bordes muy nítidos (`2px`) o pills completos (`100px`).

---

## Iconografía

- **SVG inline custom**, no library.
- Icons de flecha: `path d="M2 6 H10 M6 2 L10 6 L6 10"` (12×12, stroke 1.2)
- Icons de up-right (link external/CTA): `path d="M3 11 L11 3 M5 3 H11 V9"` (14×14, stroke 1.4)
- Stroke siempre `currentColor`. Nunca fill default.

---

## Patrones de UI

### Section header

```html
<div class="section-head">
  <div class="section-num">XX / Nombre</div>
  <h2 class="section-title reveal">Titular con <em>cursiva</em>.</h2>
</div>
```

### Card básica

```html
<div class="caso reveal">
  <div class="caso-tag"><span>Etiqueta</span><span>CATEGORÍA</span></div>
  <!-- contenido -->
</div>
```

### Reveal on scroll

Cualquier elemento con clase `.reveal` se anima al entrar al viewport. La lógica vive en `main.js` con `IntersectionObserver`. **Threshold: 0.12.**

---

## Accesibilidad

- Contraste mínimo: AA (4.5:1 para body, 3:1 para large text).
- Focus states visibles en todos los interactivos.
- Estructura semántica: `<header>`, `<nav>`, `<section>`, `<article>`, `<footer>`.
- `alt` descriptivo cuando se sumen imágenes reales.
- **TODO:** revisar lectura con screen reader del cursor custom (debería ser ignorado).

---

## Cosas que faltan / TODO

- [ ] `prefers-reduced-motion` en todas las animaciones.
- [ ] Self-host de fuentes en `assets/fonts/` cuando sea producción.
- [ ] Tokens de tipografía en clamp() centralizados como custom properties.
- [ ] Escala de espaciado como tokens (`--space-1`, `--space-2`...).
- [ ] Light theme alternativo (si llegara a hacerse falta).
- [ ] Print styles.

---

*Última actualización: abril 2026*
