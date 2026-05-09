function goToHome(e) {
    e.preventDefault();

    localStorage.setItem("isLoggedIn", "true");

    window.location.href = "index.html";
}

function toggleMode() {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        localStorage.setItem("mode", "dark");
    } else {
        localStorage.setItem("mode", "light");
    }
}

window.onload = function () {

    
    let mode = localStorage.getItem("mode");

    if (mode === "dark") {
        document.body.classList.add("dark");
    }

    
    if (
    localStorage.getItem("isLoggedIn") !== "true" &&
    !window.location.href.includes("login.html") &&
    !window.location.href.includes("signup.html")
)  {window.location.href = "login.html";}
};

function logout() {
    localStorage.removeItem("isLoggedIn");

    window.location.href = "login.html";
}

function handleLogin(e) {
    e.preventDefault();

    const userCode = document.getElementById("userCode").value;
    const zipCode = document.getElementById("zipCode").value;

    if (userCode !== "" && zipCode !== "") {

        localStorage.setItem("isLoggedIn", "true");

        window.location.href = "index.html";

    } else {

        alert("Please enter both the code and zip code!");

    }
}
