const themeBtn = document.getElementById('themebtn');
const body = document.body;

const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark') {
    body.classList.add('dark-mode');
}

themeBtn.addEventListener('click', () => {
   
    body.classList.toggle('dark-mode');
   
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});
window.onload = function() {
    const lightbox = document.getElementById('lightbox');
    const lbImg = document.getElementById('lbImg');
    const lbTitle = document.getElementById('lbTitle');
    const closeBtn = document.getElementById('lbClose');

   
    const links = document.querySelectorAll('.gallery-item a');

    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); 

            
            const source = this.getAttribute('href');
           
            const text = this.parentElement.querySelector('.desc').innerHTML;

          
            lbImg.src = source;
            lbTitle.innerHTML = text;

           
            lightbox.style.display = 'flex';
        });
    });

    closeBtn.onclick = function() {
        lightbox.style.display = 'none';
    };
};
function goToSearch() {
    const query = document.getElementById('homeSearchInput').value;
    window.location.href = `search.html?q=${encodeURIComponent(query)}`;
}
function toggleFavorite(itemId) {
    // Get existing favorites or start a new list
    let favorites = JSON.parse(localStorage.getItem('myFavorites')) || [];

    if (favorites.includes(itemId)) {
        // Remove if already there
        favorites = favorites.filter(id => id !== itemId);
        alert("Removed from favorites!");
    } else {
        // Add to list
        favorites.push(itemId);
        alert("Added to favorites!");
    }

    // Save back to localStorage
    localStorage.setItem('myFavorites', JSON.stringify(favorites));
    
    // Optional: Toggle a CSS class for visual feedback
    event.target.classList.toggle('active');
}
