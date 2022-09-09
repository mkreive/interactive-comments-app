import React from 'react';
import { Routes, Route } from 'react-router-dom';
import UserProvider from './store/UserProvider';
import Header from './components/Header';
import Topics from './components/Topics';
import About from './components/About';
import Contacts from './components/Contacts';

const App = function () {
    return (
        <UserProvider>
            <div className='app'>
                <Header />
                <Routes>
                    <Route index element={<Topics />} />
                    <Route path='/' element={<Topics />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/topics/*' element={<Topics />} />
                    <Route path='/contacts' element={<Contacts />} />
                </Routes>
            </div>
        </UserProvider>
    );
};

export default App;
