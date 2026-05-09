/* Theme Toggle System - Matches Gallery & Events */

const themeBtn = document.getElementById('themebtn');
const body = document.body;

// Apply saved theme on page load
function applySavedTheme() {
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'dark') {
        body.classList.add('dark-mode');
    } else {
        body.classList.remove('dark-mode');
    }
}

// Toggle theme and save preference
function toggleTheme() {
    body.classList.toggle('dark-mode');
    
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    // Apply saved theme immediately
    applySavedTheme();
    
    // Add click listener to theme button
    if (themeBtn) {
        themeBtn.addEventListener('click', toggleTheme);
    }
});

// Also apply theme as early as possible (before DOM ready)
applySavedTheme();
