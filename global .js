/* --- GLOBAL MASTER SCRIPT --- */

$(document).ready(function() {
    // 1. READ & APPLY THEME (The "Load" part of the rubric)
    const savedTheme = localStorage.getItem("userTheme");
    const themeLink = $("#theme-link");

    if (savedTheme === "dark") {
        themeLink.attr("href", "theme-dark.css");
        $("body").addClass("dark-mode");
    } else {
        themeLink.attr("href", "theme-light.css");
        $("body").removeClass("dark-mode");
    }

    // 2. READ & CHECK LOGIN STATUS (The "Security" part)
    const protectedPages = ["search.html", "gallery.html", "price.html", ];
    // Get the current filename (e.g., "gallery.html")
    const currentPage = window.location.pathname.split("/").pop();

    if (protectedPages.includes(currentPage)) {
        const isLoggedIn = localStorage.getItem("isLoggedIn");
        if (isLoggedIn !== "true") {
            alert("This area is for members only. Please Login or Sign up.");
            window.location.href = "signup.html";
        }
    }
});

/* --- THEME TOGGLE FUNCTION (The "Save" part) --- */
function toggleTheme() {
    const themeLink = $("#theme-link");
    const body = $("body");
    let newTheme = "";

    // Toggle logic: checks the current file path
    if (themeLink.attr("href") === "theme-light.css") {
        themeLink.attr("href", "theme-dark.css");
        body.addClass("dark-mode");
        newTheme = "dark";
    } else {
        themeLink.attr("href", "theme-light.css");
        body.removeClass("dark-mode");
        newTheme = "light";
    }

    // WRITE: Save the choice so it persists across all 8 pages
    localStorage.setItem("userTheme", newTheme);
}

// Event Listener for the button
// Using $(document).on ensures it works even if the button is loaded dynamically
$(document).on("click", "#themebtn", function(e) {
    e.preventDefault(); // Prevents page jump if the button is inside a form
    toggleTheme();
});
