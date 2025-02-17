const navToggle = document.getElementById("nav-toggle");

const links = document.querySelector(".links");
navToggle.addEventListener("click", () => {
  links.classList.toggle("show-links");
});
