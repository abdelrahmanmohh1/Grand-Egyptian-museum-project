document.addEventListener('DOMContentLoaded', () => {
    const themeBtn = document.getElementById('themebtn');
    const bodyElement = document.body;
    if (localStorage.getItem('dark-mode') === 'enabled') {
        bodyElement.classList.add('dark-mode');
    }

    if (themeBtn) {
        themeBtn.addEventListener('click', () => {
            bodyElement.classList.toggle('dark-mode');

            // Save the user's preference to localStorage (Requirement 2)
            if (bodyElement.classList.contains('dark-mode')) {
                localStorage.setItem('dark-mode', 'enabled');
            } else {
                localStorage.setItem('dark-mode', 'disabled');
            }
        });
    }

    const contactForm = document.getElementById('museumContactForm');
    const errorDisplay = document.getElementById('errorMessage');

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const name = document.getElementById('userName').value.trim();
            const email = document.getElementById('userEmail').value.trim();
            let errors = [];
            if (name.length < 3) {
                errors.push("Please enter a valid name (at least 3 characters).");
            }
            if (!email.includes("@") || !email.includes(".")) {
                errors.push("Please enter a valid email address containing '@' and a dot.");
            }

            if (errors.length > 0) {
                errorDisplay.style.display = "block";
                errorDisplay.style.color = "red";
                errorDisplay.innerText = errors.join(" ");
            } else {
                errorDisplay.style.display = "block";
                errorDisplay.style.color = "green";
                errorDisplay.innerText = "Thank you! Your message has been sent successfully.";
                contactForm.reset(); 
            }
        });
    }
});


