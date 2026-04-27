'use client'

import { useState, FormEvent } from 'react'

const services = [
  'Infrastructure Support',
  'Cloud Solutions',
  'Digital Marketing',
  'AI Agent as a Service',
  'Not sure yet — help me choose',
]

type Status = 'idle' | 'loading' | 'success' | 'error'

export default function Contact() {
  const [status, setStatus] = useState<Status>('idle')
  const [form, setForm]     = useState({ name: '', email: '', company: '', service: '', message: '' })

  function set(field: string, value: string) {
    setForm(prev => ({ ...prev, [field]: value }))
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify(form),
      })
      setStatus(res.ok ? 'success' : 'error')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="section" style={{ position: 'relative', zIndex: 10 }}>
      {/* Glow blob */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'radial-gradient(ellipse at center, rgba(123,95,255,0.08) 0%, transparent 65%)',
      }} />

      <div className="container">
        <div style={{
          background:   'linear-gradient(135deg, rgba(0,200,255,0.06) 0%, rgba(123,95,255,0.10) 100%)',
          border:       '1px solid rgba(0,200,255,0.18)',
          borderRadius: 24,
          overflow:     'hidden',
          position:     'relative',
        }}>
          {/* Corner blobs */}
          <div style={{ position:'absolute', top:-60, right:-60, width:200, height:200, borderRadius:'50%', background:'radial-gradient(circle, rgba(0,200,255,0.10) 0%, transparent 70%)', pointerEvents:'none' }} />
          <div style={{ position:'absolute', bottom:-60, left:-60, width:200, height:200, borderRadius:'50%', background:'radial-gradient(circle, rgba(123,95,255,0.10) 0%, transparent 70%)', pointerEvents:'none' }} />

          <div className="contact-inner">

            {/* ── Left: info ─────────────────────────────── */}
            <div style={{ padding: 'clamp(36px,5vw,60px)' }}>
              <div className="section-label">Get In Touch</div>
              <h2 style={{
                fontSize:    'clamp(1.7rem, 3.5vw, 2.6rem)',
                fontWeight:  900,
                lineHeight:  1.15,
                marginBottom: 16,
                letterSpacing: '-0.025em',
              }}>
                Ready to <span className="gradient-text">transform<br/>your business</span>?
              </h2>
              <p style={{ fontSize:'0.95rem', lineHeight:1.75, color:'var(--text-muted)', marginBottom:36 }}>
                Tell us what you&apos;re working on. We&apos;ll respond within 24 hours with a free consultation and a plan tailored to your goals.
              </p>

              {/* Contact details */}
              <div style={{ display:'flex', flexDirection:'column', gap:16, marginBottom:36 }}>
                {[
                  { icon:'📧', label:'Email us', value:'hello@aarai.solutions', href:'mailto:hello@aarai.solutions' },
                  { icon:'📍', label:'Based in', value:'Grays, Essex, United Kingdom', href: null },
                  { icon:'🕐', label:'Response time', value:'Within 24 hours', href: null },
                ].map(item => (
                  <div key={item.label} style={{ display:'flex', alignItems:'center', gap:12 }}>
                    <div style={{
                      width:36, height:36, borderRadius:10, flexShrink:0,
                      background:'rgba(0,200,255,0.08)', border:'1px solid rgba(0,200,255,0.15)',
                      display:'flex', alignItems:'center', justifyContent:'center', fontSize:'1rem',
                    }}>
                      {item.icon}
                    </div>
                    <div>
                      <div style={{ fontSize:'0.72rem', color:'var(--text-dim)', fontWeight:600, textTransform:'uppercase', letterSpacing:'0.08em' }}>
                        {item.label}
                      </div>
                      {item.href
                        ? <a href={item.href} style={{ fontSize:'0.88rem', color:'var(--primary)', fontWeight:600, textDecoration:'none' }}>{item.value}</a>
                        : <div style={{ fontSize:'0.88rem', color:'var(--foreground)', fontWeight:500 }}>{item.value}</div>
                      }
                    </div>
                  </div>
                ))}
              </div>

              {/* Trust chips */}
              <div style={{ display:'flex', flexDirection:'column', gap:8 }}>
                {['✅ No long-term lock-in', '✅ Free initial consultation', '✅ Results-based pricing available'].map(t => (
                  <span key={t} style={{ fontSize:'0.82rem', color:'var(--text-muted)', fontWeight:500 }}>{t}</span>
                ))}
              </div>
            </div>

            {/* ── Right: form ────────────────────────────── */}
            <div style={{
              padding:    'clamp(36px,5vw,60px)',
              background: 'rgba(4,8,15,0.5)',
              borderLeft: '1px solid rgba(0,200,255,0.10)',
            }}>
              {status === 'success' ? (
                <div style={{
                  display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center',
                  height:'100%', textAlign:'center', gap:16, minHeight:320,
                }}>
                  <div style={{ fontSize:'3rem' }}>✅</div>
                  <h3 style={{ fontSize:'1.3rem', fontWeight:800, color:'var(--foreground)' }}>
                    Message sent!
                  </h3>
                  <p style={{ fontSize:'0.9rem', color:'var(--text-muted)', maxWidth:300, lineHeight:1.65 }}>
                    Thanks for reaching out. We&apos;ll be back in touch within 24 hours.
                  </p>
                  <button
                    onClick={() => { setStatus('idle'); setForm({ name:'', email:'', company:'', service:'', message:'' }) }}
                    className="btn-outline"
                    style={{ marginTop:8 }}
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display:'flex', flexDirection:'column', gap:18 }}>
                  <h3 style={{ fontSize:'1.05rem', fontWeight:700, color:'var(--foreground)', marginBottom:4 }}>
                    Send us a message
                  </h3>

                  {/* Name + Email row */}
                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">Full Name *</label>
                      <input
                        className="form-input"
                        type="text"
                        placeholder="Jane Smith"
                        value={form.name}
                        onChange={e => set('name', e.target.value)}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Work Email *</label>
                      <input
                        className="form-input"
                        type="email"
                        placeholder="jane@company.com"
                        value={form.email}
                        onChange={e => set('email', e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  {/* Company */}
                  <div className="form-group">
                    <label className="form-label">Company <span style={{ color:'var(--text-dim)' }}>(optional)</span></label>
                    <input
                      className="form-input"
                      type="text"
                      placeholder="Your company name"
                      value={form.company}
                      onChange={e => set('company', e.target.value)}
                    />
                  </div>

                  {/* Service */}
                  <div className="form-group">
                    <label className="form-label">I&apos;m interested in *</label>
                    <select
                      className="form-input form-select"
                      value={form.service}
                      onChange={e => set('service', e.target.value)}
                      required
                    >
                      <option value="" disabled>Select a service…</option>
                      {services.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>

                  {/* Message */}
                  <div className="form-group">
                    <label className="form-label">Message *</label>
                    <textarea
                      className="form-input"
                      rows={4}
                      placeholder="Tell us about your project, goals, or challenges…"
                      value={form.message}
                      onChange={e => set('message', e.target.value)}
                      required
                      style={{ resize:'vertical', minHeight:100 }}
                    />
                  </div>

                  {status === 'error' && (
                    <p style={{ fontSize:'0.82rem', color:'#ff5555', margin:0 }}>
                      Something went wrong. Please try again or email us directly at hello@aarai.solutions.
                    </p>
                  )}

                  <button
                    type="submit"
                    className="btn-primary"
                    disabled={status === 'loading'}
                    style={{ width:'100%', justifyContent:'center', opacity: status === 'loading' ? 0.7 : 1 }}
                  >
                    {status === 'loading' ? 'Sending…' : 'Send Message →'}
                  </button>

                  <p style={{ fontSize:'0.75rem', color:'var(--text-dim)', margin:0, textAlign:'center' }}>
                    We&apos;ll never share your details. No spam, ever.
                  </p>
                </form>
              )}
            </div>

          </div>
        </div>
      </div>

      <style>{`
        .contact-inner {
          display: grid;
          grid-template-columns: 1fr 1fr;
        }
        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
        }
        .form-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .form-label {
          font-size: 0.78rem;
          font-weight: 600;
          color: var(--text-muted);
          letter-spacing: 0.04em;
        }
        .form-input {
          background:    rgba(4,8,15,0.6);
          border:        1px solid var(--border);
          border-radius: 9px;
          padding:       11px 14px;
          font-size:     0.88rem;
          color:         var(--foreground);
          font-family:   inherit;
          outline:       none;
          transition:    border-color 0.2s ease, box-shadow 0.2s ease;
          width:         100%;
        }
        .form-input::placeholder {
          color: var(--text-dim);
        }
        .form-input:focus {
          border-color: var(--primary);
          box-shadow:   0 0 0 3px rgba(0,200,255,0.08);
        }
        .form-select {
          appearance:         none;
          -webkit-appearance: none;
          cursor:             pointer;
          background-image:   url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%237a90b8' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E");
          background-repeat:  no-repeat;
          background-position:right 14px center;
          padding-right:      36px;
        }
        .form-select option {
          background: #070d1a;
          color: var(--foreground);
        }
        @media (max-width: 860px) {
          .contact-inner {
            grid-template-columns: 1fr !important;
          }
          .contact-inner > div:last-child {
            border-left:  none !important;
            border-top:   1px solid rgba(0,200,255,0.10);
          }
        }
        @media (max-width: 500px) {
          .form-row {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
