let db;

init();

async function init() {
  db = await db.openDb('booksDb', 1, db => {
    db.createObjectStore('books', {keyPath: 'name'});
  });

  list();
}

async function list() {
  let tx = db.transaction('books');
  let bookStore = tx.objectStore('books');

  let books = await bookStore.getAll();

  if (books.length) {
    listElem.innerHTML = books.map(book => `<li>
        название: ${book.name}, цена: ${book.price}
      </li>`).join('');
  } else {
    listElem.innerHTML = '<li>Книг пока нет. Пожалуйста, добавьте книги.</li>'
  }


}

async function clearBooks() {
  let tx = db.transaction('books', 'readwrite');
  await tx.objectStore('books').clear();
  await list();
}

async function addBook() {
  let name = prompt("Название книги");
  let price = +prompt("Цена книги");

  let tx = db.transaction('books', 'readwrite');

  try {
    await tx.objectStore('books').add({name, price});
    await list();
  } catch(err) {
    if (err.name == 'ConstraintError') {
      alert("Такая книга уже существует");
      await addBook();
    } else {
      throw err;
    }
  }
}

window.addEventListener('unhandledrejection', event => {
  alert("Ошибка: " + event.reason.message);
});