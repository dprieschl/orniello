  function toggleMenu() {
    const menu = document.getElementById('mobileMenu');
    const btn = document.getElementById('hamburger');
    menu.classList.toggle('open');
    btn.classList.toggle('open');
    document.body.style.overflow = menu.classList.contains('open') ? 'hidden' : '';
  }

  function setLang(lang) {
    // Update all elements with data-en / data-de
    document.querySelectorAll('[data-en]').forEach(el => {
      el.innerHTML = el.getAttribute('data-' + lang);
    });

    // Update button states
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.textContent.trim().toLowerCase() === lang);
    });

    // Update html lang attribute
    document.documentElement.lang = lang;

    // Save preference
    localStorage.setItem('orniello-lang', lang);
  }

  // On load: apply saved language
  document.addEventListener('DOMContentLoaded', () => {
    const saved = localStorage.getItem('orniello-lang') || 'en';
    setLang(saved);
  });
