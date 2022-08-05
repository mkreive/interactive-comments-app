import React, { useState, useContext, useEffect } from 'react';
import { getLocalStorage, removeLocalStorage, validateInput, validatePassword } from '../helperFunctions';
import UserContext from '../store/user-context';
import '../index.scss';

const Header = function () {
    const userCtx = useContext(UserContext);
    const loggedUser = userCtx.user;

    // states
    const [isLogged, setIsLogged] = useState(false);
    const [usernameInput, setUsernameInput] = useState();
    const [passwordInput, setPasswordInput] = useState();
    const [errorMessage, setErrorMessage] = useState('');

    // functions
    const userInStorage = getLocalStorage('userId');
    useEffect(() => {
        if (userInStorage) {
            userCtx.logged(userInStorage);
            setIsLogged(true);
        }
    }, [loggedUser.username]);

    // handlers
    const usernameInputHandler = function (event) {
        setUsernameInput(event.target.value);
    };
    const passwordInputHandler = function (event) {
        setPasswordInput(event.target.value);
    };
    const submitHandler = function (event) {
        event.preventDefault();
        const username = usernameInput;
        const password = passwordInput;

        if (validateInput(usernameInput) && validatePassword(passwordInput)) {
            userCtx.login(username, password);
            setIsLogged(true);
        } else {
            setErrorMessage('Username and/or password is invalid');
        }
    };

    const logoutHandler = function () {
        const userInStorage = getLocalStorage('userId');
        userCtx.logout(userInStorage);
        removeLocalStorage('userId', userInStorage);
        setIsLogged(false);
    };

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
            {!isLogged && (
                <div className='signin'>
                    <form onSubmit={submitHandler}>
                        <div className='signin__inputs'>
                            <input
                                type='text'
                                className='input'
                                placeholder='Username'
                                onChange={usernameInputHandler}
                            />
                            {errorMessage && <div className='error'>{errorMessage}</div>}
                            <input
                                type='password'
                                className='input'
                                placeholder='Password'
                                onChange={passwordInputHandler}
                            />
                            {errorMessage && <div className='error'>{errorMessage}</div>}
                        </div>
                        <div className='signin__btns'>
                            <button className='btn' type='submit'>
                                Log In
                            </button>
                            <button className='btn' type='submit'>
                                Sign Up
                            </button>
                        </div>
                    </form>
                </div>
            )}
            {isLogged && (
                <div className='signin__logged'>
                    <div className='signin__logged__header'>
                        <img className='images__photo' src={loggedUser.image} alt='avatar' />
                        <span className='header-small-colored'>Hi, {loggedUser.username}!</span>
                    </div>

                    <ul className='navigation'>
                        <li className='navigation__item'>My topics</li>
                        <li className='navigation__item'>My profile</li>
                        <li className='navigation__item' onClick={logoutHandler}>
                            Log Out
                        </li>
                    </ul>
                </div>
            )}
        </header>
    );
};

export default Header;
