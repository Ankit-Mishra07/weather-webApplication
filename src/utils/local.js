export const getLocal = (key) => {
  return JSON.parse(localStorage.getItem(key));
};

export const setLocal = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};
