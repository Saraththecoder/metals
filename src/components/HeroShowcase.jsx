import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FiTruck, FiAward, FiChevronDown } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

const slides = [
  {
    id: 1,
    title1: "Industrial-Grade",
    title2: "Metals & Minerals,",
    title3: "Delivered.",
    titleColor: "#1B3FD8",
    subtitle: "GK'S Metals & Minerals supplies graphite, iron ore, silica, and 12+ verified industrial materials to manufacturers across India.",
    image: "/image copy.png",
    bgGradient: "linear-gradient(135deg, #EEF2FF 0%, #F5F8FF 45%, #F0FDF4 100%)",
    tagline: "Trusted Industrial Raw Materials — Hyderabad, India",
    tagColor: "#3BB54A",
    card1Icon: FiTruck, card1Color: "#1B3FD8", card1Bg: "#EEF2FF", card1Title: "PAN India", card1Sub: "Delivery Network",
    card2Icon: FiAward, card2Color: "#3BB54A", card2Bg: "#EEF6EE", card2Title: "500+ Orders", card2Sub: "Successfully Fulfilled",
    imgFilter: "drop-shadow(0 20px 40px rgba(27,63,216,0.12))"
  },
  {
    id: 2,
    title1: "High Purity",
    title2: "Pure Elements,",
    title3: "Guaranteed.",
    titleColor: "#E91B8C",
    subtitle: "Specialized elemental metals like Titanium, Neodymium, and Samarium engineered for advanced technology and manufacturing.",
    image: "https://res.cloudinary.com/doegh5lpl/image/upload/v1782589409/natural-graphite-flakes-99-50-purity-500x500_lnaujw.webp",
    bgGradient: "linear-gradient(135deg, #FDF2FA 0%, #FFF5FB 45%, #EEF2FF 100%)",
    tagline: "≥ 99.5 wt% Purity Verified",
    tagColor: "#E91B8C",
    card1Icon: FiAward, card1Color: "#E91B8C", card1Bg: "#FDF2FA", card1Title: "Certified", card1Sub: "Lab Tested",
    card2Icon: FiTruck, card2Color: "#1B3FD8", card2Bg: "#EEF2FF", card2Title: "Vacuum Packed", card2Sub: "Moisture Free",
    imgFilter: "drop-shadow(0 20px 40px rgba(233,27,140,0.12)) hue-rotate(-20deg)"
  },
  {
    id: 3,
    title1: "Precision Cast",
    title2: "Industrial Alloys,",
    title3: "Perfected.",
    titleColor: "#059669",
    subtitle: "From Aluminium to Nickel-based alloys, we supply exact compositions for foundries, forging, and die-casting operations.",
    image: "https://res.cloudinary.com/doegh5lpl/image/upload/v1782589490/piles-of-raw-iron-ore-rocks-are-clustered-near-a-steel-manufacturing-plant-as-industrial-activity-continues-nearby-under-clear-skies-and-bright-lighting-conditions-photo_ycxere.webp",
    bgGradient: "linear-gradient(135deg, #ECFDF5 0%, #F0FDF4 45%, #EEF2FF 100%)",
    tagline: "Custom Grade Matching Available",
    tagColor: "#059669",
    card1Icon: FiTruck, card1Color: "#059669", card1Bg: "#ECFDF5", card1Title: "Bulk Supply", card1Sub: "1MT to 1000MT",
    card2Icon: FiAward, card2Color: "#1B3FD8", card2Bg: "#EEF2FF", card2Title: "Exact Specs", card2Sub: "Zero Variance",
    imgFilter: "drop-shadow(0 20px 40px rgba(5,150,105,0.12)) grayscale(80%) contrast(120%)"
  }
];

function Orb({ color, size, x, y, dur = 9, delay = 0 }) {
  return (
    <motion.div
      style={{ position: 'absolute', width: size, height: size, borderRadius: '50%', background: color, filter: 'blur(48px)', left: x, top: y, pointerEvents: 'none', zIndex: 0 }}
      animate={{ y: [0, -28, 0], x: [0, 14, 0] }}
      transition={{ duration: dur, delay, repeat: Infinity, ease: 'easeInOut' }}
    />
  );
}

export default function HeroShowcase() {
  const navigate = useNavigate();
  const [current, setCurrent] = useState(0);

  // Auto-rotate slides every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const slide = slides[current];
  const Card1Icon = slide.card1Icon;
  const Card2Icon = slide.card2Icon;

  return (
    <section style={{ position: 'relative', minHeight: 'calc(100vh - 71px)', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
      
      {/* Animated Background Transition */}
      <AnimatePresence mode="wait">
        <motion.div
          key={slide.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          style={{ position: 'absolute', inset: 0, background: slide.bgGradient, zIndex: -1 }}
        />
      </AnimatePresence>

      <Orb color="rgba(27,63,216,0.07)"  size="500px" x="50%"  y="-15%" dur={11} delay={0} />
      <Orb color="rgba(59,181,74,0.06)"  size="350px" x="-8%"  y="40%"  dur={13} delay={2} />
      <Orb color="rgba(233,27,140,0.05)" size="280px" x="80%"  y="60%"  dur={9}  delay={4} />
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(27,63,216,0.07) 1.5px, transparent 1.5px)', backgroundSize: '32px 32px', zIndex: 0 }} />

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '3rem 1.5rem', width: '100%', position: 'relative', zIndex: 2 }}>
        <div className="hero-grid" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3rem', alignItems: 'center' }}>
          
          {/* ── LEFT: HERO IMAGE ── */}
          <div className="hero-image-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
            <AnimatePresence mode="wait">
              <motion.img
                key={slide.id}
                src={slide.image}
                alt="Industrial Raw Materials"
                initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  width: '100%', maxWidth: '540px', height: 'auto', objectFit: 'contain',
                  borderRadius: '16px',
                  filter: slide.imgFilter
                }}
              />
            </AnimatePresence>

            {/* Floating info cards (Static across slides to avoid flashing, but colors animate) */}
            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.4 }}
              style={{ position: 'absolute', bottom: '10%', right: '-5%', background: '#fff', borderRadius: '12px', padding: '0.75rem 1rem', boxShadow: '0 8px 28px rgba(0,0,0,0.08)', border: '1px solid var(--c-border-lt)', display: 'flex', alignItems: 'center', gap: '0.625rem', zIndex: 10 }}>
              <motion.div animate={{ backgroundColor: slide.card1Bg, color: slide.card1Color }} style={{ width: '32px', height: '32px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Card1Icon size={16} />
              </motion.div>
              <div>
                <motion.p animate={{ color: '#0F1A3D' }} style={{ fontFamily: "'Outfit'", fontWeight: 700, fontSize: '0.8rem', lineHeight: 1 }}>{slide.card1Title}</motion.p>
                <p style={{ fontFamily: "'Inter'", fontSize: '0.64rem', color: 'var(--c-text-muted)', marginTop: '2px' }}>{slide.card1Sub}</p>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.6 }}
              style={{ position: 'absolute', top: '15%', left: '-5%', background: '#fff', borderRadius: '12px', padding: '0.75rem 1rem', boxShadow: '0 8px 28px rgba(0,0,0,0.08)', border: '1px solid var(--c-border-lt)', display: 'flex', alignItems: 'center', gap: '0.625rem', zIndex: 10 }}>
              <motion.div animate={{ backgroundColor: slide.card2Bg, color: slide.card2Color }} style={{ width: '32px', height: '32px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Card2Icon size={16} />
              </motion.div>
              <div>
                <motion.p animate={{ color: '#0F1A3D' }} style={{ fontFamily: "'Outfit'", fontWeight: 700, fontSize: '0.8rem', lineHeight: 1 }}>{slide.card2Title}</motion.p>
                <p style={{ fontFamily: "'Inter'", fontSize: '0.64rem', color: 'var(--c-text-muted)', marginTop: '2px' }}>{slide.card2Sub}</p>
              </div>
            </motion.div>
          </div>

          {/* ── RIGHT: TEXT CONTENT ── */}
          <div className="hero-text">
            
            {/* Eyebrow */}
            <motion.div layout style={{ display: 'inline-flex', alignItems: 'center', gap: '0.625rem', background: '#fff', border: '1.5px solid rgba(27,63,216,0.1)', borderRadius: '30px', padding: '0.35rem 1rem 0.35rem 0.5rem', marginBottom: '1.5rem', boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}>
              <motion.span animate={{ backgroundColor: slide.tagColor }} style={{ display: 'inline-block', width: '8px', height: '8px', borderRadius: '50%' }} transition={{ duration: 0.5 }} />
              <motion.span animate={{ color: slide.tagColor }} className="label-tag" transition={{ duration: 0.5 }}>{slide.tagline}</motion.span>
            </motion.div>

            {/* H1 — Animate text changes */}
            <AnimatePresence mode="wait">
              <motion.div key={slide.id} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -15 }} transition={{ duration: 0.5, ease: "easeInOut" }}>
                <h1 style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 800, fontSize: 'clamp(2rem, 5vw, 4rem)', lineHeight: 1.05, letterSpacing: '-0.025em', margin: 0, color: '#0F1A3D' }}>
                  {slide.title1}<br/>
                  <span style={{ color: slide.titleColor, transition: 'color 0.5s ease' }}>{slide.title2}</span><br/>
                  {slide.title3}
                </h1>
                
                {/* Rainbow underline */}
                <div className="lotus-gradient" style={{ height: '4px', width: '200px', borderRadius: '4px', margin: '1.25rem 0 1.5rem' }} />
                
                {/* Subtext */}
                <p style={{ fontFamily: "'Inter'", fontSize: '0.9875rem', color: 'var(--c-text-secondary)', lineHeight: 1.8, maxWidth: '490px', marginBottom: '2rem' }}>
                  {slide.subtitle}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* CTAs */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', alignItems: 'center', marginBottom: '1.75rem' }}>
              <motion.button onClick={() => navigate('/contact')} className="btn-primary" whileHover={{ scale: 1.03, boxShadow: '0 8px 30px rgba(27,63,216,0.35)' }} whileTap={{ scale: 0.97 }}>
                Get Bulk Quote
              </motion.button>
              <motion.button onClick={() => navigate('/contact?type=sample')} className="btn-ghost" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} style={{ border: '2px solid #E91B8C', color: '#E91B8C' }}>
                Request Free Sample
              </motion.button>
              <motion.a href="https://wa.me/919000123813" target="_blank" rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.375rem', padding: '0.75rem 1.125rem', borderRadius: '7px', background: '#1DA851', color: '#fff', fontFamily: "'Inter'", fontWeight: 600, fontSize: '0.82rem', textDecoration: 'none', boxShadow: '0 4px 14px rgba(29,168,81,0.3)' }}>
                <FaWhatsapp size={16} /> WhatsApp
              </motion.a>
            </div>

            {/* Dot Indicators */}
            <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem' }}>
              {slides.map((s, index) => (
                <button
                  key={s.id}
                  onClick={() => setCurrent(index)}
                  style={{
                    width: current === index ? '24px' : '8px',
                    height: '8px',
                    borderRadius: '4px',
                    background: current === index ? slide.titleColor : '#CBD5E1',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

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
  );
}
