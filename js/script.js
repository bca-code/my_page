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
