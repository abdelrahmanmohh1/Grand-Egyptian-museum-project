
function goToHome() {
    
    document.body.classList.add('fade-out');
    
    setTimeout(function () {
        window.location.href = "index.html";
    }, 500);
}


function validateSignup(event) {
   
    event.preventDefault();

   
    let name = document.getElementById("fullName") ? document.getElementById("fullName").value : "";
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;

 
    if (name.trim() === "" || email.trim() === "" || password === "") {
        alert("Error: All fields must be filled out.");
        return;
    }

  
    if (!email.includes("@")) {
        alert("Error: Email must contain the '@' symbol.");
        return;
    }

    
    if (password.length < 8) {
        alert("Error: Password must be at least 8 characters long.");
        return;
    }

   
    if (!/\d/.test(password)) {
        alert("Error: Password must contain at least one number.");
        return;
    }

    
    if (password !== confirmPassword) {
        alert("Error: Passwords do not match.");
        return;
    }

  
    localStorage.setItem("userEmail", email);
    localStorage.setItem("isLoggedIn", "true");

  
    alert("Registration Successful! Welcome to the GEM.");
    goToHome();
}


window.addEventListener('load', function() {
    const savedTheme = localStorage.getItem("savedTheme");
    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");
    }
});


const themeBtn = document.getElementById("themebtn");
if (themeBtn) {
    themeBtn.addEventListener("click", function() {
        document.body.classList.toggle("dark-mode");
        const currentTheme = document.body.classList.contains("dark-mode") ? "dark" : "light";
        localStorage.setItem("savedTheme", currentTheme); // Writing to storage
    });
}
