import React from 'react';
import DataContext from './DataContext';

const DataProvider = function (props) {
    const logUserIn = function (username, password) {
        console.log(username, password);
    };
    const addCommentHandler = function (comment) {};
    const deleteCommentHandler = function (comment) {};

    const dataContext = {
        // loggedUser,
        logUser: logUserIn,
        addComment: addCommentHandler,
        deleteComment: deleteCommentHandler,
    };

    return <DataContext.Provider value={dataContext}>{props.children}</DataContext.Provider>;
};

export default DataProvider;
