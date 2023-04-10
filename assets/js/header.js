const menuBtn = document.querySelector('.menu-btn');
const hamburger = document.querySelector('.hamburger');
const navbar = document.querySelector('.navbar');
const searchIcon = document.querySelector('.search-icon');
const searchInput = document.querySelector('#search-input');
const navLinks = document.querySelectorAll('.navbar a');

menuBtn.addEventListener('click', () => {
  navbar.classList.toggle('active');
});

searchIcon.addEventListener('click', () => {
  searchInput.classList.toggle('active');
});

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navbar.classList.remove('active');
  });
});

