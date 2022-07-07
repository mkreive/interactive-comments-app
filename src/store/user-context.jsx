import React from 'react';

const UserContext = React.createContext({
    user: {},
    login: () => {},
    signup: () => {},

    addComment: () => {},
    deleteComment: () => {},
    editComment: () => {},
    voteComment: () => {},

    addPost: () => {},
    deletePost: () => {},
    editPost: () => {},
    votePost: () => {},
});

export default UserContext;
