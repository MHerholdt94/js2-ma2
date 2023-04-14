import { removeBook } from "../utils/buttons.js";

export default function createList(books) {
  const booksContainer = document.querySelector(".books-container");

  booksContainer.innerHTML = "";

  if (books.length === 0) {
    booksContainer.innerHTML = `<div class="empty">The list is empty</div>`;
  }

  books.forEach((book) => {
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
