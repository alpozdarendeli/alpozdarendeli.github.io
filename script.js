// Enable smooth scrolling for "Back to top" links
window.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.back-to-top').forEach(function (link) {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });
});
