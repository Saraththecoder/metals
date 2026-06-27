import { useRef, useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import {
  FiArrowRight, FiSend, FiCheckCircle, FiTruck, FiLayers,
  FiDollarSign, FiAward, FiPhoneCall, FiChevronDown
} from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import products from '../data/products';
import SectionHeading, { OreVein } from '../components/SectionHeading';
import ProductCard from '../components/ProductCard';
import logoImg from '../assets/logo.png';

/* ── floating orb ── */
function Orb({ color, size, x, y, dur = 9, delay = 0 }) {
  return (
    <motion.div
      style={{ position: 'absolute', width: size, height: size, borderRadius: '50%', background: color, filter: 'blur(48px)', left: x, top: y, pointerEvents: 'none', zIndex: 0 }}
      animate={{ y: [0, -28, 0], x: [0, 14, 0] }}
      transition={{ duration: dur, delay, repeat: Infinity, ease: 'easeInOut' }}
    />
  );
}

/* ── count-up ── */
function CountUp({ to, suffix = '' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [val, setVal] = useState(0);
  const n = parseInt(to, 10);
  const isNum = !isNaN(n);
  useEffect(() => {
    if (!inView || !isNum) { setVal(n); return; }
    let s = null;
    const step = (ts) => { if (!s) s = ts; const p = Math.min((ts - s) / 1600, 1); setVal(Math.floor((1 - Math.pow(1 - p, 4)) * n)); if (p < 1) requestAnimationFrame(step); };
    requestAnimationFrame(step);
  }, [inView, n, isNum]);
  return <span ref={ref}>{isNum ? `${val}${suffix}` : to}</span>;
}

const features = [
  { icon: FiAward,       color: '#1B3FD8', bg: '#EEF2FF', title: 'Verified Quality',       text: 'Every batch tested against chemical and physical specifications before dispatch.' },
  { icon: FiLayers,      color: '#3BB54A', bg: '#EEF6EE', title: 'Bulk Supply',            text: 'From 1 MT trials to 1000+ MT bulk — we scale to your production demands.' },
  { icon: FiTruck,       color: '#FF6320', bg: '#FFF3ED', title: 'PAN India Delivery',     text: 'Road, rail, and port logistics covering every major manufacturing hub in India.' },
  { icon: FiCheckCircle, color: '#E91B8C', bg: '#FDF2FA', title: 'Custom Grades',          text: 'Spec-matched sourcing — purity, mesh size, and moisture parameters matched exactly.' },
  { icon: FiDollarSign,  color: '#F5C800', bg: '#FFFCEE', title: 'Competitive Pricing',    text: 'Direct mine and processor relationships ensure the best landed cost.' },
  { icon: FiPhoneCall,   color: '#7C1FA2', bg: '#F7F0FF', title: 'Dedicated Support',      text: 'One contact handles inquiry, dispatch, documentation, and delivery follow-up.' },
];

const stats = [
  { val: '5',   suffix: '+', label: 'Years Active',      color: '#E91B8C' },
  { val: '12',  suffix: '+', label: 'Products',          color: '#3BB54A' },
  { val: '500', suffix: '+', label: 'Orders Fulfilled',  color: '#29B4F6' },
  { val: 'PAN', suffix: '',  label: 'India Network',     color: '#F5C800' },
];

export default function Home() {
  const navigate = useNavigate();
  const [miniForm, setMiniForm] = useState({ name: '', phone: '', product: '' });
  const [miniError, setMiniError] = useState('');
  const [miniLoading, setMiniLoading] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);

  const handleMiniSubmit = (e) => {
    e.preventDefault();
    if (!miniForm.name.trim() || !miniForm.phone.trim() || !miniForm.product) { setMiniError('Please fill all fields'); return; }
    if (!/^[6-9]\d{9}$/.test(miniForm.phone.trim())) { setMiniError('Enter a valid 10-digit Indian mobile number'); return; }
    setMiniError('');
    setMiniLoading(true);
    setTimeout(() => {
      window.open(`https://wa.me/919000123813?text=${encodeURIComponent(`Hi GK'S Metals, quick enquiry — Name: ${miniForm.name}, Phone: ${miniForm.phone}, Material: ${miniForm.product}`)}`, '_blank');
      navigate('/thank-you');
    }, 900);
  };

  return (
    <div style={{ background: '#fff', overflowX: 'hidden' }}>
      <Helmet>
        <title>GK'S Metals & Minerals | Industrial Raw Materials Supplier India</title>
        <meta name="description" content="GK'S Metals & Minerals — trusted bulk supplier of graphite, iron ore, silica sand, manganese, and 12+ industrial minerals. Verified quality, PAN India delivery from Hyderabad." />
      </Helmet>

      {/* ══ HERO ══ */}
      <section style={{ position: 'relative', minHeight: 'calc(100vh - 71px)', display: 'flex', alignItems: 'center', overflow: 'hidden', background: 'linear-gradient(135deg, #EEF2FF 0%, #F5F8FF 45%, #F0FDF4 100%)' }}>
        <Orb color="rgba(27,63,216,0.07)"  size="500px" x="50%"  y="-15%" dur={11} delay={0} />
        <Orb color="rgba(59,181,74,0.06)"  size="350px" x="-8%"  y="40%"  dur={13} delay={2} />
        <Orb color="rgba(233,27,140,0.05)" size="280px" x="80%"  y="60%"  dur={9}  delay={4} />
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(27,63,216,0.07) 1.5px, transparent 1.5px)', backgroundSize: '32px 32px', zIndex: 0 }} />

        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '3rem 1.5rem', width: '100%', position: 'relative', zIndex: 2 }}>
          {/* HERO GRID — LEFT: logo, RIGHT: text */}
          <div className="hero-grid" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3rem', alignItems: 'center' }}>

            {/* ── LEFT: HERO IMAGE ── */}
            <motion.div
              className="hero-image-container"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}
            >
              <motion.img
                src="https://res.cloudinary.com/doegh5lpl/image/upload/v1782589490/piles-of-raw-iron-ore-rocks-are-clustered-near-a-steel-manufacturing-plant-as-industrial-activity-continues-nearby-under-clear-skies-and-bright-lighting-conditions-photo_ycxere.webp"
                alt="Industrial Raw Materials"
                style={{
                  width: '100%',
                  maxWidth: '540px',
                  height: 'auto',
                  objectFit: 'contain',
                  borderRadius: '16px',
                  filter: 'drop-shadow(0 20px 40px rgba(27,63,216,0.12))'
                }}
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              />

              {/* Floating info cards */}
              <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.4 }}
                style={{ position: 'absolute', bottom: '10%', right: '-5%', background: '#fff', borderRadius: '12px', padding: '0.75rem 1rem', boxShadow: '0 8px 28px rgba(27,63,216,0.14)', border: '1px solid var(--c-border-lt)', display: 'flex', alignItems: 'center', gap: '0.625rem', zIndex: 10 }}>
                <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: '#EEF2FF', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#1B3FD8' }}><FiTruck size={16} /></div>
                <div>
                  <p style={{ fontFamily: "'Outfit'", fontWeight: 700, fontSize: '0.8rem', color: '#0F1A3D', lineHeight: 1 }}>PAN India</p>
                  <p style={{ fontFamily: "'Inter'", fontSize: '0.64rem', color: 'var(--c-text-muted)', marginTop: '2px' }}>Delivery Network</p>
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.6 }}
                style={{ position: 'absolute', top: '15%', left: '-5%', background: '#fff', borderRadius: '12px', padding: '0.75rem 1rem', boxShadow: '0 8px 28px rgba(59,181,74,0.18)', border: '1px solid var(--c-border-lt)', display: 'flex', alignItems: 'center', gap: '0.625rem', zIndex: 10 }}>
                <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: '#EEF6EE', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#3BB54A' }}><FiAward size={16} /></div>
                <div>
                  <p style={{ fontFamily: "'Outfit'", fontWeight: 700, fontSize: '0.8rem', color: '#0F1A3D', lineHeight: 1 }}>500+ Orders</p>
                  <p style={{ fontFamily: "'Inter'", fontSize: '0.64rem', color: 'var(--c-text-muted)', marginTop: '2px' }}>Successfully Fulfilled</p>
                </div>
              </motion.div>
            </motion.div>

            {/* ── RIGHT: TEXT CONTENT ── */}
            <div className="hero-text">
              {/* Eyebrow */}
              <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.625rem', background: '#fff', border: '1.5px solid rgba(27,63,216,0.2)', borderRadius: '30px', padding: '0.35rem 1rem 0.35rem 0.5rem', marginBottom: '1.5rem', boxShadow: '0 2px 12px rgba(27,63,216,0.08)' }}>
                <motion.span style={{ display: 'inline-block', width: '8px', height: '8px', borderRadius: '50%', background: '#3BB54A' }} animate={{ scale: [1, 1.4, 1] }} transition={{ duration: 2, repeat: Infinity }} />
                <span className="label-tag">Trusted Industrial Raw Materials — Hyderabad, India</span>
              </motion.div>

              {/* H1 — staggered lines */}
              {['Industrial-Grade', 'Metals & Minerals,', 'Delivered.'].map((line, i) => (
                <div key={i} style={{ overflow: 'hidden' }}>
                  <motion.h1
                    initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.08 + i * 0.09 }}
                    style={{
                      fontFamily: "'Outfit', sans-serif", fontWeight: 800,
                      fontSize: 'clamp(2rem, 5vw, 4rem)', lineHeight: 1.0,
                      letterSpacing: '-0.025em', margin: 0,
                      color: i === 1 ? '#1B3FD8' : '#0F1A3D',
                    }}
                  >
                    {line}
                  </motion.h1>
                </div>
              ))}

              {/* Rainbow underline */}
              <motion.div initial={{ scaleX: 0, originX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.9, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="lotus-gradient" style={{ height: '4px', width: '200px', borderRadius: '4px', margin: '1.25rem 0 1.5rem' }} />

              {/* Subtext */}
              <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.32 }}
                style={{ fontFamily: "'Inter'", fontSize: '0.9875rem', color: 'var(--c-text-secondary)', lineHeight: 1.8, maxWidth: '490px', marginBottom: '2rem' }}>
                GK'S Metals & Minerals supplies graphite, iron ore, silica, and 12+ verified industrial materials to manufacturers across India — 5 years of proven consistency, zero compromise on purity.
              </motion.p>

              {/* CTAs */}
              <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.4 }}
                style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', alignItems: 'center', marginBottom: '1.75rem' }}>
                <motion.button onClick={() => navigate('/contact')} className="btn-primary" whileHover={{ scale: 1.03, boxShadow: '0 8px 30px rgba(27,63,216,0.35)' }} whileTap={{ scale: 0.97 }}>
                  Get a Free Quote
                </motion.button>
                <motion.button onClick={() => navigate('/products')} className="btn-ghost" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                  View Products <FiArrowRight size={15} />
                </motion.button>
                <motion.a href="https://wa.me/919000123813" target="_blank" rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.375rem', padding: '0.75rem 1.125rem', borderRadius: '7px', background: '#1DA851', color: '#fff', fontFamily: "'Inter'", fontWeight: 600, fontSize: '0.82rem', textDecoration: 'none', boxShadow: '0 4px 14px rgba(29,168,81,0.3)' }}>
                  <FaWhatsapp size={16} /> WhatsApp
                </motion.a>
              </motion.div>

              {/* Trust badges */}
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.52 }}
                style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {[
                  { text: 'PAN India Delivery', color: '#1B3FD8' },
                  { text: 'Verified Grades',    color: '#3BB54A' },
                  { text: '5+ Years Trusted',   color: '#FF6320' },
                  { text: '24hr Response',      color: '#E91B8C' },
                ].map((t, i) => (
                  <motion.span key={i} whileHover={{ y: -2, boxShadow: '0 4px 14px rgba(0,0,0,0.1)' }}
                    style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', fontFamily: "'Inter'", fontWeight: 600, fontSize: '0.7rem', color: 'var(--c-text-secondary)', background: '#fff', border: '1px solid var(--c-border)', borderRadius: '20px', padding: '0.3rem 0.75rem', boxShadow: 'var(--shadow-sm)', cursor: 'default', transition: 'all 0.2s' }}>
                    <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: t.color }} />
                    {t.text}
                  </motion.span>
                ))}
              </motion.div>
            </div>

          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5, duration: 0.6 }}
          style={{ position: 'absolute', bottom: '1.75rem', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.3rem', cursor: 'pointer', zIndex: 5 }}
          onClick={() => window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })}>
          <span style={{ fontFamily: "'Inter'", fontSize: '0.6rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.18em', color: 'var(--c-text-faint)' }}>Scroll</span>
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}>
            <FiChevronDown size={18} color="var(--c-text-faint)" />
          </motion.div>
        </motion.div>
      </section>

      {/* ══ STATS BAR ══ */}
      <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} style={{ background: '#0F1A3D', position: 'relative' }}>
        <div className="lotus-gradient" style={{ height: '3px', position: 'absolute', top: 0, left: 0, right: 0 }} />
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div className="stats-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)' }}>
            {stats.map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`stat-item stat-${i}`}
                style={{ textAlign: 'center', padding: '2.25rem 1rem', borderRight: i % 2 === 0 ? '1px solid rgba(255,255,255,0.08)' : 'none', borderBottom: i < 2 ? '1px solid rgba(255,255,255,0.08)' : 'none' }}>
                <div style={{ fontFamily: "'Outfit'", fontWeight: 800, fontSize: 'clamp(2rem,5vw,3rem)', color: s.color, letterSpacing: '-0.02em', lineHeight: 1, marginBottom: '0.375rem' }}>
                  <CountUp to={s.val} suffix={s.suffix} />
                </div>
                <div style={{ fontFamily: "'Inter'", fontWeight: 600, fontSize: '0.68rem', textTransform: 'uppercase', letterSpacing: '0.18em', color: 'rgba(255,255,255,0.4)' }}>{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ══ PRODUCTS PREVIEW ══ */}
      <section style={{ padding: '6rem 1.5rem', background: 'var(--c-bg-subtle)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <SectionHeading label="Product Catalogue" title="What We Supply" />
          <div className="product-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(290px, 1fr))', gap: '1.25rem' }}>
            {products.slice(0, 6).map((p, i) => (
              <motion.div key={p.slug} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-40px' }} transition={{ duration: 0.55, delay: i * 0.07 }} style={{ height: '100%' }}>
                <ProductCard product={p} />
              </motion.div>
            ))}
          </div>
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <Link to="/products" className="btn-ghost" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}>
              View All {products.length} Products <FiArrowRight size={15} />
            </Link>
          </motion.div>
        </div>
      </section>

      <OreVein />

      {/* ══ WHY GK'S ══ */}
      <section style={{ padding: '6rem 1.5rem', background: '#fff' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <SectionHeading label="Why Partner With Us" title="The GK'S Advantage" />
          <div className="product-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(270px, 1fr))', gap: '1.25rem' }}>
            {features.map((f, i) => {
              const Icon = f.icon;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-30px' }} transition={{ duration: 0.5, delay: i * 0.07 }}
                  whileHover={{ y: -6, boxShadow: '0 14px 40px rgba(27,63,216,0.1)' }}
                  style={{ background: '#fff', border: '1px solid var(--c-border-lt)', borderRadius: '12px', padding: '1.75rem', borderTop: `3px solid ${f.color}`, boxShadow: 'var(--shadow-card)', transition: 'box-shadow 0.25s', cursor: 'default' }}>
                  <motion.div whileHover={{ rotate: [0, -8, 8, 0], scale: 1.1 }} transition={{ duration: 0.5 }}
                    style={{ width: '46px', height: '46px', background: f.bg, borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: f.color, marginBottom: '1.125rem' }}>
                    <Icon size={22} />
                  </motion.div>
                  <h3 style={{ fontFamily: "'Outfit'", fontWeight: 700, fontSize: '0.97rem', color: '#0F1A3D', marginBottom: '0.6rem' }}>{f.title}</h3>
                  <p style={{ fontFamily: "'Inter'", fontSize: '0.84rem', color: 'var(--c-text-muted)', lineHeight: 1.72 }}>{f.text}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <OreVein />

      {/* ══ QUICK ENQUIRY ══ */}
      <section style={{ padding: '5.5rem 1.5rem', background: 'var(--c-bg-subtle)', position: 'relative', overflow: 'hidden' }}>
        <Orb color="rgba(27,63,216,0.05)" size="300px" x="70%" y="0%"  dur={10} delay={0} />
        <Orb color="rgba(59,181,74,0.04)"  size="250px" x="-5%" y="40%" dur={12} delay={3} />
        <div style={{ maxWidth: '1100px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.7 }}
            className="lead-grid"
            style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '3rem', alignItems: 'center', background: '#fff', borderRadius: '20px', border: '1px solid var(--c-border-lt)', padding: '3rem', boxShadow: 'var(--shadow-md)', position: 'relative', overflow: 'hidden' }}>
            <div className="lotus-gradient" style={{ height: '4px', position: 'absolute', top: 0, left: 0, right: 0 }} />
            <div style={{ minWidth: '220px' }}>
              <motion.img src={logoImg} alt="GK'S" initial={{ scale: 0.8, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, type: 'spring', stiffness: 200 }}
                style={{ width: '72px', height: '72px', objectFit: 'contain', display: 'block', marginBottom: '1rem' }} />
              <h2 style={{ fontFamily: "'Outfit'", fontWeight: 800, fontSize: 'clamp(1.3rem,3vw,2rem)', color: '#0F1A3D', letterSpacing: '-0.015em', lineHeight: 1.1, marginBottom: '0.75rem' }}>
                Need a Specific<br />Material?
              </h2>
              <p style={{ fontFamily: "'Inter'", fontSize: '0.875rem', color: 'var(--c-text-muted)', lineHeight: 1.7 }}>
                Share your requirements — we'll respond within 24 hours.
              </p>
            </div>
            <form onSubmit={handleMiniSubmit}>
              <div className="mini-form-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '0.75rem' }}>
                <div>
                  <label style={{ display: 'block', fontFamily: "'Inter'", fontWeight: 700, fontSize: '0.62rem', textTransform: 'uppercase', letterSpacing: '0.18em', color: 'var(--c-text-muted)', marginBottom: '0.375rem' }}>Your Name *</label>
                  <input type="text" required placeholder="e.g. Ramesh Kumar" value={miniForm.name} onChange={e => setMiniForm(p => ({ ...p, name: e.target.value }))} className="form-input" />
                </div>
                <div>
                  <label style={{ display: 'block', fontFamily: "'Inter'", fontWeight: 700, fontSize: '0.62rem', textTransform: 'uppercase', letterSpacing: '0.18em', color: 'var(--c-text-muted)', marginBottom: '0.375rem' }}>Phone *</label>
                  <input type="tel" required placeholder="10-digit mobile" value={miniForm.phone} onChange={e => setMiniForm(p => ({ ...p, phone: e.target.value }))} className="form-input" />
                </div>
              </div>
              <div style={{ marginBottom: '0.875rem' }}>
                <label style={{ display: 'block', fontFamily: "'Inter'", fontWeight: 700, fontSize: '0.62rem', textTransform: 'uppercase', letterSpacing: '0.18em', color: 'var(--c-text-muted)', marginBottom: '0.375rem' }}>Material Needed *</label>
                <select required value={miniForm.product} onChange={e => setMiniForm(p => ({ ...p, product: e.target.value }))} className="form-input" style={{ cursor: 'pointer' }}>
                  <option value="">Select a product...</option>
                  {products.map(p => <option key={p.slug} value={p.name}>{p.name}</option>)}
                </select>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                <AnimatePresence mode="wait">
                  {miniError
                    ? <motion.p key="e" initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0 }} style={{ fontFamily: "'Inter'", fontSize: '0.8rem', color: '#E91B8C' }}>{miniError}</motion.p>
                    : <p style={{ fontFamily: "'Inter'", fontSize: '0.78rem', color: 'var(--c-text-muted)' }}>24-hour guaranteed response</p>
                  }
                </AnimatePresence>
                <motion.button type="submit" disabled={miniLoading} className="btn-primary" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                  style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', whiteSpace: 'nowrap', opacity: miniLoading ? 0.7 : 1 }}>
                  {miniLoading ? 'Sending…' : <><FiSend size={14} /> Request Quote</>}
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      {/* ══ TESTIMONIALS ══ */}
      <section style={{ padding: '6rem 1.5rem', background: '#fff' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <SectionHeading label="Client Feedback" title="Trusted by Manufacturers" />
          <div className="product-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(290px, 1fr))', gap: '1.25rem' }}>
            {[
              { quote: "Sourcing graphite powder with consistent mesh size is always challenging. GK'S Metals solved this completely — their batch-to-batch consistency is impeccable.", author: 'V.K. Murthy',  role: 'Head of Procurement', company: 'Southern Foundry Linings', color: '#3BB54A' },
              { quote: "We needed 500 MT of high-purity Silica Sand delivered to Gujarat on a tight timeline. GK'S Metals coordinated everything flawlessly — on spec, on time.",   author: 'Ananya Sen',   role: 'Operations Director',  company: 'Gujarat Glass Industries',   color: '#1B3FD8' },
              { quote: "Their ADC-12 Aluminium Ingots matched our die-casting specs exactly. Best landed cost we've achieved. Highly recommended for industrial buyers.",            author: 'Satish Reddy', role: 'Technical Lead',        company: 'Deccan Auto Components',     color: '#E91B8C' },
            ].map((t, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-30px' }} transition={{ duration: 0.55, delay: i * 0.1 }}
                whileHover={{ y: -5, boxShadow: '0 14px 40px rgba(0,0,0,0.1)' }}
                style={{ background: '#fff', borderRadius: '14px', border: '1px solid var(--c-border-lt)', borderTop: `3px solid ${t.color}`, padding: '2rem', boxShadow: 'var(--shadow-card)', position: 'relative', overflow: 'hidden', cursor: 'default' }}>
                <div style={{ position: 'absolute', top: '1rem', right: '1.5rem', fontFamily: 'Georgia,serif', fontSize: '4.5rem', color: `${t.color}15`, lineHeight: 1, userSelect: 'none' }}>"</div>
                <p style={{ fontFamily: "'Inter'", fontSize: '0.875rem', color: 'var(--c-text-secondary)', lineHeight: 1.78, fontStyle: 'italic', marginBottom: '1.5rem' }}>"{t.quote}"</p>
                <div style={{ borderTop: '1px solid var(--c-border-lt)', paddingTop: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                  <div>
                    <p style={{ fontFamily: "'Outfit'", fontWeight: 700, fontSize: '0.87rem', color: '#0F1A3D', marginBottom: '2px' }}>{t.author}</p>
                    <p style={{ fontFamily: "'Inter'", fontSize: '0.75rem', color: 'var(--c-text-muted)' }}>{t.role}</p>
                  </div>
                  <span style={{ fontFamily: "'Inter'", fontWeight: 700, fontSize: '0.62rem', textTransform: 'uppercase', letterSpacing: '0.14em', color: t.color }}>{t.company}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        /* ─── RESPONSIVE HERO ─── */
        @media (min-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 899px) {
          .hero-logo { order: 1; }
          .hero-text  { order: 2; }
        }
        /* ─── STATS ─── */
        @media (min-width: 600px) {
          .stats-grid { grid-template-columns: repeat(4,1fr) !important; }
          .stat-0,.stat-1,.stat-2 { border-right: 1px solid rgba(255,255,255,0.08) !important; }
          .stat-0,.stat-1,.stat-2,.stat-3 { border-bottom: none !important; }
        }
        /* ─── LEAD FORM ─── */
        @media (max-width: 820px) {
          .lead-grid { grid-template-columns: 1fr !important; }
          .mini-form-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
