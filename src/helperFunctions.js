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

// INPUTS VADILATION
export const validateInput = function (input) {
    if (!input) return false;
    if (input.trim() === '' || input.length < 3) {
        return false;
    } else {
        return true;
    }
};

export const validatePassword = function (password) {
    if (!password) return false;
    else if (password.trim() === '' || password.length < 6) {
        return false;
    } else {
        return true;
    }
};
