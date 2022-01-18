// REset to top of page before refreshing/loading
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
  document.body.style.opacity = '0';
};

// Preloader
const loader = document.getElementById('preloader');
window.addEventListener('load', () => {
  loader.style.display = 'none';
});

// GSAP Animation
const tl = gsap.timeline({
  defaults: { ease: 'power1.out' },
  onComplete: allowScroll,
});

function allowScroll() {
  document.body.classList.remove('isloading');
}

tl.to('.text', { y: '0%', duration: 1, stagger: 0.25 });
tl.to('.slider', { y: '-200%', duration: 1.15, delay: 0.5 });
tl.to('.intro', { y: '-200%', duration: 1 }, '-=1');
tl.fromTo('nav', { opacity: 0 }, { opacity: 1, duration: 1 });
tl.fromTo('.big-text', { opacity: 0 }, { opacity: 1, duration: 1 }, '-=1');

// turn shapes animation on/off based on scrolling
window.addEventListener('scroll', () => {
  const shapesEl = document.querySelector('.shape');
  const windowPosition = window.scrollY < 40;

  if (!windowPosition) {
    console.log('hello');
    shapesEl.classList.add('scrolling-fade-out');
    shapesEl.classList.remove('scrolling-fade-in');
  } else {
    shapesEl.classList.remove('scrolling-fade-out');
    shapesEl.classList.add('scrolling-fade-in');
  }
});

const hamburgerEl = document.querySelector('.hamburger');
const navListContainerEl = document.querySelector('.nav-list-container');
const headerContentEl = document.querySelector('header .content');

hamburgerEl.addEventListener('click', () => {
  if (navListContainerEl.classList.contains('open')) {
    // Close the menu
    navListContainerEl.classList.remove('open');
    headerContentEl.style.zIndex = '1';
    hamburgerEl.classList.remove('faded');
    navListContainerEl.classList.remove('mobile-menu');
    navListContainerEl.classList.remove('fade-in');
  } else {
    // Open the menu
    navListContainerEl.classList.add('open');
    headerContentEl.style.zIndex = '-1';
    hamburgerEl.classList.add('faded');
    navListContainerEl.classList.add('mobile-menu');
    navListContainerEl.classList.add('fade-in');
  }
});

document.querySelectorAll('.projects-link').forEach((link) => {
  link.addEventListener('click', (e) => {
    if (e.target['tagName'] === 'LI' || 'A') {
      e.preventDefault();
    }
    document.getElementById('projects').scrollIntoView({
      behavior: 'smooth',
    });
  });
});

document.querySelectorAll('.contact-link').forEach((link) => {
  link.addEventListener('click', (e) => {
    if (e.target['tagName'] === 'LI' || 'A') {
      e.preventDefault();
    }
    document.querySelector('footer').scrollIntoView({
      behavior: 'smooth',
    });
  });
});

document.querySelector('.btn.about-link').addEventListener('click', () => {
  document.getElementById('about').scrollIntoView();
});
