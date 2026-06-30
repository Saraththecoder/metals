import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import SectionHeading, { OreVein } from '../components/SectionHeading';
import { LotusIcon } from '../components/Navbar';
import { FiTarget, FiEye, FiShield, FiMapPin, FiClock, FiAward } from 'react-icons/fi';

const pref = typeof window !== 'undefined' ? window.matchMedia('(prefers-reduced-motion: reduce)').matches : false;

const card3 = [
  {
    icon: FiEye, color: '#1B3FD8', bg: '#EEF2FF', border: '#BFD0FF',
    title: 'Our Vision',
    text: "To be India's most reliable metals and minerals trading partner — known for grade consistency, fair pricing, and delivery schedules you can plan around.",
  },
  {
    icon: FiTarget, color: '#E91B8C', bg: '#FDF2FA', border: '#F5BAE8',
    title: 'Our Mission',
    text: "We source, verify, and deliver industrial-grade materials that keep our clients' production lines running without compromise.",
  },
  {
    icon: FiShield, color: '#3BB54A', bg: '#EEF6EE', border: '#B8DFB8',
    title: 'Core Values', isList: true,
    items: ['Quality First — Rigorous parameters check', 'Transparent Pricing — No hidden costs', 'Reliable Delivery — Fleet logistics control', 'Long-term Partnerships', 'Ethical Sourcing & Compliance'],
  },
  {
    icon: FiAward, color: '#FF6320', bg: '#FFF3ED', border: '#FFD9A0',
    title: 'Our Promise',
    text: "Every order fulfilled by GK'S Metals comes with documented grade certification, consistent batch quality, and a dedicated account manager available 6 days a week — because your supply chain cannot afford surprises.",
  },
];

export default function About() {
  return (
    <div style={{ background: '#fff' }}>
      <Helmet>
        <title>About GK'S Metals & Minerals | Top Minerals Company in Hyderabad</title>
        <meta name="description" content="GK'S Metals & Minerals is a trusted metals distributor in India, supplying graphite, iron ore, and industrial minerals to manufacturers across Hyderabad and PAN India." />
      </Helmet>

      {/* HERO */}
      <section style={{ background: 'linear-gradient(135deg, #F0F4FF, #FAFBFF)', borderBottom: '1px solid var(--c-border-lt)', padding: '5.5rem 1.5rem', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(27,63,216,0.06) 1.5px, transparent 1.5px)', backgroundSize: '28px 28px' }} />
        <div style={{ maxWidth: '720px', margin: '0 auto', position: 'relative' }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}><LotusIcon size={64} /></div>
          <p className="label-tag" style={{ marginBottom: '0.875rem', display: 'block' }}>Our Story</p>
          <h1 style={{ fontFamily: "'Outfit'", fontWeight: 800, fontSize: 'clamp(2rem,5vw,3.5rem)', letterSpacing: '-0.025em', color: '#0F1A3D', lineHeight: 1.05, marginBottom: '1.25rem' }}>
            Built on Quality.<br />
            <span style={{ color: '#1B3FD8' }}>Driven by Trust.</span>
          </h1>
          <p style={{ fontFamily: "'Inter'", fontSize: '1rem', color: 'var(--c-text-secondary)', lineHeight: 1.8, maxWidth: '500px', margin: '0 auto' }}>
            5 years of supplying India's manufacturing sector with precision-grade metals, minerals, and graphite products. Founded in Hyderabad, serving PAN India.
          </p>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section style={{ padding: '6rem 1.5rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gap: '4rem', gridTemplateColumns: '1fr' }} className="about-grid">
            <div>
              <SectionHeading label="About the Company" title="Who We Are" align="left" />
              <p style={{ fontFamily: "'Inter'", fontSize: '0.9375rem', color: 'var(--c-text-secondary)', lineHeight: 1.82, marginBottom: '1rem' }}>
                GK'S Metals & Minerals is a Hyderabad-based trading company specialising in the bulk supply of metals, minerals, and graphite products to industrial buyers across India. Founded with a focus on quality consistency and supply reliability, we serve clients in steel, ceramics, rubber, electronics, and chemical processing industries.
              </p>
              <p style={{ fontFamily: "'Inter'", fontSize: '0.9375rem', color: 'var(--c-text-secondary)', lineHeight: 1.82 }}>
                Through strategic partnerships with mining hubs and secondary processing mills, we secure and supply premium raw materials. Our dedicated team manages transport logistics, quality control compliance, and customer delivery timelines to ensure your operations never face downtime.
              </p>
            </div>

            <div className="about-stats" style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '1px', background: 'var(--c-border-lt)', borderRadius: '12px', overflow: 'hidden', boxShadow: 'var(--shadow-card)' }}>
              {[
                { val: '5+', label: 'Years Active', color: '#1B3FD8', bg: '#EEF2FF' },
                { val: '12+', label: 'Products', color: '#E91B8C', bg: '#FDF2FA' },
                { val: '500+', label: 'Orders', color: '#3BB54A', bg: '#EEF6EE' },
                { val: 'PAN India', label: 'Supply Reach', color: '#FF6320', bg: '#FFF3ED' },
              ].map((s, i) => (
                <div key={i} style={{ background: s.bg, padding: '2rem', textAlign: 'center' }}>
                  <div style={{ fontFamily: "'Outfit'", fontWeight: 800, fontSize: '2.25rem', color: s.color, letterSpacing: '-0.02em', lineHeight: 1, marginBottom: '0.375rem' }}>{s.val}</div>
                  <div style={{ fontFamily: "'Inter'", fontWeight: 600, fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.18em', color: 'var(--c-text-muted)' }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <OreVein />

      {/* VISION / MISSION / VALUES */}
      <section style={{ padding: '6rem 1.5rem', background: 'var(--c-bg-subtle)', borderTop: '1px solid var(--c-border-lt)', borderBottom: '1px solid var(--c-border-lt)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <SectionHeading label="What Drives Us" title="Vision, Mission & Values" />
          <div className="vmv-grid" style={{ display: 'grid', gap: '1.25rem' }}>
            {card3.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div key={i}
                  initial={pref ? {} : { opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  style={{ background: '#fff', border: `1px solid ${item.border}`, borderTop: `3px solid ${item.color}`, borderRadius: '12px', padding: '2rem', boxShadow: 'var(--shadow-card)', transition: 'box-shadow 0.25s' }}
                  onMouseEnter={e => e.currentTarget.style.boxShadow = 'var(--shadow-md)'}
                  onMouseLeave={e => e.currentTarget.style.boxShadow = 'var(--shadow-card)'}
                >
                  <div style={{ width: '44px', height: '44px', background: item.bg, borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: item.color, marginBottom: '1.25rem' }}>
                    <Icon size={20} />
                  </div>
                  <h3 style={{ fontFamily: "'Outfit'", fontWeight: 700, fontSize: '1rem', color: '#0F1A3D', marginBottom: '0.875rem' }}>{item.title}</h3>
                  {item.isList ? (
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                      {item.items.map((li, j) => (
                        <li key={j} style={{ fontFamily: "'Inter'", fontSize: '0.83rem', color: 'var(--c-text-muted)', display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
                          <span style={{ color: item.color, marginTop: '0.1rem', flexShrink: 0 }}>▸</span> {li}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p style={{ fontFamily: "'Inter'", fontSize: '0.875rem', color: 'var(--c-text-muted)', lineHeight: 1.75 }}>{item.text}</p>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <OreVein />

      {/* ADDRESS */}
      <section style={{ padding: '6rem 1.5rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem' }} className="map-grid">
            <div style={{ background: '#fff', border: '1px solid var(--c-border-lt)', borderRadius: '12px', padding: '2.5rem', boxShadow: 'var(--shadow-card)', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <h3 style={{ fontFamily: "'Outfit'", fontWeight: 700, fontSize: '1rem', color: '#0F1A3D', borderBottom: '1px solid var(--c-border-lt)', paddingBottom: '1rem' }}>Corporate Office</h3>
              {[
                { Icon: FiMapPin, color: '#1B3FD8', bg: '#EEF2FF', label: 'Address', text: 'Road No. 7, Anjaneya Nagar,\nMoosapet, Hyderabad,\nTelangana 500018' },
                { Icon: FiClock, color: '#FF6320', bg: '#FFF3ED', label: 'Business Hours', text: 'Monday – Saturday\n9:00 AM – 7:00 PM IST' },
              ].map(({ Icon, color, bg, label, text }, i) => (
                <div key={i} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{ width: '36px', height: '36px', background: bg, borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color, flexShrink: 0 }}>
                    <Icon size={16} />
                  </div>
                  <div>
                    <p style={{ fontFamily: "'Inter'", fontWeight: 700, fontSize: '0.63rem', textTransform: 'uppercase', letterSpacing: '0.18em', color: 'var(--c-text-muted)', marginBottom: '0.3rem' }}>{label}</p>
                    <p style={{ fontFamily: "'Inter'", fontSize: '0.875rem', color: 'var(--c-text-secondary)', lineHeight: 1.65 }}>
                      {text.split('\n').map((l, j) => <span key={j}>{l}{j < text.split('\n').length - 1 && <br />}</span>)}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ height: '380px', border: '1px solid var(--c-border-lt)', borderRadius: '12px', overflow: 'hidden', boxShadow: 'var(--shadow-card)' }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.27393437149!2d78.4338006758628!3d17.446580983451556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb90c17a55c279%3A0x67db23719001889c!2sMoosapet%2C%20Hyderabad%2C%20Telangana%20500018!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
                width="100%" height="100%"
                style={{ border: 0 }}
                allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                title="GK'S Metals & Minerals Office Location"
              />
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
