export function saveToStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function getFromStorage(key) {
  const items = localStorage.getItem(key);

  if (!items) {
    return [];
  } else {
    return JSON.parse(items);
  }
}
