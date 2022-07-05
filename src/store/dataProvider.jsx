import React, { useReducer } from 'react';
import DataContext from './DataContext';

const userDefaultState = {
    id: '',
    password: '',
    name: '',
    image: '',
    username: '',
    replies: [
        {
            repliedToId: '',
            id: '',
            score: 0,
            replies: [{}],
        },
    ],
    comments: [
        {
            id: '',
            score: 0,
            replies: [{}],
        },
    ],
};
const dataReducer = function (state, action) {
    return userDefaultState;
};

const DataProvider = function (props) {
    const [userState, dispatchUserAction] = useReducer(dataReducer, userDefaultState);

    const logUserIn = function (username, password) {
        dispatchUserAction({ type: 'LOG_USER_IN', username, password });
        const user = data.users.find((user) => user.username === username);
        if (user && user.password === password) {
        } else {
        }
    };
    const addCommentHandler = function (comment) {};
    const deleteCommentHandler = function (comment) {};

    const dataContext = {
        user: userState,
        logUser: logUserIn,
        addComment: addCommentHandler,
        deleteComment: deleteCommentHandler,
    };

    return <DataContext.Provider value={dataContext}>{props.children}</DataContext.Provider>;
};

export default DataProvider;
