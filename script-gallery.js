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

});
document.addEventListener('DOMContentLoaded', () => {
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    let favorites = JSON.parse(localStorage.getItem('myFavorites')) || [];

    galleryItems.forEach(item => {
        const itemName = item.querySelector('.desc').innerText.trim();
        
        if (!item.querySelector('.fav-btn')) {
            const btn = document.createElement('button');
            btn.className = 'fav-btn';
            btn.innerHTML = '❤';
            item.appendChild(btn);
        }

        const heartBtn = item.querySelector('.fav-btn');

        if (favorites.includes(itemName)) {
            heartBtn.classList.add('active');
        }

      
        heartBtn.addEventListener('click', (e) => {
            e.preventDefault(); 
            
            if (favorites.includes(itemName)) {
                // Remove from the list
                favorites = favorites.filter(name => name !== itemName);
                heartBtn.classList.remove('active');
            } else {
                
                favorites.push(itemName);
                heartBtn.classList.add('active');
            }

           
            localStorage.setItem('myFavorites', JSON.stringify(favorites));
        });
    });
});
