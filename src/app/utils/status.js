/**
 * This module is used to add some functionality to the application
   to make it interactive.
 * The user will also be able to mark task completion
   by selecting the corresponding checkbox (or undo it by unchecking the checkbox).

 * The updated tasks list will be stored in local storage.
*/

import { getFromStorage, saveToStorage } from './storage.js';
import toDoListCollection from './data.js';

// Function related to the checkbox status (checked: true)
const STATUS_CHECKED = (todoID, todoStatus) => {
  const UPDATED_LIST = getFromStorage();
  if (todoStatus === false) {
    UPDATED_LIST[todoID - 1].completed = true;
    saveToStorage(UPDATED_LIST);
  }
};

// Function related to the checkbox status (checked: false)
const STATUS_UNCHECKED = (todoID, todoStatus) => {
  const UPDATED_LIST = getFromStorage();
  if (todoStatus === true) {
    UPDATED_LIST[todoID - 1].completed = false;
    saveToStorage(UPDATED_LIST);
  }
};

/**
 * Function related to the checkbox status (checked: true / false)
    and the status of the To-Do task in the local storage (completed: true / false).

 * If page reload, the appropriate CSS style will be applied after
    checking the To-Do task status.
*/
const STATUS_AFTER_RELOAD = () => {
  const TODO_LABEL_ELEMENTS = document.querySelectorAll('.label');
  const TODO_CHECKBOX_ELEMENTS = document.querySelectorAll('.checkbox');

  for (let index = 0; index < toDoListCollection.length; index += 1) {
    for (let j = 0; j < TODO_CHECKBOX_ELEMENTS.length; j += 1) {
      const element = TODO_CHECKBOX_ELEMENTS[j];
      const todoItem = toDoListCollection[j];
      if (todoItem.completed === true) {
        element.checked = true;
      } else {
        element.checked = false;
      }
    }

    for (let j = 0; j < TODO_LABEL_ELEMENTS.length; j += 1) {
      const element = TODO_LABEL_ELEMENTS[j];
      const todoItem = toDoListCollection[j];
      if (todoItem.completed === true) {
        element.classList.add('checked');
      } else {
        element.classList.remove('checked');
      }
    }
  }
};

export {
  STATUS_CHECKED as statusChecked,
  STATUS_UNCHECKED as statusUnchecked,
  STATUS_AFTER_RELOAD as statusAfterReload,
};
