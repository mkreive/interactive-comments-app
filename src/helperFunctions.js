// LOCAL STORAGE
export const getLocalStorage = function (key) {
    const data = JSON.parse(localStorage.getItem(key));
    return data;
};
export const setLocalStorage = function (key, value) {
    localStorage.setItem(key, JSON.stringify(value));
};
export const removeLocalStorage = function (key, value) {
    if (!key || !value) return;
    const data = getLocalStorage(key);
    if (data === value) window.localStorage.removeItem(key);
};
