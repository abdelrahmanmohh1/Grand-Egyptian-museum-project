/* --- THIS RUNS ON EVERY PAGE LOAD --- */
$(document).ready(function() {
    // 1. READ THE THEME
    const savedTheme = localStorage.getItem("userTheme");
    if (savedTheme === "dark") {
        $("#theme-link").attr("href", "theme-dark.css");
    } else {
        $("#theme-link").attr("href", "theme-light.css");
    }

    // 2. CHECK LOGIN STATUS
    // If the user is NOT logged in and tries to go to a "member" page, kick them out
    const protectedPages = ["search.html", "gallery.html", "price.html"];
    const currentPage = window.location.pathname.split("/").pop();

    if (protectedPages.includes(currentPage)) {
        if (localStorage.getItem("isLoggedIn") !== "true") {
            alert("This area is for members only. Please Login or Sign up.");
            window.location.href = "login.html";
        }
    }
});

/* --- THEME TOGGLE FUNCTION --- */
function toggleTheme() {
    const themeLink = $("#theme-link");
    let current = themeLink.attr("href");
    let newTheme = "";

    if (current === "theme-light.css") {
        themeLink.attr("href", "theme-dark.css");
        newTheme = "dark";
    } else {
        themeLink.attr("href", "theme-light.css");
        newTheme = "light";
    }

    // SAVE THE CHOICE
    localStorage.setItem("userTheme", newTheme);
}

// Attach the toggle function to your button
$(document).on("click", "#themebtn", function() {
    toggleTheme();
});