/**
 * This module is used to retrieve the To-do task from the local storage
 * and remove an element from it
 */
import { getFromStorage, saveToStorage } from './storage.js';
/* import toDoListCollection from './data.js'; */

// Function to remove one To-do task
const EDIT_TODO_ITEM = (todoID, newDescription) => {
  const UPDATED_LIST = getFromStorage();
  console.log(UPDATED_LIST[todoID].description = 'Juste un test');
  UPDATED_LIST[todoID].description = newDescription;
  saveToStorage(UPDATED_LIST);
};

export { EDIT_TODO_ITEM as default };
