import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function PricingSection() {
  const { t } = useLanguage();
  const [activeFaq, setActiveFaq] = useState(0);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? -1 : index);
  };

  const colClasses = [
    'column-left',
    'column-center-left',
    'column-center-right',
    'column-right'
  ];

  const plans = t.pricing.structures.map((plan, index) => ({
    ...plan,
    colClass: colClasses[index]
  }));

  const offerCols = [
    'column-left',
    'column-right',
    'column-left',
    'column-right',
    'column-left',
    'column-right'
  ];

  const offerFeatures = t.pricing.advantages.map((item, idx) => ({
    ...item,
    col: offerCols[idx]
  }));

  const faqs = t.pricing.faqs;

  return (
    <li className="page-pricing-plans" id="page-pricing-plans">
      <div className="main">
        {/* Header */}
        <h2 className="underline">
          <span>{t.pricing.title}</span>
          <span></span>
        </h2>

        <div className="clear-fix">
          <div className="carousel">
            <div className="carousel-content">
              {/* Pricing list */}
              <ul className="clear-fix pricing-list layout-p-25x25x25x25">
                {plans.map((plan, index) => (
                  <li key={index} className={plan.colClass}>
                    <div className="pricing-card-wrap">
                      <div className="pricing-tooltip">{plan.name}</div>
                      <h4>{plan.name}</h4>
                      <h2>{plan.price}</h2>
                      <span>{plan.period}</span>
                      <p>{plan.desc}</p>

                      <ul className="list-0 pricing-list-features">
                        {plan.features.map((feat, fIdx) => (
                          <li key={fIdx}>{feat}</li>
                        ))}
                      </ul>

                      <a href="#contact" className="pricing-list-button">
                        {t.pricing.inquireBtn}
                      </a>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Offer Combines + Questions and Answers */}
      <div className="clear-fix section-background-color section-background-color-1 margin-top-80">
        <div className="main clear-fix">
          <div className="layout-p-66x33 clear-fix">
            {/* Left column: Offer Combines */}
            <div className="column-left">
              <h4 className="underline">
                <span>{t.pricing.advantagesTitle}</span>
                <span></span>
              </h4>

              <ul className="feature-list feature-list-style-1 feature-list-icon-small feature-list-icon-left clear-fix layout-p-50x50">
                {offerFeatures.map((item, idx) => (
                  <li key={idx} className={item.col}>
                    <span className={`icon ${item.icon}`} />
                    <h5>{item.title}</h5>
                    <p>{item.text}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right column: Questions and Answers */}
            <div className="column-right">
              <h4 className="underline">
                <span>{t.pricing.faqTitle}</span>
                <span></span>
              </h4>

              {/* Accordion */}
              <ul className="template-accordion" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {faqs.map((faq, idx) => {
                  const isActive = activeFaq === idx;
                  return (
                    <li key={idx} style={{ marginBottom: '6px' }}>
                      <div
                        className={`accordion-header ${isActive ? 'ui-accordion-header-active' : ''}`}
                        onClick={() => toggleFaq(idx)}
                        style={{
                          backgroundColor: isActive ? '#00214E' : '#2C343D',
                          color: '#FFFFFF',
                          padding: '12px 16px',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          borderRadius: '2px',
                          transition: 'background-color 0.2s'
                        }}
                      >
                        <h5 style={{ margin: 0, fontSize: '15px', color: '#fff', fontWeight: '600' }}>
                          <span style={{ textDecoration: 'none', color: '#fff' }}>{faq.q}</span>
                        </h5>
                        <span
                          style={{
                            width: '12px',
                            height: '12px',
                            display: 'inline-block',
                            background: `url('/image/accordion_arrow_${isActive ? 'collapse' : 'expand'}.png') no-repeat center center`
                          }}
                        />
                      </div>

                      {isActive && (
                        <div className="accordion-content clear-fix" style={{ animation: 'fadeInModal 0.2s' }}>
                          {faq.content}
                        </div>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}
