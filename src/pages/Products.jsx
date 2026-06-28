import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import products from '../data/products';
import ProductCard from '../components/ProductCard';
import SectionHeading from '../components/SectionHeading';
import { FaWhatsapp } from 'react-icons/fa';
import { FiPhoneCall } from 'react-icons/fi';

const CATEGORIES = ['All', ...new Set(products.map(p => p.category).filter(c => c && c.trim() !== ''))];

const pref = typeof window !== 'undefined' ? window.matchMedia('(prefers-reduced-motion: reduce)').matches : false;

export default function Products() {
  const [active, setActive] = useState('All');

  const filtered = active === 'All' ? products : products.filter(p => p.category === active);

  return (
    <div style={{ background: 'var(--c-base)', padding: '4rem 1.5rem 6rem' }}>
      <Helmet>
        <title>Industrial Metals & Minerals Products | GK Metals & Minerals</title>
        <meta name="description" content="Browse 12+ industrial materials: graphite powder, iron ore, silica sand, feldspar, bauxite, manganese ore, aluminium ingots, and more. Bulk supply across India." />
      </Helmet>

      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <SectionHeading label="Complete Catalogue" title="Our Product Range" />
        <p style={{ fontFamily: "'Inter'", fontSize: '0.9375rem', color: 'var(--c-text-muted)', lineHeight: 1.75, textAlign: 'center', maxWidth: '560px', margin: '-2rem auto 3rem' }}>
          12+ verified industrial materials — directly sourced, tested, and supplied in bulk to manufacturers across India.
        </p>

        {/* FILTER TABS */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', justifyContent: 'center', marginBottom: '3rem' }}>
          {CATEGORIES.map(cat => {
            const isActive = active === cat;
            return (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                style={{
                  position: 'relative',
                  padding: '0.5rem 1.25rem',
                  fontFamily: "'Inter'", fontWeight: 600, fontSize: '0.75rem',
                  textTransform: 'uppercase', letterSpacing: '0.1em',
                  color: isActive ? '#fff' : 'var(--c-text-muted)',
                  background: isActive ? 'var(--c-blue)' : 'var(--c-surface)',
                  border: `1px solid ${isActive ? 'var(--c-blue)' : 'var(--c-border)'}`,
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  overflow: 'hidden',
                }}
                onMouseEnter={e => { if (!isActive) { e.currentTarget.style.color = 'var(--c-text-primary)'; e.currentTarget.style.borderColor = 'rgba(0,80,240,0.4)'; } }}
                onMouseLeave={e => { if (!isActive) { e.currentTarget.style.color = 'var(--c-text-muted)'; e.currentTarget.style.borderColor = 'var(--c-border)'; } }}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* GRID */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={pref ? {} : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={pref ? {} : { opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="product-grid"
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.25rem' }}
          >
            {filtered.map((product, i) => (
              <motion.div
                key={product.slug}
                initial={pref ? {} : { opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: i * 0.04 }}
                style={{ height: '100%' }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {filtered.length === 0 && (
          <div style={{ textAlign: 'center', padding: '4rem', background: 'var(--c-surface)', border: '1px solid var(--c-border)' }}>
            <p style={{ fontFamily: "'Inter'", color: 'var(--c-text-muted)' }}>No products in this category.</p>
          </div>
        )}

        {/* WHATSAPP CTA BANNER */}
        <div style={{ marginTop: '5rem', background: 'var(--c-surface)', border: '1px solid rgba(37,211,102,0.2)', borderRadius: '16px', padding: '3rem 2rem', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', boxShadow: 'var(--shadow-sm)' }}>
          <div style={{ width: '64px', height: '64px', background: 'rgba(37,211,102,0.12)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#25D366', marginBottom: '1.25rem' }}>
            <FaWhatsapp size={32} />
          </div>
          <h3 style={{ fontFamily: "'Outfit'", fontWeight: 800, fontSize: '1.75rem', color: 'var(--c-text-primary)', marginBottom: '0.75rem' }}>Need a Custom Bulk Quote?</h3>
          <p style={{ fontFamily: "'Inter'", fontSize: '0.95rem', color: 'var(--c-text-muted)', maxWidth: '540px', marginBottom: '2rem', lineHeight: 1.6 }}>
            Chat with our sales team on WhatsApp for instant pricing, technical specifications, and delivery timelines across India.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <a href="https://wa.me/919000123813" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.875rem 1.75rem', background: '#25D366', color: '#fff', textDecoration: 'none', fontFamily: "'Inter'", fontWeight: 600, fontSize: '0.9rem', borderRadius: '8px', boxShadow: '0 4px 14px rgba(37,211,102,0.3)', transition: 'all 0.2s' }} onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.05)'; e.currentTarget.style.background = '#1da851'; }} onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.background = '#25D366'; }}>
              <FaWhatsapp size={18} /> Chat on WhatsApp
            </a>
            <a href="tel:+919000123813" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.875rem 1.75rem', background: 'transparent', border: '1.5px solid var(--c-border)', color: 'var(--c-text-primary)', textDecoration: 'none', fontFamily: "'Inter'", fontWeight: 600, fontSize: '0.9rem', borderRadius: '8px', transition: 'all 0.2s' }} onMouseEnter={e => { e.currentTarget.style.background = 'var(--c-bg-subtle)'; e.currentTarget.style.borderColor = 'var(--c-blue-lt)'; }} onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'var(--c-border)'; }}>
              <FiPhoneCall size={18} /> Call Us
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
