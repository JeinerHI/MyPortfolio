import { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { Download, Languages, Menu, X } from 'lucide-react'
import { useTranslation } from 'react-i18next'

const NAV_ITEMS = [
  { to: "/", key: "home" as const },
  { to: "/experience", key: "experience" as const },
  { to: "/projects", key: "projects" as const },
  { to: "/contact", key: "contact" as const },
]

export default function Nav() {
  const { t, i18n } = useTranslation()
  const navigate = useNavigate()
  const [navScrolled, setNavScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handler = () => setNavScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handler, { passive: true })
    return () => window.removeEventListener("scroll", handler)
  }, [])

  // Close mobile menu on viewport resize back to desktop
  useEffect(() => {
    const handler = () => {
      if (window.innerWidth > 768) setMobileOpen(false)
    }
    window.addEventListener("resize", handler)
    return () => window.removeEventListener("resize", handler)
  }, [])

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === "en" ? "es" : "en")
  }

  const goHome = () => {
    navigate("/")
    setMobileOpen(false)
  }

  const cvHref = `/cv/cv-${i18n.language === "es" ? "es" : "en"}.pdf`

  const navLinkStyle = (isActive: boolean): React.CSSProperties => ({
    padding: "8px 16px",
    borderRadius: 10,
    border: "none",
    background: isActive ? "var(--accent-soft)" : "transparent",
    color: isActive ? "var(--accent)" : "var(--fg-muted)",
    fontFamily: "var(--font-sans)",
    fontSize: 13,
    fontWeight: isActive ? 600 : 400,
    textDecoration: "none",
    letterSpacing: "0.01em",
    transition: "all 0.2s ease",
    whiteSpace: "nowrap",
    display: "block",
  })

  return (
    <nav style={{
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      padding: "0 32px",
      height: 64,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      background: navScrolled || mobileOpen
        ? "var(--nav-bg)"
        : "transparent",
      backdropFilter: navScrolled || mobileOpen ? "blur(16px)" : "none",
      borderBottom: navScrolled || mobileOpen ? "1px solid var(--border)" : "1px solid transparent",
      transition: "background 0.3s ease, border-color 0.3s ease, backdrop-filter 0.3s ease",
    }}>
      {/* Logo */}
      <button
        onClick={goHome}
        style={{
          fontFamily: "var(--font-display)",
          fontSize: 22,
          color: "var(--fg)",
          background: "none",
          border: "none",
          cursor: "pointer",
          padding: 0,
          letterSpacing: "-0.01em",
          flexShrink: 0,
        }}
      >
        MyPortfolio<span style={{ color: "var(--accent)" }}>.</span>
      </button>

      {/* Desktop nav links */}
      <div className="nav-desktop" style={{ alignItems: "center", gap: 6 }}>
        {NAV_ITEMS.map(({ to, key }) => (
          <NavLink key={to} to={to} end={to === "/"} style={({ isActive }) => navLinkStyle(isActive)}>
            {t(`nav.${key}`)}
          </NavLink>
        ))}
      </div>

      {/* Desktop right-side actions */}
      <div className="nav-desktop" style={{ alignItems: "center", gap: 10 }}>
        <button
          onClick={toggleLanguage}
          title={t('language.toggle')}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 6,
            padding: "8px 12px",
            borderRadius: 10,
            border: "1px solid var(--border-strong)",
            background: "transparent",
            color: "var(--fg-muted)",
            fontFamily: "var(--font-mono)",
            fontSize: 12,
            fontWeight: 600,
            cursor: "pointer",
            letterSpacing: "0.02em",
          }}
        >
          <Languages size={14} strokeWidth={1.8} />
          {i18n.language === "es" ? "ES" : "EN"}
        </button>
        <a
          href={cvHref}
          download
          style={{
            display: "flex",
            alignItems: "center",
            gap: 6,
            padding: "8px 16px",
            borderRadius: 10,
            border: "none",
            background: "var(--accent)",
            color: "var(--accent-fg)",
            fontFamily: "var(--font-sans)",
            fontSize: 13,
            fontWeight: 600,
            textDecoration: "none",
            letterSpacing: "0.02em",
            whiteSpace: "nowrap",
          }}
        >
          <Download size={14} strokeWidth={2} />
          {t('nav.downloadCv')}
        </a>
      </div>

      {/* Mobile hamburger */}
      <button
        className="nav-mobile-toggle"
        onClick={() => setMobileOpen(o => !o)}
        aria-label="Menu"
        style={{
          width: 40,
          height: 40,
          borderRadius: 10,
          border: "1px solid var(--border-strong)",
          background: "var(--bg-card)",
          color: "var(--fg)",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
        }}
      >
        {mobileOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Mobile dropdown panel */}
      <div
        className="nav-mobile-panel"
        style={{
          display: mobileOpen ? "flex" : "none",
          position: "absolute",
          top: 64,
          left: 0,
          right: 0,
          flexDirection: "column",
          gap: 4,
          padding: 16,
          background: "var(--bg-card)",
          borderBottom: "1px solid var(--border-strong)",
          boxShadow: "0 12px 40px rgba(0,0,0,0.2)",
        }}
      >
        {NAV_ITEMS.map(({ to, key }) => (
          <NavLink
            key={to}
            to={to}
            end={to === "/"}
            onClick={() => setMobileOpen(false)}
            style={({ isActive }) => ({ ...navLinkStyle(isActive), padding: "12px 16px" })}
          >
            {t(`nav.${key}`)}
          </NavLink>
        ))}

        <div style={{ display: "flex", gap: 10, marginTop: 8 }}>
          <button
            onClick={toggleLanguage}
            style={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 6,
              padding: "10px 12px",
              borderRadius: 10,
              border: "1px solid var(--border-strong)",
              background: "transparent",
              color: "var(--fg-muted)",
              fontFamily: "var(--font-mono)",
              fontSize: 12,
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            <Languages size={14} strokeWidth={1.8} />
            {i18n.language === "es" ? "ES" : "EN"}
          </button>
          <a
            href={cvHref}
            download
            onClick={() => setMobileOpen(false)}
            style={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 6,
              padding: "10px 12px",
              borderRadius: 10,
              border: "none",
              background: "var(--accent)",
              color: "var(--accent-fg)",
              fontFamily: "var(--font-sans)",
              fontSize: 13,
              fontWeight: 600,
              textDecoration: "none",
            }}
          >
            <Download size={14} strokeWidth={2} />
            {t('nav.downloadCv')}
          </a>
        </div>
      </div>
    </nav>
  )
}
