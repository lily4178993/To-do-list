/**
 * This module is used to retrieve the To-do task from input element
 * and store it to the local
*/
import { getFromStorage, saveToStorage } from './storage.js';
import toDoListCollection from './data.js';

const ADD_NEW_ITEM = () => {
  // Retrieving the To-do task input element
  const INPUT_ADD_NEW_ITEM = document.getElementById('add-item');
  const INPUT_VALUE = INPUT_ADD_NEW_ITEM.value.trim();

  if (INPUT_VALUE) {
    const UPDATED_LIST = getFromStorage();
    const NEW_TODO = {
      description: INPUT_VALUE,
      completed: false,
      index: UPDATED_LIST.length + 1,
    };
    UPDATED_LIST.push(NEW_TODO);
    saveToStorage(UPDATED_LIST);
    toDoListCollection();
  }
  INPUT_ADD_NEW_ITEM.value = '';
};

export { ADD_NEW_ITEM as default };
