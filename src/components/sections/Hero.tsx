"use client"

import Image from 'next/image'
import CybercoreBackground from '@/components/ui/cybercore-section-hero'

const stats = [
  { value: '99.9%',  label: 'Uptime SLA'       },
  { value: '50+',    label: 'Clients Served'    },
  { value: '24/7',   label: 'Support Coverage'  },
  { value: '10×',    label: 'Faster AI Agents'  },
]

export default function Hero() {
  return (
    <>
      {/* Animated background beams */}
      <CybercoreBackground beamCount={80} />

      {/* Noise texture overlay */}
      <div className="noise-overlay" />

      {/* Hero content */}
      <section className="hero-section">
        <div className="container">

          {/* Animated Logo Showcase */}
          <div className="logo-showcase">
            {/* Ambient glow base */}
            <div className="logo-glow-base" />

            {/* Rotating rings */}
            <div className="logo-ring logo-ring-1" />
            <div className="logo-ring logo-ring-2" />
            <div className="logo-ring logo-ring-3" />

            {/* Orbiting dots */}
            <div style={{ position: 'absolute', top: '50%', left: '50%', width: 0, height: 0 }}>
              <div style={{
                position: 'absolute', width: 8, height: 8, marginTop: -4, marginLeft: -4,
                borderRadius: '50%',
                background: 'var(--primary)',
                boxShadow: '0 0 14px 3px var(--primary)',
                transformOrigin: '-95px 4px',
                animation: 'spin-cw 5s linear infinite',
              }} />
            </div>
            <div style={{ position: 'absolute', top: '50%', left: '50%', width: 0, height: 0 }}>
              <div style={{
                position: 'absolute', width: 6, height: 6, marginTop: -3, marginLeft: -3,
                borderRadius: '50%',
                background: 'var(--secondary)',
                boxShadow: '0 0 12px 3px var(--secondary)',
                transformOrigin: '-115px 3px',
                animation: 'spin-ccw 7s linear infinite',
              }} />
            </div>
            <div style={{ position: 'absolute', top: '50%', left: '50%', width: 0, height: 0 }}>
              <div style={{
                position: 'absolute', width: 5, height: 5, marginTop: -2.5, marginLeft: -2.5,
                borderRadius: '50%',
                background: 'var(--accent)',
                boxShadow: '0 0 10px 2px var(--accent)',
                transformOrigin: '-133px 2.5px',
                animation: 'spin-cw 11s linear infinite',
              }} />
            </div>

            {/* Logo image */}
            <div className="logo-img-wrap">
              <Image
                src="/logo.png"
                alt="AARAi Solutions"
                width={180}
                height={180}
                priority
                style={{ objectFit: 'contain', mixBlendMode: 'screen', display: 'block' }}
              />
            </div>
          </div>

          {/* Acronym expansion */}
          <p style={{
            fontSize: '0.72rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            fontWeight: 500,
            color: 'var(--text-dim)',
            textAlign: 'center',
            margin: '20px 0 28px',
          }}>
            <span style={{ color: 'var(--primary)', fontWeight: 800 }}>A</span>dvanced{' '}
            <span style={{ color: 'var(--primary)', fontWeight: 800 }}>A</span>utomation,{' '}
            <span style={{ color: 'var(--secondary)', fontWeight: 800 }}>R</span>esilience &amp;{' '}
            <span style={{ color: 'var(--secondary)', fontWeight: 800 }}>A</span>rtificial{' '}
            <span style={{ color: 'var(--accent)', fontWeight: 800 }}>i</span>ntelligence
          </p>

          {/* Badge */}
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 28 }}>
            <span style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              padding: '6px 16px',
              borderRadius: 50,
              border: '1px solid rgba(0,200,255,0.3)',
              background: 'rgba(0,200,255,0.08)',
              fontSize: '0.78rem',
              fontWeight: 600,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: 'var(--primary)',
            }}>
              <span style={{
                width: 7, height: 7, borderRadius: '50%',
                background: 'var(--primary)',
                boxShadow: '0 0 8px var(--primary)',
                animation: 'pulse-ring 1.8s ease-out infinite',
              }} />
              Now Open for Business
            </span>
          </div>

          {/* Headline */}
          <h1 style={{
            fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
            fontWeight: 900,
            lineHeight: 1.08,
            letterSpacing: '-0.03em',
            marginBottom: 24,
            maxWidth: 820,
            margin: '0 auto 24px',
          }}>
            <span className="gradient-text">Intelligent Infrastructure</span>
            <br />
            <span style={{ color: 'var(--foreground)' }}>for the Modern Enterprise</span>
          </h1>

          {/* Sub-copy */}
          <p style={{
            fontSize: '1.15rem',
            lineHeight: 1.9,
            maxWidth: 640,
            margin: '0 auto 44px',
            fontFamily: 'Georgia, "Times New Roman", serif',
            fontStyle: 'italic',
            fontWeight: 400,
            letterSpacing: '0.02em',
            background: 'linear-gradient(135deg, var(--primary), var(--secondary))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            Most businesses don&apos;t fail from lack of ambition — they fail from outdated systems.
            AARAi rebuilds your foundation with AI-native infrastructure, intelligent cloud,
            and growth engines that compound every single day.
          </p>

          {/* CTAs */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: 16, flexWrap: 'wrap', marginBottom: 72 }}>
            <a href="#services" className="btn-primary" style={{ fontSize: '1rem', padding: '14px 32px' }}>
              Explore Services →
            </a>
            <a href="#contact" className="btn-outline" style={{ fontSize: '1rem', padding: '14px 32px' }}>
              Talk to Us
            </a>
          </div>

          {/* Stats row */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: 16,
            flexWrap: 'wrap',
          }}>
            {stats.map((s) => (
              <div key={s.label} className="stat-chip">
                <span style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--primary)' }}>
                  {s.value}
                </span>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 500 }}>
                  {s.label}
                </span>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  )
}
