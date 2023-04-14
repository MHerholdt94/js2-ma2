import { removeItem } from "./buttons.js";
import { books } from "../data/books.js";

// Level 1
let bookList = books;

export function createBookList() {
  const booksContainer = document.querySelector(".books-container");

  booksContainer.innerHTML = "";

  if (bookList.length === 0) {
    booksContainer.innerHTML = `<div class="empty">The list is empty</div>`;
  }

  bookList.forEach((book) => {
    booksContainer.innerHTML += `<li class="list-item">
                                    <span class="fa-stack fa-1x remove-book">
                                        <i class="fa-solid fa-circle fa-stack-2x"></i>
                                        <i class="fa-solid fa-trash fa-stack-1x fa-inverse" data-isbn="${book.isbn}"></i>
                                    </span>
                                    <h4>${book.title}</h4>
                                    <p>${book.isbn}</p>
                                  </li>`;
  });

  const removeBookBtns = document.querySelectorAll(".remove-book");

  removeBookBtns.forEach((btn) => {
    btn.addEventListener("click", removeBook);
  });
}

function removeBook() {
  const deleteTarget = event.target.dataset.isbn;
  const newList = bookList.filter((book) => book.isbn !== deleteTarget);
  bookList = newList;

  createBookList();
}

// Level 2
export function createItemList(items) {
  const listContainer = document.querySelector(".list-container");

  listContainer.innerHTML = "";

  if (items.length === 0) {
    listContainer.innerHTML = `<div class="empty">The list is empty</div>`;
  }

  items.forEach((item) => {
    listContainer.innerHTML += `<li class="list-item">
                                    <span class="fa-stack fa-1x remove-item">
                                        <i class="fa-solid fa-circle fa-stack-2x"></i>
                                        <i class="fa-solid fa-trash fa-stack-1x fa-inverse" data-id="${item.id}"></i>
                                    </span>
                                    <h4>${item.name}</h4>
                                    <p>${item.id}</p>
                                </li>`;
  });

  const removeItemBtns = document.querySelectorAll(".remove-item");

  removeItemBtns.forEach((btn) => {
    btn.addEventListener("click", removeItem);
  });
}
