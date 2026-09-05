// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
navToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', isOpen);
});
navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    navLinks.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// Header shadow on scroll
const header = document.getElementById('siteHeader');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 8);
}, { passive: true });

// Reveal on scroll
const revealEls = document.querySelectorAll('[data-reveal]');
const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting){
      entry.target.classList.add('in-view');
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });
revealEls.forEach(el => io.observe(el));

// Scroll-spy for nav
const sections = ['work','currently','journey','stack','contact']
  .map(id => document.getElementById(id)).filter(Boolean);
const navMap = new Map();
document.querySelectorAll('[data-nav]').forEach(a => navMap.set(a.getAttribute('href').slice(1), a));
const spy = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    const link = navMap.get(entry.target.id);
    if (!link) return;
    if (entry.isIntersecting) {
      navMap.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
    }
  });
}, { threshold: 0.4 });
sections.forEach(s => spy.observe(s));

console.log('%cLooking under the hood — I like that.', 'color:#E8A34D;font-family:sans-serif;font-size:13px;');
console.log('%cThis site is hand-built, no template. hz.hamidzoghi@gmail.com', 'color:#9A9CA8;font-family:sans-serif;font-size:12px;');
