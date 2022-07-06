let todoInput; // miejsce do wpisywania zadania
let errorInfo; // info o braku zadania
let addBtn; // przycisk do dodawania zadania
let uList; // lista zadań
// let newTodo; // nowe zadanie
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
    const newTodo = document.createElement('li');
    newTodo.textContent = todoInput.value;
    createToolsArea(newTodo);

    uList.append(newTodo);

    todoInput.value = '';
    errorInfo.textContent = '';
  } else {
    errorInfo.textContent = 'Wpisz treść zadania!!!';
  }
};

const createToolsArea = (newTodo) => {
  const toolsPanel = document.createElement('div');
  toolsPanel.classList.add('tools');
  newTodo.append(toolsPanel);

  const completeBtn = document.createElement('buttton');
  completeBtn.classList.add('complete');
  completeBtn.innerHTML = '<i class="fas fa-check"></i>';

  const editBtn = document.createElement('button');
  editBtn.classList.add('edit');
  editBtn.textContent = 'EDIT';

  const deleteBtn = document.createElement('button');
  deleteBtn.classList.add('delete');
  deleteBtn.innerHTML = '<i class="fas fa-times"></i>';

  toolsPanel.append(completeBtn, editBtn, deleteBtn);
};

document.addEventListener('DOMContentLoaded', main);
