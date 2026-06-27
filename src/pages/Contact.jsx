import { useSearchParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { FaWhatsapp } from 'react-icons/fa';
import { FiMapPin, FiPhone, FiMail, FiClock } from 'react-icons/fi';
import LeadForm from '../components/LeadForm';
import SectionHeading, { OreVein } from '../components/SectionHeading';
import { LotusIcon } from '../components/Navbar';

const contactItems = [
  { Icon: FiMapPin,  color: '#1B3FD8', bg: '#EEF2FF', label: 'Office Address',    text: 'Road No.7, Anjaneya Nagar,\nMoosapet, Hyderabad,\nTelangana 500018', href: null },
  { Icon: FiPhone,   color: '#3BB54A', bg: '#EEF6EE', label: 'Phone / WhatsApp', text: '+91 90001 23813',                  href: 'tel:+919000123813' },
  { Icon: FiMail,    color: '#E91B8C', bg: '#FDF2FA', label: 'Email',             text: 'gkmetalsandminerals@gmail.com',   href: 'mailto:gkmetalsandminerals@gmail.com' },
  { Icon: FiClock,   color: '#FF6320', bg: '#FFF3ED', label: 'Business Hours',    text: 'Monday – Saturday\n9:00 AM – 7:00 PM IST', href: null },
];

export default function Contact() {
  const [searchParams] = useSearchParams();
  const productSlug = searchParams.get('product') || '';

  return (
    <div style={{ background: 'var(--c-bg-subtle)', padding: '4rem 1.5rem 6rem' }}>
      <Helmet>
        <title>Contact GK'S Metals & Minerals | Get a Quote</title>
        <meta name="description" content="Contact GK'S Metals & Minerals Hyderabad. Send your material requirements and volume specs — we respond within 24 hours." />
      </Helmet>

      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <SectionHeading label="Get In Touch" title="Let's Talk Business" />
        <p style={{ fontFamily: "'DM Sans'", fontSize: '0.9375rem', color: 'var(--c-text-muted)', lineHeight: 1.75, textAlign: 'center', maxWidth: '520px', margin: '-2rem auto 4rem' }}>
          Send us your material specs, purity requirements, and quantities. We respond with availability and pricing within 24 hours.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem', alignItems: 'start' }} className="contact-grid">

          {/* Left info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {/* Contact cards */}
            <div style={{ background: '#fff', borderRadius: '14px', border: '1px solid var(--c-border-lt)', boxShadow: 'var(--shadow-card)', overflow: 'hidden' }}>
              <div className="lotus-gradient" style={{ height: '3px' }} />
              <div style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <h3 style={{ fontFamily: "'Syne'", fontWeight: 700, fontSize: '0.9rem', color: '#0F1A3D', letterSpacing: '-0.005em', borderBottom: '1px solid var(--c-border-lt)', paddingBottom: '0.875rem' }}>
                  Direct Contact
                </h3>
                {contactItems.map(({ Icon, color, bg, label, text, href }, i) => {
                  const content = text.split('\n').map((l, j) => <span key={j}>{l}{j < text.split('\n').length - 1 && <br />}</span>);
                  return (
                    <div key={i} style={{ display: 'flex', gap: '0.875rem', alignItems: 'flex-start' }}>
                      <div style={{ width: '36px', height: '36px', background: bg, borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color, flexShrink: 0 }}>
                        <Icon size={16} />
                      </div>
                      <div>
                        <p style={{ fontFamily: "'DM Sans'", fontWeight: 700, fontSize: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.18em', color: 'var(--c-text-muted)', marginBottom: '0.3rem' }}>{label}</p>
                        {href ? (
                          <a href={href} style={{ fontFamily: "'DM Sans'", fontSize: '0.875rem', color: color, textDecoration: 'none', lineHeight: 1.6, wordBreak: 'break-all', transition: 'opacity 0.2s' }}
                            onMouseEnter={e => e.currentTarget.style.opacity = '0.75'}
                            onMouseLeave={e => e.currentTarget.style.opacity = '1'}
                          >{content}</a>
                        ) : (
                          <p style={{ fontFamily: "'DM Sans'", fontSize: '0.875rem', color: 'var(--c-text-secondary)', lineHeight: 1.6 }}>{content}</p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* WhatsApp */}
            <div style={{ background: '#fff', borderRadius: '14px', border: '1.5px solid rgba(29,168,81,0.25)', padding: '1.75rem', textAlign: 'center', boxShadow: 'var(--shadow-card)' }}>
              <div style={{ width: '52px', height: '52px', background: '#F0FDF4', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#1DA851', margin: '0 auto 1rem', border: '1px solid rgba(29,168,81,0.2)' }}>
                <FaWhatsapp size={24} />
              </div>
              <h4 style={{ fontFamily: "'Syne'", fontWeight: 700, fontSize: '0.95rem', color: '#0F1A3D', marginBottom: '0.5rem' }}>Prefer Instant Response?</h4>
              <p style={{ fontFamily: "'DM Sans'", fontSize: '0.8rem', color: 'var(--c-text-muted)', lineHeight: 1.65, marginBottom: '1.25rem' }}>
                Message our purchase desk directly for immediate quote negotiations.
              </p>
              <a href="https://wa.me/919000123813" target="_blank" rel="noopener noreferrer"
                style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', width: '100%', padding: '0.75rem', background: '#1DA851', color: '#fff', textDecoration: 'none', fontFamily: "'DM Sans'", fontWeight: 600, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.08em', borderRadius: '7px', transition: 'background 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.background = '#16A34A'}
                onMouseLeave={e => e.currentTarget.style.background = '#1DA851'}
              >
                <FaWhatsapp size={16} /> Open WhatsApp Chat
              </a>
            </div>
          </div>

          {/* Right form */}
          <div>
            <LeadForm
              heading="Request a Custom Quote"
              subtext="Share your material specs, grade requirements, and order volume. We'll respond with exact pricing within 24 hours."
              showProductField={true}
              defaultProductSlug={productSlug}
            />
          </div>
        </div>

        <OreVein />

        {/* Map */}
        <div style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--c-border-lt)', boxShadow: 'var(--shadow-card)' }}>
          <div style={{ background: '#fff', padding: '1rem 1.5rem', borderBottom: '1px solid var(--c-border-lt)', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <FiMapPin size={16} color="#1B3FD8" />
            <h3 style={{ fontFamily: "'Syne'", fontWeight: 700, fontSize: '0.9rem', color: '#0F1A3D' }}>GK'S Metals — Moosapet, Hyderabad</h3>
          </div>
          <div style={{ height: '380px' }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.27393437149!2d78.4338006758628!3d17.446580983451556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb90c17a55c279%3A0x67db23719001889c!2sMoosapet%2C%20Hyderabad%2C%20Telangana%20500018!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
              width="100%" height="100%"
              style={{ border: 0, display: 'block' }}
              allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
              title="GK'S Metals & Minerals Office Location"
            />
          </div>
        </div>
      </div>
      <style>{`@media (min-width:900px) { .contact-grid { grid-template-columns: 5fr 7fr !important; } }`}</style>
    </div>
  );
}
