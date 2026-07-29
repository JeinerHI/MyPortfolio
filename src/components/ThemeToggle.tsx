import { useEffect, useState } from 'react'
import { Sun, Moon, Monitor } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export type ThemeMode = "light" | "dark" | "system"

function getSystemTheme(): "light" | "dark" {
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
}

function resolveTheme(mode: ThemeMode): "light" | "dark" {
  return mode === "system" ? getSystemTheme() : mode
}

export default function ThemeToggle() {
  const { t } = useTranslation()
  const [themeMode, setThemeMode] = useState<ThemeMode>(() => {
    return (localStorage.getItem("theme-mode") as ThemeMode) || "system"
  })
  const [themePickerOpen, setThemePickerOpen] = useState(false)

  const resolvedTheme = resolveTheme(themeMode)

  useEffect(() => {
    const html = document.documentElement
    if (resolvedTheme === "dark") {
      html.classList.add("dark")
    } else {
      html.classList.remove("dark")
    }
  }, [resolvedTheme])

  useEffect(() => {
    localStorage.setItem("theme-mode", themeMode)
  }, [themeMode])

  useEffect(() => {
    if (themeMode !== "system") return
    const mq = window.matchMedia("(prefers-color-scheme: dark)")
    const handler = () => {
      const html = document.documentElement
      if (mq.matches) html.classList.add("dark")
      else html.classList.remove("dark")
    }
    mq.addEventListener("change", handler)
    return () => mq.removeEventListener("change", handler)
  }, [themeMode])

  useEffect(() => {
    if (!themePickerOpen) return
    const handler = () => setThemePickerOpen(false)
    setTimeout(() => window.addEventListener("click", handler), 0)
    return () => window.removeEventListener("click", handler)
  }, [themePickerOpen])

  const setTheme = (mode: ThemeMode) => {
    setThemeMode(mode)
    setThemePickerOpen(false)
  }

  const themeIcon = themeMode === "light" ? Sun : themeMode === "dark" ? Moon : Monitor

  return (
    <div
      style={{
        position: "fixed",
        bottom: 28,
        right: 28,
        zIndex: 200,
      }}
      onClick={e => e.stopPropagation()}
    >
      {/* Picker */}
      <div style={{
        position: "absolute",
        bottom: 56,
        right: 0,
        opacity: themePickerOpen ? 1 : 0,
        transform: themePickerOpen ? "translateY(0) scale(1)" : "translateY(8px) scale(0.96)",
        pointerEvents: themePickerOpen ? "auto" : "none",
        transition: "opacity 0.18s ease, transform 0.18s ease",
        background: "var(--bg-card)",
        border: "1px solid var(--border-strong)",
        borderRadius: 14,
        padding: "6px",
        boxShadow: "0 12px 40px rgba(0,0,0,0.2)",
        display: "flex",
        flexDirection: "column",
        gap: 2,
        minWidth: 140,
      }}>
        {(["light", "dark", "system"] as ThemeMode[]).map(mode => {
          const Icon = mode === "light" ? Sun : mode === "dark" ? Moon : Monitor
          const active = themeMode === mode
          return (
            <button
              key={mode}
              onClick={() => setTheme(mode)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                padding: "10px 14px",
                borderRadius: 10,
                border: "none",
                background: active ? "var(--accent-soft)" : "transparent",
                color: active ? "var(--accent)" : "var(--fg-muted)",
                fontFamily: "var(--font-sans)",
                fontSize: 13,
                fontWeight: active ? 600 : 400,
                cursor: "pointer",
                textAlign: "left",
                width: "100%",
                transition: "all 0.15s",
              }}
              onMouseEnter={e => { if (!active) (e.currentTarget).style.background = "var(--bg-card-hover)" }}
              onMouseLeave={e => { if (!active) (e.currentTarget).style.background = "transparent" }}
            >
              <Icon size={14} strokeWidth={1.8} />
              {t(`theme.${mode}`)}
              {active && (
                <span style={{ marginLeft: "auto", width: 6, height: 6, borderRadius: "50%", background: "var(--accent)", flexShrink: 0 }} />
              )}
            </button>
          )
        })}
      </div>

      {/* Main toggle button */}
      <button
        onClick={() => setThemePickerOpen(o => !o)}
        title={t('theme.toggle')}
        style={{
          width: 44,
          height: 44,
          borderRadius: "50%",
          background: "var(--bg-card)",
          border: "1px solid var(--border-strong)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          color: "var(--accent)",
          boxShadow: "0 4px 16px rgba(0,0,0,0.15)",
          transition: "transform 0.15s, box-shadow 0.15s",
          animation: "pulse-glow 3s ease-in-out infinite",
        }}
        onMouseEnter={e => {
          e.currentTarget.style.transform = "scale(1.08)"
          e.currentTarget.style.boxShadow = "0 6px 24px var(--glow)"
        }}
        onMouseLeave={e => {
          e.currentTarget.style.transform = ""
          e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,0,0,0.15)"
        }}
      >
        {(() => {
          const Icon = themeIcon
          return <Icon size={18} strokeWidth={1.8} />
        })()}
      </button>
    </div>
  )
}
