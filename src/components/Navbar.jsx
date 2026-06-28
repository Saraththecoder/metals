import { useState, useEffect } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiPhone } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import logoImg from '../assets/logo.png';

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/products', label: 'Products' },
  { path: '/contact', label: 'Contact' },
];

export function LotusIcon({ size = 36, style = {} }) {
  return (
    <img
      src={logoImg}
      alt="GK'S Metals & Minerals Logo"
      width={size}
      height={size}
      style={{ objectFit: 'contain', display: 'block', ...style }}
    />
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <div style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 102, display: 'flex', flexDirection: 'column', pointerEvents: 'none' }}>
        
        {/* Announcement Banner (Scrolls away) */}
        <motion.div 
          animate={{ y: scrolled ? -50 : 0, opacity: scrolled ? 0 : 1 }}
          transition={{ duration: 0.3 }}
          style={{ pointerEvents: 'auto', position: 'absolute', top: 0, width: '100%' }}
        >
          <div className="lotus-gradient lotus-divider" style={{ flexShrink: 0 }} />
          <div style={{
            background: '#0F1A3D', color: '#fff', textAlign: 'center', padding: '0.4rem 1rem',
            fontFamily: "'Inter', sans-serif", fontSize: '0.75rem', fontWeight: 600,
            display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem',
            flexWrap: 'wrap', flexShrink: 0
          }}>
            <span style={{ color: '#F5C800' }}>⚡ Need bulk materials?</span> 
            <span>Get an instant custom quote on WhatsApp:</span>
            <a href="https://wa.me/919000123813" target="_blank" rel="noopener noreferrer" style={{ color: '#4ADE80', display: 'inline-flex', alignItems: 'center', gap: '0.25rem', textDecoration: 'none' }}>
              <FaWhatsapp size={14} /> +91 90001 23813
            </a>
          </div>
        </motion.div>

        {/* Floating Island Header */}
        <div style={{ display: 'flex', justifyContent: 'center', width: '100%', marginTop: '35px' }}>
          <motion.header
            animate={{
              width: scrolled ? 'calc(100% - 2rem)' : '100%',
              maxWidth: scrolled ? '1100px' : '100%',
              y: scrolled ? -20 : 0, // Moves up since the banner is gone
              borderRadius: scrolled ? 50 : 0,
              background: scrolled ? 'rgba(255,255,255,0.85)' : '#fff',
            }}
            transition={{ type: 'spring', stiffness: 350, damping: 30 }}
            style={{
              pointerEvents: 'auto',
              boxShadow: scrolled ? '0 10px 40px rgba(15,26,61,0.08), 0 1px 3px rgba(0,0,0,0.05)' : 'none',
              backdropFilter: scrolled ? 'blur(16px)' : 'none',
              border: scrolled ? '1px solid rgba(255,255,255,0.5)' : 'none',
              borderBottom: !scrolled ? '1px solid var(--c-border-lt)' : '1px solid rgba(255,255,255,0.5)',
              willChange: 'transform, width, max-width, border-radius',
              overflow: 'visible'
            }}
          >
            <div style={{ padding: '0 1.5rem', height: '68px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

              {/* LOGO */}
              <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}>
                <LotusIcon size={44} />
                <div>
                  <div style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 800, fontSize: '1.15rem', color: '#1B3FD8', letterSpacing: '-0.01em', lineHeight: 1 }}>
                    GK'S
                  </div>
                  <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: '0.55rem', color: 'var(--c-text-muted)', letterSpacing: '0.2em', textTransform: 'uppercase', lineHeight: 1, marginTop: '2px' }}>
                    Metals & Minerals
                  </div>
                </div>
              </Link>

              {/* DESKTOP NAV */}
              <nav style={{ display: 'none', gap: '0.25rem' }} className="md-nav">
                {navLinks.map(({ path, label }) => (
                  <NavLink
                    key={path}
                    to={path}
                    style={({ isActive }) => ({
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 600,
                      fontSize: '0.8rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em',
                      color: isActive ? '#1B3FD8' : 'var(--c-text-muted)',
                      textDecoration: 'none',
                      padding: '0.5rem 0.875rem',
                      borderRadius: '30px', // Pills for the floating island
                      background: isActive ? 'var(--c-blue-pale)' : 'transparent',
                      transition: 'all 0.2s',
                    })}
                    onMouseEnter={e => { if (!e.currentTarget.getAttribute('aria-current')) { e.currentTarget.style.color = '#1B3FD8'; e.currentTarget.style.background = 'rgba(27,63,216,0.05)'; } }}
                    onMouseLeave={e => { if (!e.currentTarget.getAttribute('aria-current')) { e.currentTarget.style.color = 'var(--c-text-muted)'; e.currentTarget.style.background = 'transparent'; } }}
                  >
                    {label}
                  </NavLink>
                ))}
              </nav>

              {/* DESKTOP CTA */}
              <div style={{ display: 'none', alignItems: 'center', gap: '1rem' }} className="md-cta">
                <a
                  href="tel:+919000123813"
                  style={{
                    display: 'flex', alignItems: 'center', gap: '0.375rem',
                    fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: '0.78rem',
                    color: 'var(--c-text-muted)', textDecoration: 'none',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={e => e.currentTarget.style.color = '#1B3FD8'}
                  onMouseLeave={e => e.currentTarget.style.color = 'var(--c-text-muted)'}
                >
                  <FiPhone size={13} /> +91 90001 23813
                </a>
                <button
                  onClick={() => navigate('/contact')}
                  className="btn-primary"
                  style={{ padding: '0.6rem 1.25rem', fontSize: '0.75rem', borderRadius: '30px' }} // Pill shaped button
                >
                  Get a Quote
                </button>
              </div>

              {/* MOBILE toggle */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                style={{
                  background: 'none',
                  border: '1.5px solid var(--c-border)',
                  borderRadius: '50%', // Circle for mobile
                  color: 'var(--c-text-muted)',
                  padding: '0.5rem',
                  cursor: 'pointer',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}
                aria-label="Toggle menu"
                className="mobile-toggle"
              >
                {isOpen ? <FiX size={20} /> : <FiMenu size={20} />}
              </button>
            </div>
            
            {/* MOBILE MENU DROPDOWN (Inside the island) */}
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.25 }}
                  style={{ overflow: 'hidden' }}
                >
                  <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.25rem', borderTop: '1px solid var(--c-border-lt)' }}>
                    {navLinks.map(({ path, label }) => (
                      <NavLink key={path} to={path} onClick={closeMenu}
                        style={({ isActive }) => ({
                          display: 'block',
                          padding: '0.75rem 1rem',
                          borderRadius: '12px',
                          fontFamily: "'Outfit', sans-serif", fontWeight: 700,
                          fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '0.08em',
                          color: isActive ? '#1B3FD8' : 'var(--c-text-secondary)',
                          background: isActive ? 'var(--c-blue-pale)' : 'transparent',
                          textDecoration: 'none',
                        })}
                      >
                        {label}
                      </NavLink>
                    ))}
                    <div style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid var(--c-border-lt)', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                      <a href="tel:+919000123813" style={{ color: 'var(--c-text-secondary)', fontSize: '0.875rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontFamily: "'Inter'" }}>
                        <FiPhone size={15} /> +91 90001 23813
                      </a>
                      <button onClick={() => { closeMenu(); navigate('/contact'); }} className="btn-primary" style={{ width: '100%', justifyContent: 'center', borderRadius: '30px' }}>
                        Get a Quote
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.header>
        </div>
      </div>

      {/* Spacer for fixed header + banner */}
      <div style={{ height: '120px' }} />

      <style>{`
        @media (min-width: 900px) {
          .md-nav { display: flex !important; }
          .md-cta { display: flex !important; }
          .mobile-toggle { display: none !important; }
        }
      `}</style>
    </>
  );
}
