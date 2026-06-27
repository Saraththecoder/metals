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
        whileHover={pref ? {} : { scale: 1.05 }}
        whileTap={pref ? {} : { scale: 0.95 }}
        className="cta-float-btn whatsapp-float"
      >
        <FaWhatsapp size={22} />
        <span className="cta-float-text">Chat on WhatsApp</span>
      </motion.a>

      <motion.a
        href="tel:+919000123813"
        title="Call Now"
        whileHover={pref ? {} : { scale: 1.05 }}
        whileTap={pref ? {} : { scale: 0.95 }}
        className="cta-float-btn phone-float"
      >
        <FiPhone size={20} />
        <span className="cta-float-text">Request Quote</span>
      </motion.a>

      <style>{`
        .cta-float-btn {
          height: 52px;
          border-radius: 26px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          text-decoration: none;
          gap: 0.5rem;
          padding: 0 16px;
          transition: background 0.2s, box-shadow 0.2s;
        }
        .whatsapp-float {
          background: #1DA851;
          box-shadow: 0 4px 20px rgba(29,168,81,0.45);
        }
        .whatsapp-float:hover {
          background: #16A34A;
        }
        .phone-float {
          background: #1B3FD8;
          box-shadow: 0 4px 20px rgba(27,63,216,0.45);
        }
        .phone-float:hover {
          background: #1230A8;
        }
        .cta-float-text {
          font-family: 'Inter', sans-serif;
          font-weight: 600;
          font-size: 0.9rem;
          white-space: nowrap;
        }
        
        /* Mobile: show only icons to save space */
        @media (max-width: 640px) {
          .cta-float-btn {
            width: 52px;
            padding: 0;
            justify-content: center;
          }
          .cta-float-text {
            display: none;
          }
        }
      `}</style>
    </motion.div>
  );
}
