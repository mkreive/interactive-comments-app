import React, { useReducer } from 'react';
import UserContext from './user-context';
import dataUsers from '../dataUsers';

const usersData = dataUsers.users;
const userDefaultState = {
    user: {
        id: '',
        password: '',
        name: '',
        image: '',
        username: '',
        replies: [],
        comments: [
            {
                id: '',
                score: 0,
                replies: [{}],
            },
        ],
    },
};

const dataReducer = function (state, action) {
    if (action.type === 'LOGIN') {
        const existingUser = usersData.find(
            (user) => user.username === action.username && user.password === action.password
        );
        return {
            user: existingUser,
        };
    }
    if (action.type === 'SIGNUP') {
        console.log('signup');
    }
};

const DataProvider = function (props) {
    const [userState, dispatchUserAction] = useReducer(dataReducer, userDefaultState);

    const loginHandler = function (username, password) {
        dispatchUserAction({ type: 'LOGIN', username, password });
    };
    const signupHandler = function (username, password) {
        dispatchUserAction({ type: 'SIGNUP', username, password });
    };
    const addCommentHandler = function (comment) {
        dispatchUserAction({ type: 'ADD_COMMENT', comment });
    };
    const deleteCommentHandler = function (comment) {};

    const userContext = {
        user: userState,
        login: loginHandler,
        signup: signupHandler,

        addComment: addCommentHandler,
        deleteComment: deleteCommentHandler,
        voteComment: () => {},

        addPost: () => {},
        deletePost: () => {},
        editPost: () => {},
        votePost: () => {},
    };

    return <UserContext.Provider value={userContext}>{props.children}</UserContext.Provider>;
};

export default DataProvider;
