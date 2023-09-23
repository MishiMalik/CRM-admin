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
