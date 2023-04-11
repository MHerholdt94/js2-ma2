export function saveToStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function getFromStorage(key) {
  const bookList = localStorage.getItem(key);

  if (!bookList) {
    return [];
  }

  return JSON.parse(bookList);
}
