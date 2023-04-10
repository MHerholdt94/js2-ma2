import { books } from "./data/books.js";

const booksContainer = document.querySelector(".books-container");

let bookList = books;

createList();

function createList() {
  booksContainer.innerHTML = "";

  bookList.forEach(function (book) {
    booksContainer.innerHTML += `<li class="book">
                                        <span class="fa-stack fa-1x">
                                            <i class="fa-solid fa-circle fa-stack-2x"></i>
                                            <i class="fa-solid fa-trash fa-stack-1x fa-inverse" data-isbn="${book.isbn}"></i>
                                        </span>
                                        <h4>${book.title}</h4>
                                        <p>${book.isbn}</p>
                                    </li>`;
  });

  const removeButton = document.querySelectorAll("li span");

  removeButton.forEach(function (button) {
    button.addEventListener("click", removeBook);
  });
}

function removeBook() {
  const targetIsbn = event.target.dataset.isbn;
  const newList = bookList.filter((book) => book.isbn !== targetIsbn);
  bookList = newList;
  createList();

  if (bookList.length === 0) {
    booksContainer.innerHTML = `<div class="empty">The list is now empty</div>`;
  }
}
