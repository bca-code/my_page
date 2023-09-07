// desktop 2
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
