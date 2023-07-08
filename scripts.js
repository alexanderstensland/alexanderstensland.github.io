
function toggleContactInfo() {
    var contactInfo = document.getElementById("contactInfo");
    if (contactInfo.style.maxHeight === "0px") {
        contactInfo.style.maxHeight = contactInfo.scrollHeight + "px";
        contactInfo.style.opacity = 1;
    } else {
        contactInfo.style.maxHeight = "0px";
        contactInfo.style.opacity = 0;
    }
}

document.addEventListener("DOMContentLoaded", function () {
    var sections = document.getElementsByClassName("hidden-section");
    var delay = 450; // Delay in milliseconds between each reveal

    for (var i = 0; i < sections.length; i++) {
        (function (index) {
            setTimeout(function () {
                sections[index].style.opacity = 1;
            }, delay * (index + 1));
        })(i);
    }
});

document.addEventListener("DOMContentLoaded", function () {
    var menuButton = document.getElementById("menu-button");
    var menuDropdown = document.getElementById("menu-dropdown");

    menuButton.addEventListener("click", function () {
        menuDropdown.style.display = menuDropdown.style.display === "none" ? "block" : "none";
    });

    menuDropdown.addEventListener("mouseleave", function () {
        menuDropdown.style.display = "none";
    });
});

document.addEventListener("DOMContentLoaded", function () {
    var sections = document.querySelectorAll(".section");

    function handleSectionChange() {
        sections.forEach(function (section) {
            var isActive = section.classList.contains("active-section");
            var sectionContent = section.querySelector(".section-content");
            if (isActive && !sectionContent.dataset.loaded) {
                sectionContent.style.display = "block";
                sectionContent.dataset.loaded = true;
            } else {
                sectionContent.style.display = "none";
            }
        });
    }

    function smoothScroll(target) {
        var destination = document.querySelector(target);
        var destinationPosition = destination.offsetTop;
        var startPosition = window.pageYOffset;
        var distance = destinationPosition - startPosition;
        var duration = 800;
        var start = null;

        function scrollAnimation(timestamp) {
            if (!start) start = timestamp;
            var progress = timestamp - start;
            window.scrollTo(0, easeInOutCubic(progress, startPosition, distance, duration));
            if (progress < duration) {
                window.requestAnimationFrame(scrollAnimation);
            }
        }

        function easeInOutCubic(t, b, c, d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t * t + b;
            t -= 2;
            return c / 2 * (t * t * t + 2) + b;
        }

        window.requestAnimationFrame(scrollAnimation);
    }

    sections.forEach(function (section) {
        section.addEventListener("click", function () {
            sections.forEach(function (section) {
                section.classList.remove("active-section");
            });
            section.classList.add("active-section");
            handleSectionChange();
        });
    });

    handleSectionChange();
});


