// Enable smooth scrolling and mobile navigation toggle
window.addEventListener('DOMContentLoaded', function () {
  // Back to top links
  document.querySelectorAll('.back-to-top').forEach(function (link) {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });

  // Hamburger menu toggle
  document.querySelectorAll('.menu-toggle').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var nav = btn.closest('.navbar');
      if (nav) {
        nav.classList.toggle('open');
      }
    });
  });
});
