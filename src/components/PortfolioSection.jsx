import React, { useState, useEffect } from 'react';
import LightboxModal from './LightboxModal';
import { useLanguage } from '../context/LanguageContext';

const rawItems = [
  {
    id: 1,
    thumb: '/_sample/gallery/image_01t.jpg',
    fullImage: '/_sample/gallery/image_01.jpg',
    categories: ['image', 'example-1'],
    type: 'image',
    colClass: 'column-left'
  },
  {
    id: 2,
    thumb: '/_sample/gallery/image_02t.jpg',
    fullImage: '/_sample/gallery/image_02.jpg',
    categories: ['image', 'example-2'],
    type: 'image',
    colClass: 'column-center'
  },
  {
    id: 3,
    thumb: '/_sample/gallery/image_03t.jpg',
    fullImage: '/_sample/gallery/image_03.jpg',
    categories: ['image', 'example-2'],
    type: 'image',
    colClass: 'column-right'
  },
  {
    id: 4,
    thumb: '/_sample/gallery/image_04t.jpg',
    videoUrl: 'https://www.youtube.com/embed/t4gjl-uwUHc?autoplay=1',
    categories: ['video', 'example-2'],
    type: 'video',
    colClass: 'column-left'
  },
  {
    id: 5,
    thumb: '/_sample/gallery/image_05t.jpg',
    videoUrl: 'https://player.vimeo.com/video/1084537?autoplay=1',
    categories: ['video', 'example-1'],
    type: 'video',
    colClass: 'column-center'
  },
  {
    id: 6,
    thumb: '/_sample/gallery/image_06t.jpg',
    linkUrl: 'https://vsinternationalllc.com',
    fullImage: '/_sample/gallery/image_03.jpg',
    categories: ['video', 'example-2'],
    type: 'link',
    colClass: 'column-right'
  }
];

export default function PortfolioSection() {
  const { t } = useLanguage();
  const [filter, setFilter] = useState('all');
  const [activeLightboxIdx, setActiveLightboxIdx] = useState(null);
  const [currentQuote, setCurrentQuote] = useState(0);

  const portfolioItems = rawItems.map((item, idx) => ({
    ...item,
    title: t.portfolio.items[idx]?.title || '',
    subtitle: t.portfolio.items[idx]?.subtitle || '',
    description: t.portfolio.items[idx]?.desc || ''
  }));

  const quotations = t.portfolio.quotes;

  // Quote rotation
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotations.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [quotations.length]);

  const filteredItems = portfolioItems.filter((item) => {
    if (filter === 'all') return true;
    return item.categories.includes(filter);
  });

  const openLightbox = (item) => {
    if (item.type === 'link') {
      window.open(item.linkUrl, '_blank', 'noopener,noreferrer');
      return;
    }
    const idx = filteredItems.findIndex((it) => it.id === item.id);
    setActiveLightboxIdx(idx);
  };

  const handleNextLightbox = () => {
    if (activeLightboxIdx !== null) {
      setActiveLightboxIdx((activeLightboxIdx + 1) % filteredItems.length);
    }
  };

  const handlePrevLightbox = () => {
    if (activeLightboxIdx !== null) {
      setActiveLightboxIdx((activeLightboxIdx - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  return (
    <li className="page-portfolio" id="page-portfolio">
      <div className="main">
        {/* Header */}
        <h2 className="underline">
          <span>{t.portfolio.title}</span>
          <span></span>
        </h2>

        <div className="gallery clear-fix">
          {/* Category list */}
          <ul className="filter-list mobile-app-filter-list">
            <li>
              <a
                href="#all"
                className={`filter-0 ${filter === 'all' ? 'selected' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  setFilter('all');
                }}
              >
                {t.portfolio.filters.all}
              </a>
            </li>
            <li>
              <a
                href="#image"
                className={`filter-image ${filter === 'image' ? 'selected' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  setFilter('image');
                }}
              >
                {t.portfolio.filters.image}
              </a>
            </li>
            <li>
              <a
                href="#video"
                className={`filter-video ${filter === 'video' ? 'selected' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  setFilter('video');
                }}
              >
                {t.portfolio.filters.video}
              </a>
            </li>
            <li>
              <a
                href="#example-1"
                className={`filter-example-1 ${filter === 'example-1' ? 'selected' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  setFilter('example-1');
                }}
              >
                {t.portfolio.filters.example1}
              </a>
            </li>
            <li>
              <a
                href="#example-2"
                className={`filter-example-2 ${filter === 'example-2' ? 'selected' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  setFilter('example-2');
                }}
              >
                {t.portfolio.filters.example2}
              </a>
            </li>
          </ul>

          {/* Portfolio list */}
          <ul className="gallery-list mobile-app-gallery-list clear-fix">
            {filteredItems.map((item) => {
              const overlayClass =
                item.type === 'video'
                  ? 'image-overlay-video'
                  : item.type === 'link'
                  ? 'image-overlay-url'
                  : 'image-overlay-image';

              const iconMediaClass =
                item.type === 'video'
                  ? 'movie'
                  : item.type === 'link'
                  ? 'hyperlink'
                  : 'image';

              return (
                <li key={item.id} className="gallery-card-item">
                  <div className={`image ${overlayClass}`}>
                    <a
                      href={item.linkUrl || item.fullImage || '#'}
                      className="image-overlay-container"
                      onClick={(e) => {
                        e.preventDefault();
                        openLightbox(item);
                      }}
                    >
                      <img src={item.thumb} alt={item.title} style={{ width: '100%', display: 'block' }} />
                      <div className="overlay-curtain">
                        <span
                          style={{
                            width: '80px',
                            height: '80px',
                            display: 'block',
                            background: `url('/image/icon_media/${iconMediaClass}.png') no-repeat center center`
                          }}
                        />
                      </div>
                    </a>

                    <div className="image-description">
                      <h5>{item.title}</h5>
                      <span>{item.subtitle}</span>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      {/* Quotation Parallax Banner */}
      <div className="section-background section-background-3 section-parallax">
        <div className="main">
          <div className="quotation-list-wrapper" style={{ position: 'relative', minHeight: '180px' }}>
            <ul className="quotation-list" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {quotations.map((quote, idx) => (
                <li
                  key={idx}
                  style={{
                    display: idx === currentQuote ? 'block' : 'none',
                    opacity: idx === currentQuote ? 1 : 0,
                    transition: 'opacity 0.6s ease-in-out'
                  }}
                >
                  <span className="quotation-list-icon-up"></span>
                  <span className="quotation-list-text">{quote.text}</span>
                  <span className="quotation-list-icon-dn"></span>
                  <span className="quotation-list-author">{quote.author}</span>
                  <span className="quotation-list-occupation">{quote.occupation}</span>
                </li>
              ))}
            </ul>

            {/* Quotation Pagination */}
            <div className="pagination clear-fix" style={{ marginTop: '35px' }}>
              {quotations.map((_, idx) => (
                <a
                  key={idx}
                  href={`#quote-${idx}`}
                  onClick={(e) => {
                    e.preventDefault();
                    setCurrentQuote(idx);
                  }}
                  className={idx === currentQuote ? 'selected' : ''}
                  style={{
                    width: '23%',
                    marginRight: idx < 3 ? '2.6%' : '0',
                    cursor: 'pointer'
                  }}
                >
                  {idx + 1}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeLightboxIdx !== null && (
        <LightboxModal
          isOpen={true}
          item={filteredItems[activeLightboxIdx]}
          onClose={() => setActiveLightboxIdx(null)}
          onNext={handleNextLightbox}
          onPrev={handlePrevLightbox}
        />
      )}
    </li>
  );
}
