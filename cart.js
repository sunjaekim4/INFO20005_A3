document.querySelectorAll('.product-card .cover-img-link').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
  });
  link.classList.add('disabled-link');
});
