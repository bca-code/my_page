// sound 1
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
