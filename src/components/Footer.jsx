import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaWhatsapp } from 'react-icons/fa';
import { FiMapPin, FiPhone, FiMail, FiArrowRight } from 'react-icons/fi';
import { LotusIcon } from './Navbar';

const pageLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/products', label: 'Product Catalogue' },
  { to: '/contact', label: 'Get a Quote' },
];

const year = new Date().getFullYear();

export default function Footer() {
  return (
    <footer style={{ background: '#0F1A3D', borderTop: '3px solid transparent', backgroundClip: 'padding-box', position: 'relative' }}>
      {/* Rainbow divider at top */}
      <div className="lotus-gradient" style={{ height: '3px', position: 'absolute', top: 0, left: 0, right: 0 }} />

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '4.5rem 1.5rem 2rem' }}>
        <div className="footer-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '3rem', paddingBottom: '3rem', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>

          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', marginBottom: '1rem' }}>
              <LotusIcon size={40} />
              <div>
                <div style={{ fontFamily: "'Outfit'", fontWeight: 800, fontSize: '1.2rem', color: '#fff', letterSpacing: '-0.01em', lineHeight: 1 }}>GK'S</div>
                <div style={{ fontFamily: "'Inter'", fontWeight: 500, fontSize: '0.58rem', color: 'rgba(255,255,255,0.45)', letterSpacing: '0.18em', textTransform: 'uppercase' }}>Metals & Minerals</div>
              </div>
            </div>
            <p style={{ fontFamily: "'Inter'", fontSize: '0.84rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, marginBottom: '1.25rem' }}>
              Trusted bulk supplier of verified industrial metals, graphite, and minerals to manufacturers across India since 2020.
            </p>
            <a
              href="https://wa.me/919000123813"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                padding: '0.625rem 1.25rem',
                background: 'rgba(37,211,102,0.15)',
                border: '1px solid rgba(37,211,102,0.3)',
                borderRadius: '6px',
                color: '#4ADE80',
                fontFamily: "'Inter'", fontWeight: 600, fontSize: '0.8rem',
                textDecoration: 'none', transition: 'background 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.background = 'rgba(37,211,102,0.25)'}
              onMouseLeave={e => e.currentTarget.style.background = 'rgba(37,211,102,0.15)'}
            >
              <FaWhatsapp size={15} /> Chat on WhatsApp
            </a>
          </div>

          {/* Links */}
          <div>
            <p style={{ fontFamily: "'Inter'", fontWeight: 700, fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'rgba(255,255,255,0.35)', marginBottom: '1.25rem' }}>
              Quick Links
            </p>
            {pageLinks.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', fontFamily: "'Inter'", fontSize: '0.875rem', color: 'rgba(255,255,255,0.5)', padding: '0.375rem 0', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.color = '#fff'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.5)'}
              >
                <FiArrowRight size={12} style={{ opacity: 0.4 }} /> {label}
              </Link>
            ))}
          </div>

          {/* Contact */}
          <div>
            <p style={{ fontFamily: "'Inter'", fontWeight: 700, fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'rgba(255,255,255,0.35)', marginBottom: '1.25rem' }}>
              Contact
            </p>
            {[
              { Icon: FiMapPin, text: 'Road No.7, Anjaneya Nagar,\nMoosapet, Hyderabad — 500018', href: null },
              { Icon: FiPhone, text: '+91 90001 23813', href: 'tel:+919000123813' },
              { Icon: FiMail, text: 'gkmetalsandminerals@gmail.com', href: 'mailto:gkmetalsandminerals@gmail.com' },
            ].map(({ Icon, text, href }, i) => (
              <div key={i} style={{ display: 'flex', gap: '0.75rem', marginBottom: '1rem', alignItems: 'flex-start' }}>
                <div style={{ width: '28px', height: '28px', background: 'rgba(27,63,216,0.25)', border: '1px solid rgba(58,94,240,0.3)', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#5B82FF', flexShrink: 0, marginTop: '1px' }}>
                  <Icon size={13} />
                </div>
                {href ? (
                  <a href={href} style={{ fontFamily: "'Inter'", fontSize: '0.83rem', color: 'rgba(255,255,255,0.5)', textDecoration: 'none', lineHeight: 1.6, transition: 'color 0.2s', wordBreak: 'break-all' }}
                    onMouseEnter={e => e.currentTarget.style.color = '#fff'}
                    onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.5)'}
                  >
                    {text.split('\n').map((l, j) => <span key={j}>{l}{j < text.split('\n').length - 1 && <br />}</span>)}
                  </a>
                ) : (
                  <p style={{ fontFamily: "'Inter'", fontSize: '0.83rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.6 }}>
                    {text.split('\n').map((l, j) => <span key={j}>{l}{j < text.split('\n').length - 1 && <br />}</span>)}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '1.75rem', flexWrap: 'wrap', gap: '0.75rem' }}>
          <p style={{ fontFamily: "'Inter'", fontSize: '0.75rem', color: 'rgba(255,255,255,0.3)' }}>
            © {year} GK'S Metals & Minerals. All rights reserved. Hyderabad, India. | GSTIN: 36AZRPM6557G1ZQ
          </p>
          <p style={{ fontFamily: "'Inter'", fontSize: '0.75rem', color: 'rgba(255,255,255,0.3)' }}>
            Verified Grades · PAN India Supply · ISO Quality Standards
          </p>
        </div>
      </div>
    </footer>
  );
}
