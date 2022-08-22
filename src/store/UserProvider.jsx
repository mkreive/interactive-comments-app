import React, { useReducer } from 'react';
import UserContext from './user-context';
import dataUsers from '../dataUsers';
// import dataComments from '../dataComments';
import { setLocalStorage } from '../helperFunctions';

const fetchComments = async function () {
    const response = await fetch(
        `https://interactivecommentsapp-default-rtdb.europe-west1.firebasedatabase.app/comments.json`
    );
    const responseData = await response.json();
    const comments = [];
    for (const key in responseData) {
        comments.push({
            id: key,
            username: responseData[key].username,
            avatar: responseData[key].avatar,
            content: responseData[key].content,
            parentId: responseData[key].parentId,
            createdAt: responseData[key].createdAt,
            score: responseData[key].score,
            topic: responseData[key].topic,
        });
    }
    return comments;
};

const usersData = dataUsers.users;
const commentsData = fetchComments();

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

const defaultCommentState = [
    {
        id: '',
        topic: '',
        content: '',
        createdAt: '',
        username: '',
        avatar: '',
        score: 0,
        parentId: null,
    },
];

const userDataReducer = function (state, action) {
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
};

const commentsDataReducer = function (state, action) {
    if (action.type === 'FILTER_COMMENTS') {
        console.log(commentsData);
        const filteredComments = commentsData.filter((comment) => comment.topic === action.topic);

        if (filteredComments.length === 0) {
            return defaultCommentState;
        }
        return filteredComments;
    }
    if (action.type === 'ADD_COMMENT') {
        const user = action.user;
        const topic = action.topic;
        const commentText = action.comment;

        const newComment = {
            id: `${user.username}__${Math.floor(Math.random() * 999)}`,
            topic,
            content: commentText,
            createdAt: new Date().toLocaleDateString(),
            username: user.username,
            avatar: user.image,
            score: 0,
            parentId: null,
        };

        const newState = [...state, newComment];
        return newState;
    }
    return defaultCommentState;
};

const DataProvider = function (props) {
    const [userState, dispatchUserAction] = useReducer(userDataReducer, userDefaultState);
    const [commentState, dispatchCommentAction] = useReducer(commentsDataReducer, defaultCommentState);

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

    const addCommentHandler = function (user, topic, comment) {
        dispatchCommentAction({ type: 'ADD_COMMENT', user, topic, comment });
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
    };

    return <UserContext.Provider value={userContext}>{props.children}</UserContext.Provider>;
};

export default DataProvider;
