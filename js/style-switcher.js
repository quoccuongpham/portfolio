// Toggler Style Switcher
const styleSwitcherToggler = document.querySelector('.style-switcher-toggler');
styleSwitcherToggler.addEventListener('click', () => {
    document.querySelector('.style-switcher').classList.toggle('open');
})

// hide styte switcher on scroll
window.addEventListener('scroll', () => {
    if (document.querySelector('.style-switcher').classList.contains('open')) {
        document.querySelector('.style-switcher').classList.remove('open');
    }
})

// Theme Colors
const altermateStyle = document.querySelectorAll('.altermate-style');

function setActiveStyle(color) {
    altermateStyle.forEach((style) => {
        if (color === style.getAttribute('title')) {
            style.removeAttribute('disabled');
        }
        else {
            style.setAttribute('disabled', 'true');
        }
    })
}

// Theme light and dark mode
const dayNight = document.querySelector('.day-night');
dayNight.addEventListener('click', () => {
    dayNight.querySelector('i').classList.toggle('fa-sun');
    dayNight.querySelector('i').classList.toggle('fa-moon');
    document.body.classList.toggle('dark');
})
window.addEventListener('load', () => {
    if (document.body.classList.contains('dark')) {
        dayNight.querySelector('i').classList.add('fa-sun');
    }
    else {
        dayNight.querySelector('i').classList.add('fa-moon');
    }
})

// Asside
const navItem = document.querySelectorAll('.nav li');
console.log(navItem)
navItem.forEach((value) => {
    value.addEventListener('click', () => {
        value.classList.add('active');
    })
})