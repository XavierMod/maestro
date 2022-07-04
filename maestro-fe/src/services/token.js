export const setItem = (key, value) => Promise.resolve().then(() => {
  localStorage.setItem(key, value);
});

export const getItem = (key) => Promise.resolve().then(() => localStorage.getItem(key));
