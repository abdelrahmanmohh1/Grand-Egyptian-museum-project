document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('museumContactForm');
    const errorDisplay = document.getElementById('errorMessage');

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            
            event.preventDefault();

           
            const name = document.getElementById('userName').value.trim();
            const email = document.getElementById('userEmail').value.trim();
            const message = document.getElementById('userMessage').value.trim();
            
            let errors = [];

           
            if (name.length < 3) {
                errors.push("Name must be at least 3 characters.");
            }

            if (!email.includes("@") || !email.includes(".")) {
                errors.push("Please enter a valid email address.");
            }

            if (message.length < 10) {
                errors.push("Message is too short (minimum 10 characters).");
            }

            
            errorDisplay.style.display = "block";

            if (errors.length > 0) {
                // Show errors in red
                errorDisplay.style.backgroundColor = "#ffe6e6";
                errorDisplay.style.color = "red";
                errorDisplay.style.border = "1px solid red";
                errorDisplay.innerText = errors.join(" | ");
            } else {
                
                errorDisplay.style.backgroundColor = "#e6ffed";
                errorDisplay.style.color = "green";
                errorDisplay.style.border = "1px solid green";
                errorDisplay.innerText = "Thank you! Your message has been sent successfully.";
                
               
                contactForm.reset(); 
            }
        });
    }
});
