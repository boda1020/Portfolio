console.log("Portfolio Loaded");

// Sidebar toggle
function toggleSidebar() {
    document.getElementById('sidebar').classList.toggle('show');
}

// إضافة class visible عند دخول القسم للعرض
const sections = document.querySelectorAll('section');

function animateSections() {
    const triggerBottom = window.innerHeight * 0.85;
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < triggerBottom) {
            section.classList.add('visible');
        }
    });
}

// شغّل الانيميشن عند scroll و load
window.addEventListener('scroll', animateSections);
window.addEventListener('load', animateSections);
