const navEl = document.querySelector('.nav');
const hamburgerEl = document.querySelector('.hamburger');

hamburgerEl.addEventListener('click', () => {
  // This is for adding/removing menu
  navEl.classList.toggle('nav__open');

  //   This is for animatiing hamburger menu bars
  hamburgerEl.classList.toggle('hamburger__open');
});

// menu item ma click gare paxi , menu close garna lai
navEl.addEventListener('click', () => {
  navEl.classList.remove('nav__open');

  hamburgerEl.classList.remove('hamburger__open');
});
