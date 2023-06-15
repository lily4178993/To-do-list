/**
 * This module is used to collect all the todos tasks from local storage
 * and store them to an array named TODO_LIST_COLLECTION
*/
import { getFromStorage } from './storage.js';

const TODO_LIST_COLLECTION = [];

const UPDATE_COLLECTION = () => {
  const todos = getFromStorage();
  if (todos.length > 0) {
    TODO_LIST_COLLECTION.push(todos);
  }
};
export { UPDATE_COLLECTION as default };
