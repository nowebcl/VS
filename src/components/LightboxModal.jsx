import React, { useEffect } from 'react';

export default function LightboxModal({ isOpen, item, onClose, onNext, onPrev }) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, onNext, onPrev]);

  if (!isOpen || !item) return null;

  return (
    <div className="atrium-lightbox-overlay" onClick={onClose}>
      <div className="atrium-lightbox-wrap" onClick={(e) => e.stopPropagation()}>
        <button className="atrium-lightbox-close" onClick={onClose} title="Close">
          &times;
        </button>

        <button className="atrium-lightbox-nav atrium-lightbox-prev" onClick={onPrev} title="Previous">
          &#8249;
        </button>

        <div className="atrium-lightbox-content">
          {item.type === 'video' ? (
            <iframe
              src={item.videoUrl}
              title={item.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <img src={item.fullImage || item.thumb} alt={item.title} />
          )}
        </div>

        <button className="atrium-lightbox-nav atrium-lightbox-next" onClick={onNext} title="Next">
          &#8250;
        </button>

        <div className="atrium-lightbox-caption">
          <strong style={{ display: 'block', fontSize: '17px', color: '#2C343D', marginBottom: '6px' }}>
            {item.title}
          </strong>
          {item.description}
        </div>
      </div>
    </div>
  );
}
