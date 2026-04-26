import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import { services, getServiceBySlug } from '@/lib/services-data'

export function generateStaticParams() {
  return services.map(s => ({ slug: s.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const svc = getServiceBySlug(slug)
  if (!svc) return {}
  return {
    title: `${svc.title} | AARAi Solutions`,
    description: svc.description,
  }
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const svc = getServiceBySlug(slug)
  if (!svc) notFound()

  const borderAccent = `${svc.color}33`
  const borderAccentMid = `${svc.color}44`

  return (
    <div style={{ minHeight: '100vh', position: 'relative', zIndex: 10 }}>

      {/* ── Hero ──────────────────────────────────────────── */}
      <section style={{ position: 'relative', paddingTop: 140, paddingBottom: 80, overflow: 'hidden' }}>
        {/* Ambient glow */}
        <div style={{
          position: 'absolute',
          top: '-15%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: 900,
          height: 600,
          background: `radial-gradient(ellipse at center, ${svc.bg} 0%, transparent 65%)`,
          pointerEvents: 'none',
        }} />

        <div className="container" style={{ position: 'relative' }}>

          {/* Breadcrumb */}
          <nav style={{ marginBottom: 44, display: 'flex', alignItems: 'center', gap: 8 }}>
            <Link href="/#services" style={{
              color: 'var(--text-muted)',
              textDecoration: 'none',
              fontSize: '0.875rem',
              transition: 'color 0.2s',
            }}>
              ← Services
            </Link>
            <span style={{ color: 'var(--text-dim)', fontSize: '0.875rem' }}>/</span>
            <span style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>{svc.title}</span>
          </nav>

          {/* Icon */}
          <div className="hero-animate" style={{
            animationDelay: '0s',
            width: 80,
            height: 80,
            borderRadius: 20,
            background: svc.bg,
            border: `1px solid ${borderAccent}`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '2.2rem',
            marginBottom: 24,
          }}>
            {svc.icon}
          </div>

          {/* Tagline */}
          <div className="hero-animate" style={{ animationDelay: '0.1s' }}>
            <span style={{
              display: 'inline-block',
              fontSize: '0.78rem',
              fontWeight: 700,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: svc.color,
              marginBottom: 16,
            }}>
              {svc.tagline}
            </span>
          </div>

          {/* Title */}
          <h1 className="hero-animate" style={{
            animationDelay: '0.2s',
            fontSize: 'clamp(2.2rem, 5vw, 3.8rem)',
            fontWeight: 900,
            lineHeight: 1.1,
            letterSpacing: '-0.03em',
            color: 'var(--foreground)',
            marginBottom: 24,
            maxWidth: 720,
          }}>
            {svc.title}
          </h1>

          {/* Long description */}
          <p className="hero-animate" style={{
            animationDelay: '0.3s',
            fontSize: '1.1rem',
            lineHeight: 1.85,
            color: 'var(--text-muted)',
            maxWidth: 640,
            marginBottom: 40,
          }}>
            {svc.longDescription}
          </p>

          {/* CTAs */}
          <div className="hero-animate" style={{
            animationDelay: '0.4s',
            display: 'flex',
            gap: 14,
            flexWrap: 'wrap',
            marginBottom: 56,
          }}>
            <Link href="/#contact" className="btn-primary" style={{ fontSize: '1rem', padding: '13px 28px' }}>
              Get Started →
            </Link>
            <Link href="/#contact" className="btn-outline" style={{ fontSize: '1rem', padding: '12px 28px' }}>
              Talk to Us
            </Link>
          </div>

          {/* Stats strip */}
          <div className="hero-animate" style={{
            animationDelay: '0.5s',
            display: 'flex',
            gap: 16,
            flexWrap: 'wrap',
          }}>
            {svc.stats.map(stat => (
              <div key={stat.label} style={{
                padding: '16px 24px',
                background: 'var(--bg-card)',
                border: `1px solid ${borderAccent}`,
                borderRadius: 12,
                backdropFilter: 'blur(10px)',
                minWidth: 120,
              }}>
                <div style={{ fontSize: '1.6rem', fontWeight: 800, color: svc.color, lineHeight: 1, marginBottom: 6 }}>
                  {stat.value}
                </div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: 500 }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="glow-divider" />

      {/* ── Capabilities + Benefits ────────────────────────── */}
      <section className="section">
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 64,
            alignItems: 'start',
          }}>

            {/* Capabilities */}
            <div>
              <div className="section-label">What&apos;s Included</div>
              <h2 className="section-heading" style={{ marginBottom: 12 }}>
                Full-spectrum <span className="gradient-text">capabilities</span>
              </h2>
              <p className="section-subtext" style={{ marginBottom: 32 }}>
                Everything you need to deliver real outcomes — no add-on fees, no surprises.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 14 }}>
                {svc.features.map(f => (
                  <li key={f} style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 12,
                    fontSize: '0.95rem',
                    color: 'var(--foreground)',
                    lineHeight: 1.6,
                  }}>
                    <span style={{
                      flexShrink: 0,
                      width: 22,
                      height: 22,
                      borderRadius: 6,
                      background: svc.bg,
                      border: `1px solid ${borderAccentMid}`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '0.7rem',
                      color: svc.color,
                      fontWeight: 700,
                      marginTop: 2,
                    }}>✓</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            {/* Benefits */}
            <div>
              <div className="section-label">Why It Works</div>
              <h2 className="section-heading" style={{ marginBottom: 32 }}>
                Built for <span className="gradient-text">real outcomes</span>
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {svc.benefits.map(b => (
                  <div key={b.title} className="glass-card" style={{ padding: '20px 24px' }}>
                    <h4 style={{
                      fontSize: '1rem',
                      fontWeight: 700,
                      color: 'var(--foreground)',
                      marginBottom: 8,
                    }}>
                      {b.title}
                    </h4>
                    <p style={{
                      fontSize: '0.875rem',
                      lineHeight: 1.65,
                      color: 'var(--text-muted)',
                      margin: 0,
                    }}>
                      {b.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="glow-divider" />

      {/* ── Process ───────────────────────────────────────── */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <div className="section-label" style={{ justifyContent: 'center' }}>Our Approach</div>
            <h2 className="section-heading" style={{ margin: '0 auto 16px' }}>
              How we <span className="gradient-text">deliver</span>
            </h2>
            <p className="section-subtext" style={{ margin: '0 auto', textAlign: 'center' }}>
              A proven, repeatable process that minimises risk and maximises outcomes.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: 24,
          }}>
            {svc.process.map(step => (
              <div key={step.step} className="glass-card" style={{ padding: '28px 24px' }}>
                <div style={{
                  fontSize: '2.4rem',
                  fontWeight: 900,
                  lineHeight: 1,
                  marginBottom: 16,
                  background: `linear-gradient(135deg, ${svc.color}, ${svc.color}77)`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}>
                  {step.step}
                </div>
                <h4 style={{
                  fontSize: '1rem',
                  fontWeight: 700,
                  color: 'var(--foreground)',
                  marginBottom: 10,
                }}>
                  {step.title}
                </h4>
                <p style={{
                  fontSize: '0.875rem',
                  lineHeight: 1.65,
                  color: 'var(--text-muted)',
                  margin: 0,
                }}>
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="glow-divider" />

      {/* ── CTA ───────────────────────────────────────────── */}
      <section className="section">
        <div className="container">
          <div style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border)',
            borderRadius: 20,
            padding: 'clamp(40px, 6vw, 72px)',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
          }}>
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: 600,
              height: 350,
              background: `radial-gradient(ellipse, ${svc.bg} 0%, transparent 70%)`,
              pointerEvents: 'none',
            }} />

            <div style={{ position: 'relative' }}>
              <h2 style={{
                fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
                fontWeight: 900,
                lineHeight: 1.15,
                marginBottom: 16,
                color: 'var(--foreground)',
              }}>
                Ready to get started with{' '}
                <span style={{ color: svc.color }}>{svc.title}</span>?
              </h2>
              <p style={{
                fontSize: '1.05rem',
                lineHeight: 1.75,
                color: 'var(--text-muted)',
                maxWidth: 520,
                margin: '0 auto 36px',
              }}>
                Talk to our team today and we&apos;ll design a solution tailored to your specific requirements and goals.
              </p>
              <div style={{ display: 'flex', justifyContent: 'center', gap: 14, flexWrap: 'wrap' }}>
                <Link href="/#contact" className="btn-primary" style={{ fontSize: '1rem', padding: '14px 32px' }}>
                  Contact Us →
                </Link>
                <Link href="/#services" className="btn-outline" style={{ fontSize: '1rem', padding: '14px 32px' }}>
                  View All Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
