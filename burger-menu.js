// Gestion du menu burger responsive
document.addEventListener('DOMContentLoaded', function() {
  const burgerMenu = document.querySelector('.burger-menu');
  const navLinks = document.querySelector('.nav-links');
  const navOverlay = document.querySelector('.nav-overlay');
  const body = document.body;

  // Fonction pour ouvrir/fermer le menu
  function toggleMenu() {
    burgerMenu.classList.toggle('active');
    navLinks.classList.toggle('active');
    navOverlay.classList.toggle('active');
    body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : 'auto';
  }

  // Fonction pour fermer le menu
  function closeMenu() {
    burgerMenu.classList.remove('active');
    navLinks.classList.remove('active');
    navOverlay.classList.remove('active');
    body.style.overflow = 'auto';
  }

  // Event listeners
  if (burgerMenu) {
    burgerMenu.addEventListener('click', toggleMenu);
  }

  if (navOverlay) {
    navOverlay.addEventListener('click', closeMenu);
  }

  // Fermer le menu quand on clique sur un lien (pour la navigation)
  const navLinkItems = document.querySelectorAll('.nav-links a');
  navLinkItems.forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  // Fermer le menu avec la touche Échap
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && navLinks.classList.contains('active')) {
      closeMenu();
    }
  });

  // Gérer le redimensionnement de la fenêtre
  window.addEventListener('resize', function() {
    if (window.innerWidth > 1024) {
      closeMenu();
    }
  });
});
