/**
 * This module is used to create a new To-do task element in the main HTML file
*/
import toDoListCollection from './data.js';
import moreIcon from '../../../assets/more-1.png';
import removeIcon from '../../../assets/remove.png';

const LIST_CONTAINER = document.querySelector('.list');

const CREATE_TODO_ITEM = () => {
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

    const VIEW_LABEL = document.createElement('label');
    VIEW_LABEL.classList.add('label');
    VIEW_LABEL.textContent = todoItem.description;

    const INPUT_TEXTAREA = document.createElement('input');
    INPUT_TEXTAREA.type = 'textarea';
    INPUT_TEXTAREA.name = 'edit-item';
    INPUT_TEXTAREA.placeholder = todoItem.description;
    INPUT_TEXTAREA.classList.add('edit');

    const BUTTON_MORE = document.createElement('button');
    BUTTON_MORE.type = 'button';
    BUTTON_MORE.classList.add('btn', 'btn-more');

    const BUTTON_REMOVE = document.createElement('button');
    BUTTON_REMOVE.type = 'submit';
    BUTTON_REMOVE.classList.add('btn', 'btn-remove');

    const MORE_ICON = document.createElement('img');
    MORE_ICON.src = moreIcon;
    MORE_ICON.alt = 'More Icon';
    MORE_ICON.classList.add('icon');

    const REMOVE_ICON = document.createElement('img');
    REMOVE_ICON.src = removeIcon;
    REMOVE_ICON.alt = 'Remove Icon';
    REMOVE_ICON.classList.add('icon');

    BUTTON_MORE.appendChild(MORE_ICON);
    BUTTON_REMOVE.appendChild(REMOVE_ICON);

    VIEW_ITEM.appendChild(VIEW_LABEL);
    VIEW_ITEM.appendChild(INPUT_TEXTAREA);

    LIST_ITEM.appendChild(INPUT_CHECKBOX);
    LIST_ITEM.appendChild(VIEW_ITEM);
    LIST_ITEM.appendChild(BUTTON_REMOVE);
    LIST_ITEM.appendChild(BUTTON_MORE);

    LIST_CONTAINER.appendChild(LIST_ITEM);
  });
};

export { CREATE_TODO_ITEM as default };
