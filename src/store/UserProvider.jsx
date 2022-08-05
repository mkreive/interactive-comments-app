import React, { useReducer } from 'react';
import UserContext from './user-context';
import dataUsers from '../dataUsers';
import { setLocalStorage } from '../helperFunctions';

const usersData = dataUsers.users;
const commentsData = dataUsers.comments;

const userDefaultState = {
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
};

const defaultCommentState = [];

const dataReducer = function (state, action) {
    if (action.type === 'LOGGED') {
        const existingUser = usersData.find((user) => user.username === action.username);
        return existingUser;
    }
    if (action.type === 'LOGIN') {
        const existingUser = usersData.find(
            (user) => user.username === action.username && user.password === action.password
        );
        if (existingUser) {
            setLocalStorage('userId', existingUser.username);
            return existingUser;
        }
        return userDefaultState;
    }
    if (action.type === 'LOGOUT') {
        return userDefaultState;
    }
    if (action.type === 'SIGNUP') {
        console.log('signup');
    }
    if (action.type === 'FILTER_COMMENTS') {
        const filteredComments = commentsData.filter((comment) => comment.topic === action.topic);
        return filteredComments;
    }
};

const DataProvider = function (props) {
    const [userState, dispatchUserAction] = useReducer(dataReducer, userDefaultState);
    const [commentState, dispatchCommentAction] = useReducer(dataReducer, defaultCommentState);

    const loggedHandler = function (username) {
        dispatchUserAction({ type: 'LOGGED', username });
    };
    const loginHandler = function (username, password) {
        dispatchUserAction({ type: 'LOGIN', username, password });
    };
    const logoutHandler = function (username) {
        dispatchUserAction({ type: 'LOGOUT', username });
    };
    const signupHandler = function (username, password) {
        dispatchUserAction({ type: 'SIGNUP', username, password });
    };

    const filterCommentsHandler = function (topic) {
        dispatchCommentAction({ type: 'FILTER_COMMENTS', topic });
    };

    const addCommentHandler = function (comment) {
        dispatchCommentAction({ type: 'ADD_COMMENT', comment });
    };
    const deleteCommentHandler = function (comment) {
        dispatchCommentAction({ type: 'DELETE_COMMENT', comment });
    };

    const userContext = {
        user: userState,
        logged: loggedHandler,
        login: loginHandler,
        logout: logoutHandler,
        signup: signupHandler,

        comments: commentState,
        filterComments: filterCommentsHandler,

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
