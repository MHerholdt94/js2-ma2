import { listKey } from "../utils/settings.js";
import { createItemList } from "./createList.js";
import { getFromStorage, saveToStorage } from "../utils/storage.js";

// Level 2
export function addItem() {
  const items = getFromStorage(listKey);
  const input = document.querySelector("input");
  const inputValue = input.value.trim();

  if (inputValue.length >= 1) {
    const newItem = { name: inputValue, id: Date.now() };
    input.value = "";
    input.focus();
    items.push(newItem);

    saveToStorage(listKey, items);
    createItemList(items);
  }
}

export function removeItem(event) {
  const items = getFromStorage(listKey);
  const removeTarget = parseInt(event.target.dataset.id);
  const newList = items.filter((item) => item.id !== removeTarget);

  saveToStorage(listKey, newList);
  createItemList(newList);
}
