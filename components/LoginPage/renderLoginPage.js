import renderLoginForm from '../LoginForm/renderLoginForm.js';
import renderRegisterForm from '../RegisterForm/renderRegisterForm.js';
import renderHomePage from '../HomePage/renderHomePage.js';
import { auth } from '../../firebaseConfig.js';
import { signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.8.2/firebase-auth.js';

export default function () {
  const content = document.querySelector('content');
  content.innerHTML = '';
}
