/** @format */
// QuerySelector
const $todoForm = document.querySelector('#to-do-form');
const $todoInput = document.querySelector('#to-do-form input');
const $todoList = document.querySelector('#to-do-list');

// Variables
let List = [];
const LIST_KEY = 'List';

// LocalStorage
const savedList = localStorage.getItem(LIST_KEY);
console.log(savedList);

if (savedList !== null) {
  const parsedList = JSON.parse(localStorage.getItem(LIST_KEY));
  List = parsedList;
  parsedList.forEach(paintToDo);
}

// localStorage saving function
function saveList() {
  localStorage.setItem(LIST_KEY, JSON.stringify(List));
}

// submit function
$todoForm.addEventListener('submit', (e) => {
  e.preventDefault();
  // make sure that Javascipt's excution context is above to below
  const lists = $todoInput.value; // input value is added to lists variable
  $todoInput.value = ''; // after submit event processed, value will be empty
  const listsObject = {
    text: lists,
    id: Date.now(),
  };
  List.push(listsObject);
  paintToDo(listsObject);
  saveList();
});

// callback function
function paintToDo(listsObject) {
  const li = document.createElement('li'); // make a li tag in html right away
  li.id = listsObject.id; // 지우는 id 값
  const span = document.createElement('span');
  const button = document.createElement('button');
  li.appendChild(span);
  li.appendChild(button);
  span.innerText = listsObject.text;
  button.innerText = '❌';
  button.addEventListener('click', (e) => {
    const delList = e.target.parentElement;
    delList.remove();
    List = List.filter((list) => {
      return list.id !== parseInt(li.id);
    });
    // List = List.filter((list) => list.id !== parseInt(li.id));
    saveList();
  });
  $todoList.appendChild(li);
}
