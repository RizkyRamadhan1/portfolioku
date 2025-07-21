document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("nav-links");
  const overlay = document.getElementById("overlay");

  if (!hamburger || !navLinks || !overlay) {
    console.warn("Elemen navbar tidak ditemukan");
    return;
  }

  // Toggle menu saat hamburger diklik
  hamburger.addEventListener("click", function (e) {
    e.stopPropagation();
    navLinks.classList.toggle("active");
    overlay.style.display = navLinks.classList.contains("active") ? "block" : "none";
  });

  // Tutup menu saat klik di luar
  document.addEventListener("click", function (e) {
    if (!navLinks.contains(e.target) && !hamburger.contains(e.target)) {
      navLinks.classList.remove("active");
      overlay.style.display = "none";
    }
  });

  // Tutup menu saat klik link
  navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", function () {
      navLinks.classList.remove("active");
      overlay.style.display = "none";
    });
  });

  // Tutup menu saat klik overlay
  overlay.addEventListener("click", function () {
    navLinks.classList.remove("active");
    overlay.style.display = "none";
  });
});