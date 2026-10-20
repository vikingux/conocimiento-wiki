/* Precios y cupos del pago único: DECIDIDOS Y PÚBLICOS (Verificado, decisión del fundador del 2026-10-19).
   La fuente es el .lnd (ESTRATEGIA, tabla tb-ltd); este objeto los copia y coherencia.py comprueba que coincidan.
   Cada número en pantalla con data-precio="<clave>" se rellena desde aquí (el HTML fijo ya trae el mismo valor). */
const PRECIOS = {
  cupo: 150,                         // primera ola del pago único (Solo + Equipo + Agencia)
  solo: 89, solo_wikis: 1, solo_asientos: 1,           // ≈ 7 meses de Pro (US$12)
  equipo: 349, equipo_wikis: 3, equipo_asientos: 5,    // ≈ 8 meses de 5 × US$9
  agencia: 899, agencia_wikis: 10, agencia_asientos: 15, agencia_cupo: 20, // ≈ 6 meses de Negocio (US$149)
  escrituras: 500, lecturas: 5000, gb: 2,              // topes del alojado, por asiento y por día
  dominio: 29                        // add-on de por vida
};
/* Lista de espera sin backend. Si CONFIG.mailto tiene una dirección, el botón abre el cliente de correo
   con el mensaje armado; si está vacío, solo muestra un aviso. Esta página nunca envía datos por su cuenta. */
const CONFIG = { mailto: "info@conocimiento.wiki", sitio: "https://conocimiento.wiki" };

const EN = {
  skip:"Skip to content", nav1:"Views", nav2:"Verified", nav3:"Agents", nav4:"Launch price",
  kicker:"Public launch: Nov 19, 2026 · waitlist open", h1:"The private wiki your agents read, cite and keep up to date.",
  lead:"Your team writes once, in text files that live in your own Git repository. The same page opens as a document, a slide deck or a board, and every fact says whether it is verified or an assumption. Soon your agents will query it over MCP and propose changes as pull requests.",
  cta1:"Join the waitlist", cta2:"See launch price", fine:"Nothing is charged today. Bring your own model key (BYOK). <span class=\"st hoy\">Today</span> = works in the demo · <span class=\"st pronto\">Soon</span> = being built.",
  srccap:"One page, as your wiki stores it", t1:"Source", t2:"Document", t3:"Board",
  ver:"Verified", sup:"Assumption", c1:"Every migration goes through staging with a rollback script in the PR.",
  c2:"The payments provider accepts 25 requests per second.", c2s:"team chat · to verify",
  k1:"To do", k2:"Doing", k3:"Done", c3:"Confirm the limit with the provider", c4:"Migration rule with a source",
  s1h:"One source, many views.", s1p:"Each page is a text file made of blocks. The same file reads as a document, a slide deck, a Kanban board, a big-screen reader, Markdown or HTML. Nobody copies content between tools.",
  v1:"Document", v2:"Slides", v3:"Board", v4:"Big screen",
  s2h:"Verified or assumed, on every claim.", s2p:"Every fact carries a source, a date and a confidence level. Whatever came from a chat stays marked as an assumption until someone checks it. Your agent cites what is verified and asks about the rest.",
  m1:"source", m2:"valid as of", m3:"confidence", m3v:"high",
  s3h:"Your agents will read and write over MCP.", s3p:"You will connect any MCP-compatible agent. It will search, ask for cited answers and propose changes. Whatever an agent writes arrives as a pull request to your repository and a person approves it. Secrets never reach its context.",
  s4h:"Skills that earn trust.", s4p:"A process that works is saved as a skill in a text file. Later, each time an agent uses it, it will report whether it worked, and skills with a good track record can be shared on a marketplace.",
  sk1:"runs", sk2:"reported failures", sk3:"Illustrative example",
  lk:"One-time launch payment · limited spots", lh:"A lifetime price for those who arrive first.",
  lp:"First wave of <span data-precio=\"cupo\"></span> spots. Reservations open from the waitlist once MCP access passes its tests; nothing is charged on this page.",
  once:"one-time", wiki1:"private wiki", wikis:"private wikis", seats:"seats", byok:"BYOK: your model key", pteam:"Team", pag:"Agency",
  add2:"Custom domain", seat1:"seat", cap:"agent changes per seat per day", lista:"waitlist",
  ag1:"Self-hosting from day one", ag2:"Hosted once the multi-client panel ships; only <span data-precio=\"agencia_cupo\"></span> spots",
  cubreh:"What the one-time payment covers", cubre1:"A lifetime license to run the server on your own machine, free of AGPL obligations, with version 1 updates.",
  cubre2:"Your wiki hosted by us, within the limits on the right. Your files stay in your Git.",
  topesh:"Hosted limits", tope1:"agent changes per seat per day", tope2:"MCP reads per seat per day", tope3:"GB of index per seat",
  nocubreh:"What it does not cover", nocubre1:"Model tokens (always BYOK), extra seats, usage above the limits, SSO or a service-level agreement.",
  terms:"Launch prices, public and fixed for the first wave. “Lifetime” means the life of the service: if hosting ever closed, you keep your files in Git and the self-hosting license. Full refund for 30 days. Full terms are published before any charge.",
  hoy:"Today", pronto:"Soon", pronto2:"Soon: track record and marketplace", f5:"Self-hosting",
  wh:"Join the waitlist.", wp:"We will write when spots open. One email, no spam.",
  f1:"Email", f2:"What interests you", f3:"Create skills", f4:"Save my spot",
  foot:"Public launch on Nov 19, 2026. Illustrative examples; no user counts.", contacto:"Contact:", mt:"Original in Spanish. This English version is a machine translation (AI), not reviewed by a native speaker."
};
const ES = {};
document.querySelectorAll("[data-i18n]").forEach(el => { ES[el.dataset.i18n] = el.innerHTML; });

function precios(){ document.querySelectorAll("[data-precio]").forEach(el => { const v = PRECIOS[el.dataset.precio]; if (v != null) el.textContent = v; }); }
function idioma(l){
  const D = l === "en" ? EN : ES;
  document.querySelectorAll("[data-i18n]").forEach(el => { const t = D[el.dataset.i18n]; if (t != null) el.innerHTML = t; });
  document.documentElement.lang = l; document.getElementById("lang").textContent = l === "en" ? "ES" : "EN";
  try { localStorage.setItem("cw-lang", l); } catch (e) {}
  precios();
}
let lang = new URLSearchParams(location.search).get("lang") || (function(){ try { return localStorage.getItem("cw-lang"); } catch (e) { return null; } })() || "es";
document.getElementById("lang").addEventListener("click", () => { lang = lang === "en" ? "es" : "en"; idioma(lang); });
idioma(lang);

/* pestañas de la fuente */
document.querySelectorAll(".tabs button").forEach(b => b.addEventListener("click", () => {
  document.querySelectorAll(".tabs button").forEach(x => x.setAttribute("aria-selected", String(x === b)));
  document.querySelectorAll(".pane").forEach(p => p.classList.toggle("on", p.dataset.p === b.dataset.v));
}));

/* entrada escalonada 80 ms y aparición al hacer scroll */
const quieto = matchMedia("(prefers-reduced-motion: reduce)").matches;
const els = [...document.querySelectorAll(".hero-copy > *, .src, .band, .ltd-head, .plan, .ex, .wait > *")];
if (!quieto && "IntersectionObserver" in window) {
  els.forEach(e => e.classList.add("rv"));
  const io = new IntersectionObserver(es => es.forEach(x => { if (x.isIntersecting) { x.target.classList.add("in"); io.unobserve(x.target); } }), { rootMargin: "0px 0px -8% 0px" });
  els.forEach((e, i) => { if (e.closest(".hero")) e.style.transitionDelay = (i * 80) + "ms"; io.observe(e); });
}

/* lista de espera: no envía nada */
document.getElementById("form").addEventListener("submit", ev => {
  ev.preventDefault();
  const f = ev.target, msg = document.getElementById("msg"), correo = f.correo.value.trim();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo)) { msg.textContent = lang === "en" ? "Check the email address." : "Revisa el correo."; f.correo.focus(); return; }
  if (CONFIG.mailto) {
    location.href = "mailto:" + CONFIG.mailto + "?subject=" + encodeURIComponent("Lista de espera: " + f.interes.value) + "&body=" + encodeURIComponent(correo);
    msg.textContent = lang === "en" ? "Your email app should open with the message ready." : "Se abrirá tu correo con el mensaje listo.";
  } else {
    msg.textContent = lang === "en" ? "Thanks. This prototype does not store anything yet; the waitlist opens soon." : "Gracias. Este prototipo todavía no guarda nada; la lista abre pronto.";
  }
});
