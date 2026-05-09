
const themeBtn = document.getElementById('themebtn');
const body = document.body;

const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark') {
    body.classList.add('dark-mode');
}

if (themeBtn) {
    themeBtn.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
    });
}
document.addEventListener('DOMContentLoaded', () => {
    // --- Lightbox Setup ---
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

    if (closeBtn) {
        closeBtn.onclick = function() {
            lightbox.style.display = 'none';
        };
    }

    const galleryItems = document.querySelectorAll('.gallery-item');
    let favorites = JSON.parse(localStorage.getItem('myFavorites')) || [];

    galleryItems.forEach(item => {
        const descElement = item.querySelector('.desc');
        if (!descElement) return;

        const itemName = descElement.innerText.trim();
        const btn = item.querySelector('.fav-btn');

        if (!btn) return;

        if (favorites.includes(itemName)) {
            btn.classList.add('active');
        }

        btn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();

            if (favorites.includes(itemName)) {
                favorites = favorites.filter(name => name !== itemName);
                btn.classList.remove('active');
            } else {
                favorites.push(itemName);
                btn.classList.add('active');
            }
            localStorage.setItem('myFavorites', JSON.stringify(favorites));
        });
    });
});

function goToSearch() {
    const searchInput = document.getElementById('homeSearchInput');
    if (searchInput) {
        const query = searchInput.value;
        window.location.href = `search.html?q=${encodeURIComponent(query)}`;
    }
}
