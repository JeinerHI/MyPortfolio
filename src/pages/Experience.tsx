import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import {
  MapPin, Calendar, Code2, Layers, Database, Cloud, TrendingUp, Workflow,
  Award, Building2, Wrench, Briefcase
} from 'lucide-react'
import { experienceMeta, skillsMeta, studiesMeta } from '../data/experience'

type Tab = "experience" | "skills" | "studies"

const TAB_IDS: Tab[] = ["experience", "skills", "studies"]

const SKILL_ICONS = { Code2, Database, Layers, Cloud, TrendingUp, Workflow } as const
const STUDY_ICONS = { Code2, Wrench, Award, Building2 } as const

const HERO_IMAGE = "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1600&h=600&fit=crop&auto=format"

type Job = {
  role: string
  company: string
  period: string
  location: string
  description: string
  tags: string[]
}

export default function Experience() {
  const { t } = useTranslation()
  const [activeTab, setActiveTab] = useState<Tab>("experience")
  const [contentKey, setContentKey] = useState(0)

  const switchTab = (tab: Tab) => {
    if (tab === activeTab) return
    setActiveTab(tab)
    setContentKey(k => k + 1)
  }

  const jobs = t('experience.jobs', { returnObjects: true }) as Job[]
  const jobsWithMeta = jobs.map((job, i) => ({ ...job, ...experienceMeta[i] }))

  return (
    <div style={{ minHeight: "100vh", background: "var(--bg)" }}>
      {/* Hero */}
      <div className="exp-hero" style={{ position: "relative", width: "100%", height: "clamp(400px, 52vw, 480px)", overflow: "hidden" }}>
        <img
          src={HERO_IMAGE}
          alt={t('experience.heroImageAlt')}
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        />
        <div style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.72) 100%)",
        }} />

        {/* Hero label + title */}
        <div style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%) translateY(-20px)",
          textAlign: "center",
          pointerEvents: "none",
          padding: "0 16px",
          width: "100%",
        }}>
          <div style={{
            fontFamily: "var(--font-mono)",
            fontSize: 11,
            letterSpacing: "0.22em",
            color: "rgba(255,255,255,0.45)",
            textTransform: "uppercase",
            marginBottom: 12,
          }}>
            {t('experience.heroLabel')}
          </div>
          <h1 style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(32px, 5vw, 58px)",
            color: "#ffffff",
            margin: 0,
            fontWeight: 400,
            lineHeight: 1.1,
          }}>
            {t('experience.heroTitle')}
          </h1>
        </div>

        {/* Chapter Tab Nav — full-width strip at bottom of hero */}
        <div className="exp-tabs" style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          borderTop: "1px solid rgba(255,255,255,0.1)",
        }}>
          {TAB_IDS.map((id, i) => {
            const active = activeTab === id
            const num = t(`experience.tabs.${id}.num`)
            const label = t(`experience.tabs.${id}.label`)
            const sub = t(`experience.tabs.${id}.sub`)
            return (
              <button
                key={id}
                onClick={() => switchTab(id)}
                className="exp-tab-btn"
                style={{
                  position: "relative",
                  padding: "20px 24px 0",
                  paddingBottom: 0,
                  background: active ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.18)",
                  border: "none",
                  borderLeft: i > 0 ? "1px solid rgba(255,255,255,0.08)" : "none",
                  cursor: "pointer",
                  textAlign: "left",
                  transition: "background 0.25s ease",
                  backdropFilter: "blur(6px)",
                }}
                onMouseEnter={e => {
                  if (!active) e.currentTarget.style.background = "rgba(255,255,255,0.06)"
                }}
                onMouseLeave={e => {
                  if (!active) e.currentTarget.style.background = "rgba(0,0,0,0.18)"
                }}
              >
                <div style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 10,
                  letterSpacing: "0.18em",
                  color: active ? "var(--accent)" : "rgba(255,255,255,0.35)",
                  marginBottom: 4,
                  transition: "color 0.2s",
                }}>
                  {num}
                </div>
                <div style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(15px, 2.2vw, 26px)",
                  color: active ? "#ffffff" : "rgba(255,255,255,0.6)",
                  fontWeight: 400,
                  lineHeight: 1,
                  marginBottom: 6,
                  transition: "color 0.2s",
                }}>
                  {label}
                </div>
                <div className="exp-tab-sub" style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: 12,
                  color: active ? "rgba(255,255,255,0.55)" : "rgba(255,255,255,0.28)",
                  marginBottom: 16,
                  transition: "color 0.2s",
                }}>
                  {sub}
                </div>

                {/* Active indicator bar at very bottom */}
                <div style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: 3,
                  background: active ? "var(--accent)" : "transparent",
                  transition: "background 0.3s ease",
                }} />
              </button>
            )
          })}
        </div>
      </div>

      {/* Content */}
      <div
        key={contentKey}
        style={{
          paddingTop: 72,
          paddingBottom: 80,
          animation: "fade-up 0.35s ease both",
        }}
      >
        {activeTab === "experience" && <ExperienceTab jobs={jobsWithMeta} now={t('experience.now')} />}
        {activeTab === "skills" && <SkillsTab proficiencyLabel={t('experience.proficiency')} />}
        {activeTab === "studies" && <StudiesTab />}
      </div>
    </div>
  )
}

function ExperienceTab({ jobs, now }: { jobs: (Job & { year: string; current: boolean })[]; now: string }) {
  return (
    <div className="exp-timeline" style={{ maxWidth: 960, margin: "0 auto", padding: "0 24px" }}>
      <div style={{ position: "relative" }}>

        {/* Central spine */}
        <div className="exp-spine" style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          width: 1,
          background: "linear-gradient(to bottom, var(--accent) 0%, var(--border-strong) 60%, transparent 100%)",
          pointerEvents: "none",
        }} />

        <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
          {jobs.map((exp, i) => {
            const isLeft = i % 2 === 0
            return (
              <div
                key={i}
                className="exp-timeline-row"
                style={{
                  display: "grid",
                  gap: 0,
                  alignItems: "start",
                  paddingBottom: i < jobs.length - 1 ? 56 : 0,
                  animation: `roadmap-reveal 0.45s ease ${i * 0.12}s both`,
                }}
              >
                {/* Left slot */}
                <div className="exp-slot-left" style={{
                  paddingRight: 32,
                  visibility: isLeft ? "visible" : "hidden",
                  justifyContent: "flex-end",
                }}>
                  {isLeft && <ExperienceCard exp={exp} align="right" now={now} />}
                </div>

                {/* Central node */}
                <div className="exp-node" style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 0,
                  position: "relative",
                  zIndex: 1,
                }}>
                  {/* Year badge */}
                  <div style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 11,
                    color: exp.current ? "var(--accent)" : "var(--fg-subtle)",
                    letterSpacing: "0.08em",
                    marginBottom: 6,
                    whiteSpace: "nowrap",
                  }}>
                    {exp.year}
                  </div>

                  {/* Node circle */}
                  <div style={{
                    width: 44,
                    height: 44,
                    borderRadius: "50%",
                    background: exp.current ? "var(--accent)" : "var(--bg-card)",
                    border: `2px solid ${exp.current ? "var(--accent)" : "var(--border-strong)"}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    boxShadow: exp.current
                      ? "0 0 0 6px var(--accent-soft), 0 0 20px var(--glow)"
                      : "0 2px 8px rgba(0,0,0,0.12)",
                  }}>
                    <Briefcase
                      size={16}
                      color={exp.current ? "var(--accent-fg)" : "var(--fg-muted)"}
                      strokeWidth={1.5}
                    />
                  </div>

                  {/* Connector dashes to next node */}
                  {i < jobs.length - 1 && (
                    <div style={{
                      width: 1,
                      flex: 1,
                      minHeight: 32,
                      marginTop: 6,
                      backgroundImage: "repeating-linear-gradient(to bottom, var(--border-strong) 0, var(--border-strong) 6px, transparent 6px, transparent 12px)",
                    }} />
                  )}
                </div>

                {/* Right slot */}
                <div className="exp-slot-right" style={{
                  paddingLeft: 32,
                  visibility: !isLeft ? "visible" : "hidden",
                  justifyContent: "flex-start",
                }}>
                  {!isLeft && <ExperienceCard exp={exp} align="left" now={now} />}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

function ExperienceCard({
  exp,
  align,
  now,
}: {
  exp: Job & { current: boolean }
  align: "left" | "right"
  now: string
}) {
  return (
    <div
      className="card-glass exp-card"
      style={{
        padding: "26px 28px",
        borderRadius: 18,
        maxWidth: 380,
        width: "100%",
        boxSizing: "border-box",
        borderLeft: align === "left" ? "3px solid var(--accent)" : undefined,
        borderRight: align === "right" ? "3px solid var(--accent)" : undefined,
        position: "relative",
      }}
    >
      {/* Connector arrow from card to spine */}
      <div className="exp-card-arrow" style={{
        position: "absolute",
        top: 30,
        [align === "left" ? "right" : "left"]: -10,
        width: 10,
        height: 10,
        borderTop: "1px solid var(--border-strong)",
        borderRight: align === "left" ? "1px solid var(--border-strong)" : undefined,
        borderLeft: align === "right" ? "1px solid var(--border-strong)" : undefined,
        transform: align === "left" ? "rotate(45deg)" : "rotate(-135deg)",
        background: "var(--bg-card)",
      }} />

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 8, marginBottom: 4 }}>
        <h3 style={{
          fontFamily: "var(--font-display)",
          fontSize: 20,
          fontWeight: 400,
          margin: 0,
          color: "var(--fg)",
          lineHeight: 1.2,
        }}>
          {exp.role}
        </h3>
        {exp.current && (
          <span style={{
            fontFamily: "var(--font-mono)",
            fontSize: 10,
            padding: "3px 9px",
            borderRadius: 99,
            background: "var(--accent-soft)",
            color: "var(--accent)",
            border: "1px solid var(--border-strong)",
            whiteSpace: "nowrap",
            flexShrink: 0,
          }}>
            {now}
          </span>
        )}
      </div>

      <div style={{ fontSize: 13, fontWeight: 600, color: "var(--accent)", marginBottom: 12 }}>
        {exp.company}
      </div>

      <div style={{ display: "flex", gap: 14, marginBottom: 12, flexWrap: "wrap" }}>
        <span style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 12, color: "var(--fg-subtle)" }}>
          <Calendar size={11} strokeWidth={1.5} /> {exp.period}
        </span>
        <span style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 12, color: "var(--fg-subtle)" }}>
          <MapPin size={11} strokeWidth={1.5} /> {exp.location}
        </span>
      </div>

      <p style={{ fontSize: 13, lineHeight: 1.7, color: "var(--fg-muted)", margin: "0 0 14px" }}>
        {exp.description}
      </p>

      <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
        {exp.tags.map(tag => (
          <span key={tag} style={{
            fontFamily: "var(--font-mono)",
            fontSize: 10,
            padding: "3px 9px",
            borderRadius: 99,
            background: "var(--tag-bg)",
            color: "var(--tag-fg)",
            border: "1px solid var(--border)",
          }}>
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}

function SkillsTab({ proficiencyLabel }: { proficiencyLabel: string }) {
  const { t } = useTranslation()
  const skills = t('experience.skillsList', { returnObjects: true }) as { name: string; category: string; description: string }[]

  return (
    <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
        gap: 20,
      }}>
        {skills.map((skill, i) => {
          const Icon = SKILL_ICONS[skillsMeta[i].icon]
          return (
            <div
              key={i}
              className="card-glass"
              style={{
                padding: "28px 24px",
                borderRadius: 18,
                animation: `fade-up 0.4s ease ${i * 0.08}s both`,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 16 }}>
                <div style={{
                  width: 44,
                  height: 44,
                  borderRadius: 12,
                  background: "var(--accent-soft)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}>
                  <Icon size={20} color="var(--accent)" strokeWidth={1.5} />
                </div>
                <div>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--fg-subtle)", marginBottom: 3 }}>
                    {skill.category}
                  </div>
                  <h3 style={{ fontSize: 17, fontWeight: 600, margin: 0, color: "var(--fg)" }}>
                    {skill.name}
                  </h3>
                </div>
              </div>
              <p style={{ fontSize: 13, lineHeight: 1.65, color: "var(--fg-muted)", margin: "0 0 18px" }}>
                {skill.description}
              </p>
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--fg-subtle)" }}>{proficiencyLabel}</span>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--accent)" }}>{skillsMeta[i].level}%</span>
                </div>
                <div style={{ height: 4, borderRadius: 99, background: "var(--border-strong)", overflow: "hidden" }}>
                  <div style={{
                    height: "100%",
                    width: `${skillsMeta[i].level}%`,
                    borderRadius: 99,
                    background: "linear-gradient(90deg, var(--accent), var(--highlight))",
                  }} />
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

function StudiesTab() {
  const { t } = useTranslation()
  const studies = t('experience.studiesList', { returnObjects: true }) as { title: string; school: string; year: string; description: string; tag: string }[]

  return (
    <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
        gap: 20,
      }}>
        {studies.map((study, i) => {
          const meta = studiesMeta[i]
          const Icon = STUDY_ICONS[meta.icon]
          return (
            <div
              key={i}
              className="card-glass"
              style={{
                padding: "32px 28px",
                borderRadius: 20,
                borderTop: `3px solid ${meta.accent}`,
                animation: `fade-up 0.4s ease ${i * 0.1}s both`,
              }}
            >
              <div style={{
                width: 52, height: 52, borderRadius: 14,
                background: meta.accentSoft,
                border: `1px solid ${meta.accent}33`,
                display: "flex", alignItems: "center", justifyContent: "center",
                marginBottom: 20,
              }}>
                <Icon size={24} color={meta.accent} strokeWidth={1.5} />
              </div>
              <div style={{
                fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.12em",
                color: meta.accent, marginBottom: 8, textTransform: "uppercase",
              }}>
                {study.tag}
              </div>
              <h3 style={{
                fontFamily: "var(--font-display)", fontSize: 22, fontWeight: 400,
                margin: "0 0 8px", color: "var(--fg)", lineHeight: 1.2,
              }}>
                {study.title}
              </h3>
              <div style={{ fontSize: 13, color: "var(--fg-subtle)", marginBottom: 14 }}>
                {study.school} · {study.year}
              </div>
              <p style={{ fontSize: 13, lineHeight: 1.7, color: "var(--fg-muted)", margin: 0 }}>
                {study.description}
              </p>
            </div>
          )
        })}
      </div>
    </div>
  )
}
