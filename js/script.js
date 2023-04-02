// Toogle Class Active
const navbarNav = document.querySelector(".navbar-nav");

// Ketika Humberger Menu Di Klik
document.querySelector("#menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Klik Di luar sidebar agar sidebar hilang
const menu = document.querySelector("#menu");
document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
