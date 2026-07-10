const universities = [
  {
    shortName: "UPS",
    name: "Universidad Politécnica Salesiana",
    logo: "assets/logos/ups.svg",
    url: "https://www.investigacion.ups.edu.ec/innovacion-emprendimiento/"
  },
  {
    shortName: "UCuenca",
    name: "Universidad de Cuenca",
    logo: "assets/logos/ucuenca.png"
  },
  {
    shortName: "UCACUE",
    name: "Universidad Católica de Cuenca",
    logo: "assets/logos/ucacue.png"
  },
  {
    shortName: "UNAE",
    name: "Universidad Nacional de Educación",
    logo: "assets/logos/unae.png"
  }
];

const kpis = [
  { value: "48+", label: "Eventos publicados", detail: "agenda anual del ecosistema" },
  { value: "2.400+", label: "Personas registradas", detail: "emprendedores, docentes y aliados" },
  { value: "16", label: "Programas", detail: "incubación, mentorías y formación" },
  { value: "4", label: "Universidades", detail: "red universitaria del Austro" }
];

const events = [
  {
    id: "foro-austro-innova",
    title: "Foro Austro Innova 2026",
    date: "18 JUL",
    fullDate: "viernes, 18 julio 2026",
    university: "UPS",
    mode: "Presencial",
    type: "Innovación",
    city: "Cuenca",
    place: "Campus El Vecino",
    cost: "Entrada libre con registro",
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1400&q=80",
    summary: "Encuentro regional para conectar universidades, empresas y proyectos de alto potencial.",
    detail:
      "El HUB de Emprendimiento Universitario del Austro convoca a estudiantes, docentes, empresas y organizaciones a un espacio de articulación para conocer tendencias, retos territoriales y oportunidades de colaboración.",
    agenda: [
      "Panel universitario sobre innovación aplicada al territorio.",
      "Presentación de oportunidades para emprendedores universitarios.",
      "Networking con aliados del ecosistema productivo y social."
    ],
    contact: "hubemprendimiento@ups.edu.ec"
  },
  {
    id: "bootcamp-validacion",
    title: "Bootcamp de Validación de Ideas",
    date: "25 JUL",
    fullDate: "sábado, 25 julio 2026",
    university: "Universidad de Cuenca",
    mode: "Híbrido",
    type: "Formación",
    city: "Cuenca",
    place: "Auditorio universitario y transmisión en línea",
    cost: "Sin costo",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1400&q=80",
    summary: "Taller intensivo para transformar problemas reales en propuestas listas para validar.",
    detail:
      "Una jornada práctica para equipos que desean convertir una idea temprana en una propuesta de valor clara, testeable y conectada con necesidades reales de usuarios.",
    agenda: [
      "Identificación de problema y cliente objetivo.",
      "Construcción de propuesta de valor.",
      "Diseño de experimentos rápidos para validación."
    ],
    contact: "eventos@ucuenca.edu.ec"
  },
  {
    id: "laboratorio-edtech",
    title: "Laboratorio EdTech y Aprendizaje",
    date: "09 AGO",
    fullDate: "domingo, 9 agosto 2026",
    university: "UNAE",
    mode: "Virtual",
    type: "Tecnología educativa",
    city: "Austro ecuatoriano",
    place: "Zoom",
    cost: "Registro abierto",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1400&q=80",
    summary: "Sesión para crear prototipos educativos con enfoque tecnológico y colaborativo.",
    detail:
      "Laboratorio virtual para docentes, estudiantes e innovadores interesados en diseñar soluciones educativas con tecnología, metodologías activas y enfoque de impacto.",
    agenda: [
      "Inspiración con casos EdTech.",
      "Mapa de necesidades educativas.",
      "Prototipado de una solución mínima viable."
    ],
    contact: "innovacion@unae.edu.ec"
  }
];

const news = [
  {
    category: "Ecosistema",
    date: "Julio 2026",
    title: "El Austro articula una red universitaria para impulsar emprendimientos de impacto",
    imageClass: "image-four",
    summary: "La colaboración académica se consolida como una vía para activar talento, investigación aplicada y transferencia."
  },
  {
    category: "Innovación",
    date: "Junio 2026",
    title: "Nuevos programas conectan estudiantes con retos de empresas locales",
    imageClass: "image-five",
    summary: "La innovación abierta permite que equipos universitarios trabajen sobre desafíos productivos y sociales."
  },
  {
    category: "Comunidad",
    date: "Mayo 2026",
    title: "Mentores del Austro se suman a espacios de formación emprendedora",
    imageClass: "image-six",
    summary: "Especialistas en negocio, tecnología e impacto acompañarán a equipos en etapas tempranas."
  }
];

const resources = [
  { title: "Convocatorias", description: "Oportunidades abiertas para emprendedores y equipos universitarios." },
  { title: "Fondos", description: "Rutas de financiamiento, premios y capital semilla." },
  { title: "Incubadoras", description: "Programas de acompañamiento para validar y escalar proyectos." },
  { title: "Mentores", description: "Red de expertos en estrategia, tecnología, ventas e impacto." },
  { title: "Programas", description: "Formación, bootcamps y laboratorios de innovación." },
  { title: "Hackathons", description: "Retos intensivos para prototipar soluciones colaborativas." }
];

const renderUniversities = () => {
  document.getElementById("universities-grid").innerHTML = universities
    .map((item) => {
      const tag = item.url ? "a" : "article";
      const href = item.url ? ` href="${item.url}" target="_blank" rel="noopener noreferrer"` : "";
      return `
        <${tag} class="university-card reveal"${href}>
          <div class="university-logo">
            <img src="${item.logo}" alt="Logo ${item.name}" loading="lazy" />
          </div>
          <span>${item.shortName}</span>
          <strong>${item.name}</strong>
        </${tag}>
      `;
    })
    .join("");
};

const renderKpis = () => {
  document.getElementById("kpi-grid").innerHTML = kpis
    .map(
      (item) => `
        <article class="kpi-card reveal">
          <strong>${item.value}</strong>
          <span>${item.label}</span>
          <p>${item.detail}</p>
        </article>
      `
    )
    .join("");
};

const renderEvents = () => {
  document.getElementById("events-grid").innerHTML = events
    .map(
      (event) => `
        <article class="feature-card reveal">
          <div class="card-image" style="--event-image: url('${event.image}')">
            <span>${event.date}</span>
          </div>
          <div class="card-body">
            <span class="meta">${event.university} · ${event.mode}</span>
            <h3>${event.title}</h3>
            <p>${event.summary}</p>
            <a class="card-link" href="#evento-detalle" data-event-link="${event.id}">Ver más</a>
          </div>
        </article>
      `
    )
    .join("");
};

const renderEventDetail = (eventId = events[0].id) => {
  const event = events.find((item) => item.id === eventId) || events[0];
  document.getElementById("event-detail").innerHTML = `
    <article class="event-detail-card" tabindex="-1">
      <a class="back-link" href="#eventos">← Volver a eventos</a>
      <p class="event-label">Evento</p>
      <h2 id="event-detail-title">${event.title}</h2>
      <div class="event-poster">
        <img src="${event.image}" alt="${event.title}" loading="lazy" />
      </div>
      <div class="share-row" aria-label="Compartir evento">
        <a href="https://twitter.com/intent/tweet?text=${encodeURIComponent(event.title)}" target="_blank" rel="noopener noreferrer">Twittear</a>
        <a href="https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(location.href)}" target="_blank" rel="noopener noreferrer">Compartir</a>
      </div>
      <div class="event-meta-strip" aria-label="Datos del evento">
        <div><span>EVENTO</span><strong>${event.mode}</strong></div>
        <div><span>TIPO</span><strong>${event.type}</strong></div>
        <div><strong>${event.city}</strong></div>
        <div><strong>${event.fullDate}</strong></div>
      </div>
      <div class="event-content">
        <div>
          <p>${event.detail}</p>
          <p>Lee a continuación:</p>
          <h3>Agenda del evento</h3>
          <ul>
            ${event.agenda.map((item) => `<li>${item}</li>`).join("")}
          </ul>
          <p><strong>Fecha:</strong> ${event.fullDate}</p>
          <p><strong>Lugar:</strong> ${event.place}</p>
          <p><strong>Costo:</strong> ${event.cost}</p>
          <p><strong>Para más información:</strong> ${event.contact}</p>
        </div>
        <aside class="event-side">
          <span>Universidad</span>
          <strong>${event.university}</strong>
          <span>Lugar</span>
          <strong>${event.place}</strong>
          <span>Costo</span>
          <strong>${event.cost}</strong>
          <a class="button button-primary" href="mailto:${event.contact}">Solicitar información</a>
        </aside>
      </div>
    </article>
  `;
};

const openEventView = (eventId, updateHistory = true) => {
  renderEventDetail(eventId);
  const detailSection = document.getElementById("evento-detalle");
  document.body.classList.add("event-view");
  detailSection.hidden = false;
  detailSection.classList.add("is-active", "is-visible");
  window.scrollTo({ top: 0, behavior: "smooth" });
  detailSection.querySelector(".event-detail-card").focus({ preventScroll: true });
  if (updateHistory) {
    history.pushState({ eventId }, "", `#evento-${eventId}`);
  }
};

const closeEventView = (updateHistory = true) => {
  const detailSection = document.getElementById("evento-detalle");
  document.body.classList.remove("event-view");
  detailSection.hidden = true;
  detailSection.classList.remove("is-active");
  if (updateHistory) {
    history.pushState(null, "", "#eventos");
  }
  document.getElementById("eventos").scrollIntoView({ behavior: "smooth", block: "start" });
};

const renderNews = () => {
  document.getElementById("news-grid").innerHTML = news
    .map(
      (item, index) => `
        <article class="news-card ${index === 0 ? "featured" : ""} reveal">
          <div class="card-image ${item.imageClass}"></div>
          <div class="card-body">
            <span class="meta">${item.category} · ${item.date}</span>
            <h3>${item.title}</h3>
            <p>${item.summary}</p>
            <a class="card-link" href="#newsletter">Leer más</a>
          </div>
        </article>
      `
    )
    .join("");
};

const renderResources = () => {
  document.getElementById("resources-grid").innerHTML = resources
    .map(
      (item) => `
        <a class="resource-card reveal" href="#newsletter">
          <span aria-hidden="true"></span>
          <strong>${item.title}</strong>
          <p>${item.description}</p>
        </a>
      `
    )
    .join("");
};

const bindNavigation = () => {
  const toggle = document.querySelector("[data-menu-toggle]");
  const nav = document.querySelector("[data-nav]");
  const header = document.querySelector("[data-header]");

  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });

  window.addEventListener("scroll", () => {
    header.classList.toggle("is-scrolled", window.scrollY > 18);
  });
};

const bindEventLinks = () => {
  document.querySelectorAll("[data-event-link]").forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      openEventView(link.dataset.eventLink);
    });
  });

  document.getElementById("event-detail").addEventListener("click", (event) => {
    const backLink = event.target.closest(".back-link");
    if (!backLink) return;
    event.preventDefault();
    closeEventView();
  });

  window.addEventListener("popstate", () => {
    const match = window.location.hash.match(/^#evento-(.+)$/);
    if (match) {
      openEventView(match[1], false);
      return;
    }
    closeEventView(false);
  });
};

const bindNewsletter = () => {
  const form = document.getElementById("newsletter-form");
  const nameInput = document.getElementById("newsletter-name");
  const emailInput = document.getElementById("newsletter-email");
  const institutionInput = document.getElementById("newsletter-institution");
  const interestInput = document.getElementById("newsletter-interest");
  const submitButton = document.getElementById("newsletter-submit");
  const status = document.getElementById("newsletter-message");
  const defaultButtonText = submitButton.textContent;
  const supabaseUrl = window.__SUPABASE_CONFIG__?.url;
  const supabaseAnonKey = window.__SUPABASE_CONFIG__?.anonKey;
  let supabaseClient = null;

  if (window.supabase && supabaseUrl && supabaseAnonKey) {
    try {
      supabaseClient = window.supabase.createClient(supabaseUrl, supabaseAnonKey);
    } catch (error) {
      console.error("Newsletter registration error:", error);
    }
  }

  const setSubmitting = (isSubmitting) => {
    submitButton.disabled = isSubmitting;
    submitButton.textContent = isSubmitting ? "Registrando..." : defaultButtonText;
  };

  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const fullName = nameInput.value.trim();
    const email = emailInput.value.trim().toLowerCase();
    const institution = institutionInput.value.trim();
    const mainInterest = interestInput.value;

    if (!fullName || !isValidEmail(email)) {
      status.textContent = "Completa tu nombre y un correo válido.";
      return;
    }

    if (!supabaseClient) {
      const error = new Error("Supabase configuration is missing.");
      console.error("Newsletter registration error:", error);
      status.textContent = "No fue posible completar el registro. Inténtalo nuevamente.";
      return;
    }

    setSubmitting(true);
    status.textContent = "Registrando...";

    const { error } = await supabaseClient.from("newsletter_subscribers").insert({
      full_name: fullName,
      email,
      institution: institution || null,
      main_interest: mainInterest || null,
      consent: true,
      status: "active"
    });

    if (error) {
      console.error("Newsletter registration error:", error);
      status.textContent =
        error.code === "23505" || error.message?.toLowerCase().includes("duplicate")
          ? "Este correo ya está registrado en nuestro newsletter."
          : "No fue posible completar el registro. Inténtalo nuevamente.";
      setSubmitting(false);
      return;
    }

    form.reset();
    status.textContent =
      "Gracias por registrarte. Recibirás eventos, convocatorias y noticias del ecosistema emprendedor del Austro.";
    setSubmitting(false);
  });
};

const observeSections = () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.16 }
  );

  document.querySelectorAll(".section-observe, .reveal").forEach((element) => observer.observe(element));
};

renderUniversities();
renderKpis();
renderEvents();
renderNews();
renderResources();
bindNavigation();
bindEventLinks();
bindNewsletter();
observeSections();

const initialEventMatch = window.location.hash.match(/^#evento-(.+)$/);
if (initialEventMatch) {
  openEventView(initialEventMatch[1], false);
}
