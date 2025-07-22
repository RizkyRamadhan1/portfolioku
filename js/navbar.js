document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById(".nav-links");
  const overlay = document.getElementById("overlay");

  console.log("Navbar JS Aktif");
  console.log({ hamburger, navLinks, overlay });

  if (!hamburger || !navLinks || !overlay) {
    console.warn("Elemen navbar tidak ditemukan");
    return;
  }

  // Toggle menu saat hamburger diklik
  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    overlay.classList.toggle("active");
  });

  // Tutup menu saat klik di luar
  document.addEventListener("click", function (e) {
    if (!navLinks.contains(e.target) && !hamburger.contains(e.target)) {
      navLinks.classList.remove("active");
      overlay.classList.remove("active");
    }
  });

  // Tutup menu saat link diklik
  navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", function () {
      navLinks.classList.remove("active");
      overlay.classList.remove("active");
    });
  });

  // Tutup menu saat overlay diklik
  overlay.addEventListener("click", () => {
    navLinks.classList.remove("active");
    overlay.classList.remove("active");
  });
});
