import addNewTodoItem from './app/utils/add-item.js';
import createTodoItem from './app/utils/display.js';
import { removeItems } from './app/utils/remove.js';
import './style.css';

const FORM_ADD_NEW_ITEM = document.querySelector('.add-item');
FORM_ADD_NEW_ITEM.addEventListener('submit', (event) => {
  event.preventDefault();
  addNewTodoItem();
  createTodoItem();
  document.location.reload();
});

const REMOVE_ALL_BUTTON = document.querySelector('.btn-remove-all');
REMOVE_ALL_BUTTON.addEventListener('click', (event) => {
  event.preventDefault();
  removeItems();
  document.location.reload();
});