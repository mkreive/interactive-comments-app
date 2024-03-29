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

// FETCHING DATA
export const fetchData = async function (address) {
    const response = await fetch(`${address}`);
    const responseData = await response.json();
    return responseData;
};

export const voteComment = async function (commentId, score) {
    const id = commentId;
    const newScore = score;

    fetch(`https://interactivecommentsapp-default-rtdb.europe-west1.firebasedatabase.app/comments/${id}/score.json`, {
        method: 'PUT',
        body: JSON.stringify(newScore),
    });
};

export const addCommentToDataBase = async function (comment) {
    const commentId = comment.id;

    fetch(`https://interactivecommentsapp-default-rtdb.europe-west1.firebasedatabase.app/comments/${commentId}.json`, {
        method: 'PUT',
        body: JSON.stringify({
            id: comment.id,
            parentId: comment.parentId,
            content: comment.content,
            createdAt: comment.createdAt,
            score: 0,
            topic: comment.topic,
            username: comment.username,
            avatar: comment.avatar,
        }),
    });
};
export const deleteCommentFromDataBase = async function (commentId) {
    fetch(`https://interactivecommentsapp-default-rtdb.europe-west1.firebasedatabase.app/comments/${commentId}.json`, {
        method: 'DELETE',
    });
};
