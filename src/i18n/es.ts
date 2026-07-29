import type en from './en'

const es: typeof en = {
  nav: {
    home: "Conóceme",
    experience: "Experiencia y Más",
    projects: "Proyectos Destacados",
    contact: "Contacto",
    downloadCv: "Descargar CV",
  },
  theme: {
    light: "Claro",
    dark: "Oscuro",
    system: "Sistema",
    toggle: "Cambiar tema",
  },
  language: {
    toggle: "Cambiar idioma",
  },
  home: {
    label: "// portafolio",
    greeting: "Hola, soy",
    name: "Jeiner Hurtado",
    roleItalic: "Ingeniero Industrial",
    roleConnector: " convertido en ",
    roleBold: "Desarrollador Web.",
    subtitle:
      "Construyo aplicaciones web responsivas y automatizo los flujos de trabajo detrás de ellas — combinando el pensamiento orientado a procesos de mi formación industrial con herramientas modernas de frontend, backend y automatización como n8n.",
    tagline: "Recién graduado en Desarrollo de Aplicaciones Web en Málaga, España, y ahora construyendo proyectos reales en el camino.",
    badges: ["JavaScript", "Next.js", "Supabase", "Tailwind", "Automatización n8n", "Análisis de Procesos"],
    ctaProjects: "Ver Proyectos",
    ctaExperience: "Mi Experiencia",
    photoAlt: "Jeiner Hurtado — desarrollador web e ingeniero industrial",
    statExperienceLabel: "Trayectoria",
    statExperienceValue: "5+",
    statExperienceCaption: "años de experiencia profesional",
    statProjectsLabel: "Actualmente",
    statProjectsValue: "2026",
    statProjectsCaption: "Prácticas Full-Stack",
  },
  experience: {
    heroLabel: "// mi trayectoria",
    heroTitle: "Experiencia y Más",
    heroImageAlt: "Espacio de trabajo de tecnología e ingeniería",
    tabs: {
      experience: { num: "01", label: "Experiencia", sub: "Trayectoria profesional" },
      skills: { num: "02", label: "Habilidades", sub: "Tecnología y oficio" },
      studies: { num: "03", label: "Estudios", sub: "Educación" },
    },
    now: "Actual",
    proficiency: "Dominio",
    jobs: [
      {
        role: "Prácticas de Desarrollador Full-Stack",
        company: "Mickrea",
        period: "2026 — Presente",
        location: "Málaga, España",
        description:
          "Diseñando un sitio web corporativo en WordPress y una plataforma académica full-stack con Next.js y Supabase, desplegada en una VPS dedicada. Coordinando y liderando al equipo de desarrollo hacia los objetivos de la empresa.",
        tags: ["Next.js", "Supabase", "WordPress", "Liderazgo de Equipo"],
      },
      {
        role: "Encargado de Bodega y Preparación",
        company: "Cisnes",
        period: "2023 — 2025",
        location: "España",
        description:
          "Solicitaba insumos y materiales, coordinaba la recepción de mercancías y gestionaba la preparación diaria de materiales necesarios para la producción.",
        tags: ["Logística", "Coordinación", "Gestión de Procesos"],
      },
      {
        role: "Administrador",
        company: "Ferromateriales JDH",
        period: "2021 — 2022",
        location: "Cali, Colombia",
        description:
          "Administré el negocio a nivel gerencial, gestionando suministros, ventas y finanzas del negocio con herramientas como Visual Basic y MySQL.",
        tags: ["Gestión de Negocios", "MySQL", "Visual Basic"],
      },
      {
        role: "Ingeniero de Métodos",
        company: "Femme International",
        period: "2020 — 2022",
        location: "Cali, Colombia",
        description:
          "Supervisé la planta de producción y el equipo de trabajo, organizando horarios y flujo de producción. Desarrollé estrategias de gestión de procesos y definí objetivos e indicadores de producción.",
        tags: ["Ingeniería de Procesos", "Planificación de Producción", "Supervisión de Equipos"],
      },
      {
        role: "Asistente de Mejoramiento Continuo",
        company: "Johnson & Johnson",
        period: "2019 — 2020",
        location: "Cali, Colombia",
        description:
          "Identifiqué y propuse iniciativas Lean, lideré proyectos de mejora de procesos, gestioné indicadores de producción y entrené al personal operativo en herramientas de análisis y resolución de problemas.",
        tags: ["Lean", "Mejora de Procesos", "Formación"],
      },
    ],
    skillsList: [
      {
        name: "Desarrollo Frontend",
        category: "Frontend",
        description:
          "Diseño responsivo y de UI/UX con frameworks como Next.js, Vite, Astro y Expo, estilizado con Tailwind y Bootstrap.",
      },
      {
        name: "Backend y BaaS",
        category: "Backend",
        description:
          "Lógica de negocio con Node.js y Express.js, y plataformas backend-as-a-service como Supabase y Firebase.",
      },
      {
        name: "Sistemas y Despliegue",
        category: "Infraestructura",
        description:
          "Administración básica de redes y servidores, máquinas virtuales, Docker/Docker Compose y flujos de despliegue eficientes.",
      },
      {
        name: "Desarrollo Asistido por IA",
        category: "Herramientas",
        description:
          "Trabajo con Claude Code y LLMs (Gemini, ChatGPT, Claude) para acelerar y mejorar los flujos de desarrollo.",
      },
      {
        name: "Automatización",
        category: "Flujos de Trabajo",
        description:
          "Diseño y construcción de automatizaciones con n8n — conectando aplicaciones, APIs y modelos de IA para eliminar el trabajo manual de procesos de negocio reales.",
      },
      {
        name: "Análisis de Procesos",
        category: "Ingeniería",
        description:
          "Metodología Lean, planificación de producción y optimización de procesos heredadas de mi formación en ingeniería industrial.",
      },
    ],
    studiesList: [
      {
        title: "Desarrollo de Aplicaciones Web",
        school: "Digitech FP, Málaga, España",
        year: "2024 — 2026",
        description: "Técnico Superior que cubre todo el stack de desarrollo web.",
        tag: "Tecnología",
      },
      {
        title: "Ingeniería Industrial (Tecnología)",
        school: "Cali, Colombia",
        year: "2017 — 2020",
        description: "Tecnología en ingeniería industrial y de manufactura, la base de mi enfoque orientado a procesos.",
        tag: "Ingeniería",
      },
      {
        title: "Asistencia Administrativa",
        school: "Cali, Colombia",
        year: "2014 — 2016",
        description: "Formación técnica en apoyo administrativo y gestión de oficina.",
        tag: "Negocios",
      },
    ],
  },
  projects: {
    label: "// trabajo seleccionado",
    title: "Proyectos Destacados",
    subtitle:
      "Una selección de proyectos reales que he construido y entregado para clientes.",
    techStack: "STACK TECNOLÓGICO",
    liveTag: "En vivo",
    videoTag: "Video",
    expandTag: "Ampliar imagen",
    items: {
      abpsetpiecesapp: {
        title: "ABP Set Pieces — Campus y Base de Datos Táctica",
        category: "EdTech · Plataforma SaaS",
        description:
          "Una plataforma dos-en-uno para el entrenamiento de acciones a balón parado de élite, construida para el entrenador UEFA PRO Bori Moreno. Combina un sistema de aprendizaje basado en video con una base de datos táctica de jugadas ABP — con diagramas, análisis táctico generado por IA y una pizarra interactiva para dibujar jugadas. Apunta a un lanzamiento global para el Mundial FIFA 2026.",
      },
      abpsetpiecesweb: {
        title: "ABP Set Pieces — Landing Page",
        category: "Marketing · Landing Page",
        description:
          "Página de aterrizaje de marca para ABP Set Pieces, un negocio de coaching del entrenador UEFA PRO Bori Moreno especializado en estrategia de balón parado. Construida en WordPress siguiendo la identidad de marca, alojada en una VPS privada con Nginx y PHP.",
      },
      titanmoodweb: {
        title: "TitanMood",
        category: "Marketing · Fitness",
        description:
          "Sitio web de marketing para TitanMood, una marca de entrenamiento físico. Un CMS con Strapi alimenta de contenido a un frontend estático en Astro generado en tiempo de build, manteniendo el sitio rápido y fácil de actualizar.",
      },
    },
  },
  contact: {
    label: "// hablemos",
    title: "Contacto",
    subtitle: "No dudes en contactarme a través de cualquiera de estos canales.",
    phoneLabel: "Teléfono",
    emailLabel: "Correo electrónico",
    linkedinLabel: "LinkedIn",
    linkedinCta: "Ver Perfil",
  },
}

export default es
