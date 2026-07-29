import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { ExternalLink, Play, X, ChevronLeft, ChevronRight, Monitor, Expand } from 'lucide-react'
import { projects as projectsData, type ProjectId } from '../data/projects'

type ProjectView = {
  id: ProjectId
  title: string
  category: string
  description: string
  year: string
  techStack: string[]
  image: string
  screenshots: string[]
  hasVideo: boolean
  liveUrl: string | null
  featured: boolean
  accentColor: string
}

export default function Projects() {
  const { t } = useTranslation()
  const [selected, setSelected] = useState<ProjectView | null>(null)
  const [screenshotIdx, setScreenshotIdx] = useState(0)
  const [hovered, setHovered] = useState<string | null>(null)
  const [lightboxOpen, setLightboxOpen] = useState(false)

  const projects: ProjectView[] = projectsData.map(p => ({
    ...p,
    title: t(`projects.items.${p.id}.title`),
    category: t(`projects.items.${p.id}.category`),
    description: t(`projects.items.${p.id}.description`),
    techStack: [...p.techStack],
    screenshots: [...p.screenshots],
  }))

  const featured = projects.filter(p => p.featured)
  const rest = projects.filter(p => !p.featured)

  const openProject = (p: ProjectView) => {
    setSelected(p)
    setScreenshotIdx(0)
    document.body.style.overflow = "hidden"
  }

  const closeProject = () => {
    setSelected(null)
    setLightboxOpen(false)
    document.body.style.overflow = ""
  }

  return (
    <div style={{ minHeight: "100vh", background: "var(--bg)", paddingBottom: 80 }}>
      {/* Header */}
      <div style={{
        padding: "80px 24px 60px",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute",
          width: 600,
          height: 300,
          borderRadius: "50%",
          background: "radial-gradient(circle, var(--glow) 0%, transparent 70%)",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          pointerEvents: "none",
        }} />
        <div style={{
          fontFamily: "var(--font-mono)",
          fontSize: 11,
          letterSpacing: "0.2em",
          color: "var(--accent)",
          textTransform: "uppercase",
          marginBottom: 16,
          animation: "fade-up 0.5s ease both",
        }}>
          {t('projects.label')}
        </div>
        <h1 style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(32px, 5vw, 60px)",
          fontWeight: 400,
          margin: "0 0 16px",
          color: "var(--fg)",
          animation: "fade-up 0.5s ease 0.1s both",
        }}>
          {t('projects.title')}
        </h1>
        <p style={{
          fontSize: 16,
          color: "var(--fg-muted)",
          maxWidth: 480,
          margin: "0 auto",
          lineHeight: 1.7,
          animation: "fade-up 0.5s ease 0.2s both",
        }}>
          {t('projects.subtitle')}
        </p>
      </div>

      {/* Featured grid */}
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        <div className="projects-grid-large" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 24, marginBottom: 24 }}>
          {featured.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              large
              animDelay={i * 0.1}
              isHovered={hovered === project.id}
              onHover={() => setHovered(project.id)}
              onLeave={() => setHovered(null)}
              onClick={() => openProject(project)}
              t={t}
            />
          ))}
        </div>

        {/* Secondary grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 20 }}>
          {rest.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              large={false}
              animDelay={(i + featured.length) * 0.1}
              isHovered={hovered === project.id}
              onHover={() => setHovered(project.id)}
              onLeave={() => setHovered(null)}
              onClick={() => openProject(project)}
              t={t}
            />
          ))}
        </div>
      </div>

      {/* Modal / Lightbox */}
      {selected && (
        <div
          className="project-modal-backdrop"
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 1000,
            background: "rgba(0,0,0,0.75)",
            backdropFilter: "blur(8px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 24,
            animation: "fade-up 0.2s ease both",
          }}
          onClick={closeProject}
        >
          <div
            className="project-modal"
            style={{
              background: "var(--bg-card)",
              border: "1px solid var(--border-strong)",
              borderRadius: 24,
              width: "100%",
              maxWidth: 860,
              maxHeight: "90vh",
              overflow: "hidden",
              position: "relative",
              boxShadow: "0 40px 100px rgba(0,0,0,0.4)",
              display: "flex",
              flexDirection: "column",
            }}
            onClick={e => e.stopPropagation()}
          >
            {/* Close */}
            <button
              onClick={closeProject}
              style={{
                position: "absolute",
                top: 16,
                right: 16,
                zIndex: 10,
                width: 36,
                height: 36,
                borderRadius: "50%",
                background: "var(--bg-card-hover)",
                border: "1px solid var(--border)",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--fg-muted)",
              }}
            >
              <X size={16} />
            </button>

            <div style={{ overflow: "auto" }}>
            {/* Screenshot viewer */}
            <div className="project-modal-image" style={{ position: "relative", borderRadius: "24px 24px 0 0", overflow: "hidden", height: 360, background: "#000" }}>
              <img
                src={selected.screenshots[screenshotIdx]}
                alt={`${selected.title} screenshot ${screenshotIdx + 1}`}
                onClick={() => setLightboxOpen(true)}
                style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.9, cursor: "zoom-in" }}
              />
              <button
                onClick={() => setLightboxOpen(true)}
                aria-label={t('projects.expandTag')}
                style={{
                  position: "absolute", top: 16, left: 16,
                  width: 36, height: 36, borderRadius: "50%", background: "rgba(0,0,0,0.5)",
                  border: "1px solid rgba(255,255,255,0.2)", cursor: "pointer",
                  display: "flex", alignItems: "center", justifyContent: "center", color: "#fff",
                }}
              >
                <Expand size={16} />
              </button>
              {selected.screenshots.length > 1 && (
                <>
                  <button
                    onClick={() => setScreenshotIdx(i => Math.max(0, i - 1))}
                    disabled={screenshotIdx === 0}
                    style={{
                      position: "absolute", left: 16, top: "50%", transform: "translateY(-50%)",
                      width: 36, height: 36, borderRadius: "50%", background: "rgba(0,0,0,0.5)",
                      border: "1px solid rgba(255,255,255,0.2)", cursor: "pointer",
                      display: "flex", alignItems: "center", justifyContent: "center", color: "#fff",
                    }}
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <button
                    onClick={() => setScreenshotIdx(i => Math.min(selected.screenshots.length - 1, i + 1))}
                    disabled={screenshotIdx === selected.screenshots.length - 1}
                    style={{
                      position: "absolute", right: 16, top: "50%", transform: "translateY(-50%)",
                      width: 36, height: 36, borderRadius: "50%", background: "rgba(0,0,0,0.5)",
                      border: "1px solid rgba(255,255,255,0.2)", cursor: "pointer",
                      display: "flex", alignItems: "center", justifyContent: "center", color: "#fff",
                    }}
                  >
                    <ChevronRight size={18} />
                  </button>
                  <div style={{
                    position: "absolute", bottom: 14, left: "50%", transform: "translateX(-50%)",
                    display: "flex", gap: 6,
                  }}>
                    {selected.screenshots.map((_, i) => (
                      <div key={i} onClick={() => setScreenshotIdx(i)} style={{
                        width: i === screenshotIdx ? 18 : 6, height: 6, borderRadius: 99,
                        background: i === screenshotIdx ? "#fff" : "rgba(255,255,255,0.4)",
                        cursor: "pointer", transition: "width 0.2s",
                      }} />
                    ))}
                  </div>
                </>
              )}
              {/* Accent stripe */}
              <div style={{
                position: "absolute", bottom: 0, left: 0, right: 0, height: 3,
                background: selected.accentColor,
              }} />
            </div>

            <div style={{ padding: "32px 36px" }} className="project-modal-body">
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 12, marginBottom: 16 }}>
                <div>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--fg-subtle)", marginBottom: 6 }}>
                    {selected.category} · {selected.year}
                  </div>
                  <h2 style={{ fontFamily: "var(--font-display)", fontSize: 32, fontWeight: 400, margin: 0, color: "var(--fg)" }}>
                    {selected.title}
                  </h2>
                </div>
                <div style={{ display: "flex", gap: 10 }}>
                  {selected.hasVideo && (
                    <span style={{
                      display: "flex", alignItems: "center", gap: 6, padding: "8px 14px",
                      borderRadius: 10, background: "var(--tag-bg)", color: "var(--tag-fg)",
                      border: "1px solid var(--border)", fontSize: 13,
                    }}>
                      <Play size={13} strokeWidth={1.5} /> {t('projects.videoTag')}
                    </span>
                  )}
                  {selected.liveUrl && (
                    <a href={selected.liveUrl} target="_blank" rel="noopener noreferrer" style={{
                      display: "flex", alignItems: "center", gap: 6, padding: "8px 16px",
                      borderRadius: 10, background: "var(--accent)", color: "var(--accent-fg)",
                      textDecoration: "none", fontSize: 13, fontWeight: 600,
                    }}>
                      <ExternalLink size={13} /> {t('projects.liveTag')}
                    </a>
                  )}
                </div>
              </div>

              <p style={{ fontSize: 15, lineHeight: 1.75, color: "var(--fg-muted)", margin: "0 0 24px" }}>
                {selected.description}
              </p>

              <div>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--fg-subtle)", marginBottom: 10, letterSpacing: "0.1em" }}>
                  {t('projects.techStack')}
                </div>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                  {selected.techStack.map(tech => (
                    <span key={tech} style={{
                      fontFamily: "var(--font-mono)", fontSize: 12, padding: "5px 12px",
                      borderRadius: 99, background: "var(--tag-bg)", color: "var(--tag-fg)",
                      border: "1px solid var(--border-strong)",
                    }}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      )}

      {/* Fullscreen image lightbox */}
      {selected && lightboxOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 1100,
            background: "rgba(0,0,0,0.92)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 24,
            animation: "fade-up 0.2s ease both",
          }}
          onClick={() => setLightboxOpen(false)}
        >
          <button
            onClick={() => setLightboxOpen(false)}
            aria-label="Close"
            style={{
              position: "absolute", top: 20, right: 20, zIndex: 10,
              width: 40, height: 40, borderRadius: "50%", background: "rgba(255,255,255,0.1)",
              border: "1px solid rgba(255,255,255,0.2)", cursor: "pointer",
              display: "flex", alignItems: "center", justifyContent: "center", color: "#fff",
            }}
          >
            <X size={18} />
          </button>

          <img
            src={selected.screenshots[screenshotIdx]}
            alt={`${selected.title} screenshot ${screenshotIdx + 1}`}
            onClick={e => e.stopPropagation()}
            style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain", borderRadius: 8, cursor: "zoom-out" }}
          />

          {selected.screenshots.length > 1 && (
            <>
              <button
                onClick={e => { e.stopPropagation(); setScreenshotIdx(i => Math.max(0, i - 1)) }}
                disabled={screenshotIdx === 0}
                style={{
                  position: "absolute", left: 20, top: "50%", transform: "translateY(-50%)",
                  width: 44, height: 44, borderRadius: "50%", background: "rgba(255,255,255,0.1)",
                  border: "1px solid rgba(255,255,255,0.2)", cursor: "pointer",
                  display: "flex", alignItems: "center", justifyContent: "center", color: "#fff",
                }}
              >
                <ChevronLeft size={22} />
              </button>
              <button
                onClick={e => { e.stopPropagation(); setScreenshotIdx(i => Math.min(selected.screenshots.length - 1, i + 1)) }}
                disabled={screenshotIdx === selected.screenshots.length - 1}
                style={{
                  position: "absolute", right: 20, top: "50%", transform: "translateY(-50%)",
                  width: 44, height: 44, borderRadius: "50%", background: "rgba(255,255,255,0.1)",
                  border: "1px solid rgba(255,255,255,0.2)", cursor: "pointer",
                  display: "flex", alignItems: "center", justifyContent: "center", color: "#fff",
                }}
              >
                <ChevronRight size={22} />
              </button>
            </>
          )}
        </div>
      )}
    </div>
  )
}

function ProjectCard({
  project, large, animDelay, isHovered, onHover, onLeave, onClick, t,
}: {
  project: ProjectView
  large: boolean
  animDelay: number
  isHovered: boolean
  onHover: () => void
  onLeave: () => void
  onClick: () => void
  t: (key: string) => string
}) {
  return (
    <div
      className="card-glass"
      onClick={onClick}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      style={{
        borderRadius: 20,
        overflow: "hidden",
        cursor: "pointer",
        animation: `fade-up 0.5s ease ${animDelay}s both`,
        borderTop: `2px solid ${isHovered ? project.accentColor : "var(--border)"}`,
        transition: "border-color 0.25s",
      }}
    >
      {/* Image */}
      <div style={{
        height: large ? 240 : 180,
        overflow: "hidden",
        position: "relative",
        background: "#000",
      }}>
        <img
          src={project.image}
          alt={project.title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: isHovered ? 0.7 : 0.85,
            transform: isHovered ? "scale(1.04)" : "scale(1)",
            transition: "opacity 0.35s, transform 0.35s",
          }}
        />
        <div style={{
          position: "absolute",
          inset: 0,
          background: `linear-gradient(to top, ${project.accentColor}22 0%, transparent 60%)`,
        }} />

        {/* Badges */}
        <div style={{ position: "absolute", top: 14, left: 14, display: "flex", gap: 6 }}>
          {project.hasVideo && (
            <span style={{
              display: "flex", alignItems: "center", gap: 4, padding: "4px 10px",
              borderRadius: 99, background: "rgba(0,0,0,0.55)", color: "#fff",
              fontSize: 11, backdropFilter: "blur(4px)",
            }}>
              <Play size={10} /> {t('projects.videoTag')}
            </span>
          )}
          {project.liveUrl && (
            <span style={{
              display: "flex", alignItems: "center", gap: 4, padding: "4px 10px",
              borderRadius: 99, background: "rgba(0,0,0,0.55)", color: "#fff",
              fontSize: 11, backdropFilter: "blur(4px)",
            }}>
              <Monitor size={10} /> {t('projects.liveTag')}
            </span>
          )}
        </div>
      </div>

      {/* Info */}
      <div style={{ padding: large ? "24px 24px 20px" : "20px 20px 16px" }}>
        <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--fg-subtle)", marginBottom: 6 }}>
          {project.category} · {project.year}
        </div>
        <h3 style={{
          fontFamily: "var(--font-display)",
          fontSize: large ? 24 : 20,
          fontWeight: 400,
          margin: "0 0 10px",
          color: "var(--fg)",
        }}>
          {project.title}
        </h3>
        <p style={{
          fontSize: 13,
          lineHeight: 1.65,
          color: "var(--fg-muted)",
          margin: "0 0 14px",
          display: "-webkit-box",
          WebkitLineClamp: 2,
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
        }}>
          {project.description}
        </p>
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
          {project.techStack.slice(0, 3).map(tech => (
            <span key={tech} style={{
              fontFamily: "var(--font-mono)", fontSize: 11, padding: "3px 9px",
              borderRadius: 99, background: "var(--tag-bg)", color: "var(--tag-fg)",
              border: "1px solid var(--border)",
            }}>
              {tech}
            </span>
          ))}
          {project.techStack.length > 3 && (
            <span style={{
              fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--fg-subtle)",
              padding: "3px 4px",
            }}>
              +{project.techStack.length - 3}
            </span>
          )}
        </div>
      </div>
    </div>
  )
}
