const navToggle = document.getElementById("nav-toggle");
const heroSection = document.getElementById("hero-section");

const topBtn = document.querySelector(".goto-top");

const linksContainer = document.querySelector(".links");
navToggle.addEventListener("click", () => {
  linksContainer.classList.toggle("show-links");
});

const links = document.querySelectorAll(".links li a");
links.forEach((link) =>
  link.addEventListener("click", () =>
    linksContainer.classList.remove("show-links")
  )
);

heroSection.addEventListener("click", () => {
  linksContainer.classList.remove("show-links");
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    topBtn.classList.add("show-top-btn");
  } else {
    topBtn.classList.remove("show-top-btn");
  }
});
