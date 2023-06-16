/**
 * This module is used to create a new To-do task element in the main HTML file
*/
import toDoListCollection from './data.js';
import remove from './remove.js';
import edit from './edit.js';
import { statusChecked, statusUnchecked, statusAfterReload } from './status.js';
import moreIcon from '../../../assets/more-1.png';
import removeIcon from '../../../assets/remove.png';
import { saveToStorage } from './storage.js';

const LIST_CONTAINER = document.querySelector('.list');
const DISPLAY_TODO_LIST = () => {
  LIST_CONTAINER.innerHTML = '';
  toDoListCollection.forEach((todoItem) => {
    const LIST_ITEM = document.createElement('li');
    LIST_ITEM.classList.add('list-item');
    const INPUT_CHECKBOX = document.createElement('input');
    INPUT_CHECKBOX.type = 'checkbox';
    INPUT_CHECKBOX.name = 'check';
    INPUT_CHECKBOX.placeholder = 'check';
    INPUT_CHECKBOX.id = todoItem.index;
    INPUT_CHECKBOX.classList.add('checkbox');
    const VIEW_ITEM = document.createElement('div');
    VIEW_ITEM.classList.add('view_item');
    const VIEW_LABEL = document.createElement('p');
    VIEW_LABEL.classList.add('label');
    VIEW_LABEL.textContent = todoItem.description;
    const BUTTON_MORE = document.createElement('button');
    BUTTON_MORE.type = 'button';
    BUTTON_MORE.classList.add('btn', 'btn-more');
    const BUTTON_REMOVE = document.createElement('button');
    BUTTON_REMOVE.type = 'submit';
    BUTTON_REMOVE.id = todoItem.index;
    BUTTON_REMOVE.classList.add('btn', 'btn-remove');
    const MORE_ICON = document.createElement('img');
    MORE_ICON.src = moreIcon;
    MORE_ICON.alt = 'More Icon';
    MORE_ICON.classList.add('icon');
    const REMOVE_ICON = document.createElement('img');
    REMOVE_ICON.src = removeIcon;
    REMOVE_ICON.alt = 'Remove Icon';
    REMOVE_ICON.classList.add('icon');

    // Add double-click event to VIEW_LABEL
    VIEW_LABEL.addEventListener('dblclick', (event) => {
      event.stopPropagation();
      VIEW_LABEL.contentEditable = 'true';
      VIEW_LABEL.addEventListener('keydown', () => {
        const data = VIEW_LABEL.textContent;
        edit(todoItem.index, data);
      });
    });

    // Add click event to BUTTON_REMOVE
    BUTTON_REMOVE.addEventListener('click', (event) => {
      event.stopPropagation();
      remove(todoItem.index);
      saveToStorage(toDoListCollection);
      DISPLAY_TODO_LIST();
    });

    // Add change event to INPUT_CHECKBOX
    INPUT_CHECKBOX.addEventListener('change', () => {
      if (INPUT_CHECKBOX.checked === true) {
        VIEW_LABEL.classList.add('checked');
        statusChecked(todoItem.index, todoItem.completed);
        VIEW_LABEL.addEventListener('dblclick', (event) => {
          event.stopPropagation();
          VIEW_LABEL.contentEditable = 'false';
        });
      } else {
        VIEW_LABEL.classList.remove('checked');
        statusUnchecked(todoItem.index, todoItem.completed);
      }
    });
    BUTTON_MORE.appendChild(MORE_ICON);
    BUTTON_REMOVE.appendChild(REMOVE_ICON);
    VIEW_ITEM.appendChild(VIEW_LABEL);
    LIST_ITEM.appendChild(INPUT_CHECKBOX);
    LIST_ITEM.appendChild(VIEW_ITEM);
    LIST_ITEM.appendChild(BUTTON_REMOVE);
    LIST_ITEM.appendChild(BUTTON_MORE);
    LIST_CONTAINER.appendChild(LIST_ITEM);
  });
};
// Call the DISPLAY_TODO_LIST function to display the initial list
DISPLAY_TODO_LIST();
statusAfterReload();
export { DISPLAY_TODO_LIST as default };