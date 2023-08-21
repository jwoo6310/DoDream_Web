// script.js
document.addEventListener("DOMContentLoaded", function () {
  const backgroundElement = document.querySelector(".background-image");
  let currentIndex = parseInt(sessionStorage.getItem("backgroundIndex")) || 1;

  function changeBackgroundImage(backgroundNumber) {
    backgroundElement.style.backgroundImage = `url('image-background${backgroundNumber}.png')`;
    currentIndex = backgroundNumber;
    sessionStorage.setItem("backgroundIndex", currentIndex);
  }

  setInterval(function () {
    currentIndex = (currentIndex % 3) + 1;
    changeBackgroundImage(currentIndex);
  }, 15000); // Change image every 10 seconds

  // Set the initial background image
  changeBackgroundImage(currentIndex);
});
