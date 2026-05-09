function goToHome() {

    document.body.classList.add('fade-out');

    setTimeout(function () {
        window.location.href = "index.html";
    }, 500);
}

function validateSignup(event) {

    event.preventDefault();

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;

    
    if (!email.includes("@")) {
        alert("Email must contain @");
        return;
    }

    
    if (password.length < 8) {
        alert("Password must be at least 8 characters");
        return;
    }

    
    if (!/\d/.test(password)) {
        alert("Password must contain at least one number");
        return;
    }

    
    if (password !== confirmPassword) {
        alert("Passwords do not match");
        return;
    }

   
    localStorage.setItem("isLoggedIn", "true");

   
    goToHome();
}
