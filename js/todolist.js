/** @format */

const $todoForm = document.querySelector('#to-do-form');
const $todoInput = document.querySelector('#to-do-form input');
const $todoList = document.querySelector('#to-do-list');

$todoForm.addEventListener('submit', (e) => {
  e.preventDefault();
  // make sure that Javascipt's excution context is above to below
  const lists = $todoInput.value; // input value is added to lists variable
  $todoInput.value = ''; // after submit event processed, value will be empty
  paintToDo(lists);
});

// callback function
function paintToDo(lists) {
  const li = document.createElement('li'); // make a li tag in html right away
  const span = document.createElement('span');
  const button = document.createElement('button');
  li.appendChild(span);
  li.appendChild(button);
  span.innerText = lists;
  button.innerText = '❌';
  button.addEventListener('click', (e) => {
    const delList = e.target.parentElement;
    console.log(delList);
    delList.remove();
  });
  $todoList.appendChild(li);
}
