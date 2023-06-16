import addNewTodoItem from './app/utils/add-item.js';
import createTodoItem from './app/utils/display.js';
import './style.css';

const FORM_ADD_NEW_ITEM = document.querySelector('.add-item');
FORM_ADD_NEW_ITEM.addEventListener('submit', (event) => {
  event.preventDefault();
  addNewTodoItem();
  createTodoItem();
  document.location.reload();
});
