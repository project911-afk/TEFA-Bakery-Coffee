function toggleMenu() {
    document.querySelector('.nav-menu').classList.toggle('active');
}
const burger = document.querySelector(".burger");
const navMenu = document.querySelector(".nav-menu");

burger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    burger.classList.toggle("open");
});


document.addEventListener("DOMContentLoaded", function () {
    const burger = document.getElementById("burgerBtn");
    const navMenu = document.querySelector(".nav-menu");

    // Toggle menu saat tombol ditekan
    burger.addEventListener("click", () => {
        navMenu.classList.toggle("active");
        burger.classList.toggle("open");
    });

    // ✨ Auto close menu saat scroll
    window.addEventListener("scroll", () => {
        if (navMenu.classList.contains("active")) {
            navMenu.classList.remove("active");
            burger.classList.remove("open");
        }
    });
});

// ANIMASI FOOTER
document.addEventListener("scroll", function () {
    const footer = document.querySelector(".sip-footer");
    const footerPosition = footer.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (footerPosition < screenHeight - 50) {
        footer.classList.add("footer-visible");
    }
});

// Animasi muncul saat scroll
const cards = document.querySelectorAll(".card");

function revealCards() {
    const windowHeight = window.innerHeight;

    cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;

        if (cardTop < windowHeight - 80) {
            card.classList.add("reveal");
        }
    });
}

window.addEventListener("scroll", revealCards);
window.addEventListener("load", revealCards);

const allTabButtons = document.querySelectorAll(
  ".tab-button, .tab-button-copy"
);

allTabButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    allTabButtons.forEach((b) => b.classList.remove("active"));

    btn.classList.add("active");

    const targetSection = document.getElementById(btn.dataset.target);

    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  });
});

const subButtons = document.querySelectorAll(".sub-button");

subButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    subButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    const targetID = btn.dataset.target;
    const targetSubSection = document.getElementById(targetID);

    if (targetSubSection) {
      targetSubSection.scrollIntoView({ behavior: "smooth" });
    }
  });
});
