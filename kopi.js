// Tombol menuju ke bagian Sejarah
document.querySelector(".btn-sejarah").addEventListener("click", function () {
    document.querySelector("#tentang").scrollIntoView({
        behavior: "smooth"
    });
});

// Tombol menuju ke WhatsApp
document.querySelector(".btn-kontak").addEventListener("click", function () {
    window.open("https://wa.me/6282333497881", "_blank");
});

// Tombol Menu (sementara dulu)
document.querySelector(".btn-butto-menu").addEventListener("click", function () {
    //alert("Halaman Menu sedang disiapkan 😊");
    // Kalau nanti sudah ada halaman menu:
    window.location.href ="produk.html";
});

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
