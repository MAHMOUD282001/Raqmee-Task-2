let menu = document.querySelector(".menu");

// let closeMenu = document.querySelector(".close-menu");

let navLinksMenu = document.querySelector(".nav-links");

let navLinks = document.querySelectorAll(".nav-links li");

const toggleNavLinks = () => {
  navLinksMenu.classList.toggle("active");
};

menu.addEventListener("click", toggleNavLinks);

// closeMenu.addEventListener("click", toggleNavLinks);

document.body.addEventListener("click", (e) => {
  if (!navLinksMenu.contains(e.target) && !menu.contains(e.target)) {
    navLinksMenu.classList.remove("active");
  }
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navLinksMenu.classList.remove("active");
  });
});