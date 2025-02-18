const navToggle = document.getElementById("nav-toggle");
const heroSection = document.getElementById("hero-section");

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
