'use client';
import { Playfair_Display } from 'next/font/google';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
});
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setIsMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/catering', label: 'Catering' },
    { href: '/decoration', label: 'Decoration' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          backgroundColor: scrolled ? 'rgba(0,0,0,0.97)' : '#000000',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.08)' : '1px solid transparent',
          transition: 'background-color 0.3s ease, border-color 0.3s ease',
          fontFamily: playfair.style.fontFamily,
        }}
      >
        <nav
          style={{
            maxWidth: '1400px',
            margin: '0 auto',
            padding: '0 24px',
            height: '72px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '16px',
          }}
        >
          {/* ── LOGO ── */}
          <Link
            href="/"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              textDecoration: 'none',
              flexShrink: 0,
            }}
          >
            {/* Logo Image */}
            <Image
              src="/logo.png"
              alt="SLV Logo"
              width={38}
              height={38}
              priority
              style={{
                borderRadius: '50%',
                border: '2px solid #040404',
                flexShrink: 0,
              }}
            />
            <span style={{ lineHeight: 1.1 }}>
              <span
                style={{
                  display: 'block',
                  fontSize: '20px',
                  fontWeight: 800,
                  letterSpacing: '0.04em',
                  color: '#d4a017',
                  textTransform: 'uppercase',
                }}
              >
                SLV
              </span>
              <span
                style={{
                  display: 'block',
                  fontSize: '9px',
                  fontWeight: 600,
                  letterSpacing: '0.18em',
                  color: '#ffffff',
                  textTransform: 'uppercase',
                  whiteSpace: 'nowrap',
                }}
              >
                BANQUETS | CONVENTION
              </span>
            </span>
          </Link>

          {/* ── DESKTOP NAV ── */}
          <ul
            style={{
              display: 'flex',
              gap: '36px',
              listStyle: 'none',
              margin: 0,
              padding: 0,
              alignItems: 'center',
            }}
            className="desktop-nav"
          >
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  style={{
                    color: '#ffffff',
                    textDecoration: 'none',
                    fontSize: '15px',
                    fontWeight: 500,
                    letterSpacing: '0.02em',
                    padding: '4px 0',
                    position: 'relative',
                    transition: 'color 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    (e.target as HTMLAnchorElement).style.color = '#d4a017';
                  }}
                  onMouseLeave={(e) => {
                    (e.target as HTMLAnchorElement).style.color = '#ffffff';
                  }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* ── RIGHT SIDE: Phone + Instagram ── */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '20px',
              flexShrink: 0,
            }}
            className="desktop-right"
          >
            <a
              href="tel:+918003000123"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                color: '#ffffff',
                textDecoration: 'none',
                fontSize: '14px',
                fontWeight: 500,
                letterSpacing: '0.02em',
                transition: 'color 0.2s ease',
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color = '#d4a017';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color = '#ffffff';
              }}
            >
              {/* Phone icon */}
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
                style={{ flexShrink: 0 }}
              >
                <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
              </svg>
              +91 90523 41300
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                color: '#ffffff',
                textDecoration: 'none',
                fontSize: '14px',
                fontWeight: 500,
                letterSpacing: '0.02em',
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color = '#d4a017';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color = '#ffffff';
              }}
            >
              {/* Instagram icon */}
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
              </svg>
              Instagram
            </a>
          </div>

          {/* ── HAMBURGER (mobile/tablet) ── */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '6px',
              display: 'flex',
              flexDirection: 'column',
              gap: '5px',
              flexShrink: 0,
            }}
            className="hamburger"
          >
            <span
              style={{
                display: 'block',
                width: '24px',
                height: '2px',
                backgroundColor: '#ffffff',
                borderRadius: '2px',
                transition: 'transform 0.3s ease, opacity 0.3s ease',
                transform: isMenuOpen ? 'translateY(7px) rotate(45deg)' : 'none',
              }}
            />
            <span
              style={{
                display: 'block',
                width: '24px',
                height: '2px',
                backgroundColor: '#ffffff',
                borderRadius: '2px',
                transition: 'opacity 0.3s ease',
                opacity: isMenuOpen ? 0 : 1,
              }}
            />
            <span
              style={{
                display: 'block',
                width: '24px',
                height: '2px',
                backgroundColor: '#ffffff',
                borderRadius: '2px',
                transition: 'transform 0.3s ease, opacity 0.3s ease',
                transform: isMenuOpen ? 'translateY(-7px) rotate(-45deg)' : 'none',
              }}
            />
          </button>
        </nav>

        {/* ── MOBILE DROPDOWN MENU ── */}
        <div
          style={{
            backgroundColor: '#111111',
            overflow: 'hidden',
            maxHeight: isMenuOpen ? '500px' : '0',
            transition: 'max-height 0.4s ease',
            borderTop: isMenuOpen ? '1px solid rgba(212,160,23,0.2)' : '1px solid transparent',
          }}
        >
          <ul
            style={{
              listStyle: 'none',
              margin: 0,
              padding: '8px 0 16px',
            }}
          >
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  style={{
                    display: 'block',
                    padding: '14px 28px',
                    color: '#ffffff',
                    textDecoration: 'none',
                    fontSize: '16px',
                    fontWeight: 500,
                    letterSpacing: '0.03em',
                    borderBottom: '1px solid rgba(255,255,255,0.06)',
                    transition: 'color 0.2s ease, background 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.color = '#d4a017';
                    el.style.backgroundColor = 'rgba(212,160,23,0.06)';
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.color = '#ffffff';
                    el.style.backgroundColor = 'transparent';
                  }}
                >
                  {item.label}
                </Link>
              </li>
            ))}

            {/* Mobile contact info */}
            <li style={{ padding: '16px 28px 4px', borderTop: '1px solid rgba(212,160,23,0.15)' }}>
              <a
                href="tel:+91 90523 41300"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  color: '#d4a017',
                  textDecoration: 'none',
                  fontSize: '15px',
                  fontWeight: 600,
                  marginBottom: '12px',
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
                </svg>
                +91 90523 41300
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  color: '#ffffff',
                  textDecoration: 'none',
                  fontSize: '15px',
                  fontWeight: 500,
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                </svg>
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </header>

      {/* Responsive CSS */}
      <style>{`
        /* Desktop: show nav + right, hide hamburger */
        .desktop-nav,
        .desktop-right {
          display: flex !important;
        }
        .hamburger {
          display: none !important;
        }

        /* Tablet (≤1024px): collapse nav into hamburger */
        @media (max-width: 1024px) {
          .desktop-nav,
          .desktop-right {
            display: none !important;
          }
          .hamburger {
            display: flex !important;
          }
        }

        /* Small mobile: tighten logo */
        @media (max-width: 400px) {
          .logo-subtitle {
            display: none;
          }
        }
      `}</style>

      {/* Spacer so page content doesn't hide behind fixed header */}
      <div style={{ height: '72px' }} />
    </>
  );
}