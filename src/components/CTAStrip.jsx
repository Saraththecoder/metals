import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import { FiPhone } from 'react-icons/fi';

const pref = typeof window !== 'undefined' ? window.matchMedia('(prefers-reduced-motion: reduce)').matches : false;

export default function CTAStrip() {
  return (
    <motion.div
      initial={pref ? {} : { opacity: 0, x: 80 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ type: 'spring', stiffness: 280, damping: 22, delay: 1 }}
      style={{ position: 'fixed', bottom: '1.5rem', right: '1.5rem', zIndex: 90, display: 'flex', flexDirection: 'column', gap: '0.75rem', alignItems: 'flex-end' }}
    >
      <motion.a
        href="https://wa.me/919000123813"
        target="_blank"
        rel="noopener noreferrer"
        title="Chat on WhatsApp"
        whileHover={pref ? {} : { scale: 1.1 }}
        whileTap={pref ? {} : { scale: 0.95 }}
        style={{ width: '52px', height: '52px', borderRadius: '50%', background: '#1DA851', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', boxShadow: '0 4px 20px rgba(29,168,81,0.45)', textDecoration: 'none' }}
      >
        <FaWhatsapp size={22} />
      </motion.a>

      <motion.a
        href="tel:+919000123813"
        title="Call Now"
        whileHover={pref ? {} : { scale: 1.1 }}
        whileTap={pref ? {} : { scale: 0.95 }}
        style={{ width: '52px', height: '52px', borderRadius: '50%', background: '#1B3FD8', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', boxShadow: '0 4px 20px rgba(27,63,216,0.45)', textDecoration: 'none' }}
      >
        <FiPhone size={20} />
      </motion.a>
    </motion.div>
  );
}
