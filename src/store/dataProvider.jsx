import React, { useReducer } from 'react';
import DataContext from './DataContext';
import dataUsers from '../dataUsers';

const usersData = dataUsers.users;

const userDefaultState = { user: {} };

const dataReducer = function (state, action) {
    if (action.type === 'LOGIN') {
        const user = usersData.find((user) => user.username === action.username && user.password === action.password);

        return {
            user,
        };
    }
};

const DataProvider = function (props) {
    const [userState, dispatchUserAction] = useReducer(dataReducer, userDefaultState);

    const logUserIn = function (username, password) {
        dispatchUserAction({ type: 'LOGIN', username, password });
    };
    const addCommentHandler = function (comment) {};
    const deleteCommentHandler = function (comment) {};

    const dataContext = {
        user: userState,
        logUser: logUserIn,
        addComment: addCommentHandler,
        deleteComment: deleteCommentHandler,
    };

    return <DataContext.Provider value={dataContext}>{props.children}</DataContext.Provider>;
};

export default DataProvider;
