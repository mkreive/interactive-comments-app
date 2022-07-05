import React from 'react';
import DataProvider from './store/DataProvider';
import Header from './components/Header';
import Main from './components/Main';

const App = function () {
    return (
        <DataProvider>
            <div className='app'>
                <Header />
                <Main />
            </div>
        </DataProvider>
    );
};

export default App;
