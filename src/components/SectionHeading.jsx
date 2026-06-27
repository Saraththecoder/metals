import { motion } from 'framer-motion';

const pref = typeof window !== 'undefined' ? window.matchMedia('(prefers-reduced-motion: reduce)').matches : false;

export function OreVein({ style = {} }) {
  return (
    <div style={{ width: '100%', overflow: 'hidden', margin: '3.5rem 0', ...style }}>
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: pref ? 0 : 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="lotus-gradient lotus-divider"
        style={{ height: '2px' }}
      />
    </div>
  );
}

export default function SectionHeading({ label, title, align = 'center', titleStyle = {}, className = '' }) {
  return (
    <div style={{ textAlign: align, marginBottom: '3rem' }} className={className}>
      {label && (
        <motion.p
          initial={pref ? {} : { opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
          className="label-tag"
          style={{ marginBottom: '0.75rem', display: 'block' }}
        >
          {label}
        </motion.p>
      )}
      <motion.h2
        initial={pref ? {} : { opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.55, delay: 0.05 }}
        className="heading-lg"
        style={titleStyle}
      >
        {title}
      </motion.h2>
      {align === 'center' && (
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1rem' }}>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: pref ? 0 : 0.7, delay: 0.15, ease: 'easeOut' }}
            className="lotus-gradient"
            style={{ height: '3px', width: '64px', borderRadius: '2px', transformOrigin: 'center' }}
          />
        </div>
      )}
    </div>
  );
}
