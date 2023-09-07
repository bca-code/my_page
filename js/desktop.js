// desktop 2
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
    if (doubleClicked === true) {
      createWindow(name);
    }
  });
});

projectsOpen = false;
resumeOpen = false;
contactOpen = false;

//about
aboutOpen = false;
const aboutWindow = document.querySelector(".about-window");
// minimize
const aboutMinimize = aboutWindow.querySelector(".minimize");
aboutMinimize.addEventListener("click", () => {
  aboutWindow.style.bottom = "-50%";
});
// maximize
const aboutMaximize = aboutWindow.querySelector(".maximize");
aboutMaximize.addEventListener("click", () => {
  aboutWindow.classList.toggle("maximize-window");
});
// close
const aboutClose = aboutWindow.querySelector(".close");
aboutClose.addEventListener("click", () => {
  aboutOpen = false;
  aboutWindow.style.transition = "none";
  aboutWindow.style.bottom = "-50%";
  aboutWindow.classList.remove("maximize-window");
  setTimeout(() => {
    aboutWindow.style.transition = "";
  }, 50);
});

// functions

function createWindow(window) {
  if (window == "about") {
    aboutWindow.style.bottom = "50%";
    aboutOpen = true;
  }
}
