import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function ContactSection() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    website: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (error) setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setError(t.contact.errorMsg);
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', website: '', message: '' });
      setTimeout(() => setSubmitted(false), 6000);
    }, 800);
  };

  return (
    <li className="page-contact" id="page-contact">
      {/* Google Map - Downtown Miami Headquarters */}
      <div id="googleMap" style={{ height: '400px', width: '100%', overflow: 'hidden' }}>
        <iframe
          title="VS International Group Headquarters"
          style={{ border: 0, width: '100%', height: '100%', filter: 'grayscale(100%) contrast(1.1)' }}
          src="https://maps.google.com/maps?q=333+SE+2nd+Ave,+Miami,+FL+33131&z=15&output=embed"
          allowFullScreen
          loading="lazy"
        />
      </div>

      <div className="section-background-color section-background-color-2">
        <div className="main">
          {/* Header */}
          <h2 className="underline">
            <span>{t.contact.title}</span>
            <span></span>
          </h2>

          {/* Layout 50x50% */}
          <div className="layout-p-50x50 clear-fix animate-layout">
            {/* Left column */}
            <div className="column-left">
              <p className="subheader padding-bottom-30">
                {t.contact.subheaderLeft}
              </p>

              {submitted && (
                <div
                  style={{
                    backgroundColor: '#00214E',
                    color: '#fff',
                    padding: '14px 18px',
                    marginBottom: '20px',
                    borderRadius: '2px',
                    fontSize: '15px'
                  }}
                >
                  {t.contact.successMsg}
                </div>
              )}

              {error && (
                <div
                  style={{
                    backgroundColor: '#E74C3C',
                    color: '#fff',
                    padding: '12px 16px',
                    marginBottom: '20px',
                    borderRadius: '2px',
                    fontSize: '14px'
                  }}
                >
                  {error}
                </div>
              )}

              {/* Contact form */}
              <form onSubmit={handleSubmit} className="contact-form clear-fix">
                <div className="clear-fix">
                  <ul className="list-0 clear-fix" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {/* Name */}
                    <li>
                      <div className="block field-box">
                        <input
                          type="text"
                          name="name"
                          placeholder={t.contact.namePlaceholder}
                          value={formData.name}
                          onChange={handleChange}
                        />
                      </div>
                    </li>

                    {/* Email */}
                    <li>
                      <div className="block field-box">
                        <input
                          type="text"
                          name="email"
                          placeholder={t.contact.emailPlaceholder}
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </div>
                    </li>

                    {/* Company / Website */}
                    <li>
                      <div className="block field-box">
                        <input
                          type="text"
                          name="website"
                          placeholder={t.contact.websitePlaceholder}
                          value={formData.website}
                          onChange={handleChange}
                        />
                      </div>
                    </li>

                    {/* Message */}
                    <li>
                      <div className="block field-box">
                        <textarea
                          name="message"
                          placeholder={t.contact.messagePlaceholder}
                          rows="5"
                          value={formData.message}
                          onChange={handleChange}
                        />
                      </div>
                    </li>

                    {/* Submit button */}
                    <li>
                      <div className="block field-box field-box-button">
                        <input
                          type="submit"
                          className="button"
                          value={isSubmitting ? t.contact.transmittingBtn : t.contact.submitBtn}
                          disabled={isSubmitting}
                          style={{
                            cursor: isSubmitting ? 'not-allowed' : 'pointer',
                            opacity: isSubmitting ? 0.7 : 1
                          }}
                        />
                      </div>
                    </li>
                  </ul>
                </div>
              </form>
            </div>

            {/* Right column */}
            <div className="column-right">
              <p className="subheader padding-bottom-30">
                {t.contact.subheaderRight}
              </p>

              {/* Contact details */}
              <ul className="company-info feature-list feature-list-icon-small feature-list-icon-left feature-list-style-3">
                <li>
                  <span className="icon icon-mappointer"></span>
                  <p><strong>VS INTERNATIONAL GROUP LLC</strong></p>
                  <p>333 SE 2nd Av, Suite 3000</p>
                  <p>Miami, FL 33131, United States</p>
                  <p style={{ fontSize: '13px', color: '#aaa', marginTop: '6px' }}>
                    {t.contact.postalLabel} 488 NE 18th Street, Miami, FL 33132
                  </p>
                  <p style={{ fontSize: '13px', color: '#88a' }}>
                    {t.contact.desksLabel} Spain • United Arab Emirates • Brazil
                  </p>
                </li>
                <li>
                  <span className="icon icon-mobile"></span>
                  <p>Phone: +1 (786) 218-3042</p>
                  <p>Phone: +1 (305) 796-3796</p>
                  <p>Phone: +1 (786) 530-9165</p>
                </li>
                <li>
                  <span className="icon icon-mail"></span>
                  <p>{t.contact.operationsDesk} operations@vsinternationalllc.com</p>
                  <p>{t.contact.commercialDesk} salesc@vsinternationalllc.com</p>
                  <p>{t.contact.tradingDesk} commercial@vsinternationalllc.com</p>
                </li>
              </ul>

              {/* Social icon list - Only LinkedIn */}
              <ul className="social-list social-list-style-2 clear-fix margin-top-50">
                <li>
                  <a
                    href="https://www.linkedin.com/in/raquel-cantero-184641158"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-list-linkedin"
                    title="LinkedIn"
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}
