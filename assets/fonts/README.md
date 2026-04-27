# /assets/fonts

Reservado para self-hosting de Fraunces y Geist cuando el sitio entre en producción.

Por ahora se sirven vía Google Fonts (ver `<link>` en `index.html`).

Cuando se haga el switch a self-host:
1. Bajar Fraunces de https://fonts.google.com/specimen/Fraunces (Variable, italic)
2. Bajar Geist y Geist Mono de https://vercel.com/font
3. Convertir a WOFF2 si no vienen ya
4. Crear `fonts.css` con `@font-face` y `font-display: swap`
5. Reemplazar el `<link>` de Google Fonts por `<link rel="stylesheet" href="assets/fonts/fonts.css">`
