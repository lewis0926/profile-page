// Typed.js animation — guard in case CDN is slow
document.addEventListener('DOMContentLoaded', () => {
  if (typeof Typed !== 'undefined') {
    new Typed('.typed-target', {
      strings: ['Software Engineer.', 'Game Lover.', 'Basketball Player.'],
      typeSpeed: 70,
      backSpeed: 50,
      backDelay: 1800,
      loop: true,
    });
  }
});

// Sticky nav
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 20);
  updateBackToTop();
  revealOnScroll();
}, { passive: true });

// Hamburger / mobile menu
const hamburger  = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');

hamburger.addEventListener('click', () => {
  const open = hamburger.classList.toggle('open');
  mobileMenu.classList.toggle('open', open);
  document.body.style.overflow = open ? 'hidden' : '';
});

mobileMenu.querySelectorAll('.mobile-link').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    mobileMenu.classList.remove('open');
    document.body.style.overflow = '';
  });
});

// Scroll reveal
function revealOnScroll() {
  document.querySelectorAll('.reveal:not(.active)').forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 60) {
      el.classList.add('active');
    }
  });
}

// Run reveal on load and after a short delay to catch any layout settling
window.addEventListener('load', () => {
  revealOnScroll();
  setTimeout(revealOnScroll, 150);
});
revealOnScroll();

// Back to top
const backToTopBtn = document.getElementById('back-to-top');

function updateBackToTop() {
  const show        = window.scrollY > 700;
  const hasEntrance = backToTopBtn.classList.contains('btn-entrance');

  if (show && !hasEntrance) {
    backToTopBtn.classList.remove('btn-exit');
    backToTopBtn.classList.add('btn-entrance');
    backToTopBtn.style.display = 'block';
  } else if (!show && hasEntrance) {
    backToTopBtn.classList.remove('btn-entrance');
    backToTopBtn.classList.add('btn-exit');
    setTimeout(() => { backToTopBtn.style.display = 'none'; }, 250);
  }
}

backToTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Footer year
const yearEl = document.getElementById('footer-year');
if (yearEl) yearEl.textContent = `© ${new Date().getFullYear()}`;

// Stack icon tooltips
const tooltip = document.createElement('div');
tooltip.id = 'tooltip';
document.body.appendChild(tooltip);

document.querySelectorAll('.tip').forEach(el => {
  el.addEventListener('mouseenter', () => {
    const rect = el.getBoundingClientRect();
    tooltip.textContent = el.dataset.tooltip;
    tooltip.style.opacity = '0';
    tooltip.style.display = 'block';
    const tw = tooltip.offsetWidth;
    tooltip.style.left = `${rect.left + rect.width / 2 - tw / 2}px`;
    tooltip.style.top  = `${rect.top - tooltip.offsetHeight - 7}px`;
    tooltip.style.opacity = '1';
  });
  el.addEventListener('mouseleave', () => {
    tooltip.style.opacity = '0';
  });
});
