// Clay Dust Cursor Effect
const clayContainer = document.getElementById('clay-lottie');
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

// Scroll Spy (Sidebar Navigation Highlight)
const navLinks = document.querySelectorAll('#sidebar-nav a');
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
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
});