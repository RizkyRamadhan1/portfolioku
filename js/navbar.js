document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.querySelector(".nav-links");
  const overlay = document.getElementById("overlay");

  console.log("Navbar JS Aktif");
  console.log({ hamburger, navLinks, overlay });

  if (!hamburger || !navLinks || !overlay) {
    console.warn("Elemen navbar tidak ditemukan");
    return;
  }

  hamburger.addEventListener("click", function (e) {
    e.stopPropagation();
    navLinks.classList.toggle("active");
    overlay.style.display = navLinks.classList.contains("active") ? "block" : "none";
  });

  document.addEventListener("click", function (e) {
    if (!navLinks.contains(e.target) && !hamburger.contains(e.target)) {
      navLinks.classList.remove("active");
      overlay.style.display = "none";
    }
  });

  navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", function () {
      navLinks.classList.remove("active");
      overlay.style.display = "none";
    });
  });

  overlay.addEventListener("click", function () {
    navLinks.classList.remove("active");
    overlay.style.display = "none";
  });
});
