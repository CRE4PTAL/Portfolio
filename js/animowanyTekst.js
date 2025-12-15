document.addEventListener('DOMContentLoaded', () => {
  const el = document.querySelector('.typewriter h1');
  const phrases = ['Wschodzący programista', 'Pasjonat programowania'];
  const typeSpeed = 80;    // ms per character when typing
  const deleteSpeed = 40;  // ms per character when deleting
  const pauseAfterType = 900;  // ms pause after full phrase
  const pauseAfterDelete = 300; // ms pause after deletion

  let idx = 0;

  function type(phrase, done) {
    let i = 0;
    const t = setInterval(() => {
      i++;
      el.textContent = phrase.slice(0, i);
      if (i === phrase.length) {
        clearInterval(t);
        setTimeout(done, pauseAfterType);
      }
    }, typeSpeed);
  }

  function del(done) {
    let i = el.textContent.length;
    const t = setInterval(() => {
      i--;
      el.textContent = el.textContent.slice(0, i);
      if (i === 0) {
        clearInterval(t);
        setTimeout(done, pauseAfterDelete);
      }
    }, deleteSpeed);
  }

  function next() {
    type(phrases[idx], () => {
      del(() => {
        idx = (idx + 1) % phrases.length;
        next();
      });
    });
  }

  next();
});