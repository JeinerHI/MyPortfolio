import { useTranslation } from 'react-i18next'
import { Phone, Mail, ExternalLink, ArrowUpRight } from 'lucide-react'
import { contact } from '../data/contact'

export default function Contact() {
  const { t } = useTranslation()

  return (
    <div style={{ minHeight: "100vh", background: "var(--bg)" }}>
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
          {t('contact.label')}
        </div>
        <h1 style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(32px, 5vw, 60px)",
          fontWeight: 400,
          margin: "0 0 16px",
          color: "var(--fg)",
          animation: "fade-up 0.5s ease 0.1s both",
        }}>
          {t('contact.title')}
        </h1>
        <p style={{
          fontSize: 16,
          color: "var(--fg-muted)",
          maxWidth: 480,
          margin: "0 auto",
          lineHeight: 1.7,
          animation: "fade-up 0.5s ease 0.2s both",
        }}>
          {t('contact.subtitle')}
        </p>
      </div>

      <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 24px 80px" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: 20,
        }}>
          <ContactCard
            icon={Phone}
            label={t('contact.phoneLabel')}
            value={contact.phone}
            accent="#3b6fd4"
            animDelay={0}
          />
          <ContactCard
            icon={Mail}
            label={t('contact.emailLabel')}
            value={contact.email}
            accent="#d97706"
            animDelay={0.1}
          />
          <ContactCard
            icon={ExternalLink}
            label={t('contact.linkedinLabel')}
            value={t('contact.linkedinCta')}
            accent="#059669"
            animDelay={0.2}
            href={contact.linkedinUrl}
          />
        </div>
      </div>
    </div>
  )
}

function ContactCard({
  icon: Icon,
  label,
  value,
  accent,
  animDelay,
  href,
}: {
  icon: typeof Phone
  label: string
  value: string
  accent: string
  animDelay: number
  href?: string
}) {
  const content = (
    <>
      <div style={{
        width: 52,
        height: 52,
        borderRadius: 14,
        background: `${accent}1a`,
        border: `1px solid ${accent}33`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 20,
        flexShrink: 0,
      }}>
        <Icon size={24} color={accent} strokeWidth={1.5} />
      </div>
      <div style={{
        fontFamily: "var(--font-mono)",
        fontSize: 11,
        letterSpacing: "0.12em",
        color: accent,
        marginBottom: 8,
        textTransform: "uppercase",
      }}>
        {label}
      </div>
      <div style={{
        display: "flex",
        alignItems: "center",
        gap: 8,
        fontSize: 16,
        color: "var(--fg)",
        fontWeight: 500,
        wordBreak: "break-word",
      }}>
        {value}
        {href && <ArrowUpRight size={16} color="var(--fg-muted)" style={{ flexShrink: 0 }} />}
      </div>
    </>
  )

  const sharedStyle: React.CSSProperties = {
    padding: "32px 28px",
    borderRadius: 20,
    borderTop: `3px solid ${accent}`,
    animation: `fade-up 0.4s ease ${animDelay}s both`,
    display: "block",
    textDecoration: "none",
  }

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="card-glass"
        style={sharedStyle}
      >
        {content}
      </a>
    )
  }

  return (
    <div className="card-glass" style={sharedStyle}>
      {content}
    </div>
  )
}
