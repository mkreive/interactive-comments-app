import React, { useContext, useState } from 'react';
import DataContext from '../store/DataContext';
import '../index.scss';

const Header = function () {
    // data
    const data = useContext(DataContext);

    // states
    const [usernameInput, setUsernameInput] = useState();
    const [passwordInput, setPasswordInput] = useState();
    const [loggedUser, setLoggedUser] = useState(null);

    // handlers
    const usernameInputHandler = function () {};
    const passwordInputHandler = function () {};
    const loginHandler = function (usernameInput) {};
    const signupHandler = function (usernameInput, passwordInput) {};

    return (
        <header className='header'>
            <div className='header__logo'>
                <img
                    className='header__logo-logo'
                    src='https://res.cloudinary.com/kreiva/image/upload/v1655102872/DevJobsApp/creative_cdv7ub.svg'
                    alt='logo'
                />
                <h2 className='header__logo-name'>talk~y</h2>
            </div>
            <nav className='header__nav'>
                <ul className='navigation'>
                    <li className='navigation__item'>About</li>
                    <li className='navigation__item'>Topics</li>
                    <li className='navigation__item'>Contacts</li>
                </ul>
            </nav>
            <div className='signin'>
                <div className='signin__inputs'>
                    <input type='text' className='input' placeholder='Username' onChange={usernameInputHandler} />
                    <input type='password' className='input' placeholder='password' onChange={passwordInputHandler} />
                </div>
                <div className='signin__btns'>
                    <button className='btn' onClick={signupHandler}>
                        Sign Up
                    </button>
                    <button className='btn' onClick={loginHandler}>
                        Log In
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
