/** @format */

const $loginForm = document.querySelector('.login-form');
const $loginInput = document.querySelector('.login-form input');

const $link = document.querySelector('a');

$loginForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const userName = $loginInput.value;
  console.log(userName);
});

$link.addEventListener('click', (e) => {
  e.preventDefault();
});
