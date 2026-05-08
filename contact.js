document.addEventListener('DOMContentLoaded', () => {
    const themeBtn = document.getElementById('themebtn');
    const bodyElement = document.body;

    if (localStorage.getItem('dark-mode') === 'enabled') {
        bodyElement.classList.add('dark-mode');
    }
    themeBtn.addEventListener('click', () => {
       
        bodyElement.classList.toggle('dark-mode');

      
        if (bodyElement.classList.contains('dark-mode')) {
            localStorage.setItem('dark-mode', 'enabled');
        } else {
            localStorage.setItem('dark-mode', 'disabled');
        }
    });
});
