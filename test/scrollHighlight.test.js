const { JSDOM } = require('jsdom');

function setOffset(element, top) {
  Object.defineProperty(element, 'offsetTop', { get: () => top });
  Object.defineProperty(element, 'offsetHeight', { get: () => 100 });
}

test('nav link becomes active on scroll', () => {
  const dom = new JSDOM(`<!DOCTYPE html><body>
    <div id="clay-lottie"></div>
    <nav id="sidebar-nav">
      <a href="#s1"></a>
      <a href="#s2"></a>
    </nav>
    <section id="s1"></section>
    <section id="s2"></section>
  </body>`, { url: 'http://localhost/' });

  global.window = dom.window;
  global.document = dom.window.document;
  global.lottie = { loadAnimation: () => ({ stop: () => {}, playSegments: () => {} }) };
  global.pageYOffset = 0;

  const { initScrollSpy } = require('../script.js');

  const s1 = document.getElementById('s1');
  const s2 = document.getElementById('s2');
  setOffset(s1, 0);
  setOffset(s2, 200);

  const handler = initScrollSpy();

  window.pageYOffset = 75;
  global.pageYOffset = 75;
  handler();

  const links = document.querySelectorAll('#sidebar-nav a');
  const anyActive = Array.from(links).some(l => l.classList.contains('active'));
  expect(anyActive).toBe(true);
});
