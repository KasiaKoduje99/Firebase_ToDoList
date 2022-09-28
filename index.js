import renderHomePage from './components/HomePage/renderHomePage.js';
import renderRegisterForm from './components/RegisterForm/renderRegisterForm.js';
import renderLogin from './components/LoginForm/renderLoginForm.js';

// const contenContainer =

const homeButton = document.getElementById('home-anchor');
const homeTodos = document.getElementById('todos-anchor');
const homeAbout = document.getElementById('about-anchor');
const homeAnchor = document.getElementById('public-anchor');
const homeLogin = document.getElementById('login-anchor');

renderHomePage();
renderLogin();

homeButton.addEventListener('click', renderHomePage);
homeLogin.addEventListener('click', console.log(123));
