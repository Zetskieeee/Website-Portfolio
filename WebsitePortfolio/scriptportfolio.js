document.addEventListener("DOMContentLoaded", function () {
    const dropdownTitles = document.querySelectorAll(".dropdown-title");

    dropdownTitles.forEach(title => {
        title.addEventListener("click", function () {
            const content = this.nextElementSibling;

            // Toggle active class
            content.classList.toggle("active");

            // Close other dropdowns
            document.querySelectorAll(".dropdown-content").forEach(otherContent => {
                if (otherContent !== content && otherContent.classList.contains("active")) {
                    otherContent.classList.remove("active");
                }
            });
        });
    });
});
