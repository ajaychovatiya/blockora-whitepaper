document.querySelectorAll('.section h2').forEach(header => {
  header.addEventListener('click', () => {
    const p = header.nextElementSibling;
    const arrow = header.querySelector('.arrow');

    if (p.style.display === 'block') {
      p.style.display = 'none';
      arrow.classList.remove('open');
    } else {
      p.style.display = 'block';
      arrow.classList.add('open');
      p.scrollIntoView({ behavior: 'smooth', block: 'start' }); // Auto-scroll to section
    }
  });
});
