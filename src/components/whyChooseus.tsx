'use client';

import { useState, useRef } from 'react';

interface VideoCard {
  id: number;
  src: string;       // Replace with your actual video paths or YouTube embed URLs
  poster: string;    // Thumbnail image
  label: string;
}

const videos: VideoCard[] = [
  {
    id: 1,
    src: '/whychooseus1.mp4',
    poster: '/images/venue-thumb-1.jpg',
    label: 'Grand Banquet Hall',
  },
  {
    id: 2,
    src: '/whychooseus1.mp4',
    poster: '/images/venue-thumb-2.jpg',
    label: 'Convention Centre',
  },
];

function VideoCard({ video }: { video: VideoCard }) {
  const [playing, setPlaying] = useState(true);
  const [hovered, setHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    if (videoRef.current) {
      if (playing) {
        videoRef.current.pause();
        setPlaying(false);
      } else {
        videoRef.current.play().catch((error) => {
          console.log('Play error:', error);
          setPlaying(false);
        });
        setPlaying(true);
      }
    }
  };

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'relative',
        borderRadius: '20px',
        overflow: 'hidden',
        aspectRatio: '16/10',
        cursor: 'pointer',
        backgroundColor: '#1a1a1a',
        boxShadow: hovered
          ? '0 32px 80px rgba(0,0,0,0.7), 0 0 0 1px rgba(212,160,23,0.25)'
          : '0 16px 48px rgba(0,0,0,0.5)',
        transition: 'box-shadow 0.4s ease, transform 0.4s ease',
        transform: hovered ? 'translateY(-6px) scale(1.01)' : 'translateY(0) scale(1)',
        flex: '1 1 320px',
        minWidth: '280px',
        maxWidth: '700px',
      }}
      onClick={handlePlay}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          handlePlay();
        }
      }}
    >
      {/* Video element */}
      <video
        ref={videoRef}
        src={video.src}
        poster={video.poster}
        onEnded={() => setPlaying(false)}
        autoPlay
        muted
        loop
        preload="metadata"
        crossOrigin="anonymous"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          display: 'block',
          zIndex: 1,
        }}
        playsInline
      />

      {/* Dark overlay when paused */}
      {!playing && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to top, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.1) 60%)',
            transition: 'opacity 0.3s ease',
            zIndex: 2,
          }}
        />
      )}

      {/* Play / Pause button */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: `translate(-50%, -50%) scale(${hovered && !playing ? 1.12 : 1})`,
          width: '72px',
          height: '72px',
          borderRadius: '50%',
          backgroundColor: playing ? 'rgba(0,0,0,0.55)' : 'rgba(20,20,20,0.72)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backdropFilter: 'blur(8px)',
          border: '2px solid rgba(255,255,255,0.25)',
          transition: 'transform 0.3s ease, background-color 0.3s ease, opacity 0.3s ease',
          opacity: playing && !hovered ? 0 : 1,
          zIndex: 3,
        }}
      >
        {playing ? (
          // Pause icon
          <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
            <rect x="6" y="4" width="4" height="16" rx="1" />
            <rect x="14" y="4" width="4" height="16" rx="1" />
          </svg>
        ) : (
          // Play icon
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="white"
            style={{ marginLeft: '3px' }}
          >
            <polygon points="5,3 19,12 5,21" />
          </svg>
        )}
      </div>

      {/* Label badge */}
      {!playing && (
        <div
          style={{
            position: 'absolute',
            bottom: '18px',
            left: '18px',
            padding: '6px 14px',
            backgroundColor: 'rgba(0,0,0,0.6)',
            backdropFilter: 'blur(8px)',
            borderRadius: '100px',
            border: '1px solid rgba(212,160,23,0.4)',
            color: '#d4a017',
            fontSize: '12px',
            fontFamily: "'Helvetica Neue', Arial, sans-serif",
            fontWeight: 600,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            zIndex: 3,
          }}
        >
          {video.label}
        </div>
      )}

      {/* Gold shimmer border on hover */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          borderRadius: '20px',
          border: `2px solid ${hovered ? 'rgba(212,160,23,0.5)' : 'transparent'}`,
          pointerEvents: 'none',
          transition: 'border-color 0.3s ease',
          zIndex: 4,
        }}
      />
    </div>
  );
}

export default function PremierElegance() {
  return (
    <>
      <section
        style={{
          backgroundColor: '#0a0a0a',
          padding: 'clamp(60px, 8vw, 120px) clamp(20px, 5vw, 80px)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Subtle radial glow behind heading */}
        <div
          style={{
            position: 'absolute',
            top: '0',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '800px',
            height: '400px',
            background:
              'radial-gradient(ellipse at center, rgba(212,160,23,0.07) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />

        {/* Decorative top line */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '16px',
            marginBottom: '28px',
          }}
        >
          <div style={{ height: '1px', width: '60px', background: 'linear-gradient(to right, transparent, #d4a017)' }} />
          <span
            style={{
              color: '#d4a017',
              fontSize: '11px',
              fontFamily: "'Helvetica Neue', Arial, sans-serif",
              fontWeight: 600,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
            }}
          >
            Patelguda, Hyderabad
          </span>
          <div style={{ height: '1px', width: '60px', background: 'linear-gradient(to left, transparent, #d4a017)' }} />
        </div>

        {/* Main heading */}
        <h2
          style={{
            color: '#d4a017',
            fontSize: 'clamp(24px, 4.5vw, 58px)',
            fontFamily: "'Georgia', 'Times New Roman', serif",
            fontWeight: 700,
            textAlign: 'center',
            margin: '0 auto 24px',
            maxWidth: '900px',
            lineHeight: 1.15,
            letterSpacing: '-0.01em',
          }}
        >
          Premier Elegance at Rock Banquets &amp; Convention
        </h2>

        {/* Body text */}
        <p
          style={{
            color: 'rgba(255,255,255,0.72)',
            fontSize: 'clamp(14px, 1.6vw, 18px)',
            fontFamily: "'Helvetica Neue', Arial, sans-serif",
            fontWeight: 400,
            lineHeight: 1.75,
            textAlign: 'center',
            maxWidth: '780px',
            margin: '0 auto 56px',
          }}
        >
          Discover the epitome of elegance and celebration at Rock Banquets. Our venue provides a
          sophisticated backdrop for your most cherished occasions, with state-of-the-art amenities
          and exquisite décor to make every event a grand success. Experience unparalleled service
          and create unforgettable memories with us at LB Nagar, Hyderabad.
        </p>

        {/* Stats row */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: 'clamp(24px, 5vw, 72px)',
            flexWrap: 'wrap',
            marginBottom: '60px',
          }}
        >
          {[
            { value: '200+', label: 'Events Hosted' },
            { value: '2', label: 'Elegant Halls' },
            { value: '5+', label: 'Years of Trust' },
            { value: '1500', label: 'Seating Capacity' },
          ].map((stat) => (
            <div key={stat.label} style={{ textAlign: 'center' }}>
              <div
                style={{
                  color: '#d4a017',
                  fontSize: 'clamp(26px, 3.5vw, 44px)',
                  fontFamily: "'Georgia', serif",
                  fontWeight: 700,
                  lineHeight: 1,
                  marginBottom: '6px',
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  color: 'rgba(255,255,255,0.5)',
                  fontSize: '12px',
                  fontFamily: "'Helvetica Neue', Arial, sans-serif",
                  fontWeight: 500,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Thin divider */}
        <div
          style={{
            width: '100%',
            maxWidth: '200px',
            height: '1px',
            background: 'linear-gradient(to right, transparent, rgba(212,160,23,0.4), transparent)',
            margin: '0 auto 60px',
          }}
        />

        {/* Video cards */}
        <div
          style={{
            display: 'flex',
            gap: 'clamp(16px, 3vw, 36px)',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'stretch',
            maxWidth: '1400px',
            margin: '0 auto',
          }}
        >
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div style={{ textAlign: 'center', marginTop: '56px' }}>
          <a
            href="/contact"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '15px 40px',
              backgroundColor: 'transparent',
              border: '1px solid #d4a017',
              color: '#d4a017',
              textDecoration: 'none',
              fontSize: '13px',
              fontFamily: "'Helvetica Neue', Arial, sans-serif",
              fontWeight: 600,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              borderRadius: '2px',
              transition: 'background-color 0.25s ease, color 0.25s ease',
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.backgroundColor = '#d4a017';
              el.style.color = '#000';
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.backgroundColor = 'transparent';
              el.style.color = '#d4a017';
            }}
          >
            Plan Your Event
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
        </div>
      </section>

      {/* WhatsApp floating button */}


      <style>{`
        @media (max-width: 640px) {
          /* Stack stats tighter on mobile */
        }
      `}</style>
    </>
  );
}