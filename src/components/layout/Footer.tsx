'use client'

import Image from 'next/image'

const serviceLinks = [
  { label: 'Infrastructure Support', href: '/services/infrastructure-support' },
  { label: 'Cloud Solutions',        href: '/services/cloud-solutions'        },
  { label: 'Digital Marketing',      href: '/services/digital-marketing'      },
  { label: 'AI Agent as a Service',  href: '/services/ai-agent-as-a-service'  },
]

const companyLinks = [
  { label: 'About Us',       href: '/#why-aarai' },
  { label: 'How It Works',   href: '/#process'   },
  { label: 'Contact',        href: '/#contact'   },
]

export default function Footer() {
  return (
    <footer style={{
      position: 'relative',
      zIndex: 10,
      borderTop: '1px solid var(--border)',
      background: 'rgba(4,8,15,0.95)',
    }}>
      <div className="container" style={{ padding: '64px 24px 40px' }}>

        {/* Top row */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '2fr 1fr 1fr 1fr',
          gap: 48,
          marginBottom: 56,
        }}>

          {/* Brand column */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              <div style={{
                width: 52,
                height: 52,
                borderRadius: 12,
                overflow: 'hidden',
                background: '#04080f',
                flexShrink: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <Image
                  src="/logo.png"
                  alt="AARAi Solutions"
                  width={52}
                  height={52}
                  style={{ objectFit: 'contain', mixBlendMode: 'screen', display: 'block' }}
                />
              </div>
              <span style={{
                fontSize: '1.1rem',
                fontWeight: 800,
                background: 'linear-gradient(135deg, #00c8ff, #7b5fff)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                AARAi Solutions
              </span>
            </div>
            <p style={{
              fontSize: '0.875rem',
              lineHeight: 1.75,
              color: 'var(--text-muted)',
              maxWidth: 280,
              marginBottom: 24,
            }}>
              Empowering businesses with intelligent infrastructure, cloud scale, data-driven marketing, and AI automation.
            </p>
            {/* Social icons placeholder */}
            <div style={{ display: 'flex', gap: 12 }}>
              {['in', 'X', 'gh'].map(s => (
                <a key={s} href="#" style={{
                  width: 36, height: 36,
                  borderRadius: 8,
                  border: '1px solid var(--border)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--text-muted)',
                  textDecoration: 'none',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  transition: 'border-color 0.2s, color 0.2s',
                }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = 'var(--primary)'
                    ;(e.currentTarget as HTMLElement).style.color = 'var(--primary)'
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)'
                    ;(e.currentTarget as HTMLElement).style.color = 'var(--text-muted)'
                  }}
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h5 style={{ fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--foreground)', marginBottom: 18 }}>
              Services
            </h5>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
              {serviceLinks.map(l => (
                <li key={l.label}>
                  <a href={l.href} style={{
                    color: 'var(--text-muted)', textDecoration: 'none',
                    fontSize: '0.875rem', transition: 'color 0.2s',
                  }}
                    onMouseEnter={e => (e.currentTarget.style.color = 'var(--foreground)')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h5 style={{ fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--foreground)', marginBottom: 18 }}>
              Company
            </h5>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
              {companyLinks.map(l => (
                <li key={l.label}>
                  <a href={l.href} style={{
                    color: 'var(--text-muted)', textDecoration: 'none',
                    fontSize: '0.875rem', transition: 'color 0.2s',
                  }}
                    onMouseEnter={e => (e.currentTarget.style.color = 'var(--foreground)')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h5 style={{ fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--foreground)', marginBottom: 18 }}>
              Contact
            </h5>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <a href="mailto:hello@aarai.solutions" style={{
                color: 'var(--text-muted)', textDecoration: 'none',
                fontSize: '0.875rem', transition: 'color 0.2s',
              }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--primary)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}
              >
                hello@aarai.solutions
              </a>
              <span style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>
                Available 24/7 for emergencies
              </span>
              <div style={{ display: 'flex', gap: 8, marginTop: 4 }}>
                <span style={{ color: 'var(--primary)', fontSize: '0.85rem', flexShrink: 0 }}>📍</span>
                <address style={{
                  color: 'var(--text-muted)',
                  fontSize: '0.82rem',
                  lineHeight: 1.65,
                  fontStyle: 'normal',
                }}>
                  7 HighView Gardens<br />
                  Grays, Essex<br />
                  United Kingdom RM17 6TD
                </address>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="glow-divider" style={{ marginBottom: 24 }} />
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 12,
        }}>
          <p style={{ fontSize: '0.8rem', color: 'var(--text-dim)', margin: 0 }}>
            © {new Date().getFullYear()} AARAi Solutions. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: 24 }}>
            {['Privacy Policy', 'Terms of Service'].map(t => (
              <a key={t} href="#" style={{
                fontSize: '0.8rem', color: 'var(--text-dim)', textDecoration: 'none', transition: 'color 0.2s',
              }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--text-muted)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-dim)')}
              >
                {t}
              </a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          footer .container > div:first-child {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 500px) {
          footer .container > div:first-child {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  )
}
