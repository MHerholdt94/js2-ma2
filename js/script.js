import createList from "./components/createList.js";
import { saveToStorage, getFromStorage } from "./utils/storage.js";
import { booksKey } from "./utils/settings.js";

const books = getFromStorage(booksKey);
createList(books);

const input = document.querySelector("input");
const addButton = document.querySelector("button");

addButton.addEventListener("click", addBook);

function addBook() {
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
