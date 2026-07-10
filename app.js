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
    name: "Universidad Catolica de Cuenca",
    logo: "assets/logos/ucacue.png"
  },
  {
    shortName: "UNAE",
    name: "Universidad Nacional de Educacion",
    logo: "assets/logos/unae.png"
  }
];

const kpis = [
  { value: "48+", label: "Eventos publicados", detail: "agenda anual del ecosistema" },
  { value: "2.400+", label: "Personas registradas", detail: "emprendedores, docentes y aliados" },
  { value: "16", label: "Programas", detail: "incubación, mentorías y formación" },
  { value: "4", label: "Universidades", detail: "red interuniversitaria del Austro" }
];

const events = [
  {
    title: "Foro Austro Innova 2026",
    date: "18 JUL",
    university: "UPS",
    mode: "Presencial",
    imageClass: "image-one",
    summary: "Encuentro regional para conectar universidades, empresas y proyectos de alto potencial."
  },
  {
    title: "Bootcamp de Validación de Ideas",
    date: "25 JUL",
    university: "Universidad de Cuenca",
    mode: "Híbrido",
    imageClass: "image-two",
    summary: "Taller intensivo para transformar problemas reales en propuestas listas para validar."
  },
  {
    title: "Laboratorio EdTech y Aprendizaje",
    date: "09 AGO",
    university: "UNAE",
    mode: "Virtual",
    imageClass: "image-three",
    summary: "Sesión para crear prototipos educativos con enfoque tecnológico y colaborativo."
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
    title: "Mentores del Austro se suman a espacios de formacion emprendedora",
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
          <div class="card-image ${event.imageClass}">
            <span>${event.date}</span>
          </div>
          <div class="card-body">
            <span class="meta">${event.university} · ${event.mode}</span>
            <h3>${event.title}</h3>
            <p>${event.summary}</p>
            <a class="card-link" href="#newsletter">Ver más</a>
          </div>
        </article>
      `
    )
    .join("");
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

const bindNewsletter = () => {
  const form = document.getElementById("newsletter-form");
  const status = document.getElementById("form-status");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(form));
    status.textContent = `${data.name || "Gracias"}, tu registro está listo para conectarse a Supabase.`;
    form.reset();
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
bindNewsletter();
observeSections();
