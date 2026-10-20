# conocimiento.wiki 0.9.2

> Agentic y human, somos libres como un OS.

Primera versión pública. Trae la página de inicio de prelanzamiento, el visor sin conexión y ejemplos para probar el formato `.lnd` sin instalar nada.

## Qué trae
- **Inicio** (`index.html`): qué es conocimiento.wiki, cómo se ve una página y los precios de lanzamiento.
- **Visor** (`visor/`, BSL 1.1): `render-v2.html` abre un `.lnd` en vistas web, carta, slides, tablero, TV y fuente. `sitedeck.html` abre varios a la vez en paneles. Funciona sin servidor y sin red.
- **Demos** (`demos/`): `hola`, `tablero-mudanza` y `decision-cafe`.
- **Cuaderno de ejemplo** (`notebook/`) en español, inglés y chino.
- **Demo de venta** (`demo/`, BSL 1.1): un sitio `.lnd` con casos de ejemplo, entre ellos el trámite del RUC en Ecuador (ilustrativo, no es asesoría). Abre `demo/sitio/index.html` o usa el programa `lndvisor`.

## Archivos de la release
- `conocimiento-wiki-0.9.2.zip`: el repositorio completo. Descomprime y abre `index.html` o `visor/sitedeck.html`.
- `abrir-windows.exe`, `abrir-mac-arm`, `abrir-mac-intel`, `abrir-linux` y `abrir-linux-arm`: el programa `lndvisor`. Abre la demo en el navegador y trae un servidor MCP de solo lectura que por defecto responde solo en tu equipo.
- `demo-venta.zip`: la demo completa con los cinco programas, lista para descomprimir.

## Comprobado
En Chrome, a 1440 y 375 px: sin errores de consola y sin peticiones de red externas.

El formato está en [lnd-format 0.9.2](https://github.com/vikingux/lnd-format) (Apache-2.0).
