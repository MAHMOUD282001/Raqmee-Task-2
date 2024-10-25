let menu = document.querySelector(".menu");

let closeMenu = document.querySelector(".close-menu");

let navLinksMenu = document.querySelector(".nav-links");

let navLinks = document.querySelectorAll(".nav-links li");

const toggleNavLinks = () => {
  navLinksMenu.classList.toggle("active");
};

menu.addEventListener("click", toggleNavLinks);

closeMenu.addEventListener("click", toggleNavLinks);

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

// Slider
let currentIndex = 0; // Track the current active card
const cards = document.querySelectorAll(".slider-card"); // Get all cards
const totalSlides = cards.length; // Total number of cards

function updateSliderPosition() {
  const sliderWrapper = document.getElementById("sliderWrapper");
  const cardHeight = 100;

  sliderWrapper.style.transform = `translateY(-${currentIndex * cardHeight}px)`;

  // Update active class on cards
  cards.forEach((card, index) => {
    card.classList.remove("active", "exiting");
    if (index === currentIndex) {
      card.classList.add("active");
    } else if (index === currentIndex - 1) {
      card.classList.add("exiting");
    }
  });
}

if (currentIndex === 0) {
  document.getElementById("prevButton").style.opacity = "0.5";
}

if (currentIndex === totalSlides - 1) {
  document.getElementById("prevButton").style.opacity = "0.5";
}

console.log(currentIndex);

function nextSlide() {
  if (currentIndex < totalSlides - 1) {
    ++currentIndex;
    updateSliderPosition();
    document.getElementById("nextButton").style.opacity = "1";
    document.getElementById("prevButton").style.opacity = "1";
  } else if (currentIndex === totalSlides - 1) {
    document.getElementById("nextButton").style.opacity = "0.5";
    document.getElementById("prevButton").style.opacity = "1";
  }
}

function prevSlide() {
  if (currentIndex > 0) {
    currentIndex--;
    updateSliderPosition();
    document.getElementById("nextButton").style.opacity = "1";
    document.getElementById("prevButton").style.opacity = "1";
  }
  if (currentIndex === 0) {
    document.getElementById("prevButton").style.opacity = "0.5";
    document.getElementById("nextButton").style.opacity = "1";
  }
}
// Event listeners for buttons
document.getElementById("nextButton").addEventListener("click", nextSlide);
document.getElementById("prevButton").addEventListener("click", prevSlide);

// Initial display of the counter and set the active card
updateSliderPosition();
