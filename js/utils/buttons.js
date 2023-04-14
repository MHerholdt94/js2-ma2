import { booksKey } from "./settings.js";
import createList from "../components/createList.js";
import { getFromStorage, saveToStorage } from "./storage.js";

export function addBook() {
  const books = getFromStorage(booksKey);
  const input = document.querySelector("input");
  const inputValue = input.value.trim();

  if (inputValue.length >= 1) {
    const newBook = { title: inputValue, isbn: Date.now() };
    input.value = "";
    input.focus();
    books.push(newBook);

    saveToStorage(booksKey, books);
    createList(books);
  }
}

export function removeBook(event) {
  const books = getFromStorage(booksKey);
  const removeTarget = parseInt(event.target.dataset.isbn);
  const newList = books.filter((book) => book.isbn !== removeTarget);

  saveToStorage(booksKey, newList);
  createList(newList);
}
