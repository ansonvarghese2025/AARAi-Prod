'use client'

import { motion } from 'motion/react'

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number]

const stagger = (i: number) => ({
  opacity: 1, y: 0,
  transition: { duration: 0.55, ease: EASE, delay: i * 0.08 },
})

const pillars = [
  {
    icon: '⚡',
    color: '#00c8ff',
    title: 'Up and Running Fast',
    body: 'Most clients are set up and seeing results within days — not weeks or months of back-and-forth.',
  },
  {
    icon: '🔐',
    color: '#7b5fff',
    title: 'Your Data is Safe',
    body: 'We protect your business data, passwords, and systems properly — so you never have to worry about hackers or data loss.',
  },
  {
    icon: '📊',
    color: '#ffb86c',
    title: 'No Guesswork',
    body: 'We give you clear, simple reports so you always know what\'s working, what it\'s costing, and what you\'re getting back.',
  },
  {
    icon: '🌐',
    color: '#00e676',
    title: 'One Company for Everything',
    body: 'IT, cloud, marketing, and AI — all handled by one team. No juggling suppliers or explaining yourself to different people.',
  },
  {
    icon: '🤝',
    color: '#ff7f50',
    title: 'A Team That Knows You',
    body: 'You get a real named contact who understands your business. No call centres, no ticket queues — just a person you can ring.',
  },
  {
    icon: '🔄',
    color: '#00c8ff',
    title: 'We Keep Getting Better',
    body: 'We check in regularly, report back honestly, and always look for ways to save you money or time as your business grows.',
  },
]

const steps = [
  {
    num: '01',
    title: 'A Quick Chat',
    body: 'We have a free 45-minute call to understand your business, what\'s working, and what\'s causing headaches.',
  },
  {
    num: '02',
    title: 'A Clear Plan',
    body: 'We put together a simple plan — what we\'ll do, when we\'ll do it, and what it\'ll cost. No jargon, no surprises.',
  },
  {
    num: '03',
    title: 'We Get Started',
    body: 'Your dedicated contact gets to work within 72 hours. You\'ll see progress fast — not months of setup.',
  },
  {
    num: '04',
    title: 'We Keep Improving',
    body: 'We manage and improve things as your business grows — checking in regularly so nothing ever slips.',
  },
]

export default function WhyAARAi() {
  return (
    <>
      {/* ─── Why AARAi ─────────────────────────────────────── */}
      <section id="why-aarai" className="section" style={{ position: 'relative', zIndex: 10 }}>
        <div style={{
          position: 'absolute',
          bottom: 0,
          right: 0,
          width: 500,
          height: 500,
          background: 'radial-gradient(ellipse, rgba(0,200,255,0.05) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start' }}>

            {/* Left: copy */}
            <div>
              <div className="section-label">Why AARAi</div>
              <h2 className="section-heading">
                Technology shouldn&apos;t be <span className="gradient-text">this complicated</span>
              </h2>
              <p className="section-subtext" style={{ marginBottom: 36 }}>
                We started AARAi because too many good local businesses were being let down by technology — overcharged, ignored, or sold things they didn&apos;t need.
              </p>
              <p className="section-subtext">
                We do things differently. Plain English, fair prices, and a team that actually picks up the phone.
              </p>

              <div style={{ marginTop: 40, display: 'flex', gap: 12 }}>
                <a href="#contact" className="btn-primary">Start Today →</a>
                <a href="#process"  className="btn-outline">See How It Works</a>
              </div>
            </div>

            {/* Right: pillar grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 16,
            }}>
              {pillars.map((p, i) => (
                <motion.div
                  key={p.title}
                  className="glass-card"
                  style={{ padding: '22px 20px' }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={stagger(i)}
                  viewport={{ once: true, margin: '-40px' }}
                >
                  <div style={{
                    fontSize: '1.5rem',
                    marginBottom: 12,
                    width: 44,
                    height: 44,
                    borderRadius: 12,
                    background: `${p.color}18`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                    {p.icon}
                  </div>
                  <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: p.color, marginBottom: 8 }}>
                    {p.title}
                  </h4>
                  <p style={{ fontSize: '0.82rem', lineHeight: 1.65, color: 'var(--text-muted)', margin: 0 }}>
                    {p.body}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <style>{`
          @media (max-width: 900px) {
            #why-aarai .container > div {
              grid-template-columns: 1fr !important;
              gap: 48px !important;
            }
          }
        `}</style>
      </section>

      {/* ─── Divider ───────────────────────────────────────── */}
      <div className="glow-divider" />

      {/* ─── How It Works ──────────────────────────────────── */}
      <section id="process" className="section" style={{ position: 'relative', zIndex: 10 }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 64 }}>
            <div className="section-label" style={{ justifyContent: 'center' }}>How It Works</div>
            <h2 className="section-heading" style={{ margin: '0 auto 16px' }}>
              From first call to <span className="gradient-text-amber">full deployment</span>
            </h2>
            <p className="section-subtext" style={{ margin: '0 auto', textAlign: 'center' }}>
              A simple, transparent process designed to get you live and generating value as fast as possible.
            </p>
          </div>

          {/* Steps */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 24,
            position: 'relative',
          }}>
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                style={{ position: 'relative', textAlign: 'center' }}
                initial={{ opacity: 0, y: 24 }}
                whileInView={stagger(i)}
                viewport={{ once: true, margin: '-40px' }}
              >
                {/* Connector line (between cards) */}
                {i < steps.length - 1 && (
                  <div style={{
                    position: 'absolute',
                    top: 28,
                    left: '75%',
                    width: '50%',
                    height: 1,
                    background: 'linear-gradient(90deg, var(--primary), var(--secondary))',
                    opacity: 0.25,
                    zIndex: 0,
                  }} />
                )}

                {/* Card */}
                <div className="glass-card" style={{ padding: '32px 20px', position: 'relative', zIndex: 1 }}>
                  {/* Step number bubble */}
                  <div style={{
                    width: 52,
                    height: 52,
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, var(--primary), var(--secondary))',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 20px',
                    fontSize: '1rem',
                    fontWeight: 800,
                    color: '#fff',
                    boxShadow: '0 4px 20px rgba(0,200,255,0.3)',
                  }}>
                    {step.num}
                  </div>
                  <h3 style={{
                    fontSize: '1rem',
                    fontWeight: 700,
                    color: 'var(--foreground)',
                    marginBottom: 10,
                  }}>
                    {step.title}
                  </h3>
                  <p style={{
                    fontSize: '0.85rem',
                    lineHeight: 1.65,
                    color: 'var(--text-muted)',
                    margin: 0,
                  }}>
                    {step.body}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <style>{`
          @media (max-width: 768px) {
            #process .container > div:last-child {
              grid-template-columns: 1fr 1fr !important;
            }
          }
          @media (max-width: 500px) {
            #process .container > div:last-child {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
      </section>
    </>
  )
}
