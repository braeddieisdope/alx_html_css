
document.addEventListener('DOMContentLoaded', function() {
    // Select the hamburger icon and the navigation menu
    const hamburgerIcon = document.getElementById('hamburger-icon');
    const nav = document.querySelector('.nav');

    // Add a click event listener to the hamburger icon
    hamburgerIcon.addEventListener('click', function() {
        // Toggle the 'menu-open' class on the icon and the nav element
        // This will trigger the CSS to show/hide the menu and animate the icon
        nav.classList.toggle('menu-open');
        hamburgerIcon.classList.toggle('menu-open');
    });
});