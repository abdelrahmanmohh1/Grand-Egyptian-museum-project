document.addEventListener('DOMContentLoaded', function() {
    const themeBtn = document.getElementById('btn-pharaonic');
    const themeLink = document.getElementById('theme-link');

    themeBtn.addEventListener('click', function() {
        let currentTheme = themeLink.getAttribute('href');

        if (currentTheme === 'theme-light.css') {
            themeLink.setAttribute('href', 'theme-dark.css');
        } else {
            themeLink.setAttribute('href', 'theme-light.css');
        }
    });
});