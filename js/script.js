import createList from "./components/createList.js";
import { getFromStorage } from "./utils/storage.js";
import { booksKey } from "./utils/settings.js";
import { addBook } from "./utils/buttons.js";

const books = getFromStorage(booksKey);
createList(books);

const addButton = document.querySelector("button");
addButton.addEventListener("click", addBook);
