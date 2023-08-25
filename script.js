const contactBtn = document.querySelector(".contact-btn");
const contactMenu = document.querySelector(".menu-wrapper");
let contactMenuOpen = false;

contactBtn.addEventListener("click", () => {
  if (contactMenuOpen) {
    contactMenu.classList.remove("expanded");
    contactMenuOpen = false;
  } else {
    contactMenu.classList.add("expanded");
    contactMenuOpen = true;
  }
});
