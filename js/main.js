/* ============================================
   AUTODRIVE MOTORS — GLOBAL SCRIPT
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ---- Active nav link ---- */
  const currentPage = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.navbar__links a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  /* ---- Mobile hamburger toggle ---- */
  const toggle = document.querySelector('.navbar__toggle');
  const links  = document.querySelector('.navbar__links');

  if (toggle && links) {
    toggle.addEventListener('click', () => {
      links.classList.toggle('open');
    });
  }

  /* ---- Form submission feedback (demo) ---- */
  document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const existingAlert = form.querySelector('.alert');
      if (existingAlert) existingAlert.remove();

      const alert = document.createElement('div');
      alert.className = 'alert alert--success';
      alert.textContent = '✓ Submitted successfully! We will get back to you shortly.';
      form.prepend(alert);

      setTimeout(() => alert.remove(), 4000);
    });
  });

});
