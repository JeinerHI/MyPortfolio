export default {
  nav: {
    home: "Get To Know Me",
    experience: "Experience & More",
    projects: "Featured Projects",
    contact: "Contact",
    downloadCv: "Download CV",
  },
  theme: {
    light: "Light",
    dark: "Dark",
    system: "System",
    toggle: "Toggle theme",
  },
  language: {
    toggle: "Switch language",
  },
  home: {
    label: "// portfolio",
    greeting: "Hello, I'm",
    name: "Jeiner Hurtado",
    roleItalic: "Industrial Engineer",
    roleConnector: " turned ",
    roleBold: "Web Developer.",
    subtitle:
      "I build responsive web applications and automate the workflows behind them — combining process-driven thinking from my industrial background with modern frontend, backend, and automation tools like n8n.",
    tagline: "Recently graduated in Web Application Development in Málaga, Spain, and now building real projects along the way.",
    badges: ["JavaScript", "Next.js", "Supabase", "Tailwind", "n8n Automation", "Process Analysis"],
    ctaProjects: "View Projects",
    ctaExperience: "My Experience",
    photoAlt: "Jeiner Hurtado — web developer and industrial engineer",
    statExperienceLabel: "Background",
    statExperienceValue: "5+",
    statExperienceCaption: "years of professional experience",
    statProjectsLabel: "Currently",
    statProjectsValue: "2026",
    statProjectsCaption: "Full-Stack Dev Intern",
  },
  experience: {
    heroLabel: "// my journey",
    heroTitle: "Experience & More",
    heroImageAlt: "Technology and engineering workspace",
    tabs: {
      experience: { num: "01", label: "Experience", sub: "Career path" },
      skills: { num: "02", label: "Skills", sub: "Tech & craft" },
      studies: { num: "03", label: "Studies", sub: "Education" },
    },
    now: "Now",
    proficiency: "Proficiency",
    jobs: [
      {
        role: "Full-Stack Developer Internship",
        company: "Mickrea",
        period: "2026 — Present",
        location: "Málaga, Spain",
        description:
          "Building a corporate marketing site in WordPress and a full-stack academic platform with Next.js and Supabase, deployed on a dedicated VPS. Coordinating and leading the development team toward the company's goals.",
        tags: ["Next.js", "Supabase", "WordPress", "Team Lead"],
      },
      {
        role: "Warehouse & Preparation Manager",
        company: "Cisnes",
        period: "2023 — 2025",
        location: "Spain",
        description:
          "Requested supplies and materials, coordinated the reception of goods, and managed the daily preparation of materials needed for production.",
        tags: ["Logistics", "Coordination", "Process Management"],
      },
      {
        role: "Administrator",
        company: "Ferromateriales JDH",
        period: "2021 — 2022",
        location: "Cali, Colombia",
        description:
          "Managed the business at an executive level, handling supplies, sales, and business finances using tools such as Visual Basic and MySQL.",
        tags: ["Business Management", "MySQL", "Visual Basic"],
      },
      {
        role: "Methods Engineer",
        company: "Femme International",
        period: "2020 — 2022",
        location: "Cali, Colombia",
        description:
          "Supervised the production plant and work team, organizing schedules and production flow. Developed process management strategies and defined production objectives and indicators.",
        tags: ["Process Engineering", "Production Planning", "Team Supervision"],
      },
      {
        role: "Continuous Improvement Assistant",
        company: "Johnson & Johnson",
        period: "2019 — 2020",
        location: "Cali, Colombia",
        description:
          "Identified and proposed Lean initiatives, led process improvement projects, managed production indicators, and trained operational staff in analysis and problem-solving tools.",
        tags: ["Lean", "Process Improvement", "Training"],
      },
    ],
    skillsList: [
      {
        name: "Frontend Development",
        category: "Frontend",
        description:
          "Responsive layouts and UI/UX design with frameworks like Next.js, Vite, Astro and Expo, styled with Tailwind and Bootstrap.",
      },
      {
        name: "Backend & BaaS",
        category: "Backend",
        description:
          "Business logic with Node.js and Express.js, and backend-as-a-service platforms like Supabase and Firebase.",
      },
      {
        name: "Systems & Deployment",
        category: "Infrastructure",
        description:
          "Basic network and server administration, virtual machines, Docker/Docker Compose, and efficient deployment workflows.",
      },
      {
        name: "AI-Assisted Development",
        category: "Tooling",
        description:
          "Working with Claude Code and LLMs (Gemini, ChatGPT, Claude) to accelerate and improve development workflows.",
      },
      {
        name: "Automation",
        category: "Workflows",
        description:
          "Designing and building workflow automations with n8n — connecting apps, APIs, and AI models to remove manual work from real business processes.",
      },
      {
        name: "Process Analysis",
        category: "Engineering",
        description:
          "Lean methodology, production planning, and process optimization carried over from my industrial engineering background.",
      },
    ],
    studiesList: [
      {
        title: "Web Application Development",
        school: "Digitech FP, Málaga, Spain",
        year: "2024 — 2026",
        description: "Higher-level vocational degree covering the full web development stack.",
        tag: "Tech",
      },
      {
        title: "Industrial Engineering (Technology)",
        school: "Cali, Colombia",
        year: "2017 — 2020",
        description: "Degree in industrial and manufacturing technology, the foundation of my process-driven approach to engineering.",
        tag: "Engineering",
      },
      {
        title: "Administrative Assistance",
        school: "Cali, Colombia",
        year: "2014 — 2016",
        description: "Technical qualification in administrative support and office management.",
        tag: "Business",
      },
    ],
  },
  projects: {
    label: "// selected work",
    title: "Featured Projects",
    subtitle:
      "A selection of real projects I've built and shipped for clients.",
    techStack: "TECH STACK",
    liveTag: "Live",
    videoTag: "Video",
    expandTag: "Expand image",
    items: {
      abpsetpiecesapp: {
        title: "ABP Set Pieces — Campus & Tactical Database",
        category: "EdTech · SaaS Platform",
        description:
          "A two-in-one platform for elite football set-piece coaching, built for UEFA PRO Coach Bori Moreno. Combines a video-based learning management system with a searchable tactical database of set-piece plays — complete with diagrams, AI-generated tactical analysis, and an interactive whiteboard for drawing plays. Targeting a global launch for the 2026 FIFA World Cup.",
      },
      abpsetpiecesweb: {
        title: "ABP Set Pieces — Landing Page",
        category: "Marketing · Landing Page",
        description:
          "Brand landing page for ABP Set Pieces, a coaching business for UEFA PRO Coach Bori Moreno specializing in set-piece strategy. Built in WordPress following the brand's identity, self-hosted on a private VPS with Nginx and PHP.",
      },
      titanmoodwebapp: {
        title: "TitanMood — Trainer Dashboard",
        category: "SaaS · Fitness Coaching",
        description:
          "The trainer-facing dashboard of TitanMood, a fitness coaching platform built as a graduation project. Coaches build reusable workout templates, assign them to clients as live plans, and track adherence, body measurements, and training progress from a single dashboard — backed entirely by Supabase with Postgres Row Level Security, no custom API server.",
      },
      titanmoodmobileapp: {
        title: "TitanMood — Client App",
        category: "Mobile · Fitness Coaching",
        description:
          "The client-facing companion app to the TitanMood trainer dashboard. Trainees follow their assigned workout plan, log sessions set-by-set with a built-in rest timer, track body measurements and progress, and get post-workout comparisons against their previous session — all synced in real time with their coach through a shared Supabase backend.",
      },
      titanmoodweb: {
        title: "TitanMood — Marketing Site",
        category: "Marketing · Fitness",
        description:
          "Marketing website for TitanMood, a fitness coaching brand. A Strapi-powered CMS feeds content to a statically generated Astro frontend at build time, keeping the site fast while staying easy to update.",
      },
      smarthomeweb: {
        title: "Smart Hogar",
        category: "Marketing · Home Automation",
        description:
          "Website for a home automation installation and consulting business, covering smart-device setup and maintenance. Built and deployed on WordPress, with a strong focus on SEO — implemented using Rank Math, Google Analytics, and Google Search Console.",
      },
    },
  },
  contact: {
    label: "// get in touch",
    title: "Contact",
    subtitle: "Feel free to reach out through any of the channels below.",
    phoneLabel: "Phone",
    emailLabel: "Email",
    linkedinLabel: "LinkedIn",
    linkedinCta: "View Profile",
  },
}
