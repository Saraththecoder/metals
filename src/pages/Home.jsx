import { useRef, useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import {
  FiArrowRight, FiSend, FiCheckCircle, FiTruck, FiLayers,
  FiDollarSign, FiAward, FiPhoneCall, FiChevronDown,
  FiClock, FiBox, FiPackage, FiMapPin
} from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import products from '../data/products';
import SectionHeading, { OreVein } from '../components/SectionHeading';
import ProductCard from '../components/ProductCard';
import TabbedProductCarousel from '../components/TabbedProductCarousel';
import HeroShowcase from '../components/HeroShowcase';
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
  { val: '5',   suffix: '+', label: 'Years Active',      color: '#E91B8C', icon: FiClock },
  { val: '12',  suffix: '+', label: 'Products',          color: '#3BB54A', icon: FiBox },
  { val: '500', suffix: '+', label: 'Orders Fulfilled',  color: '#29B4F6', icon: FiPackage },
  { val: 'PAN', suffix: '',  label: 'India Network',     color: '#F5C800', icon: FiMapPin },
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
        <title>GK'S Metals & Minerals | Top Industrial Minerals Supplier India</title>
        <meta name="description" content="GK'S Metals & Minerals — trusted bulk supplier of graphite powder, iron ore, silica sand, and manganese in Hyderabad and PAN India." />
        <meta name="keywords" content="Industrial minerals supplier in India, Graphite powder manufacturer Hyderabad, Iron ore wholesale distributor Telangana, Silica sand suppliers in India, Manganese ore exporters India" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "GK'S Metals & Minerals",
              "image": "https://gkmetalsandminerals.com/logo.png",
              "@id": "https://gkmetalsandminerals.com/",
              "url": "https://gkmetalsandminerals.com/",
              "telephone": "+91 90001 23813",
              "email": "gkmetalsandminerals@gmail.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Road No.7, Anjaneya Nagar, Moosapet",
                "addressLocality": "Hyderabad",
                "addressRegion": "Telangana",
                "postalCode": "500018",
                "addressCountry": "IN"
              },
              "founder": {
                "@type": "Person",
                "name": "Krishna Chaithanya"
              },
              "taxID": "36AZRPM6557G1ZQ"
            }
          `}
        </script>
      </Helmet>

      {/* ══ DYNAMIC HERO SHOWCASE ══ */}
      <HeroShowcase />

      {/* ══ STATS BAR ══ */}
      <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} style={{ background: '#0F1A3D', position: 'relative' }}>
        <div className="lotus-gradient" style={{ height: '3px', position: 'absolute', top: 0, left: 0, right: 0 }} />
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div className="stats-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)' }}>
            {stats.map((s, i) => {
              const Icon = s.icon;
              return (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`stat-item stat-${i}`}
                style={{ textAlign: 'center', padding: '2.25rem 1rem', borderRight: i % 2 === 0 ? '1px solid rgba(255,255,255,0.08)' : 'none', borderBottom: i < 2 ? '1px solid rgba(255,255,255,0.08)' : 'none', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{ fontFamily: "'Outfit'", fontWeight: 800, fontSize: 'clamp(2rem,5vw,3rem)', color: s.color, letterSpacing: '-0.02em', lineHeight: 1, marginBottom: '0.5rem' }}>
                  <CountUp to={s.val} suffix={s.suffix} />
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontFamily: "'Inter'", fontWeight: 600, fontSize: '0.68rem', textTransform: 'uppercase', letterSpacing: '0.18em', color: 'rgba(255,255,255,0.4)' }}>
                  <Icon size={14} color={s.color} style={{ opacity: 0.9 }} /> {s.label}
                </div>
              </motion.div>
            )})}
          </div>
        </div>
      </motion.section>

      {/* ══ PRODUCTS PREVIEW ══ */}
      <section style={{ padding: '6rem 1.5rem', background: 'var(--c-bg-subtle)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <SectionHeading label="Product Catalogue" title="What We Supply" />
          
          <div style={{ marginTop: '2rem' }}>
            <TabbedProductCarousel products={products} />
          </div>

          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} style={{ textAlign: 'center', marginTop: '3.5rem' }}>
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
          <div className="bento-grid">
            {features.map((f, i) => {
              const Icon = f.icon;
              const isWide = i === 0 || i === 4; // Making 0 and 4 wide
              const isTall = i === 1; // Making 1 tall
              // The others (2, 3, 5) are square.
              
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-30px' }} transition={{ duration: 0.5, delay: i * 0.07 }}
                  whileHover={{ y: -6, boxShadow: '0 14px 40px rgba(27,63,216,0.1)' }}
                  className={`bento-item-${i}`}
                  style={{ 
                    background: '#fff', border: '1px solid var(--c-border-lt)', borderRadius: '16px', padding: '2rem', borderTop: `4px solid ${f.color}`, boxShadow: 'var(--shadow-card)', transition: 'box-shadow 0.25s, transform 0.25s', cursor: 'default',
                    display: 'flex', 
                    flexDirection: isWide ? 'row' : 'column',
                    alignItems: isWide ? 'center' : 'flex-start',
                    justifyContent: isTall ? 'center' : 'flex-start',
                    gap: isWide ? '2rem' : '0',
                    position: 'relative',
                    overflow: 'hidden'
                  }}>
                  {/* Subtle background graphic for the tall/wide cards to make them feel premium */}
                  {(isWide || isTall) && (
                    <div style={{ position: 'absolute', right: '-10%', bottom: '-10%', opacity: 0.03, pointerEvents: 'none' }}>
                      <Icon size={180} />
                    </div>
                  )}
                  <motion.div whileHover={{ rotate: [0, -8, 8, 0], scale: 1.1 }} transition={{ duration: 0.5 }}
                    style={{ width: isWide ? '64px' : '48px', height: isWide ? '64px' : '48px', flexShrink: 0, background: f.bg, borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: f.color, marginBottom: isWide ? '0' : '1.25rem', zIndex: 1 }}>
                    <Icon size={isWide ? 28 : 24} />
                  </motion.div>
                  <div style={{ zIndex: 1 }}>
                    <h3 style={{ fontFamily: "'Outfit'", fontWeight: 800, fontSize: isWide ? '1.2rem' : '1.05rem', color: '#0F1A3D', marginBottom: '0.6rem', letterSpacing: '-0.01em' }}>{f.title}</h3>
                    <p style={{ fontFamily: "'Inter'", fontSize: '0.85rem', color: 'var(--c-text-muted)', lineHeight: 1.6 }}>{f.text}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
          <style>{`
            .bento-grid {
              display: grid;
              grid-template-columns: repeat(3, 1fr);
              grid-auto-rows: minmax(180px, auto);
              gap: 1.25rem;
            }
            .bento-item-0 { grid-column: 1 / 3; grid-row: 1 / 2; }
            .bento-item-1 { grid-column: 3 / 4; grid-row: 1 / 3; }
            .bento-item-2 { grid-column: 1 / 2; grid-row: 2 / 3; }
            .bento-item-3 { grid-column: 2 / 3; grid-row: 2 / 3; }
            .bento-item-4 { grid-column: 1 / 3; grid-row: 3 / 4; }
            .bento-item-5 { grid-column: 3 / 4; grid-row: 3 / 4; }

            @media (max-width: 900px) {
              .bento-grid { grid-template-columns: repeat(2, 1fr); grid-auto-rows: auto; }
              .bento-item-0, .bento-item-1, .bento-item-2, .bento-item-3, .bento-item-4, .bento-item-5 {
                grid-column: span 1;
                grid-row: auto;
                flex-direction: column !important;
                align-items: flex-start !important;
                justify-content: flex-start !important;
                gap: 0 !important;
              }
              .bento-item-0, .bento-item-4 { grid-column: 1 / 3; }
              .bento-item-0 > div:nth-child(2), .bento-item-4 > div:nth-child(2) {
                margin-bottom: 1.25rem !important;
                width: 48px !important; height: 48px !important;
              }
            }

            @media (max-width: 600px) {
              .bento-grid { grid-template-columns: 1fr; }
              .bento-item-0, .bento-item-1, .bento-item-2, .bento-item-3, .bento-item-4, .bento-item-5 {
                grid-column: 1 / -1;
              }
            }
          `}</style>
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
      <section style={{ padding: '6rem 0', background: '#fff', overflow: 'hidden' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem', marginBottom: '3rem' }}>
          <SectionHeading label="Client Feedback" title="Trusted by Manufacturers" />
        </div>
        
        <div style={{ width: '100%', overflow: 'hidden', position: 'relative' }}>
          {/* Fading edges for smooth entry/exit */}
          <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '100px', background: 'linear-gradient(to right, #fff, transparent)', zIndex: 10, pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '100px', background: 'linear-gradient(to left, #fff, transparent)', zIndex: 10, pointerEvents: 'none' }} />
          
          <div className="marquee-container">
            {[
              { quote: "Sourcing graphite powder with consistent mesh size is always challenging. GK'S Metals solved this completely — their batch-to-batch consistency is impeccable.", author: 'V.K. Murthy',  role: 'Head of Procurement', company: 'Southern Foundry Linings', color: '#3BB54A' },
              { quote: "We needed 500 MT of high-purity Silica Sand delivered to Gujarat on a tight timeline. GK'S Metals coordinated everything flawlessly — on spec, on time.",   author: 'Ananya Sen',   role: 'Operations Director',  company: 'Gujarat Glass Industries',   color: '#1B3FD8' },
              { quote: "Their ADC-12 Aluminium Ingots matched our die-casting specs exactly. Best landed cost we've achieved. Highly recommended for industrial buyers.",            author: 'Satish Reddy', role: 'Technical Lead',        company: 'Deccan Auto Components',     color: '#E91B8C' },
            ].concat([
              { quote: "Sourcing graphite powder with consistent mesh size is always challenging. GK'S Metals solved this completely — their batch-to-batch consistency is impeccable.", author: 'V.K. Murthy',  role: 'Head of Procurement', company: 'Southern Foundry Linings', color: '#3BB54A' },
              { quote: "We needed 500 MT of high-purity Silica Sand delivered to Gujarat on a tight timeline. GK'S Metals coordinated everything flawlessly — on spec, on time.",   author: 'Ananya Sen',   role: 'Operations Director',  company: 'Gujarat Glass Industries',   color: '#1B3FD8' },
              { quote: "Their ADC-12 Aluminium Ingots matched our die-casting specs exactly. Best landed cost we've achieved. Highly recommended for industrial buyers.",            author: 'Satish Reddy', role: 'Technical Lead',        company: 'Deccan Auto Components',     color: '#E91B8C' },
            ]).concat([
              { quote: "Sourcing graphite powder with consistent mesh size is always challenging. GK'S Metals solved this completely — their batch-to-batch consistency is impeccable.", author: 'V.K. Murthy',  role: 'Head of Procurement', company: 'Southern Foundry Linings', color: '#3BB54A' },
              { quote: "We needed 500 MT of high-purity Silica Sand delivered to Gujarat on a tight timeline. GK'S Metals coordinated everything flawlessly — on spec, on time.",   author: 'Ananya Sen',   role: 'Operations Director',  company: 'Gujarat Glass Industries',   color: '#1B3FD8' },
              { quote: "Their ADC-12 Aluminium Ingots matched our die-casting specs exactly. Best landed cost we've achieved. Highly recommended for industrial buyers.",            author: 'Satish Reddy', role: 'Technical Lead',        company: 'Deccan Auto Components',     color: '#E91B8C' },
            ]).concat([
              { quote: "Sourcing graphite powder with consistent mesh size is always challenging. GK'S Metals solved this completely — their batch-to-batch consistency is impeccable.", author: 'V.K. Murthy',  role: 'Head of Procurement', company: 'Southern Foundry Linings', color: '#3BB54A' },
              { quote: "We needed 500 MT of high-purity Silica Sand delivered to Gujarat on a tight timeline. GK'S Metals coordinated everything flawlessly — on spec, on time.",   author: 'Ananya Sen',   role: 'Operations Director',  company: 'Gujarat Glass Industries',   color: '#1B3FD8' },
              { quote: "Their ADC-12 Aluminium Ingots matched our die-casting specs exactly. Best landed cost we've achieved. Highly recommended for industrial buyers.",            author: 'Satish Reddy', role: 'Technical Lead',        company: 'Deccan Auto Components',     color: '#E91B8C' },
            ]).map((t, i) => (
              <div key={i} className="marquee-item"
                style={{ flexShrink: 0, width: '380px', background: '#fff', borderRadius: '14px', border: '1px solid var(--c-border-lt)', borderTop: `3px solid ${t.color}`, padding: '2rem', boxShadow: 'var(--shadow-card)', position: 'relative', overflow: 'hidden', cursor: 'default', margin: '1rem 0.625rem', transition: 'transform 0.2s, box-shadow 0.2s' }}>
                <div style={{ position: 'absolute', top: '1rem', right: '1.5rem', fontFamily: 'Georgia,serif', fontSize: '4.5rem', color: `${t.color}15`, lineHeight: 1, userSelect: 'none' }}>"</div>
                <p style={{ fontFamily: "'Inter'", fontSize: '0.875rem', color: 'var(--c-text-secondary)', lineHeight: 1.78, fontStyle: 'italic', marginBottom: '1.5rem', whiteSpace: 'normal' }}>"{t.quote}"</p>
                <div style={{ borderTop: '1px solid var(--c-border-lt)', paddingTop: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                  <div>
                    <p style={{ fontFamily: "'Outfit'", fontWeight: 700, fontSize: '0.87rem', color: '#0F1A3D', marginBottom: '2px' }}>{t.author}</p>
                    <p style={{ fontFamily: "'Inter'", fontSize: '0.75rem', color: 'var(--c-text-muted)' }}>{t.role}</p>
                  </div>
                  <span style={{ fontFamily: "'Inter'", fontWeight: 700, fontSize: '0.62rem', textTransform: 'uppercase', letterSpacing: '0.14em', color: t.color }}>{t.company}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        /* ─── MARQUEE ANIMATION ─── */
        @keyframes marqueeScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-container {
          display: flex;
          width: max-content;
          animation: marqueeScroll 35s linear infinite;
        }
        .marquee-container:hover {
          animation-play-state: paused;
        }
        .marquee-item:hover {
          transform: translateY(-5px);
          box-shadow: 0 14px 40px rgba(0,0,0,0.1) !important;
        }

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
