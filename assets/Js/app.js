// toggle theme
document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById("toggleTheme");
  const themeLink = document.getElementById("theme-link");
  const lightThemeURL = "assets/css/light-theme.css";
  const darkThemeURL = "assets/css/dark-theme.css";

  toggleButton.addEventListener("click", function () {
    if (themeLink.href.includes(lightThemeURL)) {
      themeLink.href = darkThemeURL;
      alert("Switching to dark theme");
    } else {
      themeLink.href = lightThemeURL;
      alert("Switching to light theme");
    }
  });
});
// expand screen
$(document).ready(function () {
  $("#fullscreen-button").on("click", function () {
    var element = document.documentElement; // Get the HTML element

    if (
      !document.fullscreenElement && // If no element is in full screen
      !document.mozFullScreenElement &&
      !document.webkitFullscreenElement &&
      !document.msFullscreenElement
    ) {
      // Check if any fullscreen element is present
      if (element.requestFullscreen) {
        element.requestFullscreen(); // Enter fullscreen mode
      } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
      } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen();
      } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen(); // Exit fullscreen mode
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    }
  });
});

// =====================================quick menu
$(".side-menu-quick-btn").on("click", function () {
  $(".side-menu-quick").css("right", "0px");
  $("#overlay").css("display", "block");
});
$(".close-btn").on("click", function () {
  $(".side-menu-quick").css("right", "-400px");
  $('#overlay').css("display", "none");
});

$("#overlay").on("click", function () {
    $(this).css("display", "none");
    $(".side-menu-quick").css("right", "-400px");
  });
 