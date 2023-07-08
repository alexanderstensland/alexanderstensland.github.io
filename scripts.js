
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

document.addEventListener("DOMContentLoaded", function() {
    var roundedHeader = document.querySelector(".rounded-header");
    var hiddenSection = document.querySelector(".hidden-section");
  
    // Set up the fade animation
    roundedHeader.style.opacity = 1;
    roundedHeader.style.transition = "opacity 1s";
  
    // Start the fade animation
    setTimeout(function() {
      roundedHeader.style.opacity = 0;
    }, 5000); // Adjust the delay (in milliseconds) as needed
  
    // Replace the header with the footer after the animation is complete
    setTimeout(function() {
      roundedHeader.replaceWith(createFooter());
      hiddenSection.remove();
    }, 6500); // Adjust the delay (in milliseconds) as needed
  
// Function to create the "footer" element with a straight bar
function createFooter() {
  var footerDiv = document.createElement("div");
  footerDiv.className = "footer-bar";
  footerDiv.style.width = "800px";
  footerDiv.style.height = "2px";
  footerDiv.style.backgroundColor = "#333";
  footerDiv.style.margin = "0 auto"; // Center the bar horizontally

  return footerDiv;
}
  });

  document.addEventListener("DOMContentLoaded", function() {
    var roundedHeader = document.querySelector(".rounded-header");
  
    // Check if the "displayHeader" key exists in local storage
    if (localStorage.getItem("displayHeader") === "true") {
      roundedHeader.style.display = "none"; // Hide the section
    } else {
      // Show the section and set the "displayHeader" key to true
      roundedHeader.style.display = "block";
      localStorage.setItem("displayHeader", "true");
    }
  });
  
  

  