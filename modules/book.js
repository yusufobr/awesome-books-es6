const booksList = document.getElementById('books');

export default class Books {
  constructor() {
    this.books = [];
  }

  add(book) {
    this.books.push(book);
    this.save();
    this.render();
  }

  remove(id) {
    this.books = this.books.filter((book) => book.id !== id);
  }

  save() {
    localStorage.setItem('books', JSON.stringify(this.books));
  }

  get() {
    const theBooks = localStorage.getItem('books');
    if (theBooks) {
      this.books = JSON.parse(theBooks);
    }
    return [];
  }

  render() {
    booksList.innerHTML = '';
    this.books.forEach((book, index) => {
      const container = document.createElement('div');
      if (index % 2) {
        container.classList.add('w-bg');
      } else { container.classList.add('g-bg'); }
      const parag = `
        <strong>"${book.title}"</strong> by ${book.author}
        `;
      const btn = document.createElement('button');
      btn.innerHTML = 'remove';
      btn.onclick = () => {
        this.remove(book.id);
        this.save();
        this.render();
      };
      const p = document.createElement('p');
      p.innerHTML = parag;
      container.appendChild(p);
      container.appendChild(btn);
      booksList.appendChild(container);
    });
  }
}