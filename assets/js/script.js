// Select DOM elements
const burger = document.getElementById('burger');
const burgerMenu = document.getElementById('burger-menu');
const closeMenu = document.getElementById('close-menu');
const yearElement = document.getElementById('year');

// Function to toggle the visibility of the burger menu
function toggleBurgerMenu() {
    burgerMenu.classList.toggle('active');
}

// Function to close the burger menu
function closeBurgerMenu() {
    burgerMenu.classList.remove('active');
}

// / Function to manage the menu's display on window resize
function handleResize() {
    if (window.innerWidth > 874) {
        burgerMenu.classList.remove('active');
    }
}

// Function to set and display the current year
function updateYear() {
    if (yearElement) {
        const currentYear = new Date().getFullYear();
        yearElement.textContent = currentYear;
    }
}

// Add event listeners for burger and close menu actions
if (burger) {
    burger.addEventListener('click', toggleBurgerMenu);
}

if (closeMenu) {
    closeMenu.addEventListener('click', closeBurgerMenu);
}

// Event listener for window resize to handle menu visibility
window.addEventListener('resize', handleResize);

// Call the function to set and display the current year on page load
updateYear();