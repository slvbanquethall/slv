'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';

const slides = [
  {
    id: 1,
    image: '/HERO1.png',
    title: 'SLV Banquet Hall',
    subtitle: 'Premium Venue for Your Special Events',
    tag: 'Weddings & Celebrations',
  },
  {
    id: 2,
    image: '/HERO4.jpeg',
    title: 'SLV Banquet Hall',
    subtitle: 'Premium Venue for Your Special Events',
    tag: 'Weddings & Celebrations',
  },
  {
    id: 3,
    image: '/HERO5.jpeg',
    title: 'SLV Banquet Hall',
    subtitle: 'Premium Venue for Your Special Events',
    tag: 'Weddings & Celebrations',
  },
  {
    id: 4,
    image: '/HERO2.jpeg',
    title: 'SLV Banquet Hall',
    subtitle: 'Premium Venue for Your Special Events',
    tag: 'Weddings & Celebrations',
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState<'next' | 'prev'>('next');

  const goTo = useCallback(
    (index: number, dir: 'next' | 'prev' = 'next') => {
      if (animating) return;
      setAnimating(true);
      setDirection(dir);
      setTimeout(() => {
        setCurrent(index);
        setAnimating(false);
      }, 600);
    },
    [animating]
  );

  const next = useCallback(() => {
    goTo((current + 1) % slides.length, 'next');
  }, [current, goTo]);

  const prev = useCallback(() => {
    goTo((current - 1 + slides.length) % slides.length, 'prev');
  }, [current, goTo]);

  // Auto-advance every 5s
  useEffect(() => {
    const timer = setInterval(() => {
      setAnimating(true);
      setDirection('next');
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % slides.length);
        setAnimating(false);
      }, 600);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const slide = slides[current];

  return (
    <>
      <section
        style={{
          position: 'relative',
          width: '100%',
          height: 'calc(100vh - 72px)', // full viewport minus header
          minHeight: '500px',
          overflow: 'hidden',
          backgroundColor: '#000',
          fontFamily: "'Georgia', 'Times New Roman', serif",
        }}
      >
        {/* ── BACKGROUND IMAGE with Ken Burns zoom ── */}
        {slides.map((s, i) => (
          <div
            key={s.id}
            style={{
              position: 'absolute',
              inset: 0,
              backgroundImage: `url(${s.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              opacity: i === current ? 1 : 0,
              transition: 'opacity 0.8s ease',
              animation: i === current ? 'kenBurns 8s ease-out forwards' : 'none',
            }}
          />
        ))}

        {/* ── DARK GRADIENT OVERLAY ── */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.2) 100%)',
            zIndex: 1,
          }}
        />

        {/* ── SLIDE CONTENT ── */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 3,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-end',
            paddingBottom: '80px',
            textAlign: 'center',
            padding: '0 24px 80px',
          }}
        >
          {/* Tag pill */}
          <div
            key={`tag-${current}`}
            style={{
              display: 'inline-block',
              padding: '5px 18px',
              border: '1px solid rgba(212,160,23,0.6)',
              borderRadius: '100px',
              color: '#d4a017',
              fontSize: '12px',
              fontFamily: "'Helvetica Neue', Arial, sans-serif",
              fontWeight: 600,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              marginBottom: '18px',
              animation: 'fadeUp 0.7s ease forwards',
            }}
          >
            {slide.tag}
          </div>

          {/* Main title */}
          <h1
            key={`title-${current}`}
            style={{
              color: '#ffffff',
              fontSize: 'clamp(28px, 5.5vw, 72px)',
              fontWeight: 700,
              lineHeight: 1.1,
              margin: '0 0 14px',
              textShadow: '0 4px 24px rgba(0,0,0,0.6)',
              letterSpacing: '-0.01em',
              maxWidth: '900px',
              animation: 'fadeUp 0.7s ease 0.1s both',
            }}
          >
            {slide.title}
          </h1>

          {/* Subtitle */}
          <p
            key={`sub-${current}`}
            style={{
              color: 'rgba(255,255,255,0.85)',
              fontSize: 'clamp(14px, 2vw, 20px)',
              fontFamily: "'Helvetica Neue', Arial, sans-serif",
              fontWeight: 400,
              margin: '0 0 32px',
              letterSpacing: '0.04em',
              animation: 'fadeUp 0.7s ease 0.2s both',
            }}
          >
            {slide.subtitle}
          </p>

          {/* CTA Buttons */}
          <div
            style={{
              display: 'flex',
              gap: '16px',
              flexWrap: 'wrap',
              justifyContent: 'center',
              animation: 'fadeUp 0.7s ease 0.3s both',
            }}
          >
            <Link
              href="/booking"
              style={{
                display: 'inline-block',
                padding: '14px 36px',
                backgroundColor: '#d4a017',
                color: '#000000',
                textDecoration: 'none',
                fontSize: '14px',
                fontFamily: "'Helvetica Neue', Arial, sans-serif",
                fontWeight: 700,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                borderRadius: '2px',
                transition: 'background-color 0.25s ease, transform 0.2s ease',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.backgroundColor = '#e8b520';
                el.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.backgroundColor = '#d4a017';
                el.style.transform = 'translateY(0)';
              }}
            >
              Book a Visit
            </Link>
            <Link
              href="/gallery"
              style={{
                display: 'inline-block',
                padding: '14px 36px',
                backgroundColor: 'transparent',
                color: '#ffffff',
                textDecoration: 'none',
                fontSize: '14px',
                fontFamily: "'Helvetica Neue', Arial, sans-serif",
                fontWeight: 600,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                borderRadius: '2px',
                border: '1px solid rgba(255,255,255,0.6)',
                transition: 'border-color 0.25s ease, background 0.25s ease, transform 0.2s ease',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.borderColor = '#d4a017';
                el.style.backgroundColor = 'rgba(212,160,23,0.1)';
                el.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.borderColor = 'rgba(255,255,255,0.6)';
                el.style.backgroundColor = 'transparent';
                el.style.transform = 'translateY(0)';
              }}
            >
              View Gallery
            </Link>
          </div>
        </div>



        {/* ── DOT INDICATORS ── */}
        <div
          style={{
            position: 'absolute',
            bottom: '28px',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 4,
            display: 'flex',
            gap: '10px',
            alignItems: 'center',
          }}
        >
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i, i > current ? 'next' : 'prev')}
              aria-label={`Go to slide ${i + 1}`}
              suppressHydrationWarning
              style={{
                width: i === current ? '28px' : '10px',
                height: '10px',
                borderRadius: '100px',
                backgroundColor: i === current ? '#d4a017' : 'rgba(255,255,255,0.45)',
                border: 'none',
                cursor: 'pointer',
                padding: 0,
                transition: 'width 0.35s ease, background-color 0.35s ease',
              }}
            />
          ))}
        </div>

        {/* ── SCROLL DOWN CTA ── */}
        <div
          style={{
            position: 'absolute',
            bottom: '28px',
            right: '28px',
            zIndex: 4,
          }}
        >
          <button
            onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
            aria-label="Scroll down"
            style={{
              width: '42px',
              height: '42px',
              borderRadius: '50%',
              backgroundColor: '#d4a017',
              border: 'none',
              color: '#000',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 20px rgba(212,160,23,0.4)',
              animation: 'bounce 2s ease-in-out infinite',
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>
        </div>
      </section>

      {/* ── KEYFRAMES ── */}
      <style>{`
        @keyframes kenBurns {
          from { transform: scale(1); }
          to   { transform: scale(1.06); }
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(22px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(6px); }
        }


      `}</style>
    </>
  );
}