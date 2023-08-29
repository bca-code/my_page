// desktop
const desktop = document.querySelector(".desktop");
const desktopItems = document.querySelectorAll(".desktop-item");
const selectState = {
  about: false,
  projects: false,
  resume: false,
  contact: false,
};

desktopItems.forEach((item) => {
  item.addEventListener("click", (event) => {
    event.stopPropagation();
    deselectAll();
    const name = item.getAttribute("data-name");
    selectState[name] = true;
    selectDesktopItem();
  });
});

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

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  convertedTime = `${hour}:${minutes} ${timePeriod}`;
  time.innerHTML = convertedTime;
}

function deselectAll() {
  // This function deselects all icons currently pressed

  for (const key in selectState) {
    selectState[key] = false;
  }

  desktopItems.forEach((item) => {
    element = item.getAttribute("data-name");
    const icon = item.querySelector(".desktop-icon");
    const name = item.querySelector(".desktop-name");
    icon.src = `icons/${element}.png`;
    name.classList.remove("select-background");
  });
}

function selectDesktopItem() {
  // This function selects desktop items with selectState of "true"

  Object.keys(selectState).forEach((item) => {
    const desktopItem = document.querySelector(`[data-name="${item}"`);
    if (selectState[item] === true) {
      const icon = desktopItem.querySelector(".desktop-icon");
      const name = desktopItem.querySelector(".desktop-name");

      icon.src = `icons/${item}-clicked.png`;
      name.classList.add("select-background");
    }
  });
}
// item.addEventListener("click", () => {
//   if (img.src.includes("clicked")) {
//     img.src = `icons/${item.getAttribute("data-name")}.png`;
//   } else {
//     img.src = `icons/${item.getAttribute("data-name")}-clicked.png`;
//   }
// });
// });

// 1
// desktopItems.forEach((item) => {
//   const img = item.querySelector(".desktop-icon");
//   const itemName = item.querySelector(".desktop-name");
//   let selected = false;

//   // add event listener here

// });
