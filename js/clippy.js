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
