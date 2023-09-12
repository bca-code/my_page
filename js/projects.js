const projectGrid = document.querySelector(".project-grid");
const projectInfoContainer = document.querySelector(".about-project");
const defaultHTML = projectInfoContainer.innerHTML;

projectDetails = [
  {
    title: "Developer Page",
    description: `
      This is a representation of Windows 2000 for my developer page, albeit a standard web-page would of been
      sufficient I really wanted to challenge my self with something more creative.
      `,
    thumbnail: "imgs/project-thumbnails/devpage.png",
    url: "https://bca-code.github.io/my_page/index.html",
    tags: "HTML CSS JAVASCRIPT",
  },
  {
    title: "Automated TikTok Creator",
    description: `
    I created engaging social media content inspired by the trend of sharing Reddit stories on TikTok along with background videos to keep users engaged. To achieve this,
    I utilized the MoviePy and Pillow libraries to convert images into dynamic videos. Additionally, I integrated the gTTs library to add text-to-speech narration to each image. The background videos were created by cutting and editing clips from gaming videos,
    to watch along with the the storytelling. The final videos were automatically formatted for easy sharing on TikTok and Instagram Reels.
      `,
    thumbnail: "imgs/project-thumbnails/TikTokMaker.png",
    url: "https://www.youtube.com/watch?v=D926aPQZO40",
    tags: "Python, MoviePy, Pillow, gTTs",
  },
];

html = "";
projectDetails.forEach((project) => {
  html += `
    <div class="project-container">
      <img class="project-icon" src="icons/folder-closed.ico" alt="folder">
      <span class="project-title">${project.title}</span>
    </div>
  `;
  projectGrid.innerHTML = html;
});

const projects = document.querySelectorAll(".project-container");

projects.forEach((project, index) => {
  project.addEventListener("click", (event) => {
    event.stopImmediatePropagation();
    closeFolders();
    const icon = project.querySelector(".project-icon");
    icon.src = "icons/folder-opened.ico";

    const title = projectDetails[index].title;
    const description = projectDetails[index].description;
    const thumbnail = projectDetails[index].thumbnail;
    const url = projectDetails[index].url;
    const tags = projectDetails[index].tags;

    const html = `
      <h3 class="project-name"><a href="${url}">${title}</a></h3>
      <h4 class="project-tags">${tags}</h4>
      <p class="project-description">${description}</p>
      <a target="_blank" href="${thumbnail}"><img class="project-image" src="${thumbnail}"></a>
    `;

    projectInfoContainer.innerHTML = html;
  });
});

projectGrid.addEventListener("click", () => {
  closeFolders();
  projectInfoContainer.innerHTML = defaultHTML;
});

function closeFolders() {
  // close all folders
  projects.forEach((project) => {
    const icon = project.querySelector(".project-icon");
    icon.src = "icons/folder-closed.ico";
  });
}
