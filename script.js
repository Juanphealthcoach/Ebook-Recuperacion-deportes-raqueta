<!-- Lottie Clay Dust Cursor -->
<div id="clay-lottie" style="position: fixed; pointer-events: none; z-index: 999999; width: 100px; height: 100px;"></div>
<script src="https://cdnjs.cloudflare.com/ajax/libs/lottie-web/5.10.2/lottie.min.js"></script>
<script>
  // Cursor animado tipo tierra batida
  const clayContainer = document.getElementById('clay-lottie');
  const clayAnimation = lottie.loadAnimation({
    container: clayContainer,
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: 'https://assets.codepen.io/14737734/Mc0L1kY8xt.json'
  });

  document.addEventListener('mousemove', e => {
    clayContainer.style.left = `${e.clientX - 50}px`;
    clayContainer.style.top = `${e.clientY - 50}px`;
    clayAnimation.stop();
    clayAnimation.playSegments([0, 30], true);
  });

  // ScrollSpy para mapa lateral con emotes en círculo
  const sections = document.querySelectorAll('section[id]');
  const navItems = document.querySelectorAll('#sidebar-nav ul li');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navItems.forEach(li => {
          li.classList.remove('active');
          const link = li.querySelector('a');
          if (link.getAttribute('href') === `#${id}`) {
            li.classList.add('active');
          }
        });
      }
    });
  }, {
    threshold: 0.6
  });

  sections.forEach(section => observer.observe(section));
</script>
