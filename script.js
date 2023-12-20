// script.js
/* Background Transition */
document.addEventListener("DOMContentLoaded", function () {
  const backgroundElement = document.querySelector(".background-image");
  let currentIndex = parseInt(sessionStorage.getItem("backgroundIndex")) || 1;

  function changeBackgroundImage(backgroundNumber) {
    backgroundElement.style.backgroundImage = `url('assets/image-background${backgroundNumber}.jpg')`;
    currentIndex = backgroundNumber;
    sessionStorage.setItem("backgroundIndex", currentIndex);
  }

  setInterval(function () {
    currentIndex = (currentIndex % 3) + 1;
    changeBackgroundImage(currentIndex);
  }, 10000); // Change image every 10 seconds

  // Set the initial background image
  changeBackgroundImage(currentIndex);
});

/* Youtube */
// Replace with your actual API Key
var apiKey = 'AIzaSyDNVB-FtBheiZx_4zaY0tC31Nc9VWaGmM0';

// Replace with the channel ID you want to fetch videos from
var channelId = 'UC-YSiZ8LPKGur2MVHN95slQ';

$(document).ready(function () {
    // Fetch the latest video using YouTube Data API
    $.get(
        'https://www.googleapis.com/youtube/v3/search', {
        part: 'snippet',
        channelId: channelId,
        maxResults: 1,
        order: 'date',
        type: 'video',
        key: apiKey
    },
        function (data) {
            if (data.items.length > 0) {
                var videoId = data.items[0].id.videoId;
                var embedUrl = 'https://www.youtube.com/embed/' + videoId;
                var iframe = '<iframe width="560" height="315" src="' + embedUrl + '" frameborder="0" allowfullscreen></iframe>';
                $('.youtube-video').html(iframe);
            }
        }
    );
});
