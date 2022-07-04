import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import { dataContextProvider } from './store/dataContext';

const App = function () {
    return (
        <dataContextProvider>
            <div className='app'>
                <Header />
                <Main />
            </div>
        </dataContextProvider>
    );
};

export default App;
