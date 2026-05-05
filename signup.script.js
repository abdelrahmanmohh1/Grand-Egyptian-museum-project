function goToHome(event) {
    event.preventDefault();
    
    document.body.classList.add('fade-out');

  
    setTimeout(function() {
        window.location.href = "index.html"; 
    }, 500); 
}