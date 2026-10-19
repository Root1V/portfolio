(function () {
  var dict = {
    es: {
      "nav.projects": "Proyectos",
      "nav.leadership": "Liderazgo",
      "nav.global": "Global",
      "nav.speaking": "Charlas",
      "nav.timeline": "Trayectoria",
      "nav.certs": "Formación",
      "nav.contact": "Contacto",
      "nav.resume": "Descargar CV",
      "nav.cv.en": "Inglés",
      "nav.cv.es": "Español",

      "hero.eyebrow": "Arquitecto Empresarial y de IA · BBVA Perú",
      "hero.lede": "Diseño arquitecturas de IA agéntica y cloud-native, conectando la estrategia de negocio, la tecnología emergente de IA y la ejecución en la empresa. Más de 15 años en tecnología: de desarrollador de software a liderar la IA empresarial, sin perder el contacto con la tecnología ni la visión del negocio.",
      "hero.view": "Ver proyectos",

      "about.label": "Sobre mí",
      "about.h2": "Estrategia y arquitectura",
      "about.p1": "Lidero la estrategia de Arquitectura de IA y Cloud de BBVA Perú, en el punto donde se cruzan la estrategia de negocio, la arquitectura tecnológica y la innovación: definiendo cómo un banco regulado adopta IA agéntica, plataformas de GenAI y arquitecturas cloud-native sin comprometer la seguridad ni el cumplimiento normativo.",
      "about.p2": "Mi recorrido —de desarrollador de software a arquitecto de TI y hoy líder de Arquitectura Empresarial y de IA— me da una perspectiva que combina visión estratégica con criterio de implementación: entiendo tanto las decisiones de negocio detrás de una iniciativa de IA como los detalles de arquitectura que deciden si funciona en producción. He liderado equipos de hasta 50 personas en tres dominios de arquitectura y, desde mi primer año en BBVA, trabajo de la mano con los equipos globales de arquitectura del Grupo —España, México, Colombia, Argentina, entre otros— coordinando estándares y soluciones entre geografías, no solo para Perú. Fuera del banco mantengo un laboratorio self-hosted de infraestructura y Arquitectura de IA de nivel empresarial: los seis proyectos de abajo son una muestra de ese trabajo, todo open source y sin lock-in. También construí un LLM desde cero como estudio personal, así que entiendo los modelos por dentro y no solo a través de una API.",

      "projects.label": "Proyectos destacados",
      "projects.h2": "Seis proyectos de mi laboratorio público",
      "proj.prometheus": "Gateway de inferencia de LLM self-hosted que enruta el tráfico entre llama.cpp, MLX, vLLM y SGLang, con autenticación JWT, autorización por modelo y trazas completas con OpenTelemetry.",
      "proj.aerarium": "Core bancario para comercio agéntico: un ledger real de partida doble, append-only y escrito en Rust, donde los agentes de IA son titulares de cuenta de pleno derecho, con autorizaciones hold-to-capture y mandatos de pago respaldados por consentimiento.",
      "proj.mercatus": "Framework de comercio agéntico: agentes de IA que descubren, pagan y monetizan servicios de forma autónoma, con adaptadores de liquidación intercambiables para x402 (USDC) y AP2 (basado en mandatos).",
      "proj.veritium": "Plataforma de inteligencia documental agéntica lista para producción: arquitectura hexagonal, bucle de extracción ReAct acotado, motor de validación de 6 categorías con reglas CEL configurables, grounding determinista y trazas completas con OpenTelemetry. OCR intercambiable (Docling / PaddleOCR) y LLM/VLM vía cualquier endpoint compatible con OpenAI, sin lock-in.",
      "proj.synaptum": "Mi propio runtime y framework de agentes para Python: ejecución basada en generadores con checkpoint/resume e identidad determinista de cada paso, sin dependencias obligatorias. La orquestación multiagente está en el roadmap; todavía no está construida.",
      "proj.aeon": "Plataforma Harness self-hosted para agentes: ejecución durable sobre Temporal, contexto y evidencia tipados, políticas aplicadas fuera del modelo, memoria gobernada e interoperabilidad nativa con LangGraph, CrewAI, OpenAI Agents SDK, Microsoft Agent Framework y Claude Agent SDK.",
      "proj.link": "Ver en GitHub →",

      "lead.label": "Caso de liderazgo",
      "lead.h2": "Liderar la transformación del core bancario",
      "lead.meta.role": "<strong>Rol:</strong> Product Owner → Sponsor",
      "lead.meta.program": "<strong>Programa global:</strong> Horizon Alpha (financiado por el Holding, más de €1 M en 3 años)",
      "lead.meta.where": "<strong>Dónde:</strong> BBVA Perú",
      "lead.meta.when": "<strong>Cuándo:</strong> 2019–2024",
      "lead.p1": "BBVA Perú necesitaba evolucionar su core bancario para lanzar nuevos productos y servicios digitales sin aumentar el costo de obsolescencia ni el riesgo sobre la operación crítica. Lideré la estrategia de esa evolución e implementamos 11 de las 16 capacidades reutilizables del nuevo core en tres capas —datos, arquitectura bancaria y multicanal— para que cada producto se construya encima en lugar de volver a desarrollar la gestión de clientes, consentimientos o firmas. Sobre ese core se habilitó la transformación de Banca Retail (gestión de acceso, consentimientos, posición global y movimientos en la app móvil) y procesos de Banca Empresa (pagos masivos de nómina, multifirma de operaciones y la evolución de la app móvil de empresas).",
      "lead.li1": "Como <strong>Product Owner</strong> de Horizon Alpha, aceleré la implementación de los módulos clave para soportar nuevos productos y servicios bancarios.",
      "lead.li2": "Luego, como <strong>Sponsor</strong> del programa global Horizon Alpha, impulsé la adopción del nuevo core en las iniciativas estratégicas del Grupo y del país.",
      "lead.li3": "Implementé la arquitectura funcional del core bancario sobre las distintas arquitecturas técnicas del banco —servicios (ASO), backend (APX), middleware (SEMaaS), procesamiento por lotes (LRABatch) y frontend (Cells Web)— en coordinación con los equipos globales de arquitectura del Grupo BBVA, manteniendo el sistema modular y escalable.",
      "lead.li4": "Movilicé a más de 100 personas del país y del Holding —seguridad, desarrollo, gestión del cambio, producción, arquitectura, fraude y los holdings de México y España— para implantar cada release del core Alpha (más de 1,500 componentes) en menos de un trimestre, con automatizaciones de calidad. Fuimos el primer país del Grupo en lograr una implantación exitosa sin impacto en producción.",
      "lead.stat1": "de cumplimiento de los KPIs de despliegue y evolución de Horizon Alpha",
      "lead.stat2": "de las iniciativas estratégicas del país ya corren sobre el nuevo core y dan servicio a los canales principales de BBVA Perú",
      "lead.stat3": "más rápido el time-to-market: un producto pasó de 3–4 trimestres a 1–1.5 sobre el nuevo core",
      "lead.stat4": "capacidades reutilizables del nuevo core implementadas; sobre ellas se construyeron ~7 productos de Banca Retail y Empresa",
      "lead.p2": "Además del programa de core bancario, fui profesor de diseño y estándares de arquitectura y de tendencias tecnológicas en la Tech University de BBVA durante tres años consecutivos (2018–2020), y mentor de ingenieros en el programa Open Mentoring del banco.",

      "global.label": "Asignaciones internacionales",
      "global.h2": "Asignaciones en la sede del Grupo BBVA en Madrid",
      "global.c1.meta": "2018 · Madrid, España",
      "global.c1.h4": "Arquitectura de microservicios y gRPC",
      "global.c1.p": "Formé parte del equipo que diseñó la nueva arquitectura de microservicios en contenedores del banco, basada en gRPC y desplegable sobre la plataforma de Cloud híbrida de BBVA, trabajando presencialmente en Madrid con el equipo global de arquitectura.",
      "global.c2.meta": "2025 · Madrid, España — Programa de Desarrollo Internacional (PDI)",
      "global.c2.h4": "Arquitectura de Inteligencia Artificial del Grupo",
      "global.c2.p": "Me incorporé al equipo de Arquitectura de IA del Holding en Madrid para ayudar a diseñar la arquitectura de IA agéntica del Grupo: una arquitectura de referencia y el primer decision framework —que propuse— para elegir la tecnología adecuada para cada caso de uso.",

      "speak.label": "Charlas y reconocimientos",
      "speak.h2": "Contar la estrategia, no solo construirla",
      "speak.c1.meta": "Setiembre 2026 · Lima, Perú",
      "speak.c1.h4": "Panel C-level — Construyendo un ecosistema de IA para el Perú",
      "speak.c1.p": "Invitado a representar a BBVA Perú en un panel ante un club privado de ejecutivos C-level de empresas peruanas e internacionales, junto a representantes de Microsoft, Sonda y la PCM. Después del evento, Semana Económica publicó una entrevista y mi perfil como líder de IA del banco en su revista para ejecutivos de la banca peruana.",
      "speak.c2.meta": "Junio 2026 · Lima, Perú",
      "speak.c2.h4": "Speaker — Investors Peru Event",
      "speak.c2.p": "Representé a BBVA Perú y expuse cómo el banco ejecuta su estrategia de IA en su camino a ser el banco del futuro, y compartí con clientes institucionales experiencias y buenas prácticas aterrizadas en casos de uso concretos que pueden adoptar en sus propias organizaciones.",

      "tl.label": "Trayectoria",
      "tl.h2": "El camino del líder de Arquitectura Empresarial e IA",
      "tl1.date": "2024 — Actualidad",
      "tl1.h4": "Líder de Arquitectura Empresarial y de IA — BBVA Perú",
      "tl1.p": "Defino la estrategia de arquitectura de IA y Cloud del banco, integrando la visión de negocio, tecnología e innovación; presenté al CIO una estrategia de arquitectura mixta de modelos grandes y pequeños, pensada en costo, latencia y soberanía de datos. En 2025 tuve una asignación internacional (Programa PDI) con el equipo de Arquitectura de IA del Holding en Madrid, como parte del equipo que definió la primera versión del Decision Framework de IA para todo el Grupo (no-code, low-code o build según el caso de uso), presentado a la alta dirección. Definí el modelo de gobierno de pilotos de IA en el país en conjunto con el área de Strategy &amp; Control, y fui el arquitecto responsable del primer caso de uso de IA agéntica del país, hoy en producción, que evoluciona la atención de servicing en el contact center; también lideré la plataforma de inferencia self-hosted de LLMs en el CPD del banco para los pilotos de AI for ITOps y AI for processes. Además participé en la definición de las políticas de IA responsable del país, alineadas a la regulación local: los agentes de cara al cliente se identifican como IA y el contenido generado se etiqueta.",
      "tl2.h4": "Arquitecto Líder de Core Bancario y Cloud — BBVA Perú",
      "tl2.p": "Product Owner y luego Sponsor de la transformación del core bancario global (Alpha), gestionada con Scrum. Llegué a liderar ~50 personas (20 internas y 30 externas de cuatro consultoras) y a movilizar a más de 100 de distintas áreas del país y del Holding, gestionando el presupuesto de capacidad por costo de FTE. Inicié la migración transaccional de legacy a plataformas NextGen desde 0% (2018) y la entregué en 42% (2022); hoy alcanza el 71% (2026). El volumen transaccional creció 5x mientras el costo solo 2x (2020–2024). Fui el referente de Ingeniería en el equipo de Innovation Leadership del banco.",
      "tl3.h4": "Manager de Arquitectura Backend — BBVA Perú",
      "tl3.p": "Amplié el alcance a todo el backend del banco: fui el arquitecto responsable de la estrategia de evolución de las arquitecturas ASO, APX y Mainframe y de la plataforma de Cloud privada (Ether) en el país, liderando equipos internos y externos. Fui profesor de estándares de arquitectura en la Tech University de BBVA (2018–2020).",
      "tl4.h4": "Arquitecto de APX y Cloud Privada — BBVA Perú",
      "tl4.p": "Arquitecto responsable de definir la estrategia e implementar en el país la arquitectura transaccional (APX) y la Cloud privada (Ether) del Grupo. En 2018 tuve una asignación internacional en la sede de BBVA en Madrid para diseñar una arquitectura de microservicios en contenedores sobre gRPC para la plataforma de Cloud híbrida del Grupo.",
      "tl5.h4": "Arquitecto PaaS (Platform as a Service) — BBVA Perú",
      "tl5.p": "Lideré la evolución de la plataforma de servicios y APIs del banco (ASO) y fui el arquitecto responsable de la arquitectura Mainframe en el país, definiendo los estándares de adopción e integración orientados a microservicios y arquitectura basada en eventos.",
      "tl6.h4": "Arquitecto de Soluciones / Arquitecto de TI — Equifax",
      "tl6.p": "Arquitecto de soluciones responsable del diseño de proyectos críticos y estratégicos de la empresa (Autoservicio, Smart SVI, Datamart Financiero) y de pipelines de procesamiento de datos a gran escala (OSTRA).",
      "tl7.h4": "Líder Técnico de Software — CSTI, Softmarkperu, Universidad JFSC",
      "tl7.p": "Lideré equipos de desarrollo multidisciplinarios para construir sistemas en Java/Spring, PHP y .NET para clientes de salud, telecomunicaciones y sector público: la base práctica en la que todavía se apoyan mis decisiones de arquitectura.",

      "cert.label": "Formación",
      "cert.h2": "Aprendizaje continuo",
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
