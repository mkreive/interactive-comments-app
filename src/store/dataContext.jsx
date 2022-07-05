import React from 'react';
import dataUsers from '../dataUsers';

const data = dataUsers;

const DataContext = React.createContext({
    data,
    loggedUser: data.loggedUser,
    logUser: () => {},
    createNewUser: () => {},

    users: data.users,
    addUser: () => {},
    deleteUser: () => {},
    editUser: () => {},

    comments: data.comments,
    addComment: () => {},
    deleteComment: () => {},
    editComment: () => {},
    voteComment: () => {},

    replies: data.replies,
    addPost: () => {},
    deletePost: () => {},
    editPost: () => {},
    votePost: () => {},
});

export default DataContext;
