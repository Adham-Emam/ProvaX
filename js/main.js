// Remove Loading screen
window.addEventListener(
  "load",
  (document.querySelector(".loading").classList.add('loaded'))
);

// Nav icon animation
const navIcon = document.querySelector(".nav-icon");
const header = document.getElementById("header");

navIcon.addEventListener("click", () => {
  if (navIcon.classList.contains("active")) {
    navIcon.classList.remove("active");
    header.classList.remove("active-menu");
  } else {
    navIcon.classList.add("active");
    header.classList.add("active-menu");
  }
});

// close navbar menu
var closeNavbar = document
  .querySelectorAll("body > :not(header)")
  .forEach((e) =>
    e.addEventListener("click", () => {
      header.classList.remove("active-menu");
      navIcon.classList.remove("active");
    })
  );

// Function to toggle 'fixed' class based on scroll position
function toggleFixedNavbar() {
  if (window.scrollY >= 100) {
    header.classList.add("fixed");
    header.classList.remove("active-menu");
    navIcon.classList.remove("active");
  } else {
    header.classList.remove("fixed");
  }
}
// Function to toggle 'scrolled' class based on scroll position
function toggleScrolledNavbar() {
  if (window.scrollY >= window.innerHeight) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
}

// Add scroll event listener
window.addEventListener("scroll", function () {
  toggleFixedNavbar();
  toggleScrolledNavbar();
});
