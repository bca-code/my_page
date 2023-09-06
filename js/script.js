// sound
let muted = false;
const soundIcon = document.querySelector(".volume-icon");
const clickSound = "../sfx/click.wav";
soundVolume = 0.01;

soundIcon.addEventListener("click", () => {
  if (muted) {
    muted = false;
    soundIcon.src = "icons/volume-on.png";
  } else {
    soundIcon.src = "icons/volume-off.png";
    muted = true;
  }

  console.log(muted);
});

// desktop
const desktop = document.querySelector(".desktop");
const desktopItems = document.querySelectorAll(".desktop-item");

// refactor bad code below vvvvvvvvvvvv
//about
const aboutWindow = document.querySelector(".about-window");
const aboutMinimize = aboutWindow.querySelector(".minimize");
aboutMinimize.addEventListener("click", () => {
  aboutWindow.classList.remove("expand-window");
  aboutWindow.classList.remove("maximize-window");
});
const aboutMaximize = aboutWindow.querySelector(".maximize");
aboutMaximize.addEventListener("click", () => {
  if (aboutWindow.classList.contains("maximize-window")) {
    aboutWindow.classList.remove("maximize-window");
  } else {
    aboutWindow.classList.add("maximize-window");
  }
});
const aboutClose = aboutWindow.querySelector(".close"); // this needs it's own identity right now just copying the minimize
aboutClose.addEventListener("click", () => {
  aboutWindow.classList.remove("expand-window");
  aboutWindow.classList.remove("maximize-window");
});

// refactor bad code above ^^^^^^^^^^^^

const selectState = {
  about: false,
  projects: false,
  resume: false,
  contact: false,
};

desktopItems.forEach((item) => {
  item.addEventListener("click", (event) => {
    playSound(clickSound);
    event.stopPropagation();
    let doubleClicked = false;

    const name = item.getAttribute("data-name");
    if (selectState[name] === true) {
      doubleClicked = true;
    }

    deselectAll(); // handles if its a different item pressed
    selectState[name] = true;
    selectDesktopItem();

    // functionality to create the window goes here based on if doubleClicked = true

    if (doubleClicked && name == "about") {
      // make one for each
      aboutWindow.classList.add("expand-window");
    }
  });
});

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

// clippy

const quotes = [
  "I've always used computers as a consumer, but as I've gotten older I've grown to appreciate how everything works.",
  "I'm currently seeking Junior Developer opportunities. Please contact me and let's get to know eachother!",
  "You can mute sound effects below with the speaker icon.",
  "<b>The Start Menu contains my Social Media:</b><br>1. GitHub<br>2. LinkedIn<br> 3. YouTube<br>4. ICODETHIS.",
  "<b>The Desktop Icons have additional information such as:</b><br>1. About Me<br>2. Projects<br>3. Resume<br>4. Contact Me",
  "Enjoy my Developer Page!",
];

quotesIncrement = 0;
const clippyContainer = document.querySelector(".clippy-container");
const clippyTextBox = document.querySelector(".clippy-talk");
const displayClippyBanner = document.querySelector(".resetClippy");
clippySeen = localStorage.getItem("seenClippy") || false;

if (clippySeen) {
  clippyContainer.style.display = "none";
  displayClippyBanner.style.display = "block";
}

clippyContainer.addEventListener("click", () => {
  playSound(clickSound);
  if (quotesIncrement >= quotes.length) {
    clippyContainer.style.display = "none";
    localStorage.setItem("seenClippy", true);
    displayClippyBanner.style.display = "block";
  } else {
    clippyTextBox.innerHTML = quotes[quotesIncrement];
  }
  quotesIncrement++;
});

displayClippyBanner.addEventListener("click", () => {
  quotesIncrement = 0;
  clippyTextBox.innerHTML =
    "Welcome to my Dev Page!<br><br>This desktop recreation represents where my fascination with computers started!";
  clippyContainer.style.display = "block";
  displayClippyBanner.style.display = "none";
});

// functions

function playSound(soundfp) {
  if (muted) {
    return;
  } else {
    const click = new Audio(soundfp);
    click.volume = soundVolume;
    click.play();
  }
}

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
