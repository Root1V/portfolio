(function () {
  var dict = {
    es: {
      "nav.projects": "Proyectos",
      "nav.leadership": "Liderazgo",
      "nav.global": "Global",
      "nav.speaking": "Charlas",
      "nav.timeline": "Trayectoria",
      "nav.certs": "Certificaciones",
      "nav.contact": "Contacto",
      "nav.resume": "CV",

      "hero.eyebrow": "Arquitecto de IA y Empresarial · BBVA Perú",
      "hero.lede": "Diseño arquitecturas de IA agéntica, cloud-native y escalables — uniendo estrategia de negocio, tecnología emergente de IA y ejecución empresarial. Más de 15 años pasando de desarrollador de software a liderar IA empresarial, y sigo escribiendo código.",
      "hero.view": "Ver proyectos",

      "about.label": "Sobre mí",
      "about.h2": "Estrategia y arquitectura, no una u otra",
      "about.p1": "Lidero la estrategia de Arquitectura de IA y Nube en BBVA Perú, en la intersección de la estrategia de negocio, la arquitectura tecnológica y la innovación — definiendo cómo una institución financiera regulada adopta IA agéntica, plataformas de GenAI y arquitectura cloud-native sin comprometer seguridad ni cumplimiento.",
      "about.p2": "Mi camino — de desarrollador de software a arquitecto de TI y hoy líder de Arquitectura de IA y Empresarial — me da una perspectiva que combina visión estratégica con criterio práctico de implementación: entiendo tanto las decisiones de negocio detrás de una iniciativa de IA como los detalles de arquitectura que determinan si realmente funciona en producción. He liderado equipos de hasta 50 personas en tres dominios de arquitectura y, desde mi primer año en BBVA, trabajo codo a codo con los equipos internacionales de arquitectura del Grupo — España, México, Colombia, Argentina, Turquía — coordinando estándares y soluciones entre geografías, no solo en Perú. Fuera de mi rol en BBVA mantengo un laboratorio self-hosted de infraestructura de IA de nivel productivo — los cinco proyectos de abajo son una muestra de ese trabajo, todo open source, sin dependencia de proveedor — y he construido un LLM transformer desde cero como estudio autodidacta, así que entiendo los modelos por dentro, no solo a través de una API.",

      "projects.label": "Trabajo seleccionado",
      "projects.h2": "Cinco proyectos de mi laboratorio público",
      "proj.argus": "Observabilidad nativa en OTel y AIOps para sistemas de IA — atribución de costo/tokens de GenAI y detección de anomalías en menos de 2 s en el camino crítico. Corre como piloto en vivo con más de 68k spans reales y 229 pruebas.",
      "proj.prometheus": "Gateway de inferencia de LLM self-hosted que enruta entre llama.cpp, MLX, vLLM y SGLang, con autenticación JWT, autorización por modelo y trazabilidad completa con OpenTelemetry.",
      "proj.aerarium": "Core bancario para comercio agéntico — un libro mayor real de partida doble, append-only, en Rust, donde los agentes de IA son titulares de cuenta de primera clase: autorizaciones hold-to-capture y mandatos de pago con consentimiento.",
      "proj.mercatus": "Framework para comercio agéntico — agentes de IA que descubren, pagan y monetizan servicios de forma autónoma, con adaptadores de liquidación intercambiables x402 (USDC) y AP2 (basado en mandatos).",
      "proj.synaptum": "Mi propio runtime durable de agentes para Python — ejecución basada en generadores con checkpoint/resume e identidad determinista de pasos, sin dependencias obligatorias. La orquestación multiagente está en el roadmap, aún no construida.",
      "proj.link": "Ver en GitHub →",

      "lead.label": "Caso de liderazgo",
      "lead.h2": "Liderando la transformación del Core Bancario",
      "lead.meta.role": "<strong>Rol:</strong> Sponsor → Product Owner",
      "lead.meta.program": "<strong>Programa:</strong> Horizon Alpha (financiado por el Holding, &gt;€1M en 3 años)",
      "lead.meta.where": "<strong>Dónde:</strong> BBVA Perú",
      "lead.meta.when": "<strong>Cuándo:</strong> 2019–2024",
      "lead.p1": "BBVA Perú necesitaba evolucionar su plataforma de core bancario para habilitar nuevos productos y servicios digitales sin afectar operaciones críticas. Lideré la estrategia de esa evolución: 16 capacidades de core reutilizables en las capas de datos, arquitectura bancaria y multicanal, para que los productos se construyan encima en lugar de reconstruir cada vez la gestión de clientes, consentimientos o firmas — habilitando la transformación de Banca Retail (acceso, consentimientos, posición global, movimientos en la app móvil) y procesos de Banca Empresa (pagos masivos de nómina, multifirma, app móvil de empresa).",
      "lead.li1": "Fui <strong>Sponsor</strong> del programa global Horizon Alpha, impulsando la adopción del nuevo Core en las iniciativas estratégicas del país.",
      "lead.li2": "Luego fui <strong>Product Owner</strong> de Horizon Alpha 1.0, acelerando la implementación de los módulos clave para soportar nuevos productos y servicios bancarios.",
      "lead.li3": "Integré la arquitectura transaccional (APX) con plataformas de mensajería asíncrona, coordinando con los equipos globales de arquitectura del Grupo BBVA para mantener el sistema modular y escalable.",
      "lead.li4": "Representé a ingeniería en el equipo de Innovation Leadership del banco, ayudando a estructurar programas de innovación transversales.",
      "lead.stat1": "de cumplimiento de KPIs en el despliegue y evolución de Horizon Alpha",
      "lead.stat2": "de las iniciativas estratégicas del país corren sobre el nuevo Core, dando servicio a los canales principales de BBVA Perú",
      "lead.stat3": "más rápido el time-to-market: un producto pasó de 3–4 trimestres a 1–1.5 sobre el nuevo Core",
      "lead.stat4": "capacidades de core reutilizables entregadas; ~7 productos de Banca Retail y Empresa construidos sobre ellas",
      "lead.p2": "Más allá del programa de Core Bancario, enseñé estándares de arquitectura y tendencias tecnológicas emergentes como profesor en la Tech University interna de BBVA durante tres años consecutivos (2018–2020), y mentoreé ingenieros a través del programa Open Mentoring del banco.",

      "global.label": "Asignaciones internacionales",
      "global.h2": "Dos estadías en la sede de BBVA en Madrid",
      "global.c1.meta": "2018 · Madrid, España",
      "global.c1.h4": "Arquitectura de microservicios y gRPC",
      "global.c1.p": "Diseñé la nueva arquitectura de microservicios en contenedores del banco, basada en gRPC y desplegable en la plataforma de nube híbrida de BBVA, trabajando directamente con el equipo global de arquitectura del Grupo.",
      "global.c2.meta": "2025 · Madrid, España — Programa Internacional PDI",
      "global.c2.h4": "Equipo de Arquitectura de IA del Grupo",
      "global.c2.p": "Me uní al equipo de Arquitectura de IA del holding de BBVA para ayudar a diseñar la arquitectura de IA agéntica del Grupo, incluyendo una arquitectura de referencia y un decision framework para elegir la tecnología correcta en cada caso de uso.",

      "speak.label": "Charlas y reconocimiento",
      "speak.h2": "Contar la estrategia, no solo construirla",
      "speak.c1.meta": "Septiembre 2026 · Lima, Perú",
      "speak.c1.h4": "Panel C-level — Semana Económica",
      "speak.c1.p": "Invitado a representar a BBVA en un panel para un club privado de ejecutivos C-level de empresas peruanas, junto a representantes de Microsoft y Sonda. Destacado en el perfil de una revista de ejecutivos previo al evento.",
      "speak.c2.meta": "Junio 2026 · Lima, Perú",
      "speak.c2.h4": "Investors Peru Event",
      "speak.c2.p": "Hablé sobre cómo BBVA lleva su estrategia de IA a la conversación con clientes institucionales — aterrizando la estrategia en casos de uso concretos, no solo en diapositivas.",

      "tl.label": "Trayectoria",
      "tl.h2": "De desarrollador a líder de Arquitectura de IA y Empresarial",
      "tl1.date": "2024 — Actualidad",
      "tl1.h4": "Líder de Arquitectura de IA y Empresarial — BBVA Perú",
      "tl1.p": "Defino la estrategia de arquitectura de IA y Nube del banco en la intersección de negocio, tecnología e innovación; presenté al CIO una estrategia de arquitectura mixta de modelos grandes y pequeños (orientada a costo y latencia). En 2025, asignación internacional (Programa PDI) con el equipo de Arquitectura de IA del holding de BBVA en Madrid — parte del equipo que co-definió la v1 del Decision Framework de IA de todo el Grupo (no-code / low-code / build por caso de uso), presentado a la alta dirección del Grupo. Definí el modelo local de gobierno de pilotos de IA con Strategy &amp; Control involucrado desde el primer día, y traduje la nueva regulación peruana de IA en reglas de diseño: los agentes de cara al cliente se identifican como IA y el contenido generado se etiqueta.",
      "tl2.h4": "Arquitecto Líder de Core Bancario y Nube — BBVA Perú",
      "tl2.p": "Sponsor y luego Product Owner de la transformación del Core Bancario Horizon Alpha. Lideré hasta ~50 personas (20 internas, 30 externas de cuatro consultoras) en arquitectura de Core, APX y Host, gestionando el presupuesto de capacidad en base a costo por FTE. Impulsé la migración transaccional de legacy a NextGen del 5% (2018) al 71% (2026): el volumen transaccional creció 5x mientras el costo creció 2x (2020–2024). Representé a ingeniería en el equipo de Innovation Leadership.",
      "tl3.h4": "Manager de Arquitectura Backend — BBVA Perú",
      "tl3.p": "Promovido a gestionar las arquitecturas backend globales del banco (ASO, APX, Mainframe) y su plataforma de nube privada (Ether). Enseñé estándares de arquitectura como profesor en la Tech University interna de BBVA (2018–2020).",
      "tl4.h4": "Arquitecto de APX y Nube Privada — BBVA Perú",
      "tl4.p": "Dirigí la evolución de la arquitectura transaccional (APX) y de la nube privada del banco (Ether). En 2018, asignación internacional en la sede de BBVA en Madrid para diseñar una arquitectura de microservicios en contenedores basada en gRPC para la plataforma de nube híbrida del Grupo.",
      "tl5.h4": "Arquitecto de Plataforma como Servicio (PaaS) — BBVA Perú",
      "tl5.p": "Lideré la evolución de la plataforma de servicios/API del banco (ASO) y definí los estándares para la adopción de microservicios y arquitectura orientada a eventos.",
      "tl6.h4": "Arquitecto de TI / Analista SOA — Equifax",
      "tl6.p": "Diseñé arquitecturas para proyectos críticos (Autoservicio, Smart SVI, Datamart Financiero) y pipelines de procesamiento de datos a gran escala (OSTRA).",
      "tl7.h4": "Desarrollador de Software — CSTI, Softmarkperu, Universidad JFSC",
      "tl7.p": "Construí sistemas en Java/Spring y .NET para clientes de salud, telecomunicaciones y sector público — la base práctica de la que aún se nutren mis decisiones de arquitectura.",

      "cert.label": "Certificaciones",
      "cert.h2": "Formación y certificaciones",
      "cert.cs50": "CS50: Inteligencia Artificial con Python",
      "cert.harvard": "Universidad de Harvard",
      "cert.cs221": "CS221: IA — Principios y Técnicas",
      "cert.stanford": "Universidad de Stanford",
      "cert.llm": "Agentes LLM (MOOC)",
      "cert.dlspec": "Especialización en Deep Learning",
      "cert.togaf": "TOGAF — Arquitectura Empresarial",
      "cert.lead": "Programa de Liderazgo (6 meses)",
      "cert.pm": "Gestión de Proyectos (PMBOK)",

      "contact.label": "Contacto",
      "contact.h2": "Hablemos",
      "contact.p": "Abierto a conversaciones sobre liderazgo en arquitectura de IA, asesoría o charlas sobre IA agéntica en industrias reguladas.",

      "footer.text": "Victor Espiritu Santiago — Arquitectura de IA y Empresarial · Hecho sin frameworks, sin dependencia de proveedor."
    }
  };

  var nodes = Array.prototype.slice.call(document.querySelectorAll("[data-i18n]"));
  var en = {};
  nodes.forEach(function (n) {
    var k = n.getAttribute("data-i18n");
    if (!(k in en)) en[k] = n.innerHTML;
  });
  var buttons = Array.prototype.slice.call(document.querySelectorAll(".lang-toggle button[data-lang]"));

  function apply(lang) {
    nodes.forEach(function (n) {
      var k = n.getAttribute("data-i18n");
      var v = lang === "en" ? en[k] : dict[lang] && dict[lang][k];
      if (v != null) n.innerHTML = v;
    });
    document.documentElement.lang = lang;
    document.documentElement.setAttribute("data-lang", lang);
    buttons.forEach(function (b) {
      var active = b.getAttribute("data-lang") === lang;
      b.classList.toggle("active", active);
      b.setAttribute("aria-pressed", active ? "true" : "false");
    });
  }

  var saved = null;
  try { saved = localStorage.getItem("lang"); } catch (e) {}
  var browser = (navigator.language || "").toLowerCase();
  var initial = saved || (browser.indexOf("es") === 0 ? "es" : "en");
  apply(initial);

  buttons.forEach(function (b) {
    b.addEventListener("click", function () {
      var lang = b.getAttribute("data-lang");
      apply(lang);
      try { localStorage.setItem("lang", lang); } catch (e) {}
    });
  });
})();
