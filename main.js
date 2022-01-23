// REset to top of page before refreshing/loading
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
  document.body.style.opacity = '0';
};

// Preloader
const loader = document.getElementById('preloader');
window.addEventListener('load', () => {
  loader.style.display = 'none';
  document.getElementById('overlay').style.opacity = '0';
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
const closeEl = document.querySelector('.close');
const navLinks = document.querySelectorAll('.nav-list li');

hamburgerEl.addEventListener('click', () => {
  document.getElementById('overlay').style.opacity = '1';
  navListContainerEl.classList.add('open');
  headerContentEl.style.zIndex = '-1';
  hamburgerEl.classList.add('faded');
  navListContainerEl.classList.add('mobile-menu');
  navListContainerEl.classList.add('fade-in');
});

const closeHeaderAndRemoveOverlay = () => {
  navListContainerEl.classList.remove('open');
  document.getElementById('overlay').style.opacity = '0';
  navListContainerEl.classList.remove('open');
  headerContentEl.style.zIndex = '0';
  hamburgerEl.classList.remove('faded');
  navListContainerEl.classList.remove('mobile-menu');
  navListContainerEl.classList.remove('fade-in');
};

closeEl.addEventListener('click', () => {
  closeHeaderAndRemoveOverlay();
});

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    closeHeaderAndRemoveOverlay();
  });
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
