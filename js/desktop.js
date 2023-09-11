// desktop 2
let windowZIndex = [];
let openWindows = [];
let activeWindow = "";
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
    if (startMenuOpen) {
      startMenu.classList.add("start-menu-hide");
      startBtn.classList.remove("start-btn-clicked");
      startMenuOpen = false;
    }
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

resumeOpen = false;
contactOpen = false;

//about
aboutOpen = false;
const aboutWindow = document.querySelector(".about-window");
aboutWindow.addEventListener("click", () => {
  activeWindow = "about";
  // change z index
  windowZIndex = windowZIndex.filter((item) => {
    return item !== "about";
  });
  windowZIndex.push("about");
  setZIndex();
});
// minimize
const aboutMinimize = aboutWindow.querySelector(".minimize");
aboutMinimize.addEventListener("click", () => {
  aboutWindow.style.bottom = "-50%";
  aboutWindow.classList.remove("maximize-window");
  //
  setTimeout(() => {
    windowZIndex = windowZIndex.filter((item) => {
      return item !== "about";
    });
    setZIndex();
  }, 50);
  //
});
// maximize
const aboutMaximize = aboutWindow.querySelector(".maximize");
aboutMaximize.addEventListener("click", () => {
  aboutWindow.classList.toggle("maximize-window");
  if (aboutWindow.classList.contains("maximize-window")) {
    aboutWindow.style.bottom = "50%";
    aboutWindow.style.right = "";
  } else {
    aboutWindow.style.bottom = "54%";
    aboutWindow.style.right = "45%";
  }
  // sets window to front
  windowZIndex = windowZIndex.filter((item) => {
    return item !== "about";
  });
  windowZIndex.push("about");
  setZIndex();
});
// close
const aboutClose = aboutWindow.querySelector(".close");
aboutClose.addEventListener("click", () => {
  aboutOpen = false;
  aboutWindow.style.transition = "none";
  aboutWindow.style.bottom = "-50%";
  aboutWindow.classList.remove("maximize-window");
  windowZIndex = windowZIndex.filter((item) => {
    // removes from z index list
    return item !== "about";
  });
  openWindows = openWindows.filter((item) => {
    // removes from z index list
    return item !== "about";
  });
  setZIndex();
  setTimeout(() => {
    aboutWindow.style.transition = "";
  }, 50);
});

//projects
projectsOpen = false;
const projectsWindow = document.querySelector(".projects-window");
projectsWindow.addEventListener("click", () => {
  activeWindow = "projects";
  // change z index
  windowZIndex = windowZIndex.filter((item) => {
    return item !== "projects";
  });
  windowZIndex.push("projects");
  setZIndex();
});
// minimize
const projectsMinimize = projectsWindow.querySelector(".minimize");
projectsMinimize.addEventListener("click", () => {
  projectsWindow.style.bottom = "-50%";
  projectsWindow.classList.remove("maximize-window");
  //
  setTimeout(() => {
    windowZIndex = windowZIndex.filter((item) => {
      return item !== "projects";
    });
    setZIndex();
  }, 50);
  //
});
// maximize
const projectsMaximize = projectsWindow.querySelector(".maximize");
projectsMaximize.addEventListener("click", () => {
  projectsWindow.classList.toggle("maximize-window");
  if (projectsWindow.classList.contains("maximize-window")) {
    projectsWindow.style.bottom = "50%";
    projectsWindow.style.right = "";
  } else {
    projectsWindow.style.bottom = "48%";
  }
  windowZIndex = windowZIndex.filter((item) => {
    return item !== "projects";
  });
  windowZIndex.push("projects");
  setZIndex();
});
// close
const projectsClose = projectsWindow.querySelector(".close");
projectsClose.addEventListener("click", () => {
  projectsOpen = false;
  projectsWindow.style.transition = "none";
  projectsWindow.style.bottom = "-50%";
  projectsWindow.classList.remove("maximize-window");
  windowZIndex = windowZIndex.filter((item) => {
    // removes from z index list
    return item !== "projects";
  });
  openWindows = openWindows.filter((item) => {
    // removes from z index list
    return item !== "projects";
  });
  setTimeout(() => {
    projectsWindow.style.transition = "";
  }, 50);
});

//resume
resumeOpen = false;
const resumeWindow = document.querySelector(".resume-window");
resumeWindow.addEventListener("click", () => {
  activeWindow = "resume";
  // change z index
  windowZIndex = windowZIndex.filter((item) => {
    return item !== "resume";
  });
  windowZIndex.push("resume");
  setZIndex();
});
// minimize
const resumeMinimize = resumeWindow.querySelector(".minimize");
resumeMinimize.addEventListener("click", () => {
  resumeWindow.style.bottom = "-50%";
  resumeWindow.classList.remove("maximize-window");
  //
  setTimeout(() => {
    windowZIndex = windowZIndex.filter((item) => {
      return item !== "resume";
    });
    setZIndex();
  }, 50);
  //
});
// maximize
const resumeMaximize = resumeWindow.querySelector(".maximize");
resumeMaximize.addEventListener("click", () => {
  resumeWindow.classList.toggle("maximize-window");
  if (resumeWindow.classList.contains("maximize-window")) {
    resumeWindow.style.bottom = "50%";
    resumeWindow.style.right = "";
  } else {
    resumeWindow.style.bottom = "42%";
    resumeWindow.style.right = "43%";
  }
  windowZIndex = windowZIndex.filter((item) => {
    return item !== "resume";
  });
  windowZIndex.push("resume");
  setZIndex();
});
// close
const resumeClose = resumeWindow.querySelector(".close");
resumeClose.addEventListener("click", () => {
  resumeOpen = false;
  resumeWindow.style.transition = "none";
  resumeWindow.style.bottom = "-50%";
  resumeWindow.classList.remove("maximize-window");
  windowZIndex = windowZIndex.filter((item) => {
    // removes from z index list
    return item !== "resume";
  });
  openWindows = openWindows.filter((item) => {
    // removes from z index list
    return item !== "resume";
  });
  setTimeout(() => {
    resumeWindow.style.transition = "";
  }, 50);
});

//contact
contactOpen = false;
const contactWindow = document.querySelector(".contact-window");
contactWindow.addEventListener("click", () => {
  activeWindow = "contact";
  // change z index
  windowZIndex = windowZIndex.filter((item) => {
    return item !== "contact";
  });
  windowZIndex.push("contact");
  setZIndex();
});
// minimize
const contactMinimize = contactWindow.querySelector(".minimize");
contactMinimize.addEventListener("click", () => {
  contactWindow.style.bottom = "-50%";
  contactWindow.classList.remove("maximize-window");
  //
  setTimeout(() => {
    windowZIndex = windowZIndex.filter((item) => {
      return item !== "contact";
    });
    setZIndex();
  }, 50);
  //
});
// maximize
const contactMaximize = contactWindow.querySelector(".maximize");
contactMaximize.addEventListener("click", () => {
  contactWindow.classList.toggle("maximize-window");
  if (contactWindow.classList.contains("maximize-window")) {
    contactWindow.style.bottom = "50%";
    contactWindow.style.right = "";
  } else {
    contactWindow.style.bottom = "44%";
    contactWindow.style.right = "52%";
  }
  windowZIndex = windowZIndex.filter((item) => {
    return item !== "contact";
  });
  windowZIndex.push("contact");
  setZIndex();
});
// close
const contactClose = contactWindow.querySelector(".close");
contactClose.addEventListener("click", () => {
  contactOpen = false;
  contactWindow.style.transition = "none";
  contactWindow.style.bottom = "-50%";
  contactWindow.classList.remove("maximize-window");
  windowZIndex = windowZIndex.filter((item) => {
    // removes from z index list
    return item !== "contact";
  });
  openWindows = openWindows.filter((item) => {
    return item !== "contact";
  });
  setTimeout(() => {
    contactWindow.style.transition = "";
  }, 50);
});

// functions

function createTaskbar() {
  const tasksWrapper = document.querySelector(".tasks-wrapper");
  let html = "";
  openWindows.forEach((window) => {
    element = `<span id="task-${window}" data-name="${window}" class="open-window">${window}</span>`;
    html += element;
  });
  tasksWrapper.innerHTML = html;

  const openTasks = document.querySelectorAll(".open-window");
  openTasks.forEach((element) => {
    element.addEventListener("click", () => {
      activeWindow = element.innerHTML;

      setActiveWindow();

      if (!windowZIndex.includes(activeWindow)) {
        windowZIndex.push(activeWindow);
      } else {
        // remove and put it in the end
        windowZIndex = windowZIndex.filter((item) => {
          return item !== activeWindow;
        });
        windowZIndex.push(activeWindow);
      }

      setZIndex();

      const window = document.querySelector(`.${activeWindow}-window`);
      window.style.bottom = "50%";

      if (element.innerHTML == "about") {
        window.style.bottom = "52%";
      } else if (element.innerHTML == "projects") {
        window.style.bottom = "48%";
      } else if (element.innerHTML == "resume") {
        window.style.bottom = "42%";
      } else if (element.innerHTML == "contact") {
        window.style.bottom = "44%";
      }
    });
  });
}

function createWindow(window) {
  if (window == "about") {
    activeWindow = "about";
    if (!openWindows.includes("about")) {
      openWindows.push("about");
    }
    aboutWindow.style.bottom = "54%";
    aboutWindow.style.right = "45%";
    aboutOpen = true;
    if (!windowZIndex.includes("about")) {
      windowZIndex.push("about");
    } else {
      // remove and put it in the end
      windowZIndex = windowZIndex.filter((item) => {
        return item !== "about";
      });
      windowZIndex.push("about");
    }
  } else if (window == "projects") {
    activeWindow = "projects";
    if (!openWindows.includes("projects")) {
      openWindows.push("projects");
    }
    projectsWindow.style.bottom = "48%";
    projectsOpen = true;
    if (!windowZIndex.includes("projects")) {
      windowZIndex.push("projects");
    } else {
      // remove and put it in the end
      windowZIndex = windowZIndex.filter((item) => {
        return item !== "projects";
      });
      windowZIndex.push("projects");
    }
  } else if (window == "resume") {
    activeWindow = "resume";
    if (!openWindows.includes("resume")) {
      openWindows.push("resume");
    }
    resumeWindow.style.bottom = "42%";
    resumeWindow.style.right = "43%";
    resumeOpen = true;
    if (!windowZIndex.includes("resume")) {
      windowZIndex.push("resume");
    } else {
      // remove and put it in the end
      windowZIndex = windowZIndex.filter((item) => {
        return item !== "resume";
      });
      windowZIndex.push("resume");
    }
  } else if (window == "contact") {
    activeWindow = "contact";
    if (!openWindows.includes("contact")) {
      openWindows.push("contact");
    }
    contactWindow.style.bottom = "44%";
    contactWindow.style.right = "52%";
    contactOpen = true;
    if (!windowZIndex.includes("contact")) {
      windowZIndex.push("contact");
    } else {
      // remove and put it in the end
      windowZIndex = windowZIndex.filter((item) => {
        return item !== "contact";
      });
      windowZIndex.push("contact");
    }
  }

  setZIndex();
}

function setActiveWindow() {
  // resets taskmenu
  const openTasks = document.querySelectorAll(".open-window");
  openTasks.forEach((element) => {
    element.classList.remove("active-item");
  });

  // resets titlebars
  const listWindow = document.querySelectorAll(".title-bar");
  listWindow.forEach((element) => {
    element.style.backgroundColor = "";
  });

  if (activeWindow == "about") {
    const aboutWindow = document.querySelector(".about-window");
    const aboutWindowBar = aboutWindow.querySelector(".title-bar");
    aboutWindowBar.style.backgroundColor = "var(--active-color)";
    const aboutTab = document.querySelector("#task-about");
    aboutTab.classList.add("active-item");
  } else if (activeWindow == "projects") {
    const projectsWindow = document.querySelector(".projects-window");
    const projectsWindowBar = projectsWindow.querySelector(".title-bar");
    projectsWindowBar.style.backgroundColor = "var(--active-color)";
    const projectsTab = document.querySelector("#task-projects");
    projectsTab.classList.add("active-item");
  } else if (activeWindow == "resume") {
    const resumeWindow = document.querySelector(".resume-window");
    const resumeWindowBar = resumeWindow.querySelector(".title-bar");
    resumeWindowBar.style.backgroundColor = "var(--active-color)";
    const resumeTab = document.querySelector("#task-resume");
    resumeTab.classList.add("active-item");
  } else if (activeWindow == "contact") {
    const contactWindow = document.querySelector(".contact-window");
    const contactWindowBar = contactWindow.querySelector(".title-bar");
    contactWindowBar.style.backgroundColor = "var(--active-color)";
    const contactTab = document.querySelector("#task-contact");
    contactTab.classList.add("active-item");
  }
}

function setZIndex() {
  windowZIndex = windowZIndex.filter((element) => {
    return openWindows.includes(element);
  });

  for (let i = 0; i < windowZIndex.length; i++) {
    const element = windowZIndex[i];
    const window = document.querySelector(`.${element}-window`);
    window.style.zIndex = `${i + 10}`;
  }
  activeWindow = windowZIndex[windowZIndex.length - 1];

  createTaskbar();
  setActiveWindow();
}
