// ================================
// main.js — Ishwar Srishti 2025
// ================================

// ----------- Scroll-Up Button -----------
const scrollUpBtn = document.getElementById("scrollup");
window.addEventListener("scroll", () => {
  if (window.scrollY > 400) {
    scrollUpBtn.classList.add("show");
  } else {
    scrollUpBtn.classList.remove("show");
  }
});

if (scrollUpBtn) {
  scrollUpBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// ----------- WhatsApp Floating Button -----------
const waFab = document.getElementById("wa-fab");
if (waFab) {
  waFab.addEventListener("click", (e) => {
    e.preventDefault();
    window.open("https://wa.me/919137485206", "_blank");
  });
}

// ----------- Smooth Scrolling for Nav Links -----------
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function (e) {
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      e.preventDefault();
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: "smooth"
      });
    }
  });
});

// ----------- Gallery Tabs -----------
document.querySelectorAll("[data-tab]").forEach(tab => {
  tab.addEventListener("click", () => {
    const group = tab.dataset.group;
    const target = tab.dataset.tab;

    // Deactivate all tabs
    document.querySelectorAll(`[data-tab][data-group="${group}"]`)
      .forEach(t => t.classList.remove("active"));

    // Activate clicked tab
    tab.classList.add("active");

    // Toggle panels
    document.querySelectorAll(`[data-panel][data-group="${group}"]`)
      .forEach(panel => {
        panel.style.display = (panel.dataset.panel === target) ? "grid" : "none";
      });
  });
});

// ----------- Fade-In Animations -----------
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll(".section, .card, .hero-content").forEach(el => {
  observer.observe(el);
});
