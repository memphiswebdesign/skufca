// Check for dark mode preference at the OS level
const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

// Get the body element
const body = document.body;

// Add the 'dark-mode' class to the body if the OS is in dark mode, otherwise add the 'light-mode' class
if (isDarkMode) {
  body.classList.add('dark-mode');
} else {
  body.classList.add('light-mode');
}
