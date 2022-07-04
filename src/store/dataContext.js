import React from 'react';
import data from './data.json';

const dataContext = React.createContext({
    user: null,

    comments: [data.comments],
    addComment: () => {},
    deleteComment: () => {},
    editComment: () => {},
    voteComment: () => {},

    replys: [],
    addPost: () => {},
    deletePost: () => {},
    editPost: () => {},
    votePost: () => {},

    users: [],
    addUser: () => {},
    deleteUser: () => {},
    editUser: () => {},
});

export const dataContextProvider = function (props) {
    return <dataContext.Provider value={data}>{props.children}</dataContext.Provider>;
};

export default dataContext;
