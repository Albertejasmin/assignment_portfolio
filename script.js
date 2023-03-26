"use strict";
function load() {
  const button = document.querySelector(".btn");

  // MediaQueryList object
  const useDark = window.matchMedia("(prefers-color-scheme: dark)");

  // Toggles the "dark_mode" class based on if the media query matches
  function toggleDarkMode(state) {
    document.documentElement.classList.toggle("dark_mode", state);
  }
  // Initial setting
  toggleDarkMode(useDark.matches);

  // Listening for the changes in the OS settings
  useDark.addListener((evt) => toggleDarkMode(evt.matches));

  // Toggles the "dark_mode" class on click
  button.addEventListener("click", () => {
    document.documentElement.classList.toggle("dark_mode");
  });
}
window.addEventListener("DOMContentLoaded", load);
