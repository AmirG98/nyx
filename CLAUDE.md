# NYX — Contexto para Claude Code

> Este archivo se carga automáticamente al iniciar Claude Code en este repo. Acá vive todo lo que un colaborador (humano o IA) necesita saber antes de tocar una sola línea.

---

## ¿Qué es NYX?

Laboratorio digital basado en Carlos Paz, Argentina. Trabaja con tres tipos de cliente:
1. **Empresas** (e-commerce, SaaS, real estate, retail premium, financial services)
2. **Individuos** (coaches, consultores, autores, profesionales)
3. **ONG** (con tarifas diferenciales o pro-bono)

Posicionamiento: estrategia primero, ejecución después. Anti-bullshit. Resultados medibles antes que dashboards decorativos. No es una agencia de marketing — es un lab digital que cruza estrategia, tecnología y performance.

---

## Filosofía de diseño

**Dirección:** editorial nocturno. Premium pero no corporate. Tipografía-led. Asimetría intencional. Cero estética genérica de SaaS.

**Lo que SÍ:**
- Fondo cálido casi-negro, ink marfil, único acento dorado/cobre.
- Tipografía variable serif (Fraunces) en cursivas como acento expresivo.
- Números de sección estilo revista (01/, 02/...).
- Espaciado generoso. Líneas hairline. Borders en lugar de cards flotantes.
- Animaciones discretas, micro-interacciones precisas.
- Grain sutil con SVG noise para textura.

**Lo que NO:**
- Gradientes violeta-azul de SaaS.
- Glassmorphism gratis o "frosted glass" porque sí.
- Fonts genéricas (Inter, Roboto, Poppins, Montserrat).
- Iconografía de Heroicons / Phosphor por default — preferimos SVG inline custom.
- Layouts simétricos predecibles, three-column-cards-with-shadow.
- Emoji decorativo. Stock photography. Lottie animations gratuitas.
- Cualquier cosa que grite "generado por IA".

**Test rápido:** si una decisión visual la podría haber tomado un boilerplate de SaaS de 2022, está mal. Revisar.

---

## Stack y reglas técnicas

- **Vanilla HTML/CSS/JS.** No React, no Next, no Vite, no Tailwind. Sin build step.
- **CSS:** custom properties como sistema de tokens (ver `docs/design-system.md`). Sin preprocesadores.
- **JS:** un solo archivo, IIFE, sin dependencias.
- **Performance:** el sitio tiene que pesar poco y cargar rápido. Cualquier librería que se sume debe justificar su existencia.
- **Accesibilidad:** contraste AA mínimo. Estructura semántica. `alt` en imágenes reales (cuando se sumen). Focus states visibles.
- **Mobile-first** en práctica, aunque el código tenga breakpoints desktop-down. Probar en viewport real, no solo en devtools.

---

## Estructura del repo

```
index.html          → Home, única página por ahora
assets/css/         → Un solo styles.css. Bien comentado, secciones marcadas.
assets/js/          → Un solo main.js. IIFE. Modular por bloque.
assets/img/         → Imágenes reales cuando estén
docs/               → Design system + guías editoriales
pages/              → Reservado para futuras páginas (blog, casos)
```

**Regla:** mientras sea posible, todo lo nuevo se suma como sección dentro de `index.html` o como nueva página en `pages/`. No abrir directorios nuevos sin razón.

---

## Sistema de diseño (referencia rápida)

Todos los tokens viven en `:root` de `assets/css/styles.css`. Detalles completos en `docs/design-system.md`.

```css
--bg: #0E0D0B          /* fondo principal */
--bg-2: #15130F        /* surface secundaria */
--ink: #F5F1E8         /* texto principal */
--ink-2: #B8B2A4       /* texto secundario */
--ink-3: #6F6A5E       /* texto terciario / metadatos */
--accent: #D4A574      /* dorado/cobre — único acento */
--serif: 'Fraunces'    /* display, titulares, cursivas expresivas */
--sans: 'Geist'        /* body */
--mono: 'Geist Mono'   /* metadatos, números de sección */
```

**Regla del acento:** el dorado se usa con mesura. Si una sección tiene más de 2-3 elementos en `--accent`, está mal. Es un acento, no un color principal.

---

## Tono de voz y copy

Ver `docs/content-guidelines.md` para el detalle. Resumen:

- **Directo, sin pre-amble.** "El marketing digital se rompió" — no "En el dinámico mundo del marketing actual..."
- **Argentino neutro.** Nada de "tú/usted" puro España, nada de mexicanismos. Pero sin sobre-localizar tampoco.
- **Técnicamente honesto.** Si un número es real, va. Si es estimado o de un caso típico, decirlo o no ponerlo.
- **Cursiva serif para palabras-clave.** En titulares, una o dos palabras en cursiva (`<em>`) para crear ritmo. No abusar.
- **Sin clichés de agencia.** Prohibidos: "soluciones a medida", "tu socio estratégico", "potenciamos tu marca", "del concepto a la realidad", "data-driven" usado como adorno.

---

## Prioridades inmediatas (orden de importancia)

1. Reemplazar contenido placeholder (testimonios, equipo, casos).
2. Formulario de contacto real (no `mailto:`). Idealmente con webhook a Brevo o GHL.
3. Plantilla de post de blog + listado.
4. Páginas individuales por servicio (cuando se decida cuáles).
5. OG image y favicons.
6. Tracking (GA4 + Meta Pixel server-side cuando esté el dominio).

---

## Convenciones de commits

Estilo libre pero descriptivo. En español o inglés, consistente dentro del mensaje. Recomendado:

```
feat: agrega sección de casos de estudio
fix: corrige overflow del marquee en mobile
style: refina espaciado del hero en desktop
content: actualiza testimonios reales
docs: amplía design system con tokens de motion
```

---

## Lo que NUNCA debe pasar

- Subir keys, tokens o credenciales al repo.
- Reemplazar la tipografía sin hablarlo (Fraunces + Geist son parte de la identidad).
- Cambiar el color de acento sin razón estratégica.
- Sumar un framework o librería pesada para resolver algo que vanilla resuelve en 10 líneas.
- Texto en Lorem Ipsum en producción.

---

*Última actualización: abril 2026 · Mantenido por Amir Gómez*
