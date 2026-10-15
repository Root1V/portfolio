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

      "hero.eyebrow": "Arquitecto Empresarial y de IA · BBVA Perú",
      "hero.lede": "Diseño arquitecturas de IA agéntica, cloud-native y escalables, conectando la estrategia de negocio, la tecnología emergente de IA y la ejecución en la empresa. Más de 15 años: de desarrollador de software a liderar la IA empresarial, sin perder el contacto con la tecnología.",
      "hero.view": "Ver proyectos",

      "about.label": "Sobre mí",
      "about.h2": "Estrategia y arquitectura: no una sin la otra",
      "about.p1": "Lidero la estrategia de Arquitectura de IA y Cloud de BBVA Perú, en el punto donde se cruzan la estrategia de negocio, la arquitectura tecnológica y la innovación: definiendo cómo un banco regulado adopta IA agéntica, plataformas de GenAI y arquitectura cloud-native sin comprometer la seguridad ni el cumplimiento normativo.",
      "about.p2": "Mi recorrido —de desarrollador de software a arquitecto de TI y hoy líder de Arquitectura Empresarial y de IA— me da una perspectiva que combina visión estratégica con criterio de implementación: entiendo tanto las decisiones de negocio detrás de una iniciativa de IA como los detalles de arquitectura que deciden si funciona en producción. He liderado equipos de hasta 50 personas en tres dominios de arquitectura y, desde mi primer año en BBVA, trabajo de la mano con los equipos internacionales de arquitectura del Grupo —España, México, Colombia, Argentina y Turquía— coordinando estándares y soluciones entre geografías, no solo para Perú. Fuera del banco mantengo un laboratorio self-hosted de infraestructura de IA de nivel productivo: los cinco proyectos de abajo son una muestra de ese trabajo, todo open source y sin lock-in. También construí un LLM transformer desde cero como estudio personal, así que entiendo los modelos por dentro y no solo a través de una API.",

      "projects.label": "Proyectos destacados",
      "projects.h2": "Cinco proyectos de mi laboratorio público",
      "proj.argus": "Observabilidad nativa en OpenTelemetry y AIOps para sistemas de IA: atribución de costo y tokens de GenAI y detección de anomalías en el hot path en menos de 2 segundos. Corre como piloto en vivo con más de 68 mil spans reales y 229 tests.",
      "proj.prometheus": "Gateway de inferencia de LLM self-hosted que enruta el tráfico entre llama.cpp, MLX, vLLM y SGLang, con autenticación JWT, autorización por modelo y trazas completas con OpenTelemetry.",
      "proj.aerarium": "Core bancario para comercio agéntico: un ledger real de partida doble, append-only y escrito en Rust, donde los agentes de IA son titulares de cuenta de pleno derecho, con autorizaciones hold-to-capture y mandatos de pago respaldados por consentimiento.",
      "proj.mercatus": "Framework de comercio agéntico: agentes de IA que descubren, pagan y monetizan servicios de forma autónoma, con adaptadores de liquidación intercambiables para x402 (USDC) y AP2 (basado en mandatos).",
      "proj.synaptum": "Mi propio runtime durable de agentes para Python: ejecución basada en generadores con checkpoint/resume e identidad determinista de cada paso, sin dependencias obligatorias. La orquestación multiagente está en el roadmap; todavía no está construida.",
      "proj.link": "Ver en GitHub →",

      "lead.label": "Caso de liderazgo",
      "lead.h2": "Liderar la transformación del core bancario",
      "lead.meta.role": "<strong>Rol:</strong> Sponsor → Product Owner",
      "lead.meta.program": "<strong>Programa:</strong> Horizon Alpha (financiado por el Holding, más de €1 M en 3 años)",
      "lead.meta.where": "<strong>Dónde:</strong> BBVA Perú",
      "lead.meta.when": "<strong>Cuándo:</strong> 2019–2024",
      "lead.p1": "BBVA Perú necesitaba evolucionar su core bancario para lanzar nuevos productos y servicios digitales sin poner en riesgo la operación crítica. Lideré la estrategia de esa evolución: 16 capacidades de core reutilizables en tres capas —datos, arquitectura bancaria y multicanal— para que cada producto se construya encima en lugar de volver a desarrollar la gestión de clientes, consentimientos o firmas. Sobre ese core se habilitó la transformación de Banca Retail (gestión de acceso, consentimientos, posición global y movimientos en la app móvil) y procesos de Banca Empresa (pagos masivos de nómina, multifirma de operaciones y la app móvil de empresas).",
      "lead.li1": "Como <strong>Sponsor</strong> del programa global Horizon Alpha, impulsé la adopción del nuevo core en las iniciativas estratégicas del país.",
      "lead.li2": "Después, como <strong>Product Owner</strong> de Horizon Alpha 1.0, aceleré la implementación de los módulos clave para soportar nuevos productos y servicios bancarios.",
      "lead.li3": "Integré la arquitectura transaccional (APX) con plataformas de mensajería asíncrona, en coordinación con los equipos globales de arquitectura del Grupo BBVA, manteniendo el sistema modular y escalable.",
      "lead.li4": "Representé a Ingeniería en el equipo de Innovation Leadership del banco, ayudando a estructurar los programas de innovación transversales.",
      "lead.stat1": "de cumplimiento de los KPIs de despliegue y evolución de Horizon Alpha",
      "lead.stat2": "de las iniciativas estratégicas del país ya corren sobre el nuevo core y dan servicio a los canales principales de BBVA Perú",
      "lead.stat3": "más rápido el time-to-market: un producto pasó de 3–4 trimestres a 1–1.5 sobre el nuevo core",
      "lead.stat4": "capacidades de core reutilizables; sobre ellas se construyeron ~7 productos de Banca Retail y Empresa",
      "lead.p2": "Además del programa de core bancario, fui profesor de estándares de arquitectura y tendencias tecnológicas en la Tech University de BBVA durante tres años consecutivos (2018–2020) y mentor de ingenieros en el programa Open Mentoring del banco.",

      "global.label": "Asignaciones internacionales",
      "global.h2": "Dos asignaciones en la sede del Grupo BBVA en Madrid",
      "global.c1.meta": "2018 · Madrid, España",
      "global.c1.h4": "Arquitectura de microservicios y gRPC",
      "global.c1.p": "Diseñé la nueva arquitectura de microservicios en contenedores del banco, basada en gRPC y desplegable sobre la plataforma de Cloud híbrida de BBVA, trabajando directamente con el equipo global de arquitectura del Grupo.",
      "global.c2.meta": "2025 · Madrid, España — Programa Internacional PDI",
      "global.c2.h4": "Equipo de Arquitectura de IA del Grupo",
      "global.c2.p": "Me incorporé al equipo de Arquitectura de IA del Holding para ayudar a diseñar la arquitectura de IA agéntica del Grupo: una arquitectura de referencia y un decision framework para elegir la tecnología adecuada para cada caso de uso.",

      "speak.label": "Charlas y reconocimientos",
      "speak.h2": "Contar la estrategia, no solo construirla",
      "speak.c1.meta": "Setiembre 2026 · Lima, Perú",
      "speak.c1.h4": "Panel C-level — Semana Económica",
      "speak.c1.p": "Invitado a representar a BBVA en un panel ante un club privado de ejecutivos C-level de empresas peruanas, junto a representantes de Microsoft y Sonda. Antes del evento, una revista de ejecutivos publicó mi perfil como panelista.",
      "speak.c2.meta": "Junio 2026 · Lima, Perú",
      "speak.c2.h4": "Investors Peru Event",
      "speak.c2.p": "Expuse cómo BBVA lleva su estrategia de IA a la conversación con clientes institucionales: aterrizándola en casos de uso concretos, no en diapositivas.",

      "tl.label": "Trayectoria",
      "tl.h2": "De desarrollador a líder de Arquitectura Empresarial y de IA",
      "tl1.date": "2024 — Actualidad",
      "tl1.h4": "Líder de Arquitectura Empresarial y de IA — BBVA Perú",
      "tl1.p": "Defino la estrategia de arquitectura de IA y Cloud del banco en el cruce entre negocio, tecnología e innovación; presenté al CIO una estrategia de arquitectura mixta de modelos grandes y pequeños, pensada en costo y latencia. En 2025 tuve una asignación internacional (Programa PDI) con el equipo de Arquitectura de IA del Holding en Madrid, como parte del equipo que definió la primera versión del Decision Framework de IA del Grupo (no-code, low-code o build según el caso de uso), presentado a la alta dirección. Definí el modelo local de gobierno de pilotos de IA, con Strategy &amp; Control involucrado desde el inicio, y traduje la nueva regulación peruana de IA en reglas de diseño: los agentes de cara al cliente se identifican como IA y el contenido generado se etiqueta.",
      "tl2.h4": "Arquitecto Líder de Core Bancario y Cloud — BBVA Perú",
      "tl2.p": "Sponsor y luego Product Owner de la transformación del core bancario Horizon Alpha. Llegué a liderar ~50 personas (20 internas y 30 externas de cuatro consultoras) en las arquitecturas de Core, APX y Host, gestionando el presupuesto de capacidad por costo de FTE. Impulsé la migración transaccional de legacy a NextGen del 5% (2018) al 71% (2026): el volumen transaccional creció 5x mientras el costo solo 2x (2020–2024). Representé a Ingeniería en el equipo de Innovation Leadership.",
      "tl3.h4": "Manager de Arquitectura Backend — BBVA Perú",
      "tl3.p": "Ascendí a gestionar las arquitecturas backend globales del banco (ASO, APX, Mainframe) y su plataforma de Cloud privada (Ether). Fui profesor de estándares de arquitectura en la Tech University de BBVA (2018–2020).",
      "tl4.h4": "Arquitecto de APX y Cloud Privada — BBVA Perú",
      "tl4.p": "Dirigí la evolución de la arquitectura transaccional (APX) y de la Cloud privada del banco (Ether). En 2018, asignación internacional en la sede de BBVA en Madrid para diseñar una arquitectura de microservicios en contenedores sobre gRPC para la plataforma de Cloud híbrida del Grupo.",
      "tl5.h4": "Arquitecto PaaS (Platform as a Service) — BBVA Perú",
      "tl5.p": "Lideré la evolución de la plataforma de servicios y APIs del banco (ASO) y definí los estándares de adopción de microservicios y arquitectura orientada a eventos.",
      "tl6.h4": "Arquitecto de TI / Analista SOA — Equifax",
      "tl6.p": "Diseñé las arquitecturas de proyectos críticos (Autoservicio, Smart SVI, Datamart Financiero) y de pipelines de procesamiento de datos a gran escala (OSTRA).",
      "tl7.h4": "Desarrollador de Software — CSTI, Softmarkperu, Universidad JFSC",
      "tl7.p": "Construí sistemas en Java/Spring y .NET para clientes de salud, telecomunicaciones y sector público: la base práctica en la que todavía se apoyan mis decisiones de arquitectura.",

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
      "contact.h2": "Conversemos",
      "contact.p": "Abierto a conversar sobre liderazgo en arquitectura de IA, asesoría o charlas sobre IA agéntica en industrias reguladas.",

      "footer.text": "Victor Espiritu Santiago — Arquitectura Empresarial y de IA · Hecho sin frameworks y sin lock-in."
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
