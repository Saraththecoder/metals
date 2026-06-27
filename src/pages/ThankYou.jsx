import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { FiPhoneCall, FiHome, FiArrowRight } from 'react-icons/fi';
import { LotusIcon } from '../components/Navbar';

export default function ThankYou() {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(10);

  useEffect(() => {
    const t = setInterval(() => {
      setCountdown(prev => {
        if (prev <= 1) { clearInterval(t); navigate('/'); return 0; }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(t);
  }, [navigate]);

  return (
    <div style={{ minHeight: 'calc(100vh - 71px)', background: 'linear-gradient(135deg, #F0F4FF, #FAFBFF)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '4rem 1.5rem', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
      <Helmet><title>Enquiry Received | GK'S Metals & Minerals</title></Helmet>

      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(27,63,216,0.06) 1.5px, transparent 1.5px)', backgroundSize: '28px 28px' }} />

      <div style={{ position: 'relative', zIndex: 2, maxWidth: '520px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>

        {/* Lotus + checkmark */}
        <div style={{ position: 'relative', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '100px', height: '100px', borderRadius: '50%', background: '#fff', boxShadow: 'var(--shadow-lg)', border: '2px solid var(--c-border-lt)' }}>
          <div className="checkmark-circle" style={{ border: '3px solid #1B3FD8' }}>
            <div className="checkmark-stem" style={{ background: '#1B3FD8' }} />
            <div className="checkmark-kick" style={{ background: '#1B3FD8' }} />
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <LotusIcon size={56} />
        </div>

        <div>
          <h1 style={{ fontFamily: "'Syne'", fontWeight: 800, fontSize: 'clamp(2rem,5vw,3rem)', color: '#0F1A3D', letterSpacing: '-0.02em', lineHeight: 1, marginBottom: '1rem' }}>
            Enquiry Received!
          </h1>
          <p style={{ fontFamily: "'DM Sans'", fontSize: '0.9375rem', color: 'var(--c-text-secondary)', lineHeight: 1.8, marginBottom: '0.5rem' }}>
            Thank you for reaching out to GK'S Metals & Minerals. Our team will review your specifications and contact you within <strong style={{ color: '#1B3FD8' }}>24 hours</strong>.
          </p>
          <p style={{ fontFamily: "'DM Sans'", fontSize: '0.85rem', color: 'var(--c-text-muted)' }}>
            For urgent queries, call our logistics desk directly.
          </p>
        </div>

        {/* CTAs */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.875rem', justifyContent: 'center' }}>
          <a href="tel:+919000123813" className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}>
            <FiPhoneCall size={15} /> Call +91 90001 23813
          </a>
          <Link to="/" className="btn-ghost" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}>
            <FiHome size={14} /> Back to Home
          </Link>
        </div>

        <Link to="/products" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.375rem', fontFamily: "'DM Sans'", fontWeight: 500, fontSize: '0.8rem', color: 'var(--c-text-muted)', textDecoration: 'none', transition: 'color 0.2s' }}
          onMouseEnter={e => e.currentTarget.style.color = '#1B3FD8'}
          onMouseLeave={e => e.currentTarget.style.color = 'var(--c-text-muted)'}
        >
          Browse our product catalogue <FiArrowRight size={13} />
        </Link>

        {/* Countdown */}
        <div style={{ background: '#fff', border: '1px solid var(--c-border-lt)', borderRadius: '30px', padding: '0.625rem 1.5rem', display: 'inline-flex', alignItems: 'center', gap: '0.625rem', boxShadow: 'var(--shadow-sm)' }}>
          <div style={{ width: '28px', height: '28px', borderRadius: '50%', border: '2px solid #1B3FD8', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Syne'", fontWeight: 800, fontSize: '0.85rem', color: '#1B3FD8' }}>
            {countdown}
          </div>
          <span style={{ fontFamily: "'DM Sans'", fontSize: '0.78rem', color: 'var(--c-text-muted)' }}>Redirecting to home page...</span>
        </div>
      </div>
    </div>
  );
}
