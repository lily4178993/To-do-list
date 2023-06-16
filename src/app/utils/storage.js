/**
 * This module is used to retrieve todos from local storage or store them there.
*/
const storageKey = 'todos';

const GET_TODOS_FROM_STORAGE = () => {
  const todos = JSON.parse(localStorage.getItem(storageKey));
  return todos || [];
};

const SAVE_TODOS_TO_STORAGE = (todos) => {
  localStorage.setItem(storageKey, JSON.stringify(todos));
};

export { GET_TODOS_FROM_STORAGE as getFromStorage, SAVE_TODOS_TO_STORAGE as saveToStorage };
