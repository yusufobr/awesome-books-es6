const list = document.getElementById('nav-list');
const addNew = document.getElementById('nav-add');
const contact = document.getElementById('nav-contact');

list.addEventListener('click', () => {
  document.getElementById('all-books').classList.remove('hidden');
  document.getElementById('add-new').classList.add('hidden');
  document.getElementById('contact').classList.add('hidden');
  list.classList.add('blue');
  addNew.classList.remove('blue');
  contact.classList.remove('blue');
});
addNew.addEventListener('click', () => {
  document.getElementById('all-books').classList.add('hidden');
  document.getElementById('add-new').classList.remove('hidden');
  document.getElementById('contact').classList.add('hidden');
  list.classList.remove('blue');
  addNew.classList.add('blue');
  contact.classList.remove('blue');
});
contact.addEventListener('click', () => {
  document.getElementById('all-books').classList.add('hidden');
  document.getElementById('add-new').classList.add('hidden');
  document.getElementById('contact').classList.remove('hidden');
  list.classList.remove('blue');
  addNew.classList.remove('blue');
  contact.classList.add('blue');
});
