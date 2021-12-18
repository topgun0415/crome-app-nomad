/** @format */
// DoucmentSelectors
const $loginForm = document.querySelector('#login-form');
const $loginInput = document.querySelector('#login-form input');
const $greeting = document.querySelector('#greeting');
// String value
const HIDDEN_CLASSNAME = 'hidden';
const USERNAME_KEY = 'username';
// LocalStorage
const savedUserName = localStorage.getItem(USERNAME_KEY);
// Function
function paintGreetings(username) {
  $greeting.innerText = `Hello! ${username}!`;
  // 새로고침을 하여도 localStorage에 있는 데이터를 불러와 게속해서 유저정보를 표시해준다
  $greeting.classList.remove(HIDDEN_CLASSNAME);
}

if (savedUserName === null) {
  $loginForm.classList.remove(HIDDEN_CLASSNAME); // localStroage에 없으면
  $loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const userName = $loginInput.value;
    localStorage.setItem(USERNAME_KEY, userName);
    $loginForm.classList.add(HIDDEN_CLASSNAME);
    paintGreetings(userName);
    // $greeting.innerText = `Hello! ${userName}!`;
    // $greeting.classList.remove(HIDDEN_CLASSNAME);
  });
} else {
  paintGreetings(savedUserName);
}
