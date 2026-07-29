import { useEffect, useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import {
  Code2, Terminal, Database, Globe, Cpu, GitBranch,
  Braces, Server, Layers, Wifi, Package, Cog
} from 'lucide-react'
import { profile } from '../data/profile'

const floatingIcons = [
  { Icon: Code2, x: "8%", y: "12%", delay: "0s", cls: "float-slow", size: 28, opacity: 0.18 },
  { Icon: Terminal, x: "88%", y: "8%", delay: "1.2s", cls: "float-medium", size: 24, opacity: 0.14 },
  { Icon: Database, x: "5%", y: "68%", delay: "0.7s", cls: "float-fast", size: 22, opacity: 0.16 },
  { Icon: Globe, x: "91%", y: "75%", delay: "2.1s", cls: "float-slow", size: 26, opacity: 0.12 },
  { Icon: Cpu, x: "82%", y: "42%", delay: "0.4s", cls: "float-medium", size: 20, opacity: 0.18 },
  { Icon: GitBranch, x: "12%", y: "40%", delay: "1.8s", cls: "float-fast", size: 22, opacity: 0.14 },
  { Icon: Braces, x: "48%", y: "6%", delay: "0.9s", cls: "float-slow", size: 20, opacity: 0.12 },
  { Icon: Server, x: "3%", y: "88%", delay: "1.5s", cls: "float-medium", size: 24, opacity: 0.1 },
  { Icon: Layers, x: "93%", y: "55%", delay: "2.4s", cls: "float-fast", size: 18, opacity: 0.16 },
  { Icon: Wifi, x: "72%", y: "90%", delay: "0.2s", cls: "float-slow", size: 20, opacity: 0.12 },
  { Icon: Package, x: "22%", y: "92%", delay: "1.1s", cls: "float-medium", size: 22, opacity: 0.1 },
  { Icon: Cog, x: "60%", y: "88%", delay: "2.8s", cls: "float-fast", size: 26, opacity: 0.14 },
]

export default function Home() {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const [displayedText, setDisplayedText] = useState("")
  const [phase, setPhase] = useState<"typing" | "done">("typing")
  const [subtitleVisible, setSubtitleVisible] = useState(false)
  const [taglineVisible, setTaglineVisible] = useState(false)
  const [badgesVisible, setBadgesVisible] = useState(false)
  const typingRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const roleItalic = t('home.roleItalic')
  const roleConnector = t('home.roleConnector')
  const roleBold = t('home.roleBold')
  const fullStr = roleItalic + roleConnector + roleBold

  useEffect(() => {
    let i = 0
    const speed = 35
    setDisplayedText("")
    setPhase("typing")
    setSubtitleVisible(false)
    setTaglineVisible(false)
    setBadgesVisible(false)

    const type = () => {
      if (i <= fullStr.length) {
        setDisplayedText(fullStr.slice(0, i))
        i++
        typingRef.current = setTimeout(type, speed)
      } else {
        setPhase("done")
        setTimeout(() => setSubtitleVisible(true), 200)
        setTimeout(() => setTaglineVisible(true), 600)
        setTimeout(() => setBadgesVisible(true), 900)
      }
    }

    typingRef.current = setTimeout(type, 400)
    return () => { if (typingRef.current) clearTimeout(typingRef.current) }
  }, [fullStr])

  const renderTyped = () => {
    const italicEnd = roleItalic.length

    if (phase === "typing") {
      const plain = displayedText.slice(0, Math.min(displayedText.length, italicEnd))
      const afterItalic = displayedText.slice(italicEnd)

      return (
        <span>
          <em style={{ fontFamily: "var(--font-display)", fontStyle: "italic" }}>{plain}</em>
          <span>{afterItalic}</span>
          <span className="cursor" style={{
            display: "inline-block",
            width: "2px",
            height: "1em",
            background: "var(--accent)",
            marginLeft: "2px",
            verticalAlign: "text-bottom",
            animation: "typing-cursor 0.7s step-end infinite"
          }} />
        </span>
      )
    }

    return (
      <span>
        <em style={{ fontFamily: "var(--font-display)", fontStyle: "italic", color: "var(--fg)" }}>
          {roleItalic}
        </em>
        <span style={{ color: "var(--fg-muted)" }}>{roleConnector}</span>
        <strong style={{ color: "var(--fg)", fontWeight: 700 }}>{roleBold}</strong>
      </span>
    )
  }

  const badges = t('home.badges', { returnObjects: true }) as string[]

  return (
    <div className="home-hero" style={{
      minHeight: "100vh",
      background: "var(--gradient-hero)",
      position: "relative",
      overflow: "hidden",
      display: "flex",
      alignItems: "center",
    }}>
      {/* Floating Icons */}
      {floatingIcons.map(({ Icon, x, y, delay, cls, size, opacity }, i) => (
        <div
          key={i}
          className={`${cls} home-float-icon`}
          style={{
            position: "absolute",
            left: x,
            top: y,
            animationDelay: delay,
            color: "var(--accent)",
            opacity,
            pointerEvents: "none",
          }}
        >
          <Icon size={size} strokeWidth={1.5} />
        </div>
      ))}

      {/* Subtle mesh gradient orbs */}
      <div style={{
        position: "absolute",
        width: 500,
        height: 500,
        borderRadius: "50%",
        background: "radial-gradient(circle, var(--glow) 0%, transparent 70%)",
        top: "10%",
        right: "20%",
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute",
        width: 300,
        height: 300,
        borderRadius: "50%",
        background: "radial-gradient(circle, var(--highlight-soft) 0%, transparent 70%)",
        bottom: "15%",
        left: "10%",
        pointerEvents: "none",
      }} />

      {/* Main content */}
      <div className="home-grid" style={{
        width: "100%",
        maxWidth: 1280,
        margin: "0 auto",
        display: "grid",
        alignItems: "center",
      }}>
        {/* Left: Text */}
        <div className="home-text-col" style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          {/* Mono label */}
          <div className="home-label" style={{
            fontFamily: "var(--font-mono)",
            fontSize: 12,
            letterSpacing: "0.15em",
            color: "var(--accent)",
            textTransform: "uppercase",
            opacity: 0.9,
            animation: "fade-up 0.6s ease both",
          }}>
            {t('home.label')}
          </div>

          {/* Main heading */}
          <div>
            <h2 style={{
              fontFamily: "var(--font-mono)",
              fontSize: 14,
              fontWeight: 500,
              color: "var(--fg-muted)",
              letterSpacing: "0.05em",
              margin: "0 0 8px",
              animation: "fade-up 0.6s ease 0.1s both",
            }}>
              {t('home.greeting')}
            </h2>
            <h1 style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(38px, 5vw, 68px)",
              fontWeight: 400,
              lineHeight: 1.1,
              margin: 0,
              color: "var(--fg)",
              animation: "fade-up 0.6s ease 0.2s both",
            }}>
              {t('home.name')}
            </h1>
          </div>

          {/* Typing text */}
          <p style={{
            fontSize: "clamp(18px, 2.2vw, 24px)",
            lineHeight: 1.4,
            margin: 0,
            color: "var(--fg)",
            minHeight: "2em",
            animation: "fade-up 0.6s ease 0.3s both",
          }}>
            {renderTyped()}
          </p>

          {/* Subtitle */}
          <p style={{
            fontSize: 16,
            lineHeight: 1.7,
            color: "var(--fg-muted)",
            margin: 0,
            maxWidth: 480,
            opacity: subtitleVisible ? 1 : 0,
            transform: subtitleVisible ? "translateY(0)" : "translateY(12px)",
            transition: "opacity 0.5s ease, transform 0.5s ease",
          }}>
            {t('home.subtitle')}
          </p>

          {/* Tagline */}
          <p style={{
            fontFamily: "var(--font-mono)",
            fontSize: 13,
            color: "var(--fg-subtle)",
            margin: 0,
            opacity: taglineVisible ? 1 : 0,
            transform: taglineVisible ? "translateY(0)" : "translateY(8px)",
            transition: "opacity 0.5s ease, transform 0.5s ease",
          }}>
            {t('home.tagline')}
          </p>

          {/* Badges */}
          <div style={{
            display: "flex",
            gap: 10,
            flexWrap: "wrap",
            opacity: badgesVisible ? 1 : 0,
            transform: badgesVisible ? "translateY(0)" : "translateY(8px)",
            transition: "opacity 0.5s ease, transform 0.5s ease",
          }}>
            {badges.map(tag => (
              <span key={tag} style={{
                fontFamily: "var(--font-mono)",
                fontSize: 12,
                padding: "5px 12px",
                borderRadius: 99,
                background: "var(--tag-bg)",
                color: "var(--tag-fg)",
                border: "1px solid var(--border-strong)",
                letterSpacing: "0.02em",
              }}>
                {tag}
              </span>
            ))}
          </div>

          {/* CTA row */}
          <div style={{
            display: "flex",
            gap: 14,
            alignItems: "center",
            flexWrap: "wrap",
            opacity: badgesVisible ? 1 : 0,
            transform: badgesVisible ? "translateY(0)" : "translateY(8px)",
            transition: "opacity 0.6s ease 0.1s, transform 0.6s ease 0.1s",
          }}>
            <button
              onClick={() => navigate("/projects")}
              style={{
                padding: "12px 28px",
                borderRadius: 10,
                background: "var(--accent)",
                color: "var(--accent-fg)",
                border: "none",
                fontFamily: "var(--font-sans)",
                fontSize: 14,
                fontWeight: 600,
                cursor: "pointer",
                letterSpacing: "0.02em",
                transition: "opacity 0.2s, transform 0.2s",
              }}
              onMouseEnter={e => { (e.target as HTMLElement).style.opacity = "0.85"; (e.target as HTMLElement).style.transform = "translateY(-1px)"; }}
              onMouseLeave={e => { (e.target as HTMLElement).style.opacity = "1"; (e.target as HTMLElement).style.transform = ""; }}
            >
              {t('home.ctaProjects')}
            </button>
            <button
              onClick={() => navigate("/experience")}
              style={{
                padding: "12px 28px",
                borderRadius: 10,
                background: "transparent",
                color: "var(--fg)",
                border: "1px solid var(--border-strong)",
                fontFamily: "var(--font-sans)",
                fontSize: 14,
                fontWeight: 500,
                cursor: "pointer",
                letterSpacing: "0.02em",
                transition: "border-color 0.2s, transform 0.2s",
              }}
              onMouseEnter={e => { (e.target as HTMLElement).style.borderColor = "var(--accent)"; (e.target as HTMLElement).style.transform = "translateY(-1px)"; }}
              onMouseLeave={e => { (e.target as HTMLElement).style.borderColor = "var(--border-strong)"; (e.target as HTMLElement).style.transform = ""; }}
            >
              {t('home.ctaExperience')}
            </button>
          </div>
        </div>

        {/* Right: Photo */}
        <div className="home-photo" style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          animation: "slide-in-right 0.8s ease 0.4s both",
        }}>
          <div className="home-photo-inner" style={{ position: "relative" }}>
            {/* Decorative ring */}
            <div className="home-photo-ring-outer" style={{
              position: "absolute",
              inset: -16,
              borderRadius: "50% 42% 50% 42%",
              border: "1px solid var(--border-strong)",
              animation: "spin-slow 20s linear infinite",
            }} />
            <div className="home-photo-ring-inner" style={{
              position: "absolute",
              inset: -32,
              borderRadius: "42% 50% 42% 50%",
              border: "1px solid var(--border)",
              animation: "spin-slow 30s linear infinite reverse",
            }} />

            {/* Photo container */}
            <div className="home-photo-frame" style={{
              overflow: "hidden",
              border: "1px solid var(--border-strong)",
              boxShadow: "0 24px 80px var(--glow)",
              background: "var(--bg-card)",
              transition: "width 0.3s ease, aspect-ratio 0.3s ease, border-radius 0.3s ease",
            }}>
              <img
                src={profile.photoUrl}
                alt={t('home.photoAlt')}
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
            </div>

            {/* Floating stat cards */}
            <div className="card-glass home-stat-card home-stat-card-left" style={{
              position: "absolute",
              bottom: 40,
              left: -60,
              padding: "14px 20px",
              borderRadius: 14,
              minWidth: 140,
            }}>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--fg-subtle)", marginBottom: 4 }}>{t('home.statExperienceLabel')}</div>
              <div style={{ fontFamily: "var(--font-display)", fontSize: 28, color: "var(--fg)" }}>{t('home.statExperienceValue')}</div>
              <div style={{ fontSize: 12, color: "var(--fg-muted)" }}>{t('home.statExperienceCaption')}</div>
            </div>

            <div className="card-glass home-stat-card home-stat-card-right" style={{
              position: "absolute",
              top: 40,
              right: -50,
              padding: "14px 20px",
              borderRadius: 14,
              minWidth: 130,
            }}>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--fg-subtle)", marginBottom: 4 }}>{t('home.statProjectsLabel')}</div>
              <div style={{ fontFamily: "var(--font-display)", fontSize: 28, color: "var(--fg)" }}>{t('home.statProjectsValue')}</div>
              <div style={{ fontSize: 12, color: "var(--fg-muted)" }}>{t('home.statProjectsCaption')}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
