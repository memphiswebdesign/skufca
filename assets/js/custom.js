// const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

// const body = document.body;

// if (isDarkMode) {
//   body.classList.add('dark-mode');
// } else {
//   body.classList.add('light-mode');
// }


// select the body element
const body = document.querySelector('body');

// add event listener to window object for 'scroll' event
window.addEventListener('scroll', () => {
  // check if user has scrolled down 100px
  if (window.scrollY > 100) {
    // add the 'scrolled' class to the body element
    body.classList.add('scrolled');
  } else {
    // remove the 'scrolled' class from the body element
    body.classList.remove('scrolled');
  }
});
