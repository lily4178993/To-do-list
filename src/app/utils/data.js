/**
 * This module is used to collect all the todos tasks from local storage
 * and store them to constant named TODO_LIST_COLLECTION
*/
import { getFromStorage } from './storage.js';

const TODO_LIST_COLLECTION = getFromStorage();

export default TODO_LIST_COLLECTION;
