const menuToggle = document.getElementById('menu-toggle');
const siteNav = document.getElementById('site-nav');

if (menuToggle && siteNav) {
  menuToggle.addEventListener('click', () => {
    const isActive = siteNav.classList.toggle('active');
    menuToggle.setAttribute('aria-expanded', isActive ? 'true' : 'false');
  });

  const navLinks = siteNav.querySelectorAll('a');
  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      siteNav.classList.remove('active');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });

  document.addEventListener('click', (event) => {
    const clickedInsideNav = siteNav.contains(event.target);
    const clickedToggle = menuToggle.contains(event.target);

    if (!clickedInsideNav && !clickedToggle) {
      siteNav.classList.remove('active');
      menuToggle.setAttribute('aria-expanded', 'false');
    }
  });
}