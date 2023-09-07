// start menu
let startMenuOpen = false;
const startBtn = document.querySelector(".start-btn");
const startMenu = document.querySelector(".start-menu");

startBtn.addEventListener("click", (event) => {
  playSound(clickSound);

  // event.stopPropagation();
  if (startMenuOpen) {
    startMenu.classList.add("start-menu-hide");
    startBtn.classList.remove("start-btn-clicked");
    startMenuOpen = false;
  } else {
    startBtn.classList.add("start-btn-clicked");
    startMenu.classList.remove("start-menu-hide");
    startMenuOpen = true;
  }
});

// handle click offs

desktop.addEventListener("click", () => {
  deselectAll(); // deselect all icons
  if (startMenuOpen) {
    startMenu.classList.add("start-menu-hide");
    startBtn.classList.remove("start-btn-clicked");
    startMenuOpen = false;
  }
});

// set initial time values

getCurrentTime();

setInterval(() => {
  getCurrentTime();
}, 1000);
