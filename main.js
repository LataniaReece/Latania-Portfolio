document.getElementById('portfolio-scroll').addEventListener('click', () => {
  document.getElementById('portfolio').scrollIntoView({
    behavior: 'smooth',
  });
});

// document.getElementById('portfolio-link').addEventListener('click', () => {
//   // direct browser to top right away
//   if (window.location.hash) scroll(0, 0);
//   // takes care of some browsers issue
//   setTimeout(function () {
//     scroll(0, 0);
//   }, 1);
// });
