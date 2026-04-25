'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

const navLinks = [
  { label: 'Services',    href: '#services'  },
  { label: 'Why AARAi',   href: '#why-aarai' },
  { label: 'How It Works',href: '#process'   },
  { label: 'Contact',     href: '#contact'   },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

        {/* Logo */}
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
          <div style={{
            width: 52, height: 52,
            borderRadius: 12,
            overflow: 'hidden',
            background: '#04080f',
            flexShrink: 0,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <Image
              src="/logo.png"
              alt="AARAi"
              width={52}
              height={52}
              priority
              style={{ objectFit: 'contain', mixBlendMode: 'screen', display: 'block' }}
            />
          </div>
          <span style={{
            fontSize: '1.1rem',
            fontWeight: 800,
            letterSpacing: '-0.01em',
            background: 'linear-gradient(135deg, #00c8ff, #7b5fff)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            AARAi<span style={{ WebkitTextFillColor: 'rgba(160,190,240,0.7)', color: 'rgba(160,190,240,0.7)', fontWeight: 300 }}> Solutions</span>
          </span>
        </a>

        {/* Desktop links */}
        <ul style={{ display: 'flex', alignItems: 'center', gap: 36, listStyle: 'none', margin: 0, padding: 0 }}
            className="hidden-mobile">
          {navLinks.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                style={{
                  color: 'var(--text-muted)',
                  textDecoration: 'none',
                  fontSize: '0.92rem',
                  fontWeight: 500,
                  transition: 'color 0.2s',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--foreground)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }} className="hidden-mobile">
          <a href="#contact" className="btn-primary" style={{ padding: '10px 22px', fontSize: '0.875rem' }}>
            Get Started →
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          aria-label="Toggle menu"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            background: 'none',
            border: '1px solid var(--border)',
            borderRadius: 8,
            padding: '8px 10px',
            cursor: 'pointer',
            color: 'var(--foreground)',
            display: 'none',
          }}
          className="show-mobile"
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          background: 'rgba(4,8,15,0.97)',
          borderTop: '1px solid var(--border)',
          backdropFilter: 'blur(16px)',
          padding: '20px 24px 28px',
        }}>
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                display: 'block',
                color: 'var(--text-muted)',
                textDecoration: 'none',
                padding: '12px 0',
                fontSize: '1rem',
                fontWeight: 500,
                borderBottom: '1px solid var(--border)',
              }}
            >
              {link.label}
            </a>
          ))}
          <a href="#contact" className="btn-primary" style={{ marginTop: 20, display: 'inline-flex' }}
             onClick={() => setMenuOpen(false)}>
            Get Started →
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile   { display: flex !important; }
        }
        @media (min-width: 769px) {
          .show-mobile { display: none !important; }
        }
      `}</style>
    </nav>
  )
}
