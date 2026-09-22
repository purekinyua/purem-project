document.querySelectorAll('.nav .links a, .nav .cta').forEach(a => {
  a.addEventListener('click', e => {
    const id = a.getAttribute('href');
    if (id && id.startsWith('#')) {
      const target = document.querySelector(id);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  });
});

/* ---------- Mobile navigation ---------- */

const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');

if (menuToggle && mobileMenu) {

  menuToggle.addEventListener('click', () => {

    const isOpen = mobileMenu.classList.toggle('open');

    menuToggle.classList.toggle('is-open', isOpen);

    menuToggle.setAttribute('aria-expanded', String(isOpen));

    menuToggle.setAttribute(
      'aria-label',
      isOpen ? 'Close navigation menu' : 'Open navigation menu'
    );

  });


  /* Close menu after selecting a page */

  mobileMenu.querySelectorAll('a').forEach(link => {

    link.addEventListener('click', () => {

      mobileMenu.classList.remove('open');
      menuToggle.classList.remove('is-open');

      menuToggle.setAttribute('aria-expanded', 'false');

      menuToggle.setAttribute(
        'aria-label',
        'Open navigation menu'
      );

    });

  });


  /* Close menu when clicking outside */

  document.addEventListener('click', (event) => {

    if (
      !mobileMenu.contains(event.target) &&
      !menuToggle.contains(event.target)
    ) {

      mobileMenu.classList.remove('open');
      menuToggle.classList.remove('is-open');

      menuToggle.setAttribute('aria-expanded', 'false');

      menuToggle.setAttribute(
        'aria-label',
        'Open navigation menu'
      );

    }

  });

}

const phrases = [
  "business works",
  "shop runs",
  "school operates",
  "team gets things done",
  "properties are managed"
];
const cycleEl = document.getElementById('cycleText');

if (cycleEl) {
  let phraseIndex = 0;
  let charIndex = phrases[0].length;
  let deleting = false;

  function tick() {
    const current = phrases[phraseIndex];
    if (!deleting) {
      charIndex++;
      if (charIndex > current.length) {
        deleting = true;
        setTimeout(tick, 1400);
        return;
      }
    } else {
      charIndex--;
      if (charIndex < 0) {
        deleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        charIndex = 0;
      }
    }
    cycleEl.textContent = phrases[phraseIndex].slice(0, charIndex);
    setTimeout(tick, deleting ? 40 : 65);
  }

  cycleEl.textContent = phrases[0];
  setTimeout(tick, 1800);
}

// Automatically animate key elements as they scroll into view
const autoRevealSelectors =
  'h2.headline, .product-card, .why-row, .project-row, .teaser-card, ' +
  '.step, .mini-feature, .svc-row, .screenframe, .before-after-card, ' +
  '.cs-graphic, .problem-card, .home-solution-card, .belief-card, ' +
  '.showcase-card, .detail-card, .process-card, .experience-point, ' +
  '.why-work-card, .contact-option, .contact-prompt';

autoRevealEls.forEach((el, i) => {
  el.classList.add('auto-reveal');
  el.style.transitionDelay = (i % 6) * 0.08 + 's';
});

if (autoRevealEls.length) {
  const autoObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        autoObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  autoRevealEls.forEach(el => autoObserver.observe(el));
}

// Cursor-following glow on buttons
document.querySelectorAll('.nav .cta, .hero-cta').forEach(btn => {
  btn.addEventListener('mousemove', (e) => {
    const rect = btn.getBoundingClientRect();
    btn.style.setProperty('--mx', (e.clientX - rect.left) + 'px');
    btn.style.setProperty('--my', (e.clientY - rect.top) + 'px');
  });
});