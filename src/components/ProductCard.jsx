import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowRight, FiSend, FiBox, FiLayers, FiCpu, FiFilter, FiStar, FiAward, FiCompass, FiHome, FiZap, FiPackage, FiCircle, FiHexagon } from 'react-icons/fi';
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

export default function ProductCard({ product, showImage = true }) {
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

  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      style={{
        background: '#fff',
        border: '1px solid var(--c-border-lt)',
        borderRadius: '14px',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        boxShadow: 'var(--shadow-card)',
        transition: 'box-shadow 0.25s, border-color 0.25s',
        position: 'relative',
      }}
      onMouseEnter={e => { e.currentTarget.style.boxShadow = 'var(--shadow-md)'; e.currentTarget.style.borderColor = cat.border; }}
      onMouseLeave={e => { e.currentTarget.style.boxShadow = 'var(--shadow-card)'; e.currentTarget.style.borderColor = 'var(--c-border-lt)'; }}
    >
      {/* Product image */}
      {showImage && product.image && (
        <div style={{ position: 'relative', height: '160px', overflow: 'hidden', background: cat.bg }}>
          <img
            src={product.image}
            alt={product.name}
            style={{
              width: '100%', height: '100%',
              objectFit: 'cover',
              objectPosition: 'center',
              transition: 'transform 0.4s ease',
            }}
            onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.06)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
          />
          {/* Category badge overlaid on image */}
          <div style={{
            position: 'absolute', top: '0.75rem', left: '0.75rem',
            display: 'inline-flex', alignItems: 'center', gap: '0.3rem',
            background: 'rgba(255,255,255,0.95)',
            border: `1px solid ${cat.border}`,
            borderRadius: '20px',
            padding: '0.2rem 0.625rem',
            backdropFilter: 'blur(4px)',
          }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: cat.dot, flexShrink: 0 }} />
            <span style={{ fontFamily: "'Inter'", fontWeight: 700, fontSize: '0.58rem', textTransform: 'uppercase', letterSpacing: '0.14em', color: cat.badge }}>
              {product.category}
            </span>
          </div>
          {/* Icon badge */}
          <div style={{
            position: 'absolute', top: '0.75rem', right: '0.75rem',
            width: '36px', height: '36px',
            background: 'rgba(255,255,255,0.95)',
            borderRadius: '10px',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: cat.icon,
            boxShadow: 'var(--shadow-sm)',
            backdropFilter: 'blur(4px)',
          }}>
            <Icon size={18} />
          </div>
        </div>
      )}

      {/* Card body */}
      <div style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.875rem', flexGrow: 1 }}>
        {/* No-image header */}
        {!showImage && (
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div style={{ width: '42px', height: '42px', background: cat.bg, border: `1px solid ${cat.border}`, borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: cat.icon }}>
              <Icon size={20} />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', background: cat.bg, border: `1px solid ${cat.border}`, borderRadius: '20px', padding: '0.2rem 0.625rem' }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: cat.dot }} />
              <span style={{ fontFamily: "'Inter'", fontWeight: 700, fontSize: '0.58rem', textTransform: 'uppercase', letterSpacing: '0.14em', color: cat.badge }}>{product.category}</span>
            </div>
          </div>
        )}

        {/* Name & Tagline */}
        <div>
          <h3 style={{ fontFamily: "'Outfit'", fontWeight: 700, fontSize: '1rem', color: '#0F1A3D', marginBottom: '0.275rem', letterSpacing: '-0.01em', lineHeight: 1.2 }}>
            {product.name}
          </h3>
          <p style={{ fontFamily: "'Inter'", fontSize: '0.78rem', color: 'var(--c-text-muted)', lineHeight: 1.5, fontStyle: 'italic' }}>
            {product.tagline}
          </p>
        </div>

        {/* Specs */}
        <div>
          <p style={{ fontFamily: "'Inter'", fontWeight: 700, fontSize: '0.58rem', textTransform: 'uppercase', letterSpacing: '0.18em', color: 'var(--c-text-faint)', marginBottom: '0.4rem' }}>Key Specs</p>
          {product.specs.slice(0, 2).map((spec, i) => {
            const { key, val } = parseSpec(spec);
            return (
              <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.35rem 0', borderBottom: '1px solid var(--c-border-lt)' }}>
                <span style={{ fontFamily: "'Inter'", fontSize: '0.76rem', color: 'var(--c-text-muted)' }}>{key}</span>
                <span style={{ fontFamily: "'Inter'", fontWeight: 600, fontSize: '0.76rem', color: '#0F1A3D' }}>{val}</span>
              </div>
            );
          })}
        </div>

        {/* Application chips */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
          {product.applications.slice(0, 3).map((app, i) => (
            <span key={i} style={{ fontFamily: "'Inter'", fontSize: '0.66rem', fontWeight: 500, color: 'var(--c-text-muted)', padding: '0.2rem 0.6rem', background: 'var(--c-bg-subtle)', border: '1px solid var(--c-border-lt)', borderRadius: '20px' }}>
              {app}
            </span>
          ))}
        </div>

        <div style={{ flexGrow: 1 }} />

        {/* CTA Row */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 42px', gap: '0.5rem', paddingTop: '0.75rem', borderTop: '1px solid var(--c-border-lt)' }}>
          {/* Details */}
          <Link
            to={`/products/${product.slug}`}
            style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.3rem',
              padding: '0.6rem 0.5rem',
              border: '1.5px solid var(--c-border)', borderRadius: '7px',
              color: 'var(--c-text-secondary)',
              fontFamily: "'Inter'", fontWeight: 600, fontSize: '0.7rem',
              textTransform: 'uppercase', letterSpacing: '0.07em',
              textDecoration: 'none', transition: 'all 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.color = cat.icon; e.currentTarget.style.borderColor = cat.accent; e.currentTarget.style.background = cat.bg; }}
            onMouseLeave={e => { e.currentTarget.style.color = 'var(--c-text-secondary)'; e.currentTarget.style.borderColor = 'var(--c-border)'; e.currentTarget.style.background = 'transparent'; }}
          >
            Details <FiArrowRight size={11} />
          </Link>

          {/* Enquire */}
          <Link
            to={`/contact?product=${product.slug}`}
            style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.3rem',
              padding: '0.6rem 0.5rem',
              background: '#1B3FD8', border: '1.5px solid #1B3FD8',
              borderRadius: '7px', color: '#fff',
              fontFamily: "'Inter'", fontWeight: 600, fontSize: '0.7rem',
              textTransform: 'uppercase', letterSpacing: '0.07em',
              textDecoration: 'none', transition: 'all 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = '#1230A8'; e.currentTarget.style.boxShadow = '0 4px 14px rgba(27,63,216,0.35)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = '#1B3FD8'; e.currentTarget.style.boxShadow = 'none'; }}
          >
            <FiSend size={11} /> Quote
          </Link>

          {/* WhatsApp */}
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            title={`WhatsApp enquiry for ${product.name}`}
            style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              width: '42px', height: '100%', minHeight: '36px',
              background: '#1DA851', border: '1.5px solid #1DA851',
              borderRadius: '7px', color: '#fff',
              textDecoration: 'none', transition: 'all 0.2s',
              flexShrink: 0,
            }}
            onMouseEnter={e => { e.currentTarget.style.background = '#16A34A'; e.currentTarget.style.boxShadow = '0 4px 14px rgba(29,168,81,0.4)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = '#1DA851'; e.currentTarget.style.boxShadow = 'none'; }}
          >
            <FaWhatsapp size={17} />
          </a>
        </div>
      </div>
    </motion.div>
  );
}
