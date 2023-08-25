// desktop
const desktop = document.querySelector(".desktop");

// start menu
let startMenuOpen = false;
const startBtn = document.querySelector(".start-btn");
const startMenu = document.querySelector(".start-menu");

startBtn.addEventListener("click", (event) => {
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

desktop.addEventListener("click", () => {
  if ((startMenuOpen = true)) {
    startMenu.classList.add("start-menu-hide");
    startBtn.classList.remove("start-btn-clicked");
    startMenuOpen = false;
  }
});
