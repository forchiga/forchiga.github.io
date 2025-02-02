document.addEventListener('DOMContentLoaded', () => {
    const readMoreLinks = document.querySelectorAll('.blog-post a');
  
    readMoreLinks.forEach(link => {
      link.addEventListener('click', (event) => {
        event.preventDefault();
        console.log(`Read more about: ${link.parentElement.querySelector('h2').textContent}`);
      });
    });
  });