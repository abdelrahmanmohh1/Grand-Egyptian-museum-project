/* --- THEME SYSTEM (2 Marks: Save/Load) --- */

function toggleTheme() {
    const themeLink = $("#theme-link");
    let selectedTheme = "";

    // Toggle between the two files
    if (themeLink.attr("href") === "theme-light.css") {
        themeLink.attr("href", "theme-dark.css");
        selectedTheme = "dark";
    } else {
        themeLink.attr("href", "theme-light.css");
        selectedTheme = "light";
    }

    // WRITE: Save preference (Requirement: Write to Storage)
    localStorage.setItem("museum-theme-choice", selectedTheme);
}

function applySavedTheme() {
    // READ: Get preference (Requirement: Read from Storage)
    const savedTheme = localStorage.getItem("museum-theme-choice");
    const themeLink = $("#theme-link");

    if (savedTheme === "dark") {
        themeLink.attr("href", "theme-dark.css");
    } else {
        themeLink.attr("href", "theme-light.css");
    }
}

/* --- DOCUMENT READY --- */
$(document).ready(function() {
    // Apply theme immediately on load
    applySavedTheme();

    // Theme Switcher Button
    $("#themebtn").on("click", function() {
        toggleTheme();
    });

    // Login Security Check (Requirement: Read/Write Storage)
    // Checks if the user actually signed up before viewing collections
    const protectedPages = ["search.html", "gallery.html", "price.html"];
    const currentPage = window.location.pathname.split("/").pop();

    if (protectedPages.includes(currentPage)) {
        const isLoggedIn = localStorage.getItem("isLoggedIn");
        const userEmail = localStorage.getItem("userEmail");

        if (isLoggedIn !== "true" || !userEmail) {
            alert("Access Denied: Please Sign Up to view our collections.");
            window.location.href = "signup.html";
        }
    }
});
