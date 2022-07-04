import React from 'react';
import DataContext from './dataContext';

const dataProvider = function (props) {
    const [loggedUser, setLoggedUser] = React.useState(null);
    const addCommentHandler = function (comment) {};
    const deleteCommentHandler = function (comment) {};

    const dataContext = {
        loggedUser,
        setLoggedUser,
        addComment: addCommentHandler,
        deleteComment: deleteCommentHandler,
    };

    return <DataContext.Provider value={dataContext}>{props.children}</DataContext.Provider>;
};

export default dataProvider;
