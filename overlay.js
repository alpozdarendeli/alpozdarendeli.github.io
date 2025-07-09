document.addEventListener('DOMContentLoaded', function() {
  const overlay = document.createElement('div');
  overlay.id = 'img-overlay';
  overlay.innerHTML = '<button id="overlay-close">&times;</button><img id="overlay-img" />';
  document.body.appendChild(overlay);

  const overlayImg = document.getElementById('overlay-img');
  const closeBtn = document.getElementById('overlay-close');

  function hideOverlay() {
    overlay.classList.remove('active');
  }

  closeBtn.addEventListener('click', hideOverlay);
  overlay.addEventListener('click', function(e) {
    if (e.target === overlay) hideOverlay();
  });

  document.querySelectorAll('img').forEach(function(img) {
    if (!img.closest('a.lightbox-link')) {
      var link = document.createElement('a');
      link.href = img.dataset.large || img.src;
      link.className = 'lightbox-link';
      img.parentNode.insertBefore(link, img);
      link.appendChild(img);
    }
  });

  document.querySelectorAll('a.lightbox-link').forEach(function(link) {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      overlayImg.src = this.href;
      overlay.classList.add('active');
    });
  });
});
