import { books } from "./data/books.js";
import { createBookList, createItemList } from "./components/createList.js";
import { getFromStorage } from "./utils/storage.js";
import { listKey } from "./utils/settings.js";
import { addItem } from "./components/buttons.js";

// Level 1
createBookList(books);

// Level 2
const items = getFromStorage(listKey);
createItemList(items);

const addButton = document.querySelector("button");
addButton.addEventListener("click", addItem);
