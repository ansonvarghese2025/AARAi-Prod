'use client'

import { motion } from 'motion/react'

const categories = [
  {
    label: 'Cloud Platforms',
    items: [
      { name: 'Amazon Web Services', abbr: 'AWS', color: '#FF9900' },
      { name: 'Microsoft Azure',     abbr: 'Az',  color: '#0078D4' },
      { name: 'Google Cloud',        abbr: 'GCP', color: '#4285F4' },
    ],
  },
  {
    label: 'Infrastructure & DevOps',
    items: [
      { name: 'Kubernetes',  abbr: 'K8s', color: '#326CE5' },
      { name: 'Docker',      abbr: 'DO',  color: '#2496ED' },
      { name: 'Terraform',   abbr: 'TF',  color: '#7B42BC' },
      { name: 'Cloudflare',  abbr: 'CF',  color: '#F38020' },
    ],
  },
  {
    label: 'AI & Machine Learning',
    items: [
      { name: 'OpenAI',           abbr: 'OAI', color: '#10A37F' },
      { name: 'Anthropic Claude', abbr: 'ANT', color: '#D4793A' },
      { name: 'Hugging Face',     abbr: 'HF',  color: '#FF9D00' },
    ],
  },
  {
    label: 'Marketing Technology',
    items: [
      { name: 'Google Ads', abbr: 'GA', color: '#4285F4' },
      { name: 'Meta Ads',   abbr: 'ME', color: '#0866FF' },
      { name: 'HubSpot',    abbr: 'HS', color: '#FF7A59' },
    ],
  },
]

const compliance = [
  { name: 'ISO 27001',     status: 'In Pursuit',  color: '#00c8ff', icon: '🛡' },
  { name: 'SOC 2 Type II', status: 'In Pursuit',  color: '#7b5fff', icon: '🔒' },
  { name: 'GDPR',          status: 'Compliant',   color: '#00e676', icon: '✓'  },
]

export default function TechStack() {
  return (
    <section
      id="tech-stack"
      className="section"
      style={{ position: 'relative', zIndex: 10, paddingTop: 80, paddingBottom: 80 }}
    >
      {/* Ambient glow */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'radial-gradient(ellipse at 50% 50%, rgba(0,200,255,0.04) 0%, transparent 65%)',
      }} />

      <div className="container">

        {/* ── Header ──────────────────────────────────────── */}
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <div className="section-label" style={{ justifyContent: 'center' }}>
            Technology Stack
          </div>
          <h2 className="section-heading" style={{ margin: '0 auto 16px' }}>
            Built on <span className="gradient-text">industry-leading platforms</span>
          </h2>
          <p className="section-subtext" style={{ margin: '0 auto', textAlign: 'center' }}>
            We work exclusively with proven, enterprise-grade tools — so every solution we deliver is built to last.
          </p>
        </div>

        {/* ── Category rows ────────────────────────────────── */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 36, marginBottom: 48 }}>
          {categories.map((cat) => (
            <div key={cat.label}>
              {/* Category label */}
              <div style={{
                fontSize: '0.72rem',
                fontWeight: 600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'var(--text-dim)',
                marginBottom: 14,
                paddingLeft: 4,
              }}>
                {cat.label}
              </div>

              {/* Badge row */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
                {cat.items.map((item, i) => (
                  <motion.div
                    key={item.name}
                    className="ts-badge"
                    style={{ '--badge-color': item.color } as React.CSSProperties}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-30px' }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number], delay: i * 0.07 }}
                  >
                    {/* Colour dot / abbr chip */}
                    <div style={{
                      width:          34,
                      height:         34,
                      borderRadius:   9,
                      background:     `${item.color}22`,
                      border:         `1px solid ${item.color}44`,
                      display:        'flex',
                      alignItems:     'center',
                      justifyContent: 'center',
                      fontSize:       '0.6rem',
                      fontWeight:     800,
                      color:          item.color,
                      letterSpacing:  '0.04em',
                      flexShrink:     0,
                    }}>
                      {item.abbr}
                    </div>
                    <span style={{
                      fontSize:   '0.86rem',
                      fontWeight: 600,
                      color:      'var(--foreground)',
                      opacity:    0.85,
                    }}>
                      {item.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* ── Divider ──────────────────────────────────────── */}
        <div style={{
          width:      '100%',
          height:     1,
          background: 'linear-gradient(90deg, transparent, var(--border), transparent)',
          marginBottom: 40,
        }} />

        {/* ── Compliance row ───────────────────────────────── */}
        <div style={{ textAlign: 'center', marginBottom: 24 }}>
          <div style={{
            fontSize:      '0.72rem',
            fontWeight:    600,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color:         'var(--text-dim)',
            marginBottom:  20,
          }}>
            Security & Compliance
          </div>
          <div style={{
            display:        'flex',
            justifyContent: 'center',
            flexWrap:       'wrap',
            gap:            16,
          }}>
            {compliance.map((c, i) => (
              <motion.div
                key={c.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number], delay: i * 0.1 }}
                style={{
                  display:        'inline-flex',
                  alignItems:     'center',
                  gap:            10,
                  padding:        '12px 22px',
                  borderRadius:   12,
                  background:     `${c.color}0d`,
                  border:         `1px solid ${c.color}30`,
                  backdropFilter: 'blur(10px)',
                }}
              >
                <span style={{ fontSize: '1rem' }}>{c.icon}</span>
                <div style={{ textAlign: 'left' }}>
                  <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--foreground)' }}>
                    {c.name}
                  </div>
                  <div style={{
                    fontSize:   '0.68rem',
                    fontWeight: 600,
                    color:      c.color,
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                  }}>
                    {c.status}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>

      <style>{`
        .ts-badge {
          display:        inline-flex;
          align-items:    center;
          gap:            10px;
          padding:        10px 18px 10px 10px;
          background:     var(--bg-card);
          border:         1px solid var(--border);
          border-radius:  50px;
          backdrop-filter: blur(10px);
          transition:     border-color 0.25s ease, background 0.25s ease, transform 0.25s ease;
          cursor:         default;
        }
        .ts-badge:hover {
          border-color: var(--badge-color, var(--primary));
          background:   color-mix(in srgb, var(--badge-color, var(--primary)) 6%, var(--bg-card));
          transform:    translateY(-2px);
        }
      `}</style>
    </section>
  )
}
