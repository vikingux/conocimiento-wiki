# Cómo abrir los demos

| Archivo | Qué muestra | Abrir en el visor |
|---|---|---|
| [hola.lnd](hola.lnd) | Un dato con su fuente y una nota | [`../visor/render-v2.html?demo=demo-hola`](../visor/render-v2.html?demo=demo-hola) |
| [tablero-mudanza.lnd](tablero-mudanza.lnd) | Un tablero kanban con tres tareas | [`../visor/render-v2.html?demo=demo-tablero-mudanza&vista=tablero`](../visor/render-v2.html?demo=demo-tablero-mudanza&vista=tablero) |
| [decision-cafe.lnd](decision-cafe.lnd) | Una decisión con criterios, pesos y confianza | [`../visor/render-v2.html?demo=demo-decision-cafe`](../visor/render-v2.html?demo=demo-decision-cafe) |

Hay dos formas de abrirlos:
- **Desde el visor.** Abre `visor/render-v2.html` y agrega `?demo=` con el nombre de la tabla. Los tres demos ya vienen dentro de `visor/render-v2-demos.js`.
- **Desde tu disco.** Abre `visor/sitedeck.html`, pulsa «Abrir .lnd» y elige el archivo. Si editas el `.lnd`, el panel lo vuelve a leer al refrescar (en Chrome y Edge).

Para validar un archivo, usa el validador de [lnd-format](https://github.com/vikingux/lnd-format): `python3 tools/lnd_check_v12.py --estricto demos/hola.lnd`.
