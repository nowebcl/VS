import { useEffect } from 'react';

/**
 * useScrollReveal:
 * Lightweight, high-performance IntersectionObserver hook inspired by TVS Shipping (tvs-shipping.com).
 * Automatically detects elements with `.tvs-reveal-*` classes and triggers smooth hardware-accelerated
 * scroll entrance animations when they enter the viewport.
 */
export function useScrollReveal(dependency) {
  useEffect(() => {
    if (typeof window === 'undefined' || typeof IntersectionObserver === 'undefined') {
      return;
    }

    const selector = [
      '.tvs-reveal-left',
      '.tvs-reveal-right',
      '.tvs-reveal-up',
      '.tvs-reveal-zoom',
      '.tvs-reveal-fade',
      '[data-tvs-reveal]'
    ].join(', ');

    const observerCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      rootMargin: '0px 0px -50px 0px',
      threshold: 0.08
    });

    const refreshObserver = () => {
      const elements = document.querySelectorAll(selector);
      const vh = window.innerHeight || document.documentElement.clientHeight;

      elements.forEach((el) => {
        // If already revealed, do nothing
        if (el.classList.contains('is-revealed')) return;

        // If element is already above or within the viewport, reveal immediately
        const rect = el.getBoundingClientRect();
        if (rect.top <= vh - 40) {
          el.classList.add('is-revealed');
        } else {
          observer.observe(el);
        }
      });
    };

    // Initial check with short timeout to allow React DOM mounting
    const timer = setTimeout(refreshObserver, 60);

    // Watch for dynamic DOM insertions or tab switches
    let mutationObserver = null;
    if (typeof MutationObserver !== 'undefined') {
      mutationObserver = new MutationObserver(() => {
        refreshObserver();
      });
      mutationObserver.observe(document.body, { childList: true, subtree: true });
    }

    window.addEventListener('resize', refreshObserver, { passive: true });
    window.addEventListener('scroll', refreshObserver, { passive: true, once: true });

    return () => {
      clearTimeout(timer);
      observer.disconnect();
      if (mutationObserver) mutationObserver.disconnect();
      window.removeEventListener('resize', refreshObserver);
    };
  }, [dependency]);
}

export default useScrollReveal;
