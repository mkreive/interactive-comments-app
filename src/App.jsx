import React from 'react';
import UserProvider from './store/UserProvider';
import Header from './components/Header';
import Main from './components/Main';

const App = function () {
    return (
        <UserProvider>
            <div className='app'>
                <Header />
                <Main />
            </div>
        </UserProvider>
    );
};

export default App;
