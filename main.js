// Nav toggle
function toggleNav() {
  document.getElementById('mobile-nav').classList.toggle('open');
}
function closeNav() {
  document.getElementById('mobile-nav').classList.remove('open');
}

// Active nav link on scroll
const sections = document.querySelectorAll('section[id], div[id]');
const navLinks = document.querySelectorAll('.nav-links a');
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        navLinks.forEach(l => l.classList.toggle('active', l.getAttribute('href') === '#' + e.target.id));
      }
    });
  },
  { rootMargin: '-40% 0px -55% 0px' }
);
sections.forEach(s => observer.observe(s));

// Publication filter
function filterPubs(tag, btn) {
  document.querySelectorAll('.pf-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('.pub-item').forEach(item => {
    item.classList.toggle('hidden', tag !== 'all' && item.dataset.tag !== tag);
  });
}

// Contact form
function handleForm(e) {
  e.preventDefault();
  const notice = document.getElementById('form-notice');
  notice.style.display = 'block';
  notice.style.color = 'hsl(218 60% 75%)';
  notice.textContent = '✓ Thanks for reaching out — we'll reply within 2 business days.';
  e.target.reset();
}

// Smooth scroll offset for sticky nav
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    const top = target.getBoundingClientRect().top + window.scrollY - 68;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});
