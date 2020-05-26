// LocalStorage helpers to correctly handle objects/arrays

export function saveItem(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
};


export function loadItem(key, defaultVal) {
  try {
    // Check if the key exists first.
    // Otherwise, JSON.parse + getItem will return null (not throw)
    // on a nonexistant value, and that's not what we want.
    if (key in localStorage)
      return JSON.parse(localStorage.getItem(key));
  }
  catch (e) {
    // JSON parser error; fall through
  }
  
  return defaultVal;
};


export function deleteItem(key) {
  localStorage.removeItem(key);
};
