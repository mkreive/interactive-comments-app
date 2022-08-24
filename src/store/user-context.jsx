import React from 'react';

const UserContext = React.createContext({
    user: {},
    login: () => {},
    signup: () => {},

    comments: [],
    filterComments: () => {},
    addComment: () => {},
    deleteComment: () => {},
    voteComment: () => {},

    addPost: () => {},
    deletePost: () => {},
    editPost: () => {},
    votePost: () => {},
});

export default UserContext;
