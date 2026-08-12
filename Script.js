// Welcome message
window.addEventListener("load", function () {
    console.log("Welcome to Esakki Raja's Portfolio!");
});

// Highlight navigation link when clicked
const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.forEach(function (item) {
            item.style.color = "white";
        });

        this.style.color = "#60a5fa";
    });
});

// Current year in footer
const footer = document.querySelector("footer p");
const year = new Date().getFullYear();

footer.innerHTML = `© ${year} Esakki Raja | Personal Portfolio`;
