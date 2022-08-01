let todoInput; // miejsce do wpisywania zadania
let errorInfo; // info o braku zadania
let addBtn; // przycisk do dodawania zadania
let uList; // lista zadań
let newTodo; // nowe zadanie

let popup; // popup
let popupInfo; // tekst w popupie, jak się doda pusty text
let todoToEdit; // edytoany todo
let popupInput; // input w popupie
let popupAddBtn; // przycisk "zatwierdź" w popupie
let popupCloseBtn; // przycisk "anuluj w popupie"
const main = () => {
  prepareDOMElements();
  prepareDOMEvents();
};

const prepareDOMElements = () => {
  todoInput = document.querySelector('.todo-input');
  errorInfo = document.querySelector('.error-info');
  addBtn = document.querySelector('.btn-add');
  uList = document.querySelector('.todolist ul');

  popup = document.querySelector('.popup');
  popupInfo = document.querySelector('.popup-info');
  popupInput = document.querySelector('.popup-input');
  popupAddBtn = document.querySelector('.accept');
  popupCloseBtn = document.querySelector('.cancel');
};

const prepareDOMEvents = () => {
  addBtn.addEventListener('click', addNewToDo);
  uList.addEventListener('click', checkClick);
  popupCloseBtn.addEventListener('click', closePopup);
  popupAddBtn.addEventListener('click', changeTodoText);
  todoInput, addEventListener('keyup', enterKeyCheck);
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

const checkClick = (e) => {
  if (e.target.matches('.complete')) {
    e.target.closest('li').classList.toggle('completed');
    e.target.classList.toggle('completed');
  } else if (e.target.matches('.edit')) {
    editTodo(e);
  } else if (e.target.matches('.delete')) {
    deleteTodo(e);
  }
};

const editTodo = (e) => {
  todoToEdit = e.target.closest('li');

  popupInput.value = todoToEdit.firstChild.textContent;
  popup.style.display = 'flex';
};

const closePopup = () => {
  popup.style.display = 'none';
  popupInfo.textContent = '';
};

const changeTodoText = () => {
  if (popupInput.value !== '') {
    todoToEdit.firstChild.textContent = popupInput.value;
    popup.style.display = 'none';
    popupInfo.textContent = '';
  } else {
    popupInfo.textContent = 'Musisz podać jakąś wartość!';
  }
};

const deleteTodo = (e) => {
  e.target.closest('li').remove();

  const allTodos = uList.querySelectorAll('li');

  if (allTodos.length === 0) {
    errorInfo.textContent = 'Brak zadań na liście.';
  }
};

const enterKeyCheck = (e) => {
  if (e.key === 'Enter') {
    addNewToDo();
  }
};

document.addEventListener('DOMContentLoaded', main);
