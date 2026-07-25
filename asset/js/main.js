document.addEventListener("DOMContentLoaded", () => {
    console.log("Skin Beauty app initialized.");

    const currentYear = new Date().getFullYear();
    const copyrightElements = document.querySelectorAll(".footer-year");
    copyrightElements.forEach((el) => {
        el.textContent = currentYear;
    });
});