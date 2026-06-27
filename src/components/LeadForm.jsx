import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiUser, FiPhone, FiMail, FiBriefcase, FiLayers, FiMessageSquare, FiSend } from 'react-icons/fi';
import products from '../data/products';

export default function LeadForm({ heading, subtext, showProductField = true, defaultProductSlug = "" }) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    company: '',
    product: defaultProductSlug ? products.find(p => p.slug === defaultProductSlug)?.name || '' : '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Full name is required';
    if (!formData.phone.trim()) errs.phone = 'Phone number is required';
    else if (!/^[6-9]\d{9}$/.test(formData.phone.trim())) errs.phone = 'Enter a valid 10-digit Indian mobile number';
    if (showProductField && !formData.product) errs.product = 'Please select a product';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async () => {
    if (!validate()) return;
    setLoading(true);
    try {
      const id = 'PLACEHOLDER_ID';
      if (id !== 'PLACEHOLDER_ID') {
        const res = await fetch(`https://formspree.io/f/${id}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(formData),
        });
        if (!res.ok) throw new Error('Request failed');
      } else {
        await new Promise(r => setTimeout(r, 1200));
      }
      setTimeout(() => {
        const txt = `Hi GK'S Metals, I submitted an enquiry for ${formData.product || 'your products'}.\n- Name: ${formData.name}\n- Phone: ${formData.phone}`;
        window.open(`https://wa.me/919000123813?text=${encodeURIComponent(txt)}`, '_blank');
      }, 1000);
      navigate('/thank-you');
    } catch {
      setErrors({ form: 'Something went wrong. Please try again or call us directly.' });
      setLoading(false);
    }
  };

  const labelStyle = {
    display: 'block',
    fontFamily: "'DM Sans', sans-serif",
    fontWeight: 700,
    fontSize: '0.63rem',
    textTransform: 'uppercase',
    letterSpacing: '0.18em',
    color: 'var(--c-text-muted)',
    marginBottom: '0.4rem',
  };

  const errorStyle = { fontFamily: "'DM Sans'", fontSize: '0.75rem', color: '#E91B8C', marginTop: '0.3rem' };
  const iconStyle = { position: 'absolute', left: '0.875rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--c-text-faint)', pointerEvents: 'none', zIndex: 1 };

  const inputStyle = (field) => ({
    width: '100%',
    background: '#fff',
    border: `1.5px solid ${errors[field] ? '#E91B8C' : 'var(--c-border)'}`,
    color: 'var(--c-text-primary)',
    fontFamily: "'DM Sans', sans-serif",
    fontSize: '0.875rem',
    padding: '0.75rem 0.875rem 0.75rem 2.625rem',
    borderRadius: '7px',
    outline: 'none',
    boxSizing: 'border-box',
    transition: 'border-color 0.2s, box-shadow 0.2s',
  });

  const onFocus = (field) => (e) => { e.target.style.borderColor = '#1B3FD8'; e.target.style.boxShadow = '0 0 0 3px rgba(27,63,216,0.1)'; };
  const onBlur = (field) => (e) => { e.target.style.borderColor = errors[field] ? '#E91B8C' : 'var(--c-border)'; e.target.style.boxShadow = 'none'; };

  return (
    <div style={{ background: '#fff', borderRadius: '14px', border: '1px solid var(--c-border-lt)', boxShadow: 'var(--shadow-md)', overflow: 'hidden', position: 'relative' }}>
      {/* Rainbow top bar */}
      <div className="lotus-gradient" style={{ height: '3px' }} />

      <div style={{ padding: '2rem' }}>
        <h3 style={{ fontFamily: "'Syne'", fontWeight: 700, fontSize: '1.1rem', color: '#0F1A3D', marginBottom: '0.3rem', letterSpacing: '-0.01em' }}>
          {heading || 'Request a Free Quote'}
        </h3>
        <p style={{ fontFamily: "'DM Sans'", fontSize: '0.82rem', color: 'var(--c-text-muted)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
          {subtext || 'Fill out the form below. We respond within 24 hours.'}
        </p>

        {errors.form && (
          <div style={{ background: '#FFF0F5', border: '1.5px solid #F9A8CF', borderRadius: '8px', padding: '0.75rem 1rem', marginBottom: '1rem' }}>
            <p style={{ ...errorStyle, marginTop: 0 }}>{errors.form}</p>
          </div>
        )}

        <div style={{ display: 'grid', gap: '0.875rem' }}>
          {/* Name */}
          <div>
            <label style={labelStyle}>Full Name *</label>
            <div style={{ position: 'relative' }}>
              <FiUser size={14} style={iconStyle} />
              <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="e.g. Rajesh Kumar" style={inputStyle('name')} onFocus={onFocus('name')} onBlur={onBlur('name')} />
            </div>
            {errors.name && <p style={errorStyle}>{errors.name}</p>}
          </div>

          {/* Phone */}
          <div>
            <label style={labelStyle}>Phone Number *</label>
            <div style={{ position: 'relative' }}>
              <FiPhone size={14} style={iconStyle} />
              <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="10-digit mobile (e.g. 9876543210)" style={inputStyle('phone')} onFocus={onFocus('phone')} onBlur={onBlur('phone')} />
            </div>
            {errors.phone && <p style={errorStyle}>{errors.phone}</p>}
          </div>

          {/* Email */}
          <div>
            <label style={labelStyle}>Email <span style={{ fontWeight: 400, opacity: 0.5 }}>(Optional)</span></label>
            <div style={{ position: 'relative' }}>
              <FiMail size={14} style={iconStyle} />
              <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="e.g. rajesh@company.com" style={{ ...inputStyle('email'), border: '1.5px solid var(--c-border)' }} onFocus={onFocus('email')} onBlur={onBlur('email')} />
            </div>
          </div>

          {/* Company */}
          <div>
            <label style={labelStyle}>Company / Business Name</label>
            <div style={{ position: 'relative' }}>
              <FiBriefcase size={14} style={iconStyle} />
              <input type="text" name="company" value={formData.company} onChange={handleChange} placeholder="e.g. RK Industries Pvt Ltd" style={{ ...inputStyle('company'), border: '1.5px solid var(--c-border)' }} onFocus={onFocus('company')} onBlur={onBlur('company')} />
            </div>
          </div>

          {/* Product */}
          {showProductField && (
            <div>
              <label style={labelStyle}>Product Interest *</label>
              <div style={{ position: 'relative' }}>
                <FiLayers size={14} style={iconStyle} />
                <select name="product" value={formData.product} onChange={handleChange} style={{ ...inputStyle('product'), cursor: 'pointer', appearance: 'none' }} onFocus={onFocus('product')} onBlur={onBlur('product')}>
                  <option value="">Select a product...</option>
                  {products.map(p => <option key={p.slug} value={p.name}>{p.name} ({p.category})</option>)}
                </select>
              </div>
              {errors.product && <p style={errorStyle}>{errors.product}</p>}
            </div>
          )}

          {/* Message */}
          <div>
            <label style={labelStyle}>Message / Requirements</label>
            <div style={{ position: 'relative' }}>
              <FiMessageSquare size={14} style={{ ...iconStyle, top: '1rem', transform: 'none' }} />
              <textarea name="message" value={formData.message} onChange={handleChange} rows={4}
                placeholder="Describe your grade requirements, volumes, delivery location..."
                style={{ ...inputStyle('message'), border: '1.5px solid var(--c-border)', resize: 'none', paddingTop: '0.75rem', lineHeight: 1.6 }}
                onFocus={onFocus('message')} onBlur={onBlur('message')}
              />
            </div>
          </div>
        </div>

        <button
          onClick={handleSubmit}
          disabled={loading}
          className="btn-primary"
          style={{ width: '100%', marginTop: '1.25rem', justifyContent: 'center', opacity: loading ? 0.7 : 1, cursor: loading ? 'not-allowed' : 'pointer' }}
        >
          {loading ? (
            <><svg style={{ width:'16px', height:'16px', animation:'spin 0.8s linear infinite' }} viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="rgba(255,255,255,0.25)" strokeWidth="3"/><path d="M22 12a10 10 0 00-10-10" stroke="#fff" strokeWidth="3" strokeLinecap="round"/></svg> Submitting...</>
          ) : (
            <><FiSend size={15}/> Submit Enquiry</>
          )}
        </button>
        <p style={{ fontFamily: "'DM Sans'", fontSize: '0.72rem', color: 'var(--c-text-faint)', textAlign: 'center', marginTop: '0.75rem' }}>
          We never share your information. 24-hour response guaranteed.
        </p>
      </div>
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}
