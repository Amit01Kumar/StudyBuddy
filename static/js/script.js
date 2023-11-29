// // Actions:

// const closeButton = `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
// <title>remove</title>
// <path d="M27.314 6.019l-1.333-1.333-9.98 9.981-9.981-9.981-1.333 1.333 9.981 9.981-9.981 9.98 1.333 1.333 9.981-9.98 9.98 9.98 1.333-1.333-9.98-9.98 9.98-9.981z"></path>
// </svg>
// `;
// const menuButton = `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
// <title>ellipsis-horizontal</title>
// <path d="M16 7.843c-2.156 0-3.908-1.753-3.908-3.908s1.753-3.908 3.908-3.908c2.156 0 3.908 1.753 3.908 3.908s-1.753 3.908-3.908 3.908zM16 1.98c-1.077 0-1.954 0.877-1.954 1.954s0.877 1.954 1.954 1.954c1.077 0 1.954-0.877 1.954-1.954s-0.877-1.954-1.954-1.954z"></path>
// <path d="M16 19.908c-2.156 0-3.908-1.753-3.908-3.908s1.753-3.908 3.908-3.908c2.156 0 3.908 1.753 3.908 3.908s-1.753 3.908-3.908 3.908zM16 14.046c-1.077 0-1.954 0.877-1.954 1.954s0.877 1.954 1.954 1.954c1.077 0 1.954-0.877 1.954-1.954s-0.877-1.954-1.954-1.954z"></path>
// <path d="M16 31.974c-2.156 0-3.908-1.753-3.908-3.908s1.753-3.908 3.908-3.908c2.156 0 3.908 1.753 3.908 3.908s-1.753 3.908-3.908 3.908zM16 26.111c-1.077 0-1.954 0.877-1.954 1.954s0.877 1.954 1.954 1.954c1.077 0 1.954-0.877 1.954-1.954s-0.877-1.954-1.954-1.954z"></path>
// </svg>
// `;

// const actionButtons = document.querySelectorAll('.action-button');

// if (actionButtons) {
//   actionButtons.forEach(button => {
//     button.addEventListener('click', () => {
//       const buttonId = button.dataset.id;
//       let popup = document.querySelector(`.popup-${buttonId}`);
//       console.log(popup);
//       if (popup) {
//         button.innerHTML = menuButton;
//         return popup.remove();
//       }

//       const deleteUrl = button.dataset.deleteUrl;
//       const editUrl = button.dataset.editUrl;
//       button.innerHTML = closeButton;

//       popup = document.createElement('div');
//       popup.classList.add('popup');
//       popup.classList.add(`popup-${buttonId}`);
//       popup.innerHTML = `<a href="${editUrl}">Edit</a>
//       <form action="${deleteUrl}" method="delete">
//         <button type="submit">Delete</button>
//       </form>`;
//       button.insertAdjacentElement('afterend', popup);
//     });
//   });
// }

// Menu

const dropdownMenu = document.querySelector(".dropdown-menu");
const dropdownButton = document.querySelector(".dropdown-button");

if (dropdownButton) {
  dropdownButton.addEventListener("click", () => {
    dropdownMenu.classList.toggle("show");
  });
}

// Upload Image
const photoInput = document.querySelector("#avatar");
const photoPreview = document.querySelector("#preview-avatar");
if (photoInput)
  photoInput.onchange = () => {
    const [file] = photoInput.files;
    if (file) {
      photoPreview.src = URL.createObjectURL(file);
    }
  };





  document.addEventListener("DOMContentLoaded", function () {
    var line1Container = document.getElementById("line1");
    var line2Container = document.getElementById("line2");
    var textLines = ["Elevate Your", "Study Game...."];
    var lineIndex = 0;
    var charIndex = 0;
  
    function clearText() {
      line1Container.innerHTML = "";
      line2Container.innerHTML = "";
    }
  
    function typeText() {
      var currentLine = textLines[lineIndex];
  
      if (lineIndex === 0) {
        line1Container.innerHTML = currentLine.substring(0, charIndex);
      } else {
        line2Container.innerHTML = currentLine.substring(0, charIndex);
      }
  
      charIndex++;
  
      if (charIndex <= currentLine.length) {
        setTimeout(typeText, 200); // Adjust the interval based on your typing speed preference
      } else {
        charIndex = 0;
        lineIndex++;
  
        // Reset to the first line if we've reached the end
        if (lineIndex === textLines.length) {
          lineIndex = 0;
          // Clear the text before starting a new loop
          clearText();
          // Add a delay before starting the next loop
          setTimeout(typeText, 500);
        } else {
          // Add a delay before starting the next line
          setTimeout(typeText, 500);
        }
      }
    }
  
    // Start typing animation when the page loads
    typeText();
  });
  
  
  
  
  
  
  document.addEventListener("DOMContentLoaded", function () {
    // Smooth scrolling for anchor links
    document.querySelectorAll('.navbar a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1); // Remove the '#'
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
  // Get the About section element
  var aboutSection = document.getElementById('about-section');

  // Add click event listener to the About tab
  aboutSection.addEventListener('click', function (event) {
      event.preventDefault();

      // Get the height of the document body
      var bodyHeight = document.body.scrollHeight;

      // Scroll to the end of the document body with smooth behavior
      window.scrollTo({
          top: bodyHeight,
          behavior: 'smooth'
      });
  });
});

  
  







// YouTube API callback function
function onYouTubeIframeAPIReady() {
  var player = new YT.Player('player', {
    height: '360',
    width: '640',
    videoId: 'YOUR_YOUTUBE_VIDEO_ID',
  });
}
