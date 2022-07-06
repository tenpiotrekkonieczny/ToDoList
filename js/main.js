let todoInput; // miejsce do wpisywania zadania
let errorInfo; // info o braku zadania
let addBtn; // przycisk do dodawania zadania
let uList; // lista zadań
let newTodo; // nowe zadanie
const main = () => {
  prepareDOMElements();
  prepareDOMEvents();
};

const prepareDOMElements = () => {
  todoInput = document.querySelector('.todo-input');
  errorInfo = document.querySelector('.error-info');
  addBtn = document.querySelector('.btn-add');
  uList = document.querySelector('.todolist ul');
};

const prepareDOMEvents = () => {
  addBtn.addEventListener('click', addNewToDo);
};

const addNewToDo = () => {
  if (todoInput.value !== '') {
    newTodo = document.createElement('li');
    newTodo.textContent = todoInput.value;
    uList.append(newTodo);

    todoInput.value = '';
    errorInfo.textContent = '';
  } else {
    errorInfo.textContent = 'Wpisz treść zadania!!!';
  }
};

document.addEventListener('DOMContentLoaded', main);
