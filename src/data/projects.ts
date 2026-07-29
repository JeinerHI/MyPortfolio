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
] as const

export type ProjectId = (typeof projects)[number]["id"]
