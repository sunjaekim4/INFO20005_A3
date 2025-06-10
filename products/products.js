document.querySelectorAll('.product-card a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
  });
  link.classList.add('disabled-link');
});