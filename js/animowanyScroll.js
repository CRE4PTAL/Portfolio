document.addEventListener('DOMContentLoaded', function(){
  const els = document.querySelectorAll('.reveal');
  if (!els || els.length === 0) return;

  // owijamy zawartość w .reveal-inner (jeśli jeszcze nie ma)
  els.forEach(el => {
    if (!el.querySelector('.reveal-inner')) {
      const inner = document.createElement('div');
      inner.className = 'reveal-inner';
      // przenieś wszystkie dzieci do inner
      while (el.firstChild) {
        inner.appendChild(el.firstChild);
      }
      el.appendChild(inner);
    }
  });

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const inner = entry.target.querySelector('.reveal-inner');
        if (inner) inner.classList.add('is-visible');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  els.forEach(el => observer.observe(el));
});