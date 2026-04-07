document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.querySelector('.menu-toggle');
    const menuItems = document.querySelector('.menu-items');

    toggleButton.addEventListener('click', () => {
        toggleButton.classList.toggle('active');
        menuItems.style.display = menuItems.style.display === 'block' ? 'none' : 'block';
    });
});