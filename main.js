document.getElementById('projects-scroll').addEventListener('click', () => {
  document.getElementById('projects').scrollIntoView({
    behavior: 'smooth',
  });
});

document.querySelector('.contact-btn').addEventListener('click', () => {
  document.getElementById('contact').scrollIntoView();
});
