import renderHomePage from './components/HomePage/renderHomePage.js';

const homeButton = document.getElementById('home-anchor');
const homeTodos = document.getElementById('todos-anchor');
const homeAbout = document.getElementById('about-anchor');
const homeAnchor = document.getElementById('public-anchor');
const homeLogin = document.getElementById('login-anchor');

renderHomePage();

homeButton.addEventListener('click', renderHomePage);
