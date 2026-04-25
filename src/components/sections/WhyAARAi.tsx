const pillars = [
  {
    icon: '⚡',
    color: '#00c8ff',
    title: 'Speed to Value',
    body: 'From kickoff to delivery in days, not months. Our pre-built playbooks and automation-first approach accelerate every engagement.',
  },
  {
    icon: '🔐',
    color: '#7b5fff',
    title: 'Security First',
    body: 'Zero-trust architecture, SOC 2-aligned practices, and continuous threat monitoring baked into every service we deliver.',
  },
  {
    icon: '📊',
    color: '#ffb86c',
    title: 'Data-Driven Decisions',
    body: 'Every strategy is backed by real metrics. We instrument, measure, and iterate — so you always know what is working and why.',
  },
  {
    icon: '🌐',
    color: '#00e676',
    title: 'True Full-Stack',
    body: 'Infrastructure, cloud, marketing, and AI under one roof. No vendor juggling — just a single accountable partner for all your growth needs.',
  },
  {
    icon: '🤝',
    color: '#ff7f50',
    title: 'Dedicated Partnership',
    body: 'A named team that knows your stack and goals. Slack-first communication, weekly syncs, and transparent SLAs — always.',
  },
  {
    icon: '🔄',
    color: '#00c8ff',
    title: 'Continuous Improvement',
    body: 'We treat every engagement as an evolving product. Quarterly reviews, roadmap updates, and proactive recommendations keep you ahead.',
  },
]

const steps = [
  {
    num: '01',
    title: 'Discovery Call',
    body: 'We map your current stack, goals, pain points, and growth targets in a focused 45-minute session.',
  },
  {
    num: '02',
    title: 'Custom Blueprint',
    body: 'Our architects design a tailored roadmap — services, timelines, and measurable milestones — specific to your business.',
  },
  {
    num: '03',
    title: 'Rapid Onboarding',
    body: 'Your dedicated team kicks off within 72 hours. Access dashboards, integrations, and your first deliverables go live fast.',
  },
  {
    num: '04',
    title: 'Scale & Grow',
    body: 'Ongoing management, optimization cycles, and AI-driven enhancements keep your competitive edge sharp.',
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
                Built for businesses that <span className="gradient-text">can&apos;t afford to slow down</span>
              </h2>
              <p className="section-subtext" style={{ marginBottom: 36 }}>
                We founded AARAi Solutions with a single belief: great technology and smart marketing should be accessible to every ambitious business — not just enterprises with massive budgets.
              </p>
              <p className="section-subtext">
                Our team brings together cloud architects, AI engineers, and marketing strategists who operate as an extension of your team — aligned to your outcomes, not just deliverables.
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
              {pillars.map((p) => (
                <div key={p.title} className="glass-card" style={{ padding: '22px 20px' }}>
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
                </div>
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
              <div key={step.num} style={{ position: 'relative', textAlign: 'center' }}>
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
              </div>
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
