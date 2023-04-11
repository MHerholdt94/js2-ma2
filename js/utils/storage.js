export function saveToStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function getFromStorage(key) {
  const books = localStorage.getItem(key);

  if (!books) {
    return [];
  }

  return JSON.parse(books);
}
