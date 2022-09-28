// W funkcji:
// 1. Stwórz element <form> i nadaj mu id 'login-form'
// 2. Stwórz element <input> i nadaj mu type 'email', id 'input-email-login', placeholder 'email'
// 3. Stwórz element <input>, nadaj mu type 'password', id 'input-password-login', placeholder 'password'
// 4. Stwórz element <button>, nadaj mu type 'submit' i textContent 'Sign in'
// 5. Podepnij oba inputy i button do elementu form (pkt 1)
// 6. Zwróc element <form> z funkcji przy pomocy returna.

export default function () {
  const form = document.createElement('form');
  form.setAttribute('id', 'login-form');

  const inputEmail = document.createElement('input');
  inputEmail.setAttribute('type', 'email');
  inputEmail.setAttribute('id', 'input-email-login');
  inputEmail.setAttribute('placeholder', 'email');

  const inputPassword = document.createElement('input');
  inputPassword.setAttribute('type', 'password');
  inputPassword.setAttribute('id', 'input-password-login');
  inputPassword.setAttribute('placeholder', 'password');

  const buttonSignIn = document.createElement('button');
  buttonSignIn.setAttribute('type', 'submit');
  buttonSignIn.textContent = 'Sign in';

  form.appendChild(inputEmail);
  form.appendChild(inputPassword);
  form.appendChild(buttonSignIn);

  return form;
}
