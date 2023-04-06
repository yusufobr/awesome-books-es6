/* eslint */
import Book from './modules/theBook.js';
import Books from './modules/book.js';
import { DateTime } from './node_modules/luxon/src/luxon.js';
import './modules/navigation.js';

const title = document.getElementById('title');
const author = document.getElementById('author');
const form = document.querySelector('.form');
const addBtn = document.getElementById('add-btn');
const showDate = document.getElementById('show-date');

showDate.innerHTML = DateTime.now().toLocaleString(DateTime.DATETIME_FULL);
setInterval(() => {
  showDate.innerHTML = DateTime.now().toLocaleString(DateTime.DATETIME_FULL);
}, 1000);

const books = new Books();

addBtn.addEventListener('click', (e) => {
  books.add(new Book(title.value, author.value));
  e.preventDefault();

  form.reset();
});

books.get();
books.render();