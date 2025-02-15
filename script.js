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