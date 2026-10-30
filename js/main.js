  function toggleMenu() {
    const menu = document.getElementById('mobileMenu');
    const btn = document.getElementById('hamburger');
    menu.classList.toggle('open');
    btn.classList.toggle('open');
    btn.setAttribute('aria-expanded', menu.classList.contains('open'));
    document.body.style.overflow = menu.classList.contains('open') ? 'hidden' : '';
  }

  // localStorage can be blocked (private mode, cookie settings) - never let that break the page
  function storedLang() {
    try { return localStorage.getItem('orniello-lang') || 'en'; } catch (e) { return 'en'; }
  }

  // persist = false is used for the initial render, so nothing is stored until the visitor actively picks a language
  function setLang(lang, persist = true) {
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
    if (persist) {
      try { localStorage.setItem('orniello-lang', lang); } catch (e) { /* ignore */ }
    }

    // Tell scripts that build content from data (e.g. the portfolio)
    document.dispatchEvent(new CustomEvent('orniello:langchange', { detail: { lang } }));
  }

  // Escape closes the mobile menu
  document.addEventListener('keydown', e => {
    const menu = document.getElementById('mobileMenu');
    if (e.key === 'Escape' && menu && menu.classList.contains('open')) toggleMenu();
  });

  // On load: apply saved language
  document.addEventListener('DOMContentLoaded', () => {
    setLang(storedLang(), false);
  });
