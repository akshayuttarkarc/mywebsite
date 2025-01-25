// Collapsible functionality
const collapsibles = document.querySelectorAll(".collapsible");
collapsibles.forEach((collapsible) => {
    collapsible.addEventListener("click", function () {
        this.classList.toggle("active");
        const content = this.nextElementSibling;
        const icon = this.querySelector("i");
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
            icon.style.transform = "rotate(0deg)";
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
