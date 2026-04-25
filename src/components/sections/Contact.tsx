export default function Contact() {
  return (
    <section id="contact" className="section" style={{ position: 'relative', zIndex: 10 }}>
      {/* Glow blob */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(ellipse at center, rgba(123,95,255,0.08) 0%, transparent 65%)',
        pointerEvents: 'none',
      }} />

      <div className="container">
        {/* CTA card */}
        <div style={{
          background: 'linear-gradient(135deg, rgba(0,200,255,0.08) 0%, rgba(123,95,255,0.12) 100%)',
          border: '1px solid rgba(0,200,255,0.2)',
          borderRadius: 24,
          padding: 'clamp(40px, 6vw, 72px)',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}>
          {/* Corner decorations */}
          <div style={{
            position: 'absolute', top: -60, right: -60,
            width: 200, height: 200,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(0,200,255,0.12) 0%, transparent 70%)',
          }} />
          <div style={{
            position: 'absolute', bottom: -60, left: -60,
            width: 200, height: 200,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(123,95,255,0.12) 0%, transparent 70%)',
          }} />

          <div className="section-label" style={{ justifyContent: 'center' }}>Get In Touch</div>

          <h2 style={{
            fontSize: 'clamp(1.8rem, 4vw, 3rem)',
            fontWeight: 900,
            lineHeight: 1.15,
            marginBottom: 20,
            letterSpacing: '-0.025em',
          }}>
            Ready to <span className="gradient-text">transform your business</span>?
          </h2>

          <p style={{
            fontSize: '1.05rem',
            lineHeight: 1.7,
            color: 'var(--text-muted)',
            maxWidth: 520,
            margin: '0 auto 40px',
          }}>
            Let&#39;s talk about where you want to go. Our team will reach back within 24 hours with a free consultation and a tailored plan.
          </p>

          {/* Email CTA */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: 12,
            flexWrap: 'wrap',
            marginBottom: 32,
          }}>
            <a
              href="mailto:hello@aarai.solutions"
              className="btn-primary"
              style={{ fontSize: '1rem', padding: '15px 36px' }}
            >
              📧 hello@aarai.solutions
            </a>
            <a href="tel:+1800AARAI" className="btn-outline" style={{ fontSize: '1rem', padding: '15px 28px' }}>
              📞 Schedule a Call
            </a>
          </div>

          {/* Address */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 10,
            padding: '10px 20px',
            borderRadius: 50,
            border: '1px solid var(--border)',
            background: 'rgba(0,200,255,0.05)',
            marginBottom: 28,
          }}>
            <span style={{ fontSize: '1rem' }}>📍</span>
            <address style={{
              color: 'var(--text-muted)',
              fontSize: '0.85rem',
              fontStyle: 'normal',
            }}>
              7 HighView Gardens, Grays, Essex, United Kingdom RM17 6TD
            </address>
          </div>

          {/* Trust chips */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: 20,
            flexWrap: 'wrap',
          }}>
            {[
              '✅ No long-term lock-in',
              '✅ Free initial consultation',
              '✅ Results-based pricing available',
            ].map(t => (
              <span key={t} style={{
                fontSize: '0.82rem',
                color: 'var(--text-muted)',
                fontWeight: 500,
              }}>
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
