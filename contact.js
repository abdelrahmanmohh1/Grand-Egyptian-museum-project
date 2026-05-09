
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


