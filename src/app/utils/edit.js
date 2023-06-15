/**
 * This module is used to retrieve the To-do task from the local storage
 * and remove an element from it
 */
import { getFromStorage, saveToStorage } from './storage.js';
/* import toDoListCollection from './data.js'; */

// Function to remove one To-do task
const EDIT_TODO_ITEM = (todoID, newDescription) => {
  const updateList = getFromStorage();
  console.log(updateList[todoID].description = 'Juste un test');
  updateList[todoID].description = newDescription;
  saveToStorage(updateList);
};

export { EDIT_TODO_ITEM as default };
