document.getElementById('portfolio-scroll').addEventListener('click', () => {
  document.getElementById('portfolio').scrollIntoView({
    behavior: 'smooth',
  });
});

document.querySelector('.contact-btn').addEventListener('click', () => {
  document.getElementById('contact').scrollIntoView();
});
