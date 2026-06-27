import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { FaWhatsapp } from 'react-icons/fa';
import { FiChevronRight, FiArrowLeft, FiGrid } from 'react-icons/fi';
import products from '../data/products';
import ProductCard from '../components/ProductCard';
import LeadForm from '../components/LeadForm';
import { OreVein } from '../components/SectionHeading';

export default function ProductDetail() {
  const { slug } = useParams();
  const product = products.find(p => p.slug === slug);

  if (!product) {
    return (
      <div style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '1rem', padding: '4rem 1.5rem', textAlign: 'center' }}>
        <Helmet><title>Product Not Found | GK Metals & Minerals</title></Helmet>
        <h2 style={{ fontFamily: "'Syne'", fontWeight: 700, fontSize: '2rem', color: 'var(--c-text-primary)', textTransform: 'uppercase' }}>Product Not Found</h2>
        <p style={{ fontFamily: "'DM Sans'", color: 'var(--c-text-muted)' }}>The requested product doesn't exist in our catalogue.</p>
        <Link to="/products" className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none', marginTop: '0.5rem' }}>
          <FiArrowLeft size={15} /> Back to Products
        </Link>
      </div>
    );
  }

  const related = products.filter(p => p.category === product.category && p.slug !== product.slug).slice(0, 3);

  const parseSpec = (s) => {
    if (s.includes(':')) {
      const idx = s.indexOf(':');
      return { key: s.slice(0, idx).trim(), val: s.slice(idx + 1).trim() };
    }
    return { key: '', val: s };
  };

  const whatsappUrl = `https://wa.me/919000123813?text=${encodeURIComponent(`Hi, I want a bulk quote for ${product.name}. Please share pricing and specifications.`)}`;

  return (
    <div style={{ background: 'var(--c-base)', padding: '2rem 1.5rem 6rem' }}>
      <Helmet>
        <title>{`${product.name} — Specs & Bulk Supply | GK Metals & Minerals`}</title>
        <meta name="description" content={`Get ${product.name} specifications, chemical parameters, and bulk pricing. ${product.tagline}`} />
      </Helmet>

      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>

        {/* Breadcrumb */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', fontFamily: "'DM Sans'", fontSize: '0.75rem', color: 'var(--c-text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '2.5rem', flexWrap: 'wrap' }}>
          <Link to="/" style={{ color: 'var(--c-text-muted)', textDecoration: 'none' }} onMouseEnter={e => e.currentTarget.style.color = 'var(--c-text-primary)'} onMouseLeave={e => e.currentTarget.style.color = 'var(--c-text-muted)'}>Home</Link>
          <FiChevronRight size={12} />
          <Link to="/products" style={{ color: 'var(--c-text-muted)', textDecoration: 'none' }} onMouseEnter={e => e.currentTarget.style.color = 'var(--c-text-primary)'} onMouseLeave={e => e.currentTarget.style.color = 'var(--c-text-muted)'}>Products</Link>
          <FiChevronRight size={12} />
          <span style={{ color: 'var(--c-blue-lt)' }}>{product.name}</span>
        </nav>

        {/* Main Layout */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2.5rem' }} className="detail-grid">

          {/* LEFT — product info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>

            {/* Category + Name + Tagline */}
            <div>
              <span style={{ display: 'inline-block', fontFamily: "'DM Sans'", fontWeight: 700, fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.18em', color: 'var(--c-blue-lt)', background: 'rgba(0,80,240,0.1)', border: '1px solid rgba(0,80,240,0.25)', padding: '0.25rem 0.75rem', marginBottom: '1rem' }}>
                {product.category}
              </span>
              <h1 style={{ fontFamily: "'Syne'", fontWeight: 800, fontSize: 'clamp(1.8rem, 4vw, 3rem)', textTransform: 'uppercase', letterSpacing: '-0.01em', color: 'var(--c-text-primary)', marginBottom: '0.625rem' }}>
                {product.name}
              </h1>
              <p style={{ fontFamily: "'DM Sans'", fontSize: '1rem', color: 'var(--c-blue-lt)', fontStyle: 'italic', fontWeight: 500 }}>
                {product.tagline}
              </p>
            </div>

            {/* Description */}
            <div style={{ background: 'var(--c-surface)', border: '1px solid var(--c-border)', borderLeft: '3px solid var(--c-blue)', padding: '1.5rem' }}>
              <p style={{ fontFamily: "'DM Sans'", fontWeight: 600, fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.18em', color: 'var(--c-text-muted)', marginBottom: '0.75rem' }}>
                Product Overview
              </p>
              <p style={{ fontFamily: "'DM Sans'", fontSize: '0.9rem', color: 'var(--c-text-secondary)', lineHeight: 1.8 }}>
                {product.description}
              </p>
            </div>

            {/* Specifications table */}
            <div>
              <p style={{ fontFamily: "'DM Sans'", fontWeight: 600, fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.18em', color: 'var(--c-text-muted)', marginBottom: '0.875rem' }}>
                Technical Specifications
              </p>
              <div style={{ border: '1px solid var(--c-border)', overflow: 'hidden' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: "'DM Sans'", fontSize: '0.85rem' }}>
                  <thead>
                    <tr style={{ background: 'var(--c-elevated)', borderBottom: '1px solid var(--c-border)' }}>
                      <th style={{ padding: '0.75rem 1rem', textAlign: 'left', fontWeight: 600, fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--c-blue-lt)' }}>Parameter</th>
                      <th style={{ padding: '0.75rem 1rem', textAlign: 'right', fontWeight: 600, fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--c-blue-lt)' }}>Value / Range</th>
                    </tr>
                  </thead>
                  <tbody>
                    {product.specs.map((spec, i) => {
                      const { key, val } = parseSpec(spec);
                      return (
                        <tr key={i} style={{ borderBottom: '1px solid var(--c-border)', background: i % 2 === 0 ? 'var(--c-surface)' : 'transparent', transition: 'background 0.15s' }}>
                          <td style={{ padding: '0.75rem 1rem', color: 'var(--c-text-muted)' }}>{key || val}</td>
                          <td style={{ padding: '0.75rem 1rem', textAlign: 'right', fontWeight: 600, color: 'var(--c-text-primary)' }}>{key ? val : ''}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Applications */}
            <div>
              <p style={{ fontFamily: "'DM Sans'", fontWeight: 600, fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.18em', color: 'var(--c-text-muted)', marginBottom: '0.875rem' }}>
                Key Applications
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {product.applications.map((app, i) => (
                  <span key={i} style={{
                    display: 'flex', alignItems: 'center', gap: '0.375rem',
                    fontFamily: "'DM Sans'", fontWeight: 500, fontSize: '0.8rem',
                    color: 'var(--c-text-secondary)',
                    padding: '0.4rem 0.875rem',
                    background: 'var(--c-surface)',
                    border: '1px solid var(--c-border)',
                  }}>
                    <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'var(--c-blue)', flexShrink: 0 }} />
                    {app}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* RIGHT — sticky form */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }} className="detail-sidebar">
            <div className="detail-sticky">
              <LeadForm
                heading={`Get a Quote — ${product.name}`}
                subtext={`Request specifications, test certificates, and bulk pricing for ${product.name}.`}
                showProductField={false}
                defaultProductSlug={product.slug}
              />

              {/* WhatsApp card */}
              <div style={{
                background: 'var(--c-surface)',
                border: '1px solid rgba(37,211,102,0.2)',
                padding: '1.25rem',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                marginTop: '1rem',
              }}>
                <div style={{ width: '40px', height: '40px', background: 'rgba(37,211,102,0.12)', border: '1px solid rgba(37,211,102,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#25D366', flexShrink: 0 }}>
                  <FaWhatsapp size={20} />
                </div>
                <div style={{ flex: 1 }}>
                  <p style={{ fontFamily: "'Syne'", fontWeight: 700, fontSize: '0.8rem', textTransform: 'uppercase', color: 'var(--c-text-primary)', marginBottom: '0.2rem' }}>Chat on WhatsApp</p>
                  <p style={{ fontFamily: "'DM Sans'", fontSize: '0.75rem', color: 'var(--c-text-muted)', lineHeight: 1.5 }}>Instant price negotiation</p>
                </div>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" style={{
                  display: 'inline-flex', padding: '0.5rem 0.875rem',
                  background: '#1DA851', color: '#fff', textDecoration: 'none',
                  fontFamily: "'DM Sans'", fontWeight: 600, fontSize: '0.75rem',
                  transition: 'background 0.2s', flexShrink: 0,
                }}>
                  Chat →
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {related.length > 0 && (
          <>
            <OreVein />
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
              <h3 style={{ fontFamily: "'Syne'", fontWeight: 700, fontSize: '1.25rem', textTransform: 'uppercase', color: 'var(--c-text-primary)' }}>
                Related Products
              </h3>
              <Link to="/products" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.375rem', fontFamily: "'DM Sans'", fontWeight: 600, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--c-blue-lt)', textDecoration: 'none' }}>
                <FiGrid size={14} /> All Products
              </Link>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.25rem' }}>
              {related.map(p => <ProductCard key={p.slug} product={p} />)}
            </div>
          </>
        )}
      </div>

      <style>{`
        @media (min-width: 1024px) {
          .detail-grid { grid-template-columns: 3fr 2fr !important; }
          .detail-sticky { position: sticky; top: 90px; }
        }
      `}</style>
    </div>
  );
}
