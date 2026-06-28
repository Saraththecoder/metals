import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import ProductCardXRay from './ProductCardXRay';

export default function TabbedProductCarousel({ products }) {
  // Extract unique categories (filter out empty strings)
  const categories = [...new Set(products.map(p => p.category).filter(c => c && c.trim() !== ''))];
  
  // By default, select the first category
  const [activeCategory, setActiveCategory] = useState(categories[0] || '');
  
  const carouselRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Filter products by active category
  const filteredProducts = products.filter(p => p.category === activeCategory);

  const checkScroll = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, [activeCategory, filteredProducts.length]);

  const scroll = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = carouselRef.current.clientWidth * 0.8;
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
      setTimeout(checkScroll, 350);
    }
  };

  return (
    <div className="tabbed-carousel-wrapper" style={{ width: '100%', position: 'relative' }}>
      
      {/* ─── TABS ROW ─── */}
      <div 
        className="hide-scrollbar"
        style={{ 
          display: 'flex', 
          overflowX: 'auto', 
          gap: '0.75rem', 
          paddingBottom: '1rem',
          marginBottom: '1.5rem',
          borderBottom: '1px solid var(--c-border-lt)',
          scrollBehavior: 'smooth',
          WebkitOverflowScrolling: 'touch'
        }}
      >
        {categories.map((cat) => {
          const isActive = activeCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                whiteSpace: 'nowrap',
                padding: '0.6rem 1.25rem',
                fontFamily: "'Inter'", 
                fontWeight: 600, 
                fontSize: '0.85rem',
                color: isActive ? '#fff' : 'var(--c-text-muted)',
                background: isActive ? 'var(--c-blue)' : '#fff',
                border: `1.5px solid ${isActive ? 'var(--c-blue)' : 'var(--c-border)'}`,
                borderRadius: '30px',
                cursor: 'pointer',
                transition: 'all 0.2s',
                boxShadow: isActive ? 'var(--shadow-sm)' : 'none',
              }}
              onMouseEnter={e => { if (!isActive) { e.currentTarget.style.borderColor = 'var(--c-blue-lt)'; e.currentTarget.style.color = 'var(--c-text-primary)'; } }}
              onMouseLeave={e => { if (!isActive) { e.currentTarget.style.borderColor = 'var(--c-border)'; e.currentTarget.style.color = 'var(--c-text-muted)'; } }}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* ─── CAROUSEL CONTAINER ─── */}
      <div style={{ position: 'relative' }}>
        
        {/* Left Arrow */}
        {canScrollLeft && (
          <button
            onClick={() => scroll('left')}
            style={{
              position: 'absolute', left: '-1rem', top: '50%', transform: 'translateY(-50%)', zIndex: 10,
              width: '40px', height: '40px', borderRadius: '50%', background: '#fff', border: '1px solid var(--c-border)',
              display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--c-blue)',
              boxShadow: 'var(--shadow-card)', cursor: 'pointer', transition: 'all 0.2s'
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'var(--c-bg-subtle)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = '#fff'; }}
          >
            <FiChevronLeft size={24} />
          </button>
        )}

        {/* Right Arrow */}
        {canScrollRight && filteredProducts.length > 0 && (
          <button
            onClick={() => scroll('right')}
            style={{
              position: 'absolute', right: '-1rem', top: '50%', transform: 'translateY(-50%)', zIndex: 10,
              width: '40px', height: '40px', borderRadius: '50%', background: '#fff', border: '1px solid var(--c-border)',
              display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--c-blue)',
              boxShadow: 'var(--shadow-card)', cursor: 'pointer', transition: 'all 0.2s'
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'var(--c-bg-subtle)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = '#fff'; }}
          >
            <FiChevronRight size={24} />
          </button>
        )}

        {/* Scrollable Track */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="hide-scrollbar"
            ref={carouselRef}
            onScroll={checkScroll}
            style={{
              display: 'flex',
              gap: '1.25rem',
              overflowX: 'auto',
              scrollSnapType: 'x mandatory',
              scrollBehavior: 'smooth',
              padding: '0.5rem 0.25rem',
              // Padding to allow box-shadows to show without clipping
            }}
          >
            {filteredProducts.length > 0 ? (
              filteredProducts.map((p) => (
                <div 
                  key={p.slug} 
                  style={{ 
                    flex: '0 0 calc(100% / 3 - 0.85rem)', // 3 items per view roughly
                    minWidth: '280px', 
                    scrollSnapAlign: 'start',
                    display: 'flex',
                    flexDirection: 'column'
                  }}
                >
                  <ProductCardXRay product={p} />
                </div>
              ))
            ) : (
              <div style={{ padding: '3rem', width: '100%', textAlign: 'center', color: 'var(--c-text-muted)' }}>
                No products found in this category.
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
