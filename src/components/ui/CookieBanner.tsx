'use client'

import { useState, useEffect } from 'react'

const STORAGE_KEY = 'aarai_cookie_consent'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!localStorage.getItem(STORAGE_KEY)) {
      // Small delay so it doesn't flash during hydration
      const t = setTimeout(() => setVisible(true), 600)
      return () => clearTimeout(t)
    }
  }, [])

  function accept() {
    localStorage.setItem(STORAGE_KEY, 'all')
    setVisible(false)
  }

  function decline() {
    localStorage.setItem(STORAGE_KEY, 'essential')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      aria-live="polite"
      style={{
        position:   'fixed',
        bottom:     24,
        left:       '50%',
        transform:  'translateX(-50%)',
        zIndex:     9999,
        width:      'min(680px, calc(100vw - 32px))',
        background: 'rgba(7, 13, 26, 0.96)',
        border:     '1px solid rgba(0,200,255,0.20)',
        borderRadius: 16,
        padding:    '20px 24px',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        boxShadow:  '0 8px 40px rgba(0,0,0,0.5), 0 0 0 1px rgba(0,200,255,0.05)',
        animation:  'cookie-slide-up 0.4s cubic-bezier(0.22,1,0.36,1) both',
      }}
    >
      <div className="cookie-inner">
        {/* Icon + text */}
        <div style={{ display: 'flex', gap: 14, alignItems: 'flex-start', flex: 1 }}>
          <span style={{ fontSize: '1.3rem', flexShrink: 0, marginTop: 1 }}>🍪</span>
          <div>
            <p style={{
              fontSize:   '0.87rem',
              lineHeight: 1.65,
              color:      'var(--text-muted)',
              margin:     0,
            }}>
              We use essential cookies to keep the site running. With your consent we&apos;ll also use analytics cookies to understand how visitors use our site — helping us improve it.{' '}
              <a
                href="/privacy-policy"
                style={{ color: 'var(--primary)', textDecoration: 'underline', textUnderlineOffset: 3 }}
              >
                Privacy Policy
              </a>
            </p>
          </div>
        </div>

        {/* Buttons */}
        <div style={{ display: 'flex', gap: 10, flexShrink: 0, alignItems: 'center' }}>
          <button
            onClick={decline}
            style={{
              padding:      '9px 18px',
              borderRadius: 8,
              fontSize:     '0.83rem',
              fontWeight:   600,
              cursor:       'pointer',
              background:   'transparent',
              color:        'var(--text-muted)',
              border:       '1px solid var(--border)',
              transition:   'all 0.2s ease',
              whiteSpace:   'nowrap',
              fontFamily:   'inherit',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLButtonElement).style.borderColor = 'var(--border-bright)'
              ;(e.currentTarget as HTMLButtonElement).style.color = 'var(--foreground)'
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLButtonElement).style.borderColor = 'var(--border)'
              ;(e.currentTarget as HTMLButtonElement).style.color = 'var(--text-muted)'
            }}
          >
            Essential Only
          </button>
          <button
            onClick={accept}
            className="btn-primary"
            style={{ padding: '9px 18px', fontSize: '0.83rem', whiteSpace: 'nowrap' }}
          >
            Accept All
          </button>
        </div>
      </div>

      <style>{`
        @keyframes cookie-slide-up {
          from { opacity: 0; transform: translateX(-50%) translateY(20px); }
          to   { opacity: 1; transform: translateX(-50%) translateY(0); }
        }
        .cookie-inner {
          display:     flex;
          align-items: center;
          gap:         20px;
        }
        @media (max-width: 560px) {
          .cookie-inner {
            flex-direction: column !important;
            align-items:    flex-start !important;
          }
        }
      `}</style>
    </div>
  )
}
