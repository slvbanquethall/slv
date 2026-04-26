'use client';

import Link from 'next/link';
import { useState } from 'react';import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
export default function Footer() {
  const [email, setEmail] = useState('');

  return (
    <footer
      style={{
        fontFamily: "'Georgia', 'Times New Roman', serif",
        backgroundColor: '#0a0a0a',
        color: '#ffffff',
        marginTop: 'auto',
      }}
    >
      {/* ── FOOTER CONTENT ── */}
      <div
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '64px 24px',
        }}
      >
        {/* Top Section: 4 Columns */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '48px',
            marginBottom: '48px',
          }}
        >
          {/* Brand Section */}
          <div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                marginBottom: '16px',
              }}
            >
              <span
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  border: '2px solid #d4a017',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '18px',
                  color: '#d4a017',
                }}
              >
                🕊
              </span>
              <div>
                <div
                  style={{
                    fontSize: '18px',
                    fontWeight: 700,
                    letterSpacing: '0.04em',
                    color: '#d4a017',
                    textTransform: 'uppercase',
                  }}
                >
                  SLV
                </div>
                <div
                  style={{
                    fontSize: '9px',
                    fontWeight: 600,
                    letterSpacing: '0.1em',
                    color: 'rgba(255,255,255,0.6)',
                    textTransform: 'uppercase',
                  }}
                >
                  Banquets
                </div>
              </div>
            </div>
            <p
              style={{
                color: 'rgba(255,255,255,0.7)',
                fontSize: '14px',
                lineHeight: '1.6',
                marginTop: '12px',
              }}
            >
              Creating unforgettable moments for your special celebrations with elegance and excellence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              style={{
                fontSize: '16px',
                fontWeight: 700,
                marginBottom: '20px',
                color: '#d4a017',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
              }}
            >
              Quick Links
            </h4>
            <ul
              style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
              }}
            >
              {[
                { href: '/', label: 'Home' },
                { href: '/catering', label: 'Catering' },
                { href: '/decoration', label: 'Decoration' },
                { href: '/gallery', label: 'Gallery' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    style={{
                      color: 'rgba(255,255,255,0.7)',
                      textDecoration: 'none',
                      fontSize: '14px',
                      transition: 'color 0.2s ease',
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.color = '#d4a017';
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.7)';
                    }}
                  >
                    → {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4
              style={{
                fontSize: '16px',
                fontWeight: 700,
                marginBottom: '20px',
                color: '#d4a017',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
              }}
            >
              Services
            </h4>
            <ul
              style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
              }}
            >
              {['Weddings', 'Receptions', 'Corporate Events', 'Private Parties'].map((service) => (
                <li key={service}>
                  <span
                    style={{
                      color: 'rgba(255,255,255,0.7)',
                      fontSize: '14px',
                    }}
                  >
                    → {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4
              style={{
                fontSize: '16px',
                fontWeight: 700,
                marginBottom: '20px',
                color: '#d4a017',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
              }}
            >
              Contact
            </h4>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '14px',
              }}
            >
              <a
                href="tel:+91 90523 41300"
                style={{
                  color: 'rgba(255,255,255,0.7)',
                  textDecoration: 'none',
                  fontSize: '14px',
                  transition: 'color 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = '#d4a017';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.7)';
                }}
              >
                📞 +91 90523 41300
              </a>
              <a
                href="mailto:info@slvbanquets.com"
                style={{
                  color: 'rgba(255,255,255,0.7)',
                  textDecoration: 'none',
                  fontSize: '14px',
                  transition: 'color 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = '#d4a017';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.7)';
                }}
              >
                ✉️ slvbanquethall@gmail.com
              </a>
              <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px' }}>
                📍SLV Banquet Halls,Falcon One Shopping Plaza, Rainbow Meadows, Krishna Reddy Pet, Hyderabad, Rendlagadda, Telangana 502319 
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
{/*         <div
          style={{
            backgroundColor: 'rgba(212,160,23,0.1)',
            border: '1px solid rgba(212,160,23,0.3)',
            borderRadius: '8px',
            padding: '32px',
            marginBottom: '48px',
            textAlign: 'center',
          }}
        >
          <h3
            style={{
              fontSize: '24px',
              fontWeight: 700,
              marginBottom: '12px',
              color: '#d4a017',
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
            }}
          >
            Stay Updated
          </h3>
          <p
            style={{
              color: 'rgba(255,255,255,0.7)',
              marginBottom: '24px',
              fontSize: '14px',
            }}
          >
            Subscribe to get latest updates on events and special offers
          </p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setEmail('');
            }}
            style={{
              display: 'flex',
              gap: '12px',
              maxWidth: '400px',
              margin: '0 auto',
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}
          >
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              suppressHydrationWarning
              style={{
                flex: 1,
                minWidth: '200px',
                padding: '12px 16px',
                backgroundColor: 'rgba(255,255,255,0.95)',
                border: 'none',
                borderRadius: '4px',
                fontSize: '14px',
                outline: 'none',
              }}
              required
            />
            <button
              type="submit"
              style={{
                padding: '12px 32px',
                backgroundColor: '#d4a017',
                color: '#000',
                border: 'none',
                borderRadius: '4px',
                fontWeight: 700,
                fontSize: '14px',
                cursor: 'pointer',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                transition: 'background-color 0.2s ease',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#e8b520';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#d4a017';
              }}
            >
              Subscribe
            </button>
          </form>
        </div> */}

        {/* Social Links */}
        <div
          style={{
            display: 'flex',
            gap: '20px',
            justifyContent: 'center',
            marginBottom: '32px',
          }}
        >
          {[
            { Icon: FaFacebook, href: 'https://facebook.com', label: 'Facebook' },
            { Icon: FaTwitter, href: 'https://twitter.com', label: 'Twitter' },
            { Icon: FaInstagram, href: 'https://instagram.com', label: 'Instagram' },
            { Icon: FaLinkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
          ].map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              title={social.label}
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                backgroundColor: 'rgba(212,160,23,0.1)',
                border: '1px solid rgba(212,160,23,0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#d4a017',
                textDecoration: 'none',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.backgroundColor = '#d4a017';
                el.style.color = '#000';
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.backgroundColor = 'rgba(212,160,23,0.1)';
                el.style.color = '#d4a017';
              }}
            >
              <social.Icon size={20} />
            </a>
          ))}
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            borderTop: '1px solid rgba(255,255,255,0.1)',
            paddingTop: '24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            textAlign: 'center',
            fontSize: '13px',
            color: 'rgba(255,255,255,0.5)',
          }}
        >
          <p>
            &copy; {new Date().getFullYear()} SLV Banquets. All rights reserved. |{' '}
            <Link
              href="#"
              style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color = '#d4a017';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.5)';
              }}
            >
              Privacy Policy
            </Link>
            {' | '}
            <Link
              href="#"
              style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color = '#d4a017';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.5)';
              }}
            >
              Terms of Service
            </Link>
          </p>
          <p>Designed & Developed with elegance</p>
        </div>
      </div>
    </footer>
  );
}
