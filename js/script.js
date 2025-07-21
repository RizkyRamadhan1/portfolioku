window.addEventListener("load", () => {
  // ========== JAM SAAT INI ==========
  const currentTime = document.getElementById("current-time");
  function updateTime() {
    const now = new Date();
    if (currentTime) currentTime.textContent = now.toLocaleTimeString();
  }
  updateTime();
  setInterval(updateTime, 1000);

  // ========== SLIDER GAMBAR ==========
  const slides = document.querySelectorAll(".slider .slide");
  let currentSlide = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === index);
    });
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }

  function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
  }

  if (slides.length > 0) {
    showSlide(currentSlide);
    setInterval(nextSlide, 3000);
    window.nextSlide = nextSlide;
    window.prevSlide = prevSlide;
  }

  // ========== SMOOTH SCROLL ==========
  document.querySelectorAll('nav a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }

      // Tutup menu di mobile saat klik navigasi
      const mobileMenu = document.querySelector(".mobile-menu");
      if (mobileMenu && mobileMenu.classList.contains("active")) {
        mobileMenu.classList.remove("active");
      }
    });
  });

  // ========== NAVBAR AUTO HIDE/SHOW ==========
  const navbar = document.getElementById("navbar");
  let prevScrollPos = window.pageYOffset;

  if (navbar) {
    const navbarHeight = navbar.offsetHeight;
    document.body.style.paddingTop = navbarHeight + "px";

    window.addEventListener("scroll", () => {
      const currentScrollPos = window.pageYOffset;
      if (prevScrollPos > currentScrollPos) {
        navbar.style.top = "0";
      } else {
        navbar.style.top = `-${navbarHeight}px`;
      }
      prevScrollPos = currentScrollPos;
    });
  }

  // ========== HAMBURGER MENU TOGGLE ==========
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("nav-links");

  if (hamburger && navLinks) {
    // Toggle menu saat hamburger diklik
    hamburger.addEventListener("click", function (e) {
      navLinks.classList.toggle("active");
      e.stopPropagation();
    });

    // Tutup menu saat klik di luar area menu
    document.addEventListener("click", function (e) {
      if (!navLinks.contains(e.target) && !hamburger.contains(e.target)) {
        navLinks.classList.remove("active");
      }
    });

    // Tutup menu saat salah satu link dipilih
    navLinks.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", function () {
        navLinks.classList.remove("active");
      });
    });
  }
});
