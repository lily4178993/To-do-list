/**
 * This module is used to retrieve the To-do task from the local storage
 * and remove an element from it
 */
import toDoListCollection from './data.js';

// Function to remove one To-do task
const REMOVE_ONE_ITEM = (todoID) => {
  const INDEX = toDoListCollection.filter((todoItem) => todoItem.index === todoID);
  if (INDEX !== -1) {
    toDoListCollection.splice(INDEX, 1);
  }
  // Refresh the To-do index order
  let counter = 0;
  toDoListCollection.forEach((todoItem) => {
    todoItem.index = counter + 1;
    counter += 1;
  });
};

export { REMOVE_ONE_ITEM as default };
