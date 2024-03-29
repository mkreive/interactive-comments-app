import React, { useReducer } from 'react';
import UserContext from './user-context';
import dataUsers from '../dataUsers';
import {
    setLocalStorage,
    fetchData,
    voteComment,
    addCommentToDataBase,
    deleteCommentFromDataBase,
} from '../helperFunctions';

const usersData = dataUsers.users;
let commentsData;

const fetchComments = async function () {
    try {
        const fetchAddress = `https://interactivecommentsapp-default-rtdb.europe-west1.firebasedatabase.app/comments.json`;
        const data = await fetchData(fetchAddress);
        const allComments = Object.values(data);
        commentsData = allComments;
        return commentsData;
    } catch (error) {
        console.error(error);
    }
};
fetchComments();

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
        parentId: '',
    },
];

const userDataReducer = function (state, action) {
    if (action.type === 'LOGGED') {
        const existingUser = usersData.find((user) => user.username === action.username);
        console.log(existingUser);
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
            id: `${user.username}_${Math.floor(Math.random() * 999)}`,
            topic,
            content: commentText,
            createdAt: new Date().toLocaleDateString(),
            username: user.username,
            avatar: user.image,
            score: 0,
            parentId: 'null',
        };

        addCommentToDataBase(newComment);

        state = [...state, newComment];
        return state;
    }

    if (action.type === 'REPLY_COMMENT') {
        const user = action.user;
        const topic = action.topic;
        const replyText = action.comment;
        const commentParentId = action.parentId;

        const newReply = {
            id: `${user.username}_${Math.floor(Math.random() * 999)}`,
            topic,
            content: replyText,
            createdAt: new Date().toLocaleDateString(),
            username: user.username,
            avatar: user.image,
            score: 0,
            parentId: commentParentId,
        };

        addCommentToDataBase(newReply);

        state = [...state, newReply];
        return state;
    }

    if (action.type === 'VOTE_COMMENT') {
        const commentId = action.comment.id;
        const commentScore = action.comment.score;
        let newScore;

        if (action.vote === 'up') {
            newScore = commentScore + 1;
        }
        if (action.vote === 'down') {
            newScore = commentScore - 1;
        }
        voteComment(commentId, newScore);
        return state;
    }

    if (action.type === 'DELETE_COMMENT') {
        const commentId = action.commentId;
        const newState = state.filter((comment) => comment.id !== commentId);
        deleteCommentFromDataBase(commentId);

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
    const replyCommentHandler = function (user, parentId, topic, comment) {
        dispatchCommentAction({ type: 'REPLY_COMMENT', user, parentId, topic, comment });
    };
    const voteCommentHandler = function (comment, vote) {
        dispatchCommentAction({ type: 'VOTE_COMMENT', comment, vote });
    };
    const deleteCommentHandler = function (commentId) {
        dispatchCommentAction({ type: 'DELETE_COMMENT', commentId });
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
        replyComment: replyCommentHandler,
        voteComment: voteCommentHandler,
        deleteComment: deleteCommentHandler,
    };

    return <UserContext.Provider value={userContext}>{props.children}</UserContext.Provider>;
};

export default DataProvider;
