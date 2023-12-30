const header = document.querySelector(".header");

function handleHeaderTransition() {
    if (window.scrollY) {
        header.classList.add("fixed-header");
    } else {
        header.classList.remove("fixed-header");
    }
}

window.addEventListener("scroll", handleHeaderTransition);

const mobileButton = document.querySelector(".navigation-mobile-button");
const mobileNavLinks = document.querySelector(".mobile-nav-links");
const ionIcon = mobileButton.querySelector("ion-icon");

mobileButton.addEventListener("click", () => {
    mobileNavLinks.classList.toggle("active");

    if (ionIcon.getAttribute("name") === "menu-outline") {
        ionIcon.setAttribute("name", "close-outline");
    } else {
        ionIcon.setAttribute("name", "menu-outline");
    }
});

const accordionHeaders = document.querySelectorAll(".accordion-header");

accordionHeaders.forEach((header) => {
    const toggleIcon = header.querySelector(".toggle-icon");
    const addIcon = "add-outline";
    const closeIcon = "close-outline";
    const accordionItem = header.parentElement;
    const content = accordionItem.querySelector(".accordion-content");

    toggleIcon.addEventListener("click", () => {
        if (toggleIcon.getAttribute("name") === addIcon) {
            content.style.display = "block";
            toggleIcon.setAttribute("name", closeIcon);
            accordionItem.classList.add("active");
        } else {
            content.style.display = "none";
            toggleIcon.setAttribute("name", addIcon);
            accordionItem.classList.remove("active");
        }
    });
});
