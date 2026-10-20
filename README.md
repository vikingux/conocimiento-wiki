# conocimiento.wiki

> Agentic y human, somos libres como un OS.

Una wiki que tus agentes pueden citar. Cada página es un archivo `.lnd` de texto plano: se lee como documento, presentación o tablero, y cada dato dice si está verificado o es un supuesto. Este repositorio tiene la página de inicio de prelanzamiento, el visor sin conexión y ejemplos públicos. Versión **0.9.2**.

## Qué hay aquí

| Carpeta | Qué es | Licencia |
|---|---|---|
| `index.html`, `site.css`, `site.js`, `favicon.svg` | Página de inicio de prelanzamiento. Sin backend: el formulario abre tu correo hacia info@conocimiento.wiki | Todos los derechos reservados ([LICENSE](LICENSE)) |
| `visor/` | Visor sin conexión: `render-v2.html` (un `.lnd` en vistas web, carta, slides, tablero, TV y fuente) y `sitedeck.html` (varios `.lnd` en paneles) | BSL 1.1 ([visor/LICENSE](visor/LICENSE)) |
| `demos/` | Tres `.lnd` chicos para probar: [cómo abrirlos](demos/COMO_ABRIR.md) | ver [LICENSE](LICENSE) |
| `notebook/` | Un cuaderno agéntico de ejemplo en es, en y zh | ver [LICENSE](LICENSE) |
| `lnd/` | Los `.lnd` públicos del formato y del sitio | ver [LICENSE](LICENSE) |
| `demo/` | Demo de venta: un sitio `.lnd` que funciona sin internet. Los programas `abrir-*` van como archivos de la release: [cómo abrirla](demo/README.md) | BSL 1.1 ([demo/LICENSE](demo/LICENSE)) |
| `docs/capturas/` | Capturas del inicio y del visor a 1440 y 375 px | — |
| `fonts/`, `visor/fonts/`, `demo/sitio/fonts/` | Fraunces, Public Sans e IBM Plex Mono | SIL OFL 1.1 (`OFL.txt`) |

Terceros (fuentes e íconos de Lucide, ISC): [NOTICE](NOTICE).

## Probarlo

1. Descarga o clona el repositorio.
2. Abre `index.html` con doble clic para ver el inicio.
3. Abre `visor/sitedeck.html` para ver varios documentos a la vez, o `visor/render-v2.html?demo=demo-hola` para ver uno solo.
4. Abre `demo/sitio/index.html` para ver la demo de venta.

Todo funciona desde el disco, sin servidor y sin conexión. El visor no hace peticiones de red.

El formato `.lnd` (spec, palabras reservadas, parser y validador) está en su propio repositorio, [lnd-format](https://github.com/vikingux/lnd-format), con licencia Apache-2.0.

Lo que viene: un motor de respuestas con cita, en preparación.

Contacto: [info@conocimiento.wiki](mailto:info@conocimiento.wiki).

---

## English

> Agentic and human, we are free like an OS.

A wiki your agents can cite. Every page is a plain-text `.lnd` file that reads as a document, slides or a board, and every claim says whether it is verified or an assumption. This repository holds the prelaunch home page, the offline viewer (`visor/`, BSL 1.1), a sales demo site (`demo/`, BSL 1.1; the `abrir-*` programs ship as release assets) and public examples. Open `index.html` or `visor/sitedeck.html` from disk: no server and no network needed. The `.lnd` format itself lives in [lnd-format](https://github.com/vikingux/lnd-format) (Apache-2.0). Version 0.9.2.
