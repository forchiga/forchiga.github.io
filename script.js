// filepath: /C:/Users/FORTUNE/Documents/.vscode/project ninja/script.js
function openLightbox(img) {
    var lightbox = document.getElementById('lightbox');
    var lightboxImg = document.getElementById('lightbox-img');
    lightbox.style.display = 'block';
    lightboxImg.src = img.src;
  }
  
  function closeLightbox() {
    var lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'none';
  }
  
  function openModal(iframe) {
    var modal = document.getElementById('modal');
    var modalIframe = document.getElementById('modal-iframe');
    modal.style.display = 'block';
    modalIframe.src = iframe.src;
  }
  
  function closeModal() {
    var modal = document.getElementById('modal');
    var modalIframe = document.getElementById('modal-iframe');
    modal.style.display = 'none';
    modalIframe.src = '';
  }

  // Search toggle for small screens
  document.addEventListener('DOMContentLoaded', function () {
    var toggle = document.querySelector('.search-toggle');
    var form = document.querySelector('.search-form');
    var input = form ? form.querySelector('.search-bar') : null;

    if (!toggle || !form) return;

    toggle.addEventListener('click', function (e) {
      e.preventDefault();
      form.classList.toggle('open');
      if (form.classList.contains('open') && input) {
        input.focus();
      }
    });

    // Close the search input when clicking outside
    document.addEventListener('click', function (e) {
      if (!form.classList.contains('open')) return;
      if (!form.contains(e.target) && !toggle.contains(e.target)) {
        form.classList.remove('open');
      }
    });
  });