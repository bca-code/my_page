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

// set initial time values

getCurrentTime();

setInterval(() => {
  getCurrentTime();
}, 1000);

// sound
let muted = false;
const soundIcon = document.querySelector(".volume-icon");

soundIcon.addEventListener("click", () => {
  if (muted) {
    soundIcon.src = "icons/volume-on.png";
    muted = false;
  } else {
    soundIcon.src = "icons/volume-off.png";
    muted = true;
  }

  console.log(muted);
});

// functions

function getCurrentTime() {
  const time = document.querySelector(".time");

  const today = new Date();
  let hour = today.getHours();
  let minutes = today.getMinutes();
  let timePeriod;

  if (hour == 0) {
    timePeriod = "AM";
    hour = 12;
  } else if (hour > 12) {
    timePeriod = "PM";
    hour = hour - 2 - 10;
  } else {
    timePeriod = "PM";
    hour = hour;
  }

  convertedTime = `${hour}:${minutes} ${timePeriod}`;
  time.innerHTML = convertedTime;
}
