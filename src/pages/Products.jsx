import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import products from '../data/products';
import ProductCard from '../components/ProductCard';
import SectionHeading from '../components/SectionHeading';

const CATEGORIES = ['All', 'Graphite', 'Metals & Ores', 'Minerals', 'Metal Scrap & Alloys'];

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
        <p style={{ fontFamily: "'DM Sans'", fontSize: '0.9375rem', color: 'var(--c-text-muted)', lineHeight: 1.75, textAlign: 'center', maxWidth: '560px', margin: '-2rem auto 3rem' }}>
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
                  fontFamily: "'DM Sans'", fontWeight: 600, fontSize: '0.75rem',
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
            <p style={{ fontFamily: "'DM Sans'", color: 'var(--c-text-muted)' }}>No products in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
}
