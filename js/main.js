// ============================================================
// MAIN.JS — JC Gibbs Portfolio
// Handles: nav scroll effect, mobile menu, scroll reveal
// ============================================================

// ============================================================
// 1. NAVBAR — shrink on scroll & add background blur
// ============================================================
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 40) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// ============================================================
// 2. MOBILE HAMBURGER MENU TOGGLE
// ============================================================
const hamburger = document.getElementById('hamburger');
const navLinks  = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Close mobile nav when a link is clicked
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// ============================================================
// 3. SCROLL REVEAL — fade sections in as you scroll
//    Add class="reveal" to any element to animate it in
// ============================================================
const revealEls = document.querySelectorAll('.section, .project-card, .skill-group, .edu-card, .timeline-item');

// Add reveal class to all target elements
revealEls.forEach(el => el.classList.add('reveal'));

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        // Stagger cards slightly when multiple are in view
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, i * 80);
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 }
);

revealEls.forEach(el => observer.observe(el));

// ============================================================
// 4. ACTIVE NAV LINK HIGHLIGHT on scroll
//    Highlights the matching nav link for the visible section
// ============================================================
const sections  = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-links a');

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navAnchors.forEach(a => {
          a.style.color = a.getAttribute('href') === `#${id}` ? 'var(--accent)' : '';
        });
      }
    });
  },
  { threshold: 0.4 }
);

sections.forEach(s => sectionObserver.observe(s));

// ============================================================
// 5. YEAR in footer — auto-updates if you reuse this template
// ============================================================
const yearEl = document.querySelector('.footer');
if (yearEl) {
  yearEl.innerHTML = yearEl.innerHTML.replace(
    /\d{4}/,
    new Date().getFullYear()
  );
}
