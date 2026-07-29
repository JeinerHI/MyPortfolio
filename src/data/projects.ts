import titanmoodCover from '../assets/projects/titanmoodweb/images/cover.png'
import titanmoodShot1 from '../assets/projects/titanmoodweb/images/screenshot-1.png'
import titanmoodShot2 from '../assets/projects/titanmoodweb/images/screenshot-2.png'
import titanmoodShot3 from '../assets/projects/titanmoodweb/images/screenshot-3.png'

import abpWebCover from '../assets/projects/abpsetpiecesweb/images/cover.png'
import abpWebShot1 from '../assets/projects/abpsetpiecesweb/images/screenshot1.png'

import abpAppCover from '../assets/projects/abpsetpiecesapp/images/cover.png'
import abpAppShot1 from '../assets/projects/abpsetpiecesapp/images/screenshot1.png'
import abpAppShot2 from '../assets/projects/abpsetpiecesapp/images/screenshot2.png'
import abpAppShot3 from '../assets/projects/abpsetpiecesapp/images/screenshot3.png'
import abpAppShot4 from '../assets/projects/abpsetpiecesapp/images/screenshot4.png'

import titanmoodWebAppCover from '../assets/projects/titanmoodwebapp/images/cover.png'
import titanmoodWebAppShot1 from '../assets/projects/titanmoodwebapp/images/screenshot-1.png'
import titanmoodWebAppShot2 from '../assets/projects/titanmoodwebapp/images/screenshot-2.png'
import titanmoodWebAppShot3 from '../assets/projects/titanmoodwebapp/images/screenshot-3.png'
import titanmoodWebAppShot4 from '../assets/projects/titanmoodwebapp/images/screenshot-4.png'
import titanmoodWebAppShot5 from '../assets/projects/titanmoodwebapp/images/screenshot-5.png'

import titanmoodMobileCover from '../assets/projects/titanmoodmobileapp/images/cover.png'
import titanmoodMobileShot1 from '../assets/projects/titanmoodmobileapp/images/screenshot-1.png'
import titanmoodMobileShot2 from '../assets/projects/titanmoodmobileapp/images/screenshot-2.png'
import titanmoodMobileShot3 from '../assets/projects/titanmoodmobileapp/images/screenshot-3.png'
import titanmoodMobileShot4 from '../assets/projects/titanmoodmobileapp/images/screenshot-4.png'
import titanmoodMobileShot5 from '../assets/projects/titanmoodmobileapp/images/screenshot-5.png'
import titanmoodMobileShot6 from '../assets/projects/titanmoodmobileapp/images/screenshot-6.png'
import titanmoodMobileShot7 from '../assets/projects/titanmoodmobileapp/images/screenshot-7.png'
import titanmoodMobileShot8 from '../assets/projects/titanmoodmobileapp/images/screenshot-8.png'
import titanmoodMobileShot9 from '../assets/projects/titanmoodmobileapp/images/screenshot-9.png'

import smarthomeCover from '../assets/projects/smarthomeweb/images/cover.png'
import smarthomeShot1 from '../assets/projects/smarthomeweb/images/screenshot-1.png'
import smarthomeShot2 from '../assets/projects/smarthomeweb/images/screenshot-2.png'
import smarthomeShot3 from '../assets/projects/smarthomeweb/images/screenshot-3.png'

export const projects = [
  {
    id: "abpsetpiecesapp",
    year: "2026",
    techStack: ["Next.js 15", "Strapi v5", "PostgreSQL", "TanStack Query", "Konva", "Tailwind"],
    image: abpAppCover,
    screenshots: [abpAppCover, abpAppShot1, abpAppShot2, abpAppShot3, abpAppShot4],
    hasVideo: false,
    liveUrl: "https://campus.abpsetpieces.com",
    featured: true,
    accentColor: "#FFEB52",
  },
  {
    id: "abpsetpiecesweb",
    year: "2025",
    techStack: ["WordPress", "Nginx", "PHP", "VPS"],
    image: abpWebCover,
    screenshots: [abpWebCover, abpWebShot1],
    hasVideo: false,
    liveUrl: "https://abpsetpieces.com",
    featured: true,
    accentColor: "#FFEB52",
  },
  {
    id: "titanmoodwebapp",
    year: "2026",
    techStack: ["React 19", "Vite", "Supabase", "React Router", "Recharts", "Tailwind"],
    image: titanmoodWebAppCover,
    screenshots: [
      titanmoodWebAppCover, titanmoodWebAppShot1, titanmoodWebAppShot2,
      titanmoodWebAppShot3, titanmoodWebAppShot4, titanmoodWebAppShot5,
    ],
    hasVideo: false,
    liveUrl: "https://trainer.titanmood.com",
    featured: true,
    accentColor: "#f97316",
  },
  {
    id: "titanmoodmobileapp",
    year: "2026",
    techStack: ["Expo SDK 54", "React Native", "TypeScript", "expo-router", "Supabase"],
    image: titanmoodMobileCover,
    screenshots: [
      titanmoodMobileCover, titanmoodMobileShot1, titanmoodMobileShot2, titanmoodMobileShot3,
      titanmoodMobileShot4, titanmoodMobileShot5, titanmoodMobileShot6, titanmoodMobileShot7,
      titanmoodMobileShot8, titanmoodMobileShot9,
    ],
    hasVideo: false,
    liveUrl: null,
    featured: true,
    accentColor: "#f97316",
  },
  {
    id: "titanmoodweb",
    year: "2025",
    techStack: ["Astro v5", "Strapi v5", "REST API"],
    image: titanmoodCover,
    screenshots: [titanmoodCover, titanmoodShot1, titanmoodShot2, titanmoodShot3],
    hasVideo: false,
    liveUrl: "https://titanmood.com",
    featured: true,
    accentColor: "#f97316",
  },
  {
    id: "smarthomeweb",
    year: "2025",
    techStack: ["WordPress", "SEO", "Google Analytics", "Google Search Console"],
    image: smarthomeCover,
    screenshots: [smarthomeCover, smarthomeShot1, smarthomeShot2, smarthomeShot3],
    hasVideo: false,
    liveUrl: "https://smarthogarautomatizado.com",
    featured: true,
    accentColor: "#eab308",
  },
] as const

export type ProjectId = (typeof projects)[number]["id"]
