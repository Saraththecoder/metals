import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowRight, FiSend, FiBox, FiLayers, FiCpu, FiFilter, FiStar, FiAward, FiCompass, FiHome, FiZap, FiPackage, FiCircle, FiHexagon, FiInfo, FiX } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

const iconMap = {
  hexagon: FiHexagon, layers: FiLayers, cube: FiBox, atom: FiCpu,
  filter: FiFilter, sparkles: FiStar, gem: FiAward, mountain: FiCompass,
  building: FiHome, zap: FiZap, package: FiPackage, circle: FiCircle,
};

const categoryColors = {
  'Graphite':              { bg: '#EEF6EE', border: '#B8DFB8', icon: '#3BB54A', badge: '#2D7A3A', dot: '#3BB54A', accent: '#3BB54A' },
  'Metals & Ores':        { bg: '#EEF2FF', border: '#BFD0FF', icon: '#1B3FD8', badge: '#1230A8', dot: '#1B3FD8', accent: '#1B3FD8' },
  'Minerals':             { bg: '#FFF8ED', border: '#FFD9A0', icon: '#FF6320', badge: '#CC4A10', dot: '#FF6320', accent: '#FF6320' },
  'Metal Scrap & Alloys': { bg: '#FDF2FA', border: '#F5BAE8', icon: '#E91B8C', badge: '#B5126B', dot: '#E91B8C', accent: '#E91B8C' },
};

export default function ProductCardXRay({ product, showImage = true }) {
  const [isRevealed, setIsRevealed] = useState(false);
  const Icon = iconMap[product.icon] || FiBox;
  const cat = categoryColors[product.category] || categoryColors['Minerals'];

  const parseSpec = (s) => {
    if (s.includes(':')) {
      const idx = s.indexOf(':');
      return { key: s.slice(0, idx).trim(), val: s.slice(idx + 1).trim() };
    }
    return { key: s, val: '' };
  };

  const waUrl = `https://wa.me/919000123813?text=${encodeURIComponent(
    `Hi GK'S Metals, I want a quote for ${product.name}. Please share bulk pricing and specs.`
  )}`;

  const bgFallback = `linear-gradient(135deg, ${cat.bg} 0%, #fff 100%)`;

  return (
    <motion.div
      onMouseEnter={() => setIsRevealed(true)}
      onMouseLeave={() => setIsRevealed(false)}
      style={{
        position: 'relative',
        height: '420px',
        borderRadius: '16px',
        overflow: 'hidden',
        boxShadow: 'var(--shadow-card)',
        background: (showImage && product.image) ? '#0F1A3D' : bgFallback,
        border: '1px solid var(--c-border-lt)',
      }}
    >
      {/* Background Image */}
      {(showImage && product.image) && (
        <motion.img
          src={product.image}
          alt={product.name}
          animate={{ scale: isRevealed ? 1.08 : 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          style={{
            position: 'absolute', inset: 0,
            width: '100%', height: '100%',
            objectFit: 'cover',
            zIndex: 0,
            opacity: 0.85 // Slightly darkened so text always pops
          }}
        />
      )}

      {/* Permanent Bottom Gradient for text readability */}
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(15,26,61,0.95) 0%, rgba(15,26,61,0.4) 40%, rgba(15,26,61,0) 100%)', zIndex: 1, pointerEvents: 'none' }} />

      {/* Base Info (Always visible, slides down on reveal) */}
      <motion.div
        animate={{ y: isRevealed ? 40 : 0, opacity: isRevealed ? 0 : 1 }}
        transition={{ duration: 0.3 }}
        style={{
          position: 'absolute', bottom: 0, left: 0, right: 0,
          padding: '1.5rem', zIndex: 2,
          display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end',
          pointerEvents: isRevealed ? 'none' : 'auto'
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(4px)', padding: '0.3rem 0.75rem', borderRadius: '20px', width: 'fit-content' }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: cat.accent }} />
            <span style={{ fontFamily: "'Inter'", fontWeight: 700, fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.14em', color: '#fff' }}>
              {product.category}
            </span>
          </div>
          <h3 style={{ fontFamily: "'Outfit'", fontWeight: 700, fontSize: '1.4rem', color: '#fff', lineHeight: 1.1, margin: 0 }}>
            {product.name}
          </h3>
        </div>
        
        {/* Mobile Reveal Button */}
        <button 
          onClick={() => setIsRevealed(true)}
          style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(4px)', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', cursor: 'pointer' }}
          aria-label="Show Details"
        >
          <FiInfo size={18} />
        </button>
      </motion.div>

      {/* X-Ray Reveal Overlay */}
      <AnimatePresence>
        {isRevealed && (
          <motion.div
            initial={{ opacity: 0, y: '10%' }}
            animate={{ opacity: 1, y: '0%' }}
            exit={{ opacity: 0, y: '10%' }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            style={{
              position: 'absolute', inset: 0, zIndex: 3,
              background: 'rgba(255, 255, 255, 0.92)',
              backdropFilter: 'blur(16px)',
              padding: '1.5rem',
              display: 'flex', flexDirection: 'column',
              color: '#0F1A3D'
            }}
          >
            {/* Overlay Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
              <div>
                <h3 style={{ fontFamily: "'Outfit'", fontWeight: 800, fontSize: '1.25rem', color: '#0F1A3D', margin: '0 0 0.3rem 0', letterSpacing: '-0.02em' }}>
                  {product.name}
                </h3>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: cat.accent }} />
                  <span style={{ fontFamily: "'Inter'", fontWeight: 700, fontSize: '0.55rem', textTransform: 'uppercase', letterSpacing: '0.14em', color: 'var(--c-text-muted)' }}>
                    {product.category}
                  </span>
                </div>
              </div>
              <button onClick={() => setIsRevealed(false)} style={{ background: 'none', border: 'none', color: 'var(--c-text-muted)', cursor: 'pointer', padding: '0.2rem' }}>
                <FiX size={20} />
              </button>
            </div>

            <p style={{ fontFamily: "'Inter'", fontSize: '0.8rem', color: 'var(--c-text-secondary)', lineHeight: 1.5, fontStyle: 'italic', marginBottom: '1.25rem' }}>
              {product.tagline}
            </p>

            {/* Specs */}
            <div style={{ marginBottom: '1.25rem' }}>
              <p style={{ fontFamily: "'Inter'", fontWeight: 700, fontSize: '0.58rem', textTransform: 'uppercase', letterSpacing: '0.18em', color: cat.accent, marginBottom: '0.5rem' }}>Key Specs</p>
              {product.specs.slice(0, 3).map((spec, i) => {
                const { key, val } = parseSpec(spec);
                return (
                  <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.35rem 0', borderBottom: '1px solid var(--c-border-lt)' }}>
                    <span style={{ fontFamily: "'Inter'", fontSize: '0.76rem', color: 'var(--c-text-muted)' }}>{key}</span>
                    <span style={{ fontFamily: "'Inter'", fontWeight: 700, fontSize: '0.76rem', color: '#0F1A3D' }}>{val}</span>
                  </div>
                );
              })}
            </div>

            <div style={{ flexGrow: 1 }} />

            {/* CTA Row */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 42px', gap: '0.5rem' }}>
              <Link
                to={`/products/${product.slug}`}
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.3rem',
                  padding: '0.75rem 0.5rem',
                  background: 'var(--c-bg-subtle)', border: '1px solid var(--c-border)',
                  borderRadius: '8px', color: 'var(--c-text-secondary)',
                  fontFamily: "'Inter'", fontWeight: 700, fontSize: '0.7rem',
                  textTransform: 'uppercase', letterSpacing: '0.07em',
                  textDecoration: 'none', transition: 'all 0.2s',
                }}
              >
                Details <FiArrowRight size={12} />
              </Link>
              
              <Link
                to={`/contact?product=${product.slug}`}
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.3rem',
                  padding: '0.75rem 0.5rem',
                  background: '#1B3FD8', border: '1px solid #1B3FD8',
                  borderRadius: '8px', color: '#fff',
                  fontFamily: "'Inter'", fontWeight: 700, fontSize: '0.7rem',
                  textTransform: 'uppercase', letterSpacing: '0.07em',
                  textDecoration: 'none', transition: 'all 0.2s',
                  boxShadow: '0 4px 12px rgba(27,63,216,0.25)'
                }}
              >
                <FiSend size={12} /> Quote
              </Link>

              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                title={`WhatsApp enquiry for ${product.name}`}
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  width: '42px', height: '100%', minHeight: '40px',
                  background: '#1DA851', border: '1px solid #1DA851',
                  borderRadius: '8px', color: '#fff',
                  textDecoration: 'none', transition: 'all 0.2s',
                  flexShrink: 0,
                  boxShadow: '0 4px 12px rgba(29,168,81,0.25)'
                }}
              >
                <FaWhatsapp size={18} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
