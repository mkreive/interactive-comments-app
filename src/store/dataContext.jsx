import React from 'react';

const DataContext = React.createContext({
    loggedUser: null,

    comments: [],
    addComment: () => {},
    deleteComment: () => {},
    editComment: () => {},
    voteComment: () => {},

    replies: [],
    addPost: () => {},
    deletePost: () => {},
    editPost: () => {},
    votePost: () => {},

    users: [],
    addUser: () => {},
    deleteUser: () => {},
    editUser: () => {},
});

export default DataContext;
