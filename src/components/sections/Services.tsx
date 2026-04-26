'use client'

import Link from 'next/link'
import { services } from '@/lib/services-data'

export default function Services() {
  return (
    <section id="services" className="section" style={{ position: 'relative', zIndex: 10 }}>
      {/* Background gradient accent */}
      <div style={{
        position: 'absolute',
        top: '10%',
        left: '50%',
        transform: 'translateX(-50%)',
        width: 800,
        height: 400,
        background: 'radial-gradient(ellipse, rgba(123,95,255,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <div className="section-label" style={{ justifyContent: 'center' }}>Our Services</div>
          <h2 className="section-heading" style={{ margin: '0 auto 16px' }}>
            Everything you need to <span className="gradient-text">scale smart</span>
          </h2>
          <p className="section-subtext" style={{ margin: '0 auto', textAlign: 'center' }}>
            Four focused service pillars — each one battle-tested to deliver measurable outcomes for businesses of every size.
          </p>
        </div>

        {/* Cards grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: 24,
        }}>
          {services.map((svc) => (
            <div key={svc.title} className="glass-card" style={{ padding: '32px 28px' }}>

              {/* Icon */}
              <div className="service-icon" style={{ background: svc.bg }}>
                {svc.icon}
              </div>

              {/* Tag */}
              <span style={{
                display: 'inline-block',
                fontSize: '0.72rem',
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: svc.color,
                marginBottom: 8,
              }}>
                {svc.tagline}
              </span>

              {/* Title */}
              <h3 style={{
                fontSize: '1.25rem',
                fontWeight: 800,
                color: 'var(--foreground)',
                marginBottom: 12,
                lineHeight: 1.3,
              }}>
                {svc.title}
              </h3>

              {/* Description */}
              <p style={{
                fontSize: '0.9rem',
                lineHeight: 1.7,
                color: 'var(--text-muted)',
                marginBottom: 24,
              }}>
                {svc.description}
              </p>

              {/* Feature list */}
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 9 }}>
                {svc.features.map((f) => (
                  <li key={f} style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 10,
                    fontSize: '0.85rem',
                    color: 'var(--text-muted)',
                    lineHeight: 1.5,
                  }}>
                    <span style={{
                      flexShrink: 0,
                      width: 18,
                      height: 18,
                      borderRadius: 4,
                      background: svc.bg,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '0.65rem',
                      color: svc.color,
                      marginTop: 1,
                    }}>✓</span>
                    {f}
                  </li>
                ))}
              </ul>

              {/* CTA link */}
              <Link
                href={`/services/${svc.slug}`}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 6,
                  marginTop: 28,
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  color: svc.color,
                  textDecoration: 'none',
                  transition: 'gap 0.2s',
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.gap = '10px' }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.gap = '6px' }}
              >
                Learn more <span>→</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
