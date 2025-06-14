// Clay Dust Cursor Effect
function initCursor() {
  const clayContainer = document.getElementById('clay-lottie');
  if (!clayContainer || typeof lottie === 'undefined') return;
  const clayAnimation = lottie.loadAnimation({
    container: clayContainer,
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: 'https://assets.codepen.io/14737734/Mc0L1kY8xt.json'
  });

  document.addEventListener('mousemove', e => {
    clayContainer.style.left = `${e.clientX}px`;
    clayContainer.style.top = `${e.clientY}px`;
    clayAnimation.stop();
    clayAnimation.playSegments([0, 30], true);
  });
}

// Scroll Spy (Sidebar Navigation Highlight)
function initScrollSpy() {
  const navLinks = document.querySelectorAll('#sidebar-nav a');
  const sections = document.querySelectorAll('section');

  const handler = () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (pageYOffset >= sectionTop - 150 && pageYOffset < sectionTop + sectionHeight - 150) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  };

  window.addEventListener('scroll', handler);
  return handler;
}

if (typeof window !== 'undefined') {
  initCursor();
  initScrollSpy();
}

if (typeof module !== 'undefined') {
  module.exports = { initScrollSpy };
}
