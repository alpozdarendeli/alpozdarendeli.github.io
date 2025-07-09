document.addEventListener('DOMContentLoaded', function () {
  const links = document.querySelectorAll('a.lightbox');
  if (!links.length) return;
  const overlay = document.createElement('div');
  overlay.id = 'img-overlay';
  overlay.innerHTML = '<span class="close-btn">&times;</span><img src="" alt="">';
  document.body.appendChild(overlay);
  const overlayImg = overlay.querySelector('img');
  const closeBtn = overlay.querySelector('.close-btn');
  links.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      overlayImg.src = this.href;
      overlay.classList.add('show');
    });
  });
  function hide() {
    overlay.classList.remove('show');
    overlayImg.src = '';
  }
  closeBtn.addEventListener('click', hide);
  overlay.addEventListener('click', function(e) {
    if (e.target === overlay) hide();
  });
});
