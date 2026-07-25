document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
    const currentPath = window.location.pathname;

    navLinks.forEach((link) => {
        if (link.getAttribute("href") && currentPath.includes(link.getAttribute("href"))) {
            navLinks.forEach((item) => item.classList.remove("active"));
            link.classList.add("active");
        }
    });
});