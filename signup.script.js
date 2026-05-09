
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

    
    localStorage.setItem("userEmail", email);
    localStorage.setItem("isLoggedIn", "true");

    alert("Account created for " + email);
    goToHome();
}


const themeBtn = document.getElementById("themebtn");

if (themeBtn) {
    themeBtn.addEventListener("click", function() {
        // Toggle the class
        document.body.classList.toggle("dark-mode");
        
      
        if (document.body.classList.contains("dark-mode")) {
            localStorage.setItem("savedTheme", "dark");
        } else {
            localStorage.setItem("savedTheme", "light");
        }
    });
}


function loadSettings() {
    const savedTheme = localStorage.getItem("savedTheme");
    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");
    }

    
    const path = window.location.pathname;
    if (path.includes("search.html") || path.includes("gallery.html")) {
        const loggedIn = localStorage.getItem("isLoggedIn");
        const registered = localStorage.getItem("userEmail");

        if (loggedIn !== "true" || !registered) {
            alert("Please sign up to access the GEM Collections.");
            window.location.href = "signup.html";
        }
    }
}


window.onload = loadSettings;


function setLayout(type) {
    const container = document.querySelector(".gallery-container");
    if (container) {
        container.classList.remove("grid", "list", "details");
        container.classList.add(type);
    }
}


function mySearchFunction() {
    var input = document.getElementById("mySearchInput");
    var filter = input.value.toUpperCase();
    var items = document.getElementsByClassName("gallery-item");

    for (var i = 0; i < items.length; i++) {
        var desc = items[i].getElementsByClassName("desc")[0];
        if (desc) {
            var textValue = desc.textContent || desc.innerText;
            if (textValue.toUpperCase().indexOf(filter) > -1) {
                items[i].style.display = "";
            } else {
                items[i].style.display = "none";
            }
        }
    }
}

function clearSearch() {
    const input = document.getElementById("mySearchInput");
    if(input) input.value = "";
    const items = document.getElementsByClassName("gallery-item");
    for (let i = 0; i < items.length; i++) {
        items[i].style.display = "";
    }
}
