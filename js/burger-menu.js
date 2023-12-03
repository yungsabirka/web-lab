document.addEventListener('DOMContentLoaded', function () {
    let burgerIcon = document.getElementById('burgerIcon');
    burgerIcon.addEventListener('click', toggleMenu);
});

function toggleMenu() {
    let nav = document.querySelector('.nav');
    nav.style.display = (nav.style.display === 'none' || nav.style.display === '') ? 'flex' : 'none';
}

window.addEventListener('resize', handleMenuDisplay);

function handleMenuDisplay() {
    let nav = document.querySelector('.nav');

    if (window.innerWidth > 600) {
        nav.style.display = 'flex';
    }
}
