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

export const updateCommentsData = async function (commentId, key, value) {
    const newAccount = await fetch(
        `https://to-do-list-app-10ca0-default-rtdb.europe-west1.firebasedatabase.app/users/.json`,
        {
            method: 'POST',
            body: JSON.stringify({
                // name: name,
                // password: password,
                // name_password: `${name}_${password}`,
                do: '',
                done: '',
            }),
        }
    );
    if (!newAccount.ok) {
        throw new Error('Failed to create account');
    }
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
    console.log(comment);

    fetch(`https://interactivecommentsapp-default-rtdb.europe-west1.firebasedatabase.app/comments/${commentId}.json`, {
        method: 'PUT',
        body: JSON.stringify({
            id: comment.id,
            parentId: 'null',
            content: comment.content,
            createdAt: comment.createdAt,
            score: 0,
            topic: comment.topic,
            username: comment.username,
            avatar: comment.avatar,
        }),
    });
};
